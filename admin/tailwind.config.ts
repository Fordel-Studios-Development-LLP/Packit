import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { min: "425px" },
        sm: { min: "768px" },
        md: { min: "1024px" },
        lg: { min: "1240px" },
        xl: { min: "1440px" },
      },

      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1240px",
          xl: "1440px",
        },
      },

      colors: {
        // Brand Colors
        brand: {
          primary: "#069fff", // Primary Blue
          secondary: "#1fc2ba", // Secondary Teal
        },

        // Primary Colors (Blue)
        primary: {
          50: "#edf9ff",
          100: "#d6efff",
          200: "#b5e3ff",
          300: "#83d2ff",
          400: "#48bcff",
          500: "#1ebcff",
          600: "#069fff",
          700: "#008cff",
          800: "#086ac5",
          900: "#0d5b9b",
          950: "#0e375d",
          1000: "#121B23",
        },

        // Secondary Colors (Teal)
        secondary: {
          50: "#f1fcfb",
          100: "#cef9f3",
          150: "#d7eeec",
          200: "#9ef1e6",
          300: "#65e3d7",
          400: "#35ccc2",
          500: "#1fc2ba",
          600: "#148d8a",
          700: "#147170",
          800: "#155a5a",
          900: "#164b4a",
          950: "#062c2d",
        },

        // Accent Colors - Green
        accent: {
          green: {
            50: "#edfff0",
            100: "#d5ffde",
            200: "#aeffbf",
            300: "#70ff90",
            400: "#2bfd57",
            500: "#00e230",
            600: "#00c024",
            700: "#009620",
            800: "#06751f",
            900: "#07601c",
            950: "#00370c",
          },
          // Purple
          purple: {
            50: "#faf5ff",
            100: "#f4e9fe",
            200: "#ead7fd",
            300: "#dab7fb",
            400: "#c389f7",
            500: "#a54eef",
            600: "#983be2",
            700: "#8129c7",
            800: "#6d27a2",
            900: "#5a2083",
            950: "#3d0b60",
          },
          // Orange
          orange: {
            50: "#fef7ee",
            100: "#fdedd7",
            200: "#fad6ae",
            300: "#f6b97b",
            400: "#f29245",
            500: "#ee7320",
            600: "#df5a17",
            700: "#b94415",
            800: "#933619",
            900: "#772f17",
            950: "#40160a",
          },
        },

        // Semantic Colors
        semantic: {
          // Success (Green)
          success: {
            50: "#f1faeb",
            100: "#ddf4d3",
            200: "#bfeaac",
            300: "#96db7b",
            400: "#71ca51",
            500: "#55b635",
            600: "#3d8b25",
            700: "#306b20",
            800: "#2a551f",
            900: "#26491e",
            950: "#10270c",
          },
          // Error (Red)
          error: {
            50: "#fdf3f3",
            100: "#fbe5e5",
            200: "#f9cfcf",
            300: "#f4adad",
            400: "#ec7d7d",
            500: "#e26060",
            600: "#cc3636",
            700: "#ab2a2a",
            800: "#8e2626",
            900: "#762626",
            950: "#400f0f",
          },
          // Warning (Yellow/Brown)
          warning: {
            50: "#fbfcea",
            100: "#fafac7",
            200: "#f6f392",
            300: "#f0e654",
            400: "#ead425",
            500: "#e1c319",
            600: "#bc9512",
            700: "#966c12",
            800: "#7c5517",
            900: "#6a4719",
            950: "#3e260a",
          },
        },

        // Surface Colors (Grey)
        surface: {
          50: "#f6f6f9",
          100: "#ededf1",
          200: "#d7d8e0",
          300: "#b4b6c5",
          400: "#8b8da5",
          500: "#6c6e8b",
          600: "#575972",
          700: "#47485d",
          800: "#3d3e4f",
          900: "#363744",
          950: "#101014",
        },

        // Neutral Colors
        neutral: {
          50: "#f6f6f9",
          100: "#ededf1",
          200: "#d7d8e0",
          300: "#b4b6c5",
          400: "#8b8da5",
          500: "#6c6e8b",
          600: "#575972",
          700: "#47485d",
          800: "#3d3e4f",
          900: "#363744",
          950: "#101014",
        },
      },

      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        sora: ["Sora", "sans-serif"],
      },

      fontSize: {
        // Title variants (Sora)
        t101: [
          "32px",
          {
            lineHeight: "150%",
            fontWeight: "600",
            fontFamily: "Sora",
            letterSpacing: "4%",
          },
        ],
        t102: [
          "32px",
          {
            lineHeight: "150%",
            fontWeight: "700",
            fontFamily: "Sora",
            letterSpacing: "4%",
          },
        ],
        t103: [
          "32px",
          {
            lineHeight: "150%",
            fontWeight: "800",
            fontFamily: "Sora",
            letterSpacing: "4%",
          },
        ],

        t201: [
          "28px",
          {
            lineHeight: "150%",
            fontWeight: "600",
            fontFamily: "Sora",
            letterSpacing: "2%",
          },
        ],
        t202: [
          "28px",
          {
            lineHeight: "150%",
            fontWeight: "700",
            fontFamily: "Sora",
            letterSpacing: "2%",
          },
        ],
        t203: [
          "28px",
          {
            lineHeight: "150%",
            fontWeight: "800",
            fontFamily: "Sora",
            letterSpacing: "2%",
          },
        ],

        // Heading variants (Sora)
        h101: [
          "24px",
          { lineHeight: "150%", fontWeight: "400", fontFamily: "Sora" },
        ],
        h102: [
          "24px",
          { lineHeight: "150%", fontWeight: "600", fontFamily: "Sora" },
        ],
        h103: [
          "24px",
          { lineHeight: "150%", fontWeight: "700", fontFamily: "Sora" },
        ],

        h201: [
          "20px",
          { lineHeight: "150%", fontWeight: "400", fontFamily: "Sora" },
        ],
        h202: [
          "20px",
          { lineHeight: "150%", fontWeight: "700", fontFamily: "Sora" },
        ],
        h203: [
          "20px",
          { lineHeight: "150%", fontWeight: "300", fontFamily: "Sora" },
        ],

        h301: [
          "18px",
          { lineHeight: "150%", fontWeight: "400", fontFamily: "Sora" },
        ],
        h302: [
          "18px",
          { lineHeight: "150%", fontWeight: "700", fontFamily: "Sora" },
        ],
        h303: [
          "18px",
          { lineHeight: "150%", fontWeight: "300", fontFamily: "Sora" },
        ],

        // Sub heading variants (Sora)
        sh101: [
          "16px",
          { lineHeight: "150%", fontWeight: "600", fontFamily: "Sora" },
        ],
        sh102: [
          "16px",
          { lineHeight: "150%", fontWeight: "700", fontFamily: "Sora" },
        ],
        sh103: [
          "16px",
          { lineHeight: "150%", fontWeight: "800", fontFamily: "Sora" },
        ],

        sh201: [
          "14px",
          { lineHeight: "150%", fontWeight: "600", fontFamily: "Sora" },
        ],
        sh202: [
          "14px",
          { lineHeight: "150%", fontWeight: "700", fontFamily: "Sora" },
        ],
        sh203: [
          "14px",
          { lineHeight: "150%", fontWeight: "800", fontFamily: "Sora" },
        ],

        // Paragraph variants (Poppins)
        p101: [
          "16px",
          { lineHeight: "150%", fontWeight: "300", fontFamily: "Poppins" },
        ],
        p102: [
          "16px",
          { lineHeight: "150%", fontWeight: "400", fontFamily: "Poppins" },
        ],
        p103: [
          "16px",
          { lineHeight: "150%", fontWeight: "500", fontFamily: "Poppins" },
        ],

        p201: [
          "14px",
          { lineHeight: "150%", fontWeight: "400", fontFamily: "Poppins" },
        ],
        p202: [
          "14px",
          { lineHeight: "150%", fontWeight: "500", fontFamily: "Poppins" },
        ],
        p203: [
          "14px",
          { lineHeight: "150%", fontWeight: "600", fontFamily: "Poppins" },
        ],

        p301: [
          "12px",
          { lineHeight: "150%", fontWeight: "400", fontFamily: "Poppins" },
        ],
        p302: [
          "12px",
          { lineHeight: "150%", fontWeight: "500", fontFamily: "Poppins" },
        ],
        p303: [
          "12px",
          { lineHeight: "150%", fontWeight: "600", fontFamily: "Poppins" },
        ],

        // Links (Poppins)
        link01: [
          "12px",
          { lineHeight: "140%", fontWeight: "500", fontFamily: "Poppins" },
        ],
        link02: [
          "14px",
          { lineHeight: "140%", fontWeight: "500", fontFamily: "Poppins" },
        ],
        link03: [
          "16px",
          { lineHeight: "140%", fontWeight: "500", fontFamily: "Poppins" },
        ],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addVariant, theme }) {
      const soraFont = "Sora, sans-serif";
      const poppinsFont = "Poppins, sans-serif";

      const customTextStyles = {
        // Title variants (Sora)
        ".t101": {
          fontSize: "32px",
          lineHeight: "150%",
          fontWeight: "600",
          fontFamily: soraFont,
          letterSpacing: "4%",
        },
        ".t102": {
          fontSize: "32px",
          lineHeight: "150%",
          fontWeight: "700",
          fontFamily: soraFont,
          letterSpacing: "4%",
        },
        ".t103": {
          fontSize: "32px",
          lineHeight: "150%",
          fontWeight: "800",
          fontFamily: soraFont,
          letterSpacing: "4%",
        },
        ".t201": {
          fontSize: "28px",
          lineHeight: "150%",
          fontWeight: "600",
          fontFamily: soraFont,
          letterSpacing: "2%",
        },
        ".t202": {
          fontSize: "28px",
          lineHeight: "150%",
          fontWeight: "700",
          fontFamily: soraFont,
          letterSpacing: "2%",
        },
        ".t203": {
          fontSize: "28px",
          lineHeight: "150%",
          fontWeight: "800",
          fontFamily: soraFont,
          letterSpacing: "2%",
        },
        // Heading variants (Sora)
        ".h101": {
          fontSize: "24px",
          lineHeight: "150%",
          fontWeight: "400",
          fontFamily: soraFont,
        },
        ".h102": {
          fontSize: "24px",
          lineHeight: "150%",
          fontWeight: "600",
          fontFamily: soraFont,
        },
        ".h103": {
          fontSize: "24px",
          lineHeight: "150%",
          fontWeight: "700",
          fontFamily: soraFont,
        },
        ".h201": {
          fontSize: "20px",
          lineHeight: "150%",
          fontWeight: "400",
          fontFamily: soraFont,
        },
        ".h202": {
          fontSize: "20px",
          lineHeight: "150%",
          fontWeight: "700",
          fontFamily: soraFont,
        },
        ".h203": {
          fontSize: "20px",
          lineHeight: "150%",
          fontWeight: "300",
          fontFamily: soraFont,
        },
        ".h301": {
          fontSize: "18px",
          lineHeight: "150%",
          fontWeight: "400",
          fontFamily: soraFont,
        },
        ".h302": {
          fontSize: "18px",
          lineHeight: "150%",
          fontWeight: "700",
          fontFamily: soraFont,
        },
        ".h303": {
          fontSize: "18px",
          lineHeight: "150%",
          fontWeight: "300",
          fontFamily: soraFont,
        },
        // Sub heading variants (Sora)
        ".sh101": {
          fontSize: "16px",
          lineHeight: "150%",
          fontWeight: "600",
          fontFamily: soraFont,
        },
        ".sh102": {
          fontSize: "16px",
          lineHeight: "150%",
          fontWeight: "700",
          fontFamily: soraFont,
        },
        ".sh103": {
          fontSize: "16px",
          lineHeight: "150%",
          fontWeight: "800",
          fontFamily: soraFont,
        },
        ".sh201": {
          fontSize: "14px",
          lineHeight: "150%",
          fontWeight: "600",
          fontFamily: soraFont,
        },
        ".sh202": {
          fontSize: "14px",
          lineHeight: "150%",
          fontWeight: "700",
          fontFamily: soraFont,
        },
        ".sh203": {
          fontSize: "14px",
          lineHeight: "150%",
          fontWeight: "800",
          fontFamily: soraFont,
        },
        // Paragraph variants (Poppins)
        ".p101": {
          fontSize: "16px",
          lineHeight: "150%",
          fontWeight: "300",
          fontFamily: poppinsFont,
        },
        ".p102": {
          fontSize: "16px",
          lineHeight: "150%",
          fontWeight: "400",
          fontFamily: poppinsFont,
        },
        ".p103": {
          fontSize: "16px",
          lineHeight: "150%",
          fontWeight: "500",
          fontFamily: poppinsFont,
        },
        ".p201": {
          fontSize: "14px",
          lineHeight: "150%",
          fontWeight: "400",
          fontFamily: poppinsFont,
        },
        ".p202": {
          fontSize: "14px",
          lineHeight: "150%",
          fontWeight: "500",
          fontFamily: poppinsFont,
        },
        ".p203": {
          fontSize: "14px",
          lineHeight: "150%",
          fontWeight: "600",
          fontFamily: poppinsFont,
        },
        ".p301": {
          fontSize: "12px",
          lineHeight: "150%",
          fontWeight: "400",
          fontFamily: poppinsFont,
        },
        ".p302": {
          fontSize: "12px",
          lineHeight: "150%",
          fontWeight: "500",
          fontFamily: poppinsFont,
        },
        ".p303": {
          fontSize: "12px",
          lineHeight: "150%",
          fontWeight: "600",
          fontFamily: poppinsFont,
        },
        // Links (Poppins)
        ".link01": {
          fontSize: "12px",
          lineHeight: "140%",
          fontWeight: "500",
          fontFamily: poppinsFont,
        },
        ".link02": {
          fontSize: "14px",
          lineHeight: "140%",
          fontWeight: "500",
          fontFamily: poppinsFont,
        },
        ".link03": {
          fontSize: "16px",
          lineHeight: "140%",
          fontWeight: "500",
          fontFamily: poppinsFont,
        },
      };

      addUtilities(customTextStyles);

      // Fixed responsive variant
      addVariant("responsive", "@responsive");
    }),
  ],
};
