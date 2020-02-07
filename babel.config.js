module.exports = {
  presets: [
    '@babel/preset-react',
  ],
  plugins: [
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    ["react-hot-loader/babel"],
  ],
}