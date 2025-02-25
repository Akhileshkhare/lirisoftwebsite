const flowbite = require("flowbite/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [flowbite],
};
