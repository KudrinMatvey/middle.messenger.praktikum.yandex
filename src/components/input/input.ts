import { registerPartial } from "handlebars";

export interface InputConfig {
  label?: string;
  name: string;
  type?: "password" | "tel";
  pattern?: string;
  className?: string;
}

export const registerInput = () =>
  registerPartial(
    "input",
    `
  <label class="input-field {{defaultValue className ''}}">
    <input class="input" type="{{defaultValue type 'text'}}" placeholder="{{label}}" name="{{name}}" pattern="{{defaultValue pattern ''}}">
    {{#if label}}<span class="label">{{label}}</span>{{/if}}
  </label>
`
  );
