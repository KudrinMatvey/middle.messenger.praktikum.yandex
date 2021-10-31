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
  constructor(props: {
    chatPreviews: ChatPreviewConfig[];
  }) {
    super('div', props);
  }

  get className(): string {
    return '';
  }

  get template(): string {
    return chatsListTemplate;
  }
}
