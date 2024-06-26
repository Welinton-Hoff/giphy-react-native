module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: { "^~(.+)": "./src/\\1" },
          extensions: [
            ".js",
            ".ts",
            ".jsx",
            ".tsx",
            ".json",
            ".ios.js",
            ".native.js",
            ".android.js",
          ],
        },
      ],
    ],
  };
};
