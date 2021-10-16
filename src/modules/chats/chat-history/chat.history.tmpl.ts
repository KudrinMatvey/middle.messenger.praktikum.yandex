export const chatsHistoryTemplate = `
{{#each messages}}
  {{> chat-message this}}
{{/each}}
`;
