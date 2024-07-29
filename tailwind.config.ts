module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E5C9B',
        secondary: '#4CAF50',
        accent: '#FFC107',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], // You can change this to your preferred theme
  },
}