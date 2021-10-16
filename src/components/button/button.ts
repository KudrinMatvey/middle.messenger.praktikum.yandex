import { registerPartial } from "handlebars";

export interface ButtonConfig {
  onClick?: string;
  buttonText?: string;
  icon?: string;
  className?: string;
}

export const registerButton = () =>
  registerPartial(
    "button",
    `
  <button class="{{defaultValue className ' '}} button" href="#" onclick="{{onClick}}">
    {{defaultValue buttonText ''}}
    {{#if icon}}<img src="{{ icon }}" alt="">{{/if}}
   </button>
`
  );
