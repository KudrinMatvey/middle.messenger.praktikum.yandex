import { registerHelper } from "handlebars";

export const registerDefaultValueHelper = () => {
  registerHelper("defaultValue", function (value, defaultValue) {
    return value ?? defaultValue;
  });
};
