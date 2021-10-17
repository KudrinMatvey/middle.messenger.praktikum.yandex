import { compile } from "handlebars";
import { ChatMessageConfig } from "../../../components/chat-message";
import { chatsHistoryTemplate } from "./chat.history.tmpl";

export const renderChatHistory = (messages: ChatMessageConfig[]) => {
  if (!messages) return "";
  const compiled =
    compile<{ messages: ChatMessageConfig[] }>(chatsHistoryTemplate);
  return compiled({ messages });
};
