const path = require('path');

module.exports = {
  entry: './main.js', // Replace './src/index.js' with the entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
    filename: 'bundle.js', // Output filename
  },
  // Add any additional webpack configurations as needed
};
