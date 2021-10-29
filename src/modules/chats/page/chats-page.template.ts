import * as styles from './chats.module.scss';


export const chatsPageTemplate = `
    <div class="${styles.editProfile}"><a class="${styles.profileLink}" href="profile.html">Профиль ></a></div>
    <div class="${styles.listActions}">
    <div id="search"></div>
    <div id="addChatButton"></div>
    </div>
    <div class="${styles.list}"><div id="chatList"></div></div>
    
    {{#if selectedChat}}
    <div class="${styles.selectedChat}">
      <div id="chatHistory"></div>
    </div>
     <div class="${styles.messageActions}">
       <div id="attachButton"></div>
       <div id="messageInput"></div>
       <div id="sendButton"></div>
    </div>
    <div class="${styles.chatHeader}">
      {{#if userAvatar}}<img class="${styles.userAvatar} ${styles.stub}" src="{{userAvatar}}">{{/if}}
      <div class="${styles.userName}">{{ userName }}</div>
      <div id="optionsButton"></div>
    </div>
    {{else}}
      Выберите чат чтобы отправить сообщение
    {{/if}}
`;
