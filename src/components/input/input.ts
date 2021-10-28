import { registerPartial } from 'handlebars';
import { Block } from '../shared/block';
import { FormField } from '../../utils/form-field';

export interface InputProps {
  validationFn?: (val?: string) => string;
  label?: string;
  name?: string;
  type?: 'password' | 'tel';
  required?: boolean;
  className?: string;
}

export const registerInput = () => registerPartial(
  'input',
  `
  <label class="input-field {{defaultValue className ''}}">
    <input class="input" type="{{defaultValue type 'text'}}" placeholder="{{label}}" name="{{name}}" pattern="{{defaultValue pattern ''}}">
    {{#if label}}<span class="label">{{label}}</span>{{/if}}
  </label>
`,
);

export class Input extends Block<InputProps> implements FormField {
  private input: HTMLInputElement;
  private errorMessageElement: HTMLSpanElement;
  constructor(props: InputProps) {
    super('label', props, 'inline-block');
  }

  get className(): string {
    return [this.props?.className,'input-field'].filter(Boolean).join(' ');
  }

  get value(): string | undefined {
    return this.element?.querySelector('input')?.value;
  }

  get name(): string {
    return this.props.name;
  }

  protected componentDidRender() {
    this.input = <HTMLInputElement>this.element.querySelector('input');
    this.input.onblur = () => this.validate();
    this.input.onfocus = () => this.validate();
    this.errorMessageElement = <HTMLSpanElement>this.element.querySelector('.error-message');
  }

  get template(): string {
    return `
      <input class="input" type="{{defaultValue type 'text'}}"
        placeholder="{{label}}" name="{{name}}"">
      {{#if label}}<span class="label">{{label}}</span>{{/if}}
      <span class="error-message"></span>
    `;
  }

  validate = (): boolean => {
    let errorMessage = '';
    if(this.props.required && !this.input.value) {
      errorMessage = 'Нужно заполнить это поле';
    } else if(this.props.validationFn) {
      errorMessage = this.props.validationFn(this.value);
    }
    this.input.setCustomValidity(errorMessage);
    this.errorMessageElement.innerText = errorMessage;
    return true;
  }
}
