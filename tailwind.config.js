const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  darkMode: "class",
  theme: {
    extend: {
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
