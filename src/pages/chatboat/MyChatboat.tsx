import React, { useState } from "react";
import CustomCaptch from "./CustomCaptch";
import Customebot from "../customeChatbot/Customebot";

const MyChatboat: React.FC = () => {
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const [captchaQuestion, setCaptchaQuestion] = useState<{
    a: number;
    b: number;
  }>({
    a: Math.floor(Math.random() * 10) + 1,
    b: Math.floor(Math.random() * 10) + 1,
  });
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  const toggleChat = () => {
    setShowCaptcha(true);
  };

  const verifyCaptcha = () => {
    if (parseInt(captchaInput) === captchaQuestion.a + captchaQuestion.b) {
      setCaptchaVerified(true);
      setShowCaptcha(false);
      setCaptchaError("");
    } else {
      setCaptchaError("Incorrect answer. Please try again.");
      setCaptchaVerified(false);
    }
  };

  const resetCaptcha = () => {
    setCaptchaQuestion({
      a: Math.floor(Math.random() * 10) + 1,
      b: Math.floor(Math.random() * 10) + 1,
    });
    setCaptchaInput("");
    setCaptchaError("");
    setCaptchaVerified(false);
  };

  const handleCloseChat = () => {
    setCaptchaVerified(false);
    setShowCaptcha(false);
    setCaptchaInput("");
    setCaptchaError("");
    resetCaptcha();
  };

  return (
    <div>
      {/* Toggle button */}
      {!showCaptcha && !captchaVerified && (
        <button
          onClick={toggleChat}
          style={{
            position: "fixed",
            right: 20,
            bottom: 20,
            backgroundColor: "black",
            width: "50px",
            height: "50px",
            color: "#fff",
            padding: "12px",
            borderRadius: "50%",
            border: "none",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            zIndex: 99999,
          }}
          aria-label="Chat with us"
        >
          💬
        </button>
      )}

      {/* Captcha UI */}
      {showCaptcha && !captchaVerified && (
        <CustomCaptch
          captchaQuestion={captchaQuestion}
          captchaInput={captchaInput}
          setCaptchaInput={setCaptchaInput}
          captchaError={captchaError}
          captchaVerified={captchaVerified}
          verifyCaptcha={verifyCaptcha}
          resetCaptcha={resetCaptcha}
          setShowCaptcha={setShowCaptcha}
        />
      )}

      {/* Chatbot UI */}
      {captchaVerified && (
        <div
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 99998,
          }}
        >
          <div>
            <Customebot onClose={handleCloseChat} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyChatboat;
              
          