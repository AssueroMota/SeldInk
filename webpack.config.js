// webpack.config.js
module.exports = {
    // Outras configurações do Webpack
    module: {
      rules: [
        // Outras regras de carregamento de arquivos
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    }
  };