import { Block } from '../shared/block';
import { FormField } from '../../utils/form-field';
import * as styles from './input.module.scss';
import { getClassNames } from '../../utils/get-class-names';

export interface InputProps {
  validationFn?: (val?: string) => string;
  label?: string;
  name?: string;
  type?: 'password' | 'tel';
  required?: boolean;
  className?: string;
}

export class Input extends Block<InputProps> implements FormField {
  private get errorMessageElement(): HTMLSpanElement {
    return <HTMLSpanElement> this.element.querySelector(`.${styles.errorMessage}`);
  }

  constructor(props: InputProps) {
    super('label', props, 'inline-block');
  }

  get className(): string {
    return getClassNames([this.props?.className, styles.inputField]);
  }

  get inputElement(): HTMLInputElement {
    return <HTMLInputElement> this.element?.querySelector('input');
  }

  get spanElement(): HTMLSpanElement {
    return <HTMLSpanElement> this.element.querySelector(`.${styles.label}`);
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
    // the idea for always returning false is that input tag will be rendered once and kept if props changed.
    // Otherwise it will potentially create a situation where
    // the component has rendered - user starts typing, props changed - everything reset
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
