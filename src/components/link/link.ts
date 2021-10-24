import { registerPartial } from 'handlebars';

export interface LinkConfig {
  text: string;
  className?: string;
  href?: string;
}

export const registerLink = () => registerPartial(
  'link',
  `
<div class="link-wrapper">
  <a href="{{ defaultValue href '#' }}" class="link {{defaultValue className ''}}"> {{ text }}</a>
</div>
`,
);
