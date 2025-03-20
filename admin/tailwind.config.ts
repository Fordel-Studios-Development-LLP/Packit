// tailwind.config.ts

const config = {
  content: [
    "./index.html", // Include the HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // Include JS/TS files in src folder
    "./src/modules/**/*.{js,jsx,ts,tsx}", // Include JS/TS files in the modules folder
    "./src/components/**/*.{js,jsx,ts,tsx}", // Include JS/TS files in the components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
