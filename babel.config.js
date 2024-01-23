module.exports = function (api) {
    api.cache(true);
  
    const presets = [
      "@babel/preset-env",  // Transpile to current Node.js version
      "@babel/preset-react" // Transpile React JSX
    ];
  
    const plugins = [
      // Add any additional plugins as needed
    ];
  
    return {
      presets,
      plugins
    };
  };
  