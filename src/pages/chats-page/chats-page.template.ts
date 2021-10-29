export const chatsPageTemplate = `
  <div class="chats-page">
    <div class="edit-profile"><a class="profile-link" href="profile.html">Профиль ></a></div>
    <div class="list-actions">
    <div id="search"></div>
    <div id="addChatButton"></div>
    </div>
    <div class="list"><div id="chatList"></div></div>
    
    {{#if selectedChat}}
    <div class="selected-chat">
      <div id="chatHistory"></div>
    </div>
     <div class="message-actions">
       <div id="attachButton"></div>
       <div id="messageInput"></div>
       <div id="sendButton"></div>
    </div>
    <div class="chat-header">
      <img class="user-avatar -stub" src="">
      <div class="user-name">{{ userName }}</div>
      <div id="optionsButton"></div>
    </div>
    {{else}}
      Выберите чат чтобы отправить сообщение
    {{/if}}
  </div>
`;
