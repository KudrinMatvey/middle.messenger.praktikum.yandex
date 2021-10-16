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
    <div class="chat-header">
    </div>
    {{else}}
      Выберите чат чтобы отправить сообщение
    {{/if}}
  </div>
`;
