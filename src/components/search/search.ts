import { registerPartial } from "handlebars";

export const registerSearch = () => {
  registerPartial(
    "search",
    `
    <input class="search-field" type='text' placeholder='Поиск' onkeydown="{{searchFn}}"/>
  `
  );
};
