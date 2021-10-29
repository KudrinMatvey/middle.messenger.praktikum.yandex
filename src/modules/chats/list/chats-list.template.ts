export const chatsListTemplate = `
  {{#each chatPreviews}}
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
  {{/each}}
`;
