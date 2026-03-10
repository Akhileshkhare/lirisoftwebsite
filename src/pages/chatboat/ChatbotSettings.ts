import { Button } from "react-chatbotify";
import { styles } from "../../styles/chatbot-theme";
import "./chatbot-overrides.css"; // Import the chatbot overrides CSS
const ChatbotSettings = {
  general: { embedded: true },
  header: {
    title: "Lirix",
    closeChatIcon: "✕",
    headerStyle: {
      background: "#043544",
      color: "#ffffff",
      padding: "12px",
      fontSize: "16px",
      fontWeight: "bold",
      borderBottom: "1px solid #333333",
    },
    avatar: "/Logo.svg",
  },
  chatHistory: {
    disabled: true,
    maxEntries: 0,
    storageType: "SESSION_STORAGE",
  },
  notification: {
    disabled: true,
    defaultToggledOn: false,
  },
  footer: {
    text: "Lirix",
    buttons: [Button.EMOJI_PICKER_BUTTON],
  },
  chatInput: {
    disabled: false,
    allowNewline: true,
  },
};

export default ChatbotSettings;
