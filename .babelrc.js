module.exports = {
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
