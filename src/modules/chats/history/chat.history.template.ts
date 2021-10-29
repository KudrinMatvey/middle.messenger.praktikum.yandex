import * as styles from './chat-history.module.scss'

export const chatsHistoryTemplate = `
{{#each messages}}
    <div class="${styles.chatMessage} {{#if isAuthor}} ${styles.own} {{/if}}>">
    {{#if imageUrl}}
        <img class="${styles.image}" src="{{imageUrl}}">
    {{/if}}
    {{#if message}}
        <span class="${styles.text}">{{message}}</span>
    {{/if}}
    <div class="${styles.info}">
        <div>{{defaultValue userName ''}}</div>
        <div>{{timeStamp}}</div>
    </div>
  </div>
{{/each}}
`;
