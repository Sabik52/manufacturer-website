module.exports = {
 content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#212F3C",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          Amber: '#f59e0b',
          Cyan: '#06b6d4',
      
          "base-100": "#ffffff",
        },
      },
      
      "cupcake",
    ],
  },

  plugins: [require("daisyui")],
}
