import { Block } from '../../../components/shared/block';
import { chatsListTemplate } from './chats-list.template';

export interface ChatPreviewConfig {
  message?: string;
  imageUrl?: string;
  isAuthor?: boolean;
  name?: string;
  timeStamp: string;
  unreadMessagesCount: number;
}

export class ChatListComponent extends Block<{
  chatPreviews: ChatPreviewConfig[];
}> {
  get className(): string {
    return '';
  }

  constructor(props: {
    chatPreviews: ChatPreviewConfig[];
  }) {
    super('div', props);
  }

  get template(): string {
    return chatsListTemplate;
  }
}
