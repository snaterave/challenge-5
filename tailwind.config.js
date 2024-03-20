/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      	backgroundColor: theme =>({
			...theme('colors'), // colores por defecto de tailwind
			'primary-bright-orange': '#e38826',
			'primary-dark-cyan': '#006970',
			'primary-very-dark-cyan': '#004241',
			'secundary-transparent-white': '#ffffff',
			'secundary-very-light-gray': '#f2f2f2'
		}),
		fontFamily:{
			'family-primary': ['Big Shoulders Display', 'sans-serif'],
			'family-secundary': ['Lexend Deca', 'sans-serif'],
		},
		textColor:{
			'primary-bright-orange':'#e38826',
			'primary-dark-cyan': '#006970',
			'primary-very-dark-cyan': '#004241',
			'secundary-transparent-white': '#ffffff',
			'secundary-very-light-gray': '#f2f2f2'
		},
		fontSize: {
			'paragraph': '15px',
		},
    },
  },
  variants:{
	extend:{
		with:['responsive','hover','focus'],
		borderStyle: ['responsive', 'hover'],
    borderWidth: ['responsive', 'hover'],

	}
  },
  plugins: [],
};



