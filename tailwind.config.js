/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "border-primary": "#000",
        "color-neutral-neutral": "#666",
        "color-neutral-white": "#fff",
        "text-alternate": "#fff",
        buttons1: "#ffc03d",
        "color-system-error-red": "#b42318",
        whitesmoke: {
          "100": "#f5f5f5",
          "200": "#eee",
        },
        darkslateblue: "#192c51",
      },
      fontFamily: {
        "text-small-normal": "Roboto",
        text: "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
        "31xl": "50px",
        "81xl": "100px",
      },
      padding: {
        "61xl": "80px",
        "45xl": "64px",
        "93xl": "112px",
        "54xl": "73px",
        "13xl": "32px",
        "12xl": "31px",
        "28xl": "47px",
        "3xs": "10px",
        "2xs": "11px",
        xl: "20px",
        lg: "18px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      base: "16px",
      lg: "18px",
      "29xl": "48px",
      "21xl": "40px",
      "19xl": "38px",
      "13xl": "32px",
      "10xl": "29px",
      "7xl": "26px",
      "5xl": "24px",
      lgi: "19px",
      inherit: "inherit",
    },
    screens: {
      sm: "400px", // Small screens start at 400px
      md: "768px", // Medium screens
      lg: "1200px", // Large screens start at 1200px
      xl: "1440px", // Extra large screens
      "2xl": "1600px", // 2x Extra large screens

      // Custom breakpoints if needed
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};


