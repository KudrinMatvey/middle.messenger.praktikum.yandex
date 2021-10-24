import { compile } from 'handlebars';
import { ChatMessageConfig } from '../../../components/chat-message';

export const renderChatList = (context: {
  chatMessages: ChatMessageConfig[];
}) => compile(`
  {{#each chatMessages}}
    {{> chat-preview}}
  {{/each}}
  `)(context);
