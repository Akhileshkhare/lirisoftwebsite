const ChatbotStyles = {
  headerStyle: {
    background: "#043544",
    color: "#ffffff",
    padding: "12px",
    fontSize: "16px",
    fontWeight: "bold",
    borderBottom: "1px solid #333333",
    
  },
  botBubbleStyle: {
    background: "#173951",
    color: "#ffffff",
    borderRadius: "10px",
    padding: "10px 14px",
    fontSize: "14px",
    maxWidth: "75%",
    margin: "5px 0",
    marginLeft: "8px",
  },
 headerAvatarStyle: {
  backgroundColor: "#ffffff", // White background
  borderRadius: "50%",        // Make it circular
  padding: "4px",             // Optional: adds inner spacing
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
},
  userBubbleStyle: {
    backgroundColor: "#e7b957",
    color: "#222",
    borderRadius: "10px",
    padding: "10px 14px",
    textAlign: "left" as "left", // Explicitly type as allowed value
    fontSize: "14px",
    maxWidth: "75%",
    margin: "5px 0",
    marginRight: "8px",
  },
  chatInput: {
  disabled: false,
  allowNewline: true, // allow multiline input
},
    // chatWindowStyle: {
    //     width: "100%",
    //     maxWidth: "500px",
    //     height: "400px",
    //     border: "1px solid #ccc",
    //     borderRadius: "8px",
    //     overflowY: "auto" as "auto", // Explicitly type as allowed value
    //     display: "flex",
    //     flexDirection: "column" as "column", // Explicitly type as allowed value
    // },
  chatInputContainerStyle: {
    display: "flex",
    alignItems: "center",
    padding: "12px",
    backgroundColor: "#f9f9f9",
    borderTop: "1px solid #ddd",
    gap: "8px",
  },
 chatInputAreaStyle: {
  flex: 1,
  minHeight: "30px",              // Ensure it's tall enough for multiple lines
  maxHeight: "150px",             // Prevent it from growing too tall
  lineHeight: "1",              // Better readability
  padding: "1px 14px",           // Space inside the textarea
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "14px",
  backgroundColor: "#fff",
  outline: "none" as "none", // Remove default outline
  resize: "none" as "none",       // Prevent manual resizing
  overflowY: "auto" as "auto",              // Scroll when content exceeds maxHeight
  whiteSpace: "pre-wrap" as const,         // Proper line wrapping
  wordBreak: "break-word" as const,        // Handle long words gracefully
},
  sendButtonStyle: {
    backgroundColor: "#173951",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "42px",
    height: "38px",
    cursor: "pointer",
    borderRadius: "6px",
    padding: 0,
    border: "none",
  },
  sendIconStyle: {
    width: "20px",
    height: "20px",
    paddingBottom: "4px",
  },
};

export default ChatbotStyles;
