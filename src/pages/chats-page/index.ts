import { compile } from "handlebars";
import { registerDefaultValueHelper } from "../../utils";
import { registerButton } from "../../components/button";
import { registerInput } from "../../components/input";
import { registerChatMessage } from "../../components/chat-message";
import { chatsPageTemplate } from "./chats-page.template";
import { renderChatHistory } from "../../modules/chats/chat-history";
import { renderChatList } from "../../modules/chats/chats-list";
import { registerSearch } from "../../components/search";
import { registerChatPreview } from "../../components/chat-preview";

interface ChatsPage {
  chatHistoryTmpl: string;
  chatListTmpl: string;
}

const chatHistory = [
  {
    imageUrl: "img/surprised-cat.jpg",
    timeStamp: "10:22",
  },
  {
    isAuthor: true,
    message: "go like",
    timeStamp: "10:22",
    userName: "mr Krabs",
  },
];

const chatList = {
  chatMessages: [
    {
      name: "string",
      timeStamp: "22:11",
      message: "text",
      isAuthor: true,
      unreadMessagesCount: 2,
    },
    {
      name: "string",
      timeStamp: "22:11",
      message: "text",
      isAuthor: true,
      unreadMessagesCount: 2,
    },
    {
      name: "string",
      timeStamp: "22:11",
      message: "text",
      isAuthor: true,
      unreadMessagesCount: 2,
    },
    {
      name: "string",
      timeStamp: "22:11",
      message: "text",
      isAuthor: true,
      unreadMessagesCount: 2,
    },
    {
      name: "string",
      timeStamp: "22:11",
      message: "text",
      isAuthor: true,
      unreadMessagesCount: 2,
    },
    {
      name: "string",
      timeStamp: "22:11",
      message: "text",
      isAuthor: true,
      unreadMessagesCount: 2,
    },
    {
      name: "string",
      timeStamp: "22:11",
      message: "text",
      isAuthor: true,
      unreadMessagesCount: 2,
    },
    {
      name: "string",
      timeStamp: "22:11",
      message: "text",
      isAuthor: true,
      unreadMessagesCount: 2,
    },
    {
      name: "string",
      timeStamp: "22:11",
      message: "text",
      isAuthor: true,
      unreadMessagesCount: 2,
    },
    {
      name: "string",
      timeStamp: "22:11",
      message: "text",
      isAuthor: true,
      unreadMessagesCount: 2,
    },
    {
      name: "string",
      timeStamp: "22:11",
      message: "text",
      isAuthor: true,
      unreadMessagesCount: 2,
    },
    {
      name: "string",
      timeStamp: "22:11",
      message: "text",
      isAuthor: true,
      unreadMessagesCount: 2,
    },
  ],
};

// document.addEventListener('DOMContentLoaded', () => {
const body = document.getElementsByTagName("body");

registerDefaultValueHelper();
registerButton();
registerInput();
registerChatMessage();
registerChatPreview();
registerSearch();
const chatHistoryTmpl = renderChatHistory(chatHistory);
const chatListTmpl = renderChatList(chatList);

const compiled = compile<ChatsPage>(chatsPageTemplate);
const html = compiled({
  chatHistoryTmpl,
  chatListTmpl,
});
console.log({ html, chatHistoryTmpl, chatListTmpl });

body[0].innerHTML = html;
// })
