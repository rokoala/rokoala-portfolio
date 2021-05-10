module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'mac-gray-light': '#e5e5ea',
        'mac-gray-dark': '#2c2c2e',
        'mac-red-light': '#ff3a30',
        'mac-red-dark': '#ff443a',
        'mac-yellow-light': '#ffcc00',
        'mac-yellow-dark': '#ffd60a',
        'mac-green-light': '#34c759',
        'mac-green-dark': '#30d158',
      },
      backgroundImage: (theme) => ({
        'mountains-light': "url('/images/mountains-light.svg')",
        'mountains-dark': "url('/images/mountains-dark.svg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      backgroundImage: ['dark'],
      borderColor: ['checked'],
      inset: ['checked'],
      zIndex: ['hover', 'active'],
      margin: ['dark'],
    },
  },
  plugins: [],
};
