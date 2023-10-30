/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/routes/**/*.{svelte,js,ts}'],
  daisyui: {
      themes: ['acid','corporate','cupcake']
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],

}
