module.exports = {
  presets: ['babel-preset-gatsby'],
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
