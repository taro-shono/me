module.exports = {
  presets: ['next/babel'],
  env: {
    development: {
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            ssr: true,
          },
        ],
      ],
    },
  },
};
