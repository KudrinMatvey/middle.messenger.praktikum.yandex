import { registerPartial } from "handlebars";

export interface ChatPreviewConfig {
  message?: string;
  imageUrl?: string;
  isAuthor?: boolean;
  name?: string;
  timeStamp: string;
  unreadMessagesCount: number;
}

export const registerChatPreview = () =>
  registerPartial(
    "chat-preview",
    `
  <div class="chat-preview">
    {{#if imageUrl}}
      <img class="user-avatar" src="{{imageUrl}}" alt=''">
    {{else}}
      <div class="user-avatar -stub"></div>
    {{/if}}
    <div class="message-content">
        <div class="author">{{name}}</div>
        <div class="last-message"> {{#if isAuthor}}<b> Вы: </b>{{/if}} {{message}} </div>
    </div>
    <div class="info">
        <div class="timestamp">
        {{timeStamp}}
        </div>
        {{#if unreadMessagesCount}}<div class="unread-count">{{unreadMessagesCount}}</div>{{/if}}
    </div>
  </div>
`
  );
