import { registerPartial } from 'handlebars';

export interface ChatMessageConfig {
  message?: string;
  imageUrl?: string;
  isAuthor?: boolean;
  userName?: string;
  timeStamp: string;
}

export const registerChatMessage = () => registerPartial(
  'chat-message',
  `
  <div class="chat-message {{#if isAuthor}} -own {{/if}}>">
    {{#if imageUrl}}
        <img class="image" src="{{imageUrl}}">
    {{/if}}
    {{#if message}}
        <span class="text">{{message}}</span>
    {{/if}}
    <div class="info">
        <div class="username">{{defaultValue userName ''}}</div>
        <div class="timestamp">{{timeStamp}}</div>
    </div>
  </div>
`,
);
