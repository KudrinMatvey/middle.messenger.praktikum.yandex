import { registerPartial } from "handlebars";

export interface InputConfig {
  label: string;
  name: string;
  type?: "password" | "tel";
  pattern?: string;
}

export const registerInput = () =>
  registerPartial(
    "input",
    `
  <label class="input-field">
    <input class="input" type="{{defaultValue type 'text'}}" placeholder="{{label}}" name="{{name}}" pattern="{{defaultValue pattern ''}}">
    <span class="label">{{label}}</span>
  </label>
`
  );
