export const chatsPageTemplate = `
  <div class="chats-page">
    <div class="edit-profile"><a class="profile-link" href="profile.html">Профиль ></a></div>
    <div class="list-actions">
    {{> search}}
    {{> button buttonText="+" className="-primary -icon"}}
    </div>
    <div class="list"> {{{chatListTmpl}}}</div>
    
    {{#if chatHistoryTmpl}}
    <div class="selected-chat">
      {{{chatHistoryTmpl}}}
    </div>
     <div class="message-actions">
      {{> button attachButton}}
      {{> input messageInput}}
      {{> button sendButton}}
    </div>
    <div class="chat-header">
      <img class="user-avatar -stub" src="">
      <div class="user-name">{{ userName }}</div>
      {{> button optionsButton}}
    </div>
    {{else}}
      Выберите чат чтобы отправить сообщение
    {{/if}}
  </div>
`;
