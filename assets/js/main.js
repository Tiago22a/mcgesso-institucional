const budgetPhone = '5511986504178';

function initMobileMenu() {
  const menu = document.getElementById('menu');
  const menuToggle = menu.querySelector('summary');

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.open = false;
      const section = document.getElementById(link.hash.slice(1));
      section?.setAttribute('tabindex', '-1');
      section?.focus({ preventScroll: true });
    });
  });

  menu.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.open) {
      menu.open = false;
      menuToggle.focus();
    }
  });
}

function initGallery() {
  const dialog = document.getElementById('gallery-dialog');
  if (typeof dialog.showModal !== 'function') return;

  const image = document.getElementById('gallery-image');
  const title = document.getElementById('gallery-title');

  document.querySelectorAll('[data-gallery]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

      event.preventDefault();
      image.src = link.href;
      image.alt = link.querySelector('img').alt;
      title.textContent = link.querySelector('span').firstChild.textContent.trim();
      dialog.showModal();
    });
  });

  dialog.addEventListener('click', event => {
    if (event.target === dialog) {
      const bounds = dialog.getBoundingClientRect();
      const outsideDialog = event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom;
      if (outsideDialog) dialog.close();
    }
  });

  dialog.addEventListener('close', () => image.removeAttribute('src'));
}

function getBudgetSummary(form) {
  const data = new FormData(form);
  const city = data.get('city').trim() || 'Não informada';
  const project = data.get('project') || 'Não informado';
  const services = data.getAll('service').join(', ') || 'A definir';
  const description = data.get('description').trim() || 'A definir';

  return [
    '*Solicitação de orçamento — MC Gesso*',
    '',
    `*Nome:* ${data.get('name').trim()}`,
    `*WhatsApp:* ${data.get('phone').trim()}`,
    `*Cidade/UF:* ${city}`,
    `*Tipo de projeto:* ${project}`,
    `*Serviços:* ${services}`,
    `*Detalhes da obra:* ${description}`
  ].join('\n');
}

function validateBudgetFields(fields) {
  for (const field of fields) {
    if (!field.value.trim()) {
      field.setCustomValidity('Preencha este campo.');
      field.reportValidity();
      return false;
    }
  }
  return true;
}

function initBudgetForm() {
  const form = document.getElementById('budget-form');
  const status = document.getElementById('budget-status');
  const copyButton = document.getElementById('copy-budget-btn');
  const submitButton = form.querySelector('[type="submit"]');
  const contactFields = [form.elements.namedItem('name'), form.elements.namedItem('phone')];
  const requiredFields = [...contactFields, form.elements.namedItem('city')];

  requiredFields.forEach(field => {
    field.addEventListener('input', () => field.setCustomValidity(''));
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    status.textContent = '';
    if (!validateBudgetFields(requiredFields)) return;

    const message = encodeURIComponent(getBudgetSummary(form));
    window.open(`https://wa.me/${budgetPhone}?text=${message}`, '_blank', 'noopener,noreferrer');
    status.textContent = 'Confira a mensagem no WhatsApp antes de enviar.';
  });

  copyButton.addEventListener('click', async () => {
    status.textContent = '';
    if (!validateBudgetFields(contactFields)) return;

    try {
      await navigator.clipboard.writeText(getBudgetSummary(form));
      status.textContent = 'Dados do orçamento copiados.';
    } catch {
      status.textContent = 'A cópia falhou neste navegador. Você pode continuar pelo WhatsApp.';
    }
  });

  submitButton.disabled = false;
  copyButton.disabled = !navigator.clipboard;
}

function openLinkedDetails() {
  const anchor = window.location.hash.slice(1);
  const details = document.getElementById(anchor);
  if (details instanceof HTMLDetailsElement) details.open = true;
}

initMobileMenu();
initGallery();
initBudgetForm();
openLinkedDetails();
window.addEventListener('hashchange', openLinkedDetails);
