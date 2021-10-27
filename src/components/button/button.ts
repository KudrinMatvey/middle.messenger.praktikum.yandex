import { registerPartial } from 'handlebars';
import { Block } from '../shared/block';

export interface ButtonConfig {
  onClick?: () => any;
  buttonText?: string;
  icon?: string;
  className?: string;
}

export const registerButton = () => registerPartial(
  'button',
  `
  <button class="{{defaultValue className ' '}} button" href="#" onclick="{{onClick}}">
    {{defaultValue buttonText ''}}
    {{#if icon}}<img src="{{ icon }}" alt="">{{/if}}
   </button>
`,
);

export class Button extends Block<ButtonConfig> {
  constructor(props: ButtonConfig) {
    super('button', props);
    this.element.onclick = this.onClick.bind(this);
  }

  onClick() {
    this.props?.onClick?.()
  }

  get className(): string {
    return [this.props?.className,'button'].filter(Boolean).join(' ');
  }

  get template() {
    return `
      {{defaultValue buttonText ''}}
      {{#if icon}}<img src="{{ icon }}" alt="">{{/if}}
    `;
  }
}
