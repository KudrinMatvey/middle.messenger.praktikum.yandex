import { registerHelper } from 'handlebars';

export const registerDefaultValueHelper = () => {
  registerHelper('defaultValue', (value, defaultValue) => value ?? defaultValue);
};
