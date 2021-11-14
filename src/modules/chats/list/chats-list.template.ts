import * as styles from './chats-list.module.scss';

export const chatsListTemplate = `
  {{#each chatPreviews}}
    <div class="${styles.chatPreview}">
    {{#if imageUrl}}
      <img class="${styles.userAvatar}" src="{{imageUrl}}" alt=''">
    {{else}}
      <div class="${styles.userAvatar} ${styles.stub}"></div>
    {{/if}}
    <div class="${styles.messageContent}">
        <div class="${styles.author}">{{name}}</div>
        <div class="${styles.lastMessage}"> {{#if isAuthor}}<b> Вы: </b>{{/if}} {{message}} </div>
    </div>
    <div class="${styles.info}">
        <div>
        {{timeStamp}}
        </div>
        {{#if unreadMessagesCount}}<div class="${styles.unreadCount}">{{unreadMessagesCount}}</div>{{/if}}
    </div>
  </div>
  {{/each}}
`;
