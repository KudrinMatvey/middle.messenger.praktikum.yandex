import { FormFieldGuard } from './form-field';

export function initializeForm<FF>(form: HTMLFormElement | null, componentMap: FF, onSubmit: (values: any) => void) {
  function checkAndSubmitForm(event: Event) {
    event.preventDefault();
    const fields = Object.values(componentMap)
      .filter(FormFieldGuard);
    const valid = fields
      .reduce((prev: Boolean, child: { validate?: () => boolean }) => prev && child?.validate?.(), true);
    if (valid) {
      const data = fields.filter((field) => field.name).reduce((prev, curr) => ({ ...prev, [curr.name]: curr.value }), {});
      onSubmit(data);
    }
  }

  if (form) {
    form.addEventListener('submit', checkAndSubmitForm);
  } else {
    throw new Error('На странице нет формы');
  }
}
