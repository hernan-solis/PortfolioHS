import { SITE_CONFIG } from '../data/siteConfig';

const FALLBACK = `Hubo un error al enviar. Escribime directo a ${SITE_CONFIG.email}`;

/**
 * Sends every `form[data-contact-form]` to Web3Forms via fetch.
 * Optional children: `[data-submit-label]` (text swapped while sending) and `[data-status]`.
 */
export function bindContactForms(okText = '¡Listo! Te respondo a la brevedad.') {
  document.querySelectorAll<HTMLFormElement>('form[data-contact-form]').forEach((form) => {
    const status = form.querySelector<HTMLElement>('[data-status]');
    const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const label = form.querySelector<HTMLElement>('[data-submit-label]');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (button) button.disabled = true;
      const original = label?.textContent ?? '';
      if (label) label.textContent = 'Enviando...';
      if (status) status.textContent = '';

      let ok = false;
      let message = FALLBACK;
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(Object.fromEntries(new FormData(form))),
        });
        const result = await response.json().catch(() => null);
        ok = response.ok && !!result?.success;
        if (!ok && result?.message) message = result.message;
      } catch {
        // keep fallback message
      }

      if (ok) form.reset();
      if (status) {
        status.textContent = ok ? okText : message;
        status.dataset.state = ok ? 'ok' : 'error';
      }
      if (button) button.disabled = false;
      if (label) label.textContent = original;
    });
  });
}
