import { Block } from '../shared/block';
import { FormField } from '../../utils/form-field';
import * as styles from './input.module.scss'

export interface InputProps {
  validationFn?: (val?: string) => string;
  label?: string;
  name?: string;
  type?: 'password' | 'tel';
  required?: boolean;
  className?: string;
}

export class Input extends Block<InputProps> implements FormField {
  private errorMessageElement: HTMLSpanElement;

  constructor(props: InputProps) {
    super('label', props, 'inline-block');
  }

  get className(): string {
    return [this.props?.className, styles.inputField].filter(Boolean).join(' ');
  }

  get inputElement(): HTMLInputElement {
    return <HTMLInputElement> this.element?.querySelector('input');
  }

  get spanElement(): HTMLSpanElement {
    return <HTMLSpanElement> this.element.querySelector('span.label');
  }

  get value(): string | undefined {
    return this.inputElement?.value;
  }

  get name(): string {
    return this.props.name ?? '';
  }

  protected componentDidRender() {
    this.inputElement.onblur = () => this.validate();
    this.inputElement.onfocus = () => this.validate();
    this.errorMessageElement = <HTMLSpanElement> this.element.querySelector('.error-message');
  }

  get template(): string {
    return `
      <input class="${styles.input}" type="{{defaultValue type 'text'}}"
        placeholder="{{label}}" name="{{name}}"">
      <span class="${styles.label}">{{defaultValue label ''}}</span>
      <span class="${styles.errorMessage}"></span>
    `;
  }

  protected componentDidUpdate(oldProps: InputProps, newProps: InputProps): boolean {
    if (oldProps.label !== newProps.label) {
      this.inputElement.placeholder = newProps.label ?? '';
      this.spanElement.innerText = newProps.label ?? '';
    }
    if (oldProps.type !== newProps.type) {
      this.inputElement.type = newProps.type ?? '';
    }
    return false;
  }

  validate = (): boolean => {
    let errorMessage = '';
    if (this.props.required && !this.inputElement.value) {
      errorMessage = 'Нужно заполнить это поле';
    } else if (this.props.validationFn) {
      errorMessage = this.props.validationFn(this.value);
    }
    this.inputElement.setCustomValidity(errorMessage);
    this.errorMessageElement.innerText = errorMessage;
    return true;
  }
}
