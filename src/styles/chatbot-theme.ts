export const styles = {
  headerStyle: {
    background: "#000000",

    color: "#ffffff",

    // padding: "12px",

    fontSize: "16px",

    fontWeight: "bold",

    borderBottom: "1px solid #333333",
  },

  chatWindowStyle: {
    backgroundColor: "#ffff",

    color: "#121212",

    borderRadius: "12px",

    padding: "12px",
  },

  botBubbleStyle: {
    background: "#252595",

    color: "#ffffff",

    borderRadius: "12px",

    padding: "10px 14px",

    fontSize: "14px",

    maxWidth: "75%",

    margin: "5px 0",
  },

  userBubbleStyle: {
    background: "#ffffff", // White for user messages

    color: "#000000", // Black text

    borderRadius: "12px",

    padding: "10px 14px",

    fontSize: "14px",

    maxWidth: "75%",

    margin: "5px 0",

    alignSelf: "flex-end",
  },

  notificationBadgeStyle: {
    background: "#ffcc00",

    color: "#000000",

    borderRadius: "50%",

    fontWeight: "bold",
  },

  tooltipStyle: {
    background: "#333333",

    color: "#ffffff",

    padding: "6px 12px",

    borderRadius: "6px",

    fontSize: "12px",
  },

  chatHistoryButtonStyle: {
    background: "black",

    color: "#ffffff",

    fontSize: "12px",

    padding: "10px",
  },

  placeholderStyle: {
    color: "#b0b0b0", // Light gray placeholder text
  },

  chatInputContainerStyle: {
    display: "flex",

    alignItems: "center",

    background: "#000000", // Matches dark theme

    padding: "10px",

    borderTop: "1px solid #333333",
  },

  chatInputStyle: {
    background: "#1e1e1e", // Dark background

    color: "#ffffff", // White text

    border: "1px solid #444", // Subtle border

    padding: "12px 14px",

    borderRadius: "20px",

    fontSize: "14px",

    outline: "none",

    width: "100%", // Takes full space minus send button

    flexGrow: 1, // Ensures it adjusts dynamically
  },

  sendButtonStyle: {
    background: "#000000 !important", // White send button

    color: "#fff", // Black icon

    borderRadius: "50%",

    width: "45px", // Properly sized

    height: "45px",

    marginLeft: "10px",
  },
  headerAvatarStyle: {
    backgroundColor: "#ffffff", // White background

    borderRadius: "50%", // Make it circular

    padding: "4px", // Optional: adds inner spacing

    display: "flex",

    alignItems: "center",

    justifyContent: "center",
  },
};
