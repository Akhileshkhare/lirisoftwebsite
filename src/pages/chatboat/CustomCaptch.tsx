import React from "react";

type CustomCaptchProps = {
  captchaQuestion: { a: number; b: number };
  captchaInput: string;
  setCaptchaInput: (val: string) => void;
  captchaError: string;
  captchaVerified: boolean;
  verifyCaptcha: () => void;
  resetCaptcha: () => void;
  setShowCaptcha: (val: boolean) => void;
};

const CustomCaptch: React.FC<CustomCaptchProps> = ({
  captchaQuestion,
  captchaInput,
  setCaptchaInput,
  captchaError,
  captchaVerified,
  verifyCaptcha,
  resetCaptcha,
  setShowCaptcha,
}) => (
  <div
    style={{
      position: "fixed",
      right: 20,
      bottom: 20,
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
      zIndex: 9998,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <h4 style={{ marginBottom: "15px" }}>Please verify you're human</h4>
    <div className="flex justify-end items-center space-x-2">
      <label className="block text-gray-900 text-sm font-semibold mb-0">
        Captcha: What is {captchaQuestion.a} + {captchaQuestion.b}?
      </label>
      <input
        type="text"
        value={captchaInput}
        onChange={(e) => {
          setCaptchaInput(e.target.value);
        }}
        className="w-20 p-2 border border-gray-300 rounded text-gray-900"
        disabled={captchaVerified}
      />
      <button
        type="button"
        onClick={verifyCaptcha}
        className={`px-3 py-2 bg-blue-500 text-white rounded ${
          captchaVerified ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={captchaVerified}
      >
        Verify
      </button>
      <button
        type="button"
        onClick={resetCaptcha}
        className={`px-3 py-2 bg-gray-300 text-gray-800 rounded ${
          captchaVerified ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={captchaVerified}
      >
        Reset
      </button>
      {captchaError && (
        <span className="text-red-500 text-sm ml-2">{captchaError}</span>
      )}
      {captchaVerified && (
        <span className="text-green-600 text-sm ml-2">Captcha verified!</span>
      )}
    </div>
    <button
      onClick={() => setShowCaptcha(false)}
      style={{
        marginTop: "10px",
        padding: "5px 10px",
        backgroundColor: "#f0f0f0",
        border: "1px solid #ccc",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      Cancel
    </button>
  </div>
);

export default CustomCaptch;
