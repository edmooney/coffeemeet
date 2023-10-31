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
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
      themes: ['acid','corporate','cupcake']
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
}


