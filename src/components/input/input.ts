import { registerPartial } from 'handlebars';
import { Block } from '../shared/block';

export interface InputProps {
  label?: string;
  name: string;
  type?: 'password' | 'tel';
  pattern?: string;
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

export class Input extends Block<InputProps> {
  constructor(props: InputProps) {
    super('label', props, 'inline-block');
  }

  get className(): string {
    return [this.props?.className,'input-field'].filter(Boolean).join(' ');
  }

  get value(): string | undefined {
    return this.element?.querySelector('input')?.value;
  }

  get template(): string {
    return `
      <input class="input" type="{{defaultValue type 'text'}}" placeholder="{{label}}" name="{{name}}" pattern="{{defaultValue pattern ''}}">
      {{#if label}}<span class="label">{{label}}</span>{{/if}}
    `;
  }

}
