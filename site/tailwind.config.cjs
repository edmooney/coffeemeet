/** @type {import('tailwindcss').Config} */
/*export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
*/


module.exports = {
  content: ['./src/routes/**/*.{svelte,js,ts}'],
  daisyui: {
      themes: ['acid','corporate','cupcake']
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
}


