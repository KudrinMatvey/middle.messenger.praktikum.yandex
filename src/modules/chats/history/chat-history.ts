import { chatsHistoryTemplate } from './chat.history.template';
import { Block } from '../../../components/shared/block';
import * as styles from './chat-history.module.scss'

export interface ChatMessageConfig {
  message?: string;
  imageUrl?: string;
  isAuthor?: boolean;
  userName?: string;
  timeStamp: string;
}

export class ChatHistoryComponent extends Block<{messages: ChatMessageConfig[]}> {
  get className(): string {
    return styles;
  }

  get template(): string {
    return chatsHistoryTemplate;
  }

  constructor(props: {messages: ChatMessageConfig[]}) {
    super('div', props);
  }
}
