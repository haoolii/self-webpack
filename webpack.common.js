const path = require("path");
//plugin要引入
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');


//輸出
module.exports = {
  //windows斜線是反斜線 使用nodejs預設有的path 套件
  //src下的index.js檔案
  //可避免windows 反斜線問題 造成的錯誤
  entry: path.resolve(__dirname, "src", "index.js"),
  //輸出位置
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  //外掛 跟loader有差哦 要引入 在上面
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
    //設定plugin template模板位置 filename輸出的位置
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "html", "index.html"),
        filename: path.resolve(__dirname, "dist", "index.html")
    }),
    //把main也加入Plugin
     new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "html", "main.html"),
        filename: path.resolve(__dirname, "dist", "main.html")
    }),
    //css sprit!
    new SpritesmithPlugin({
        src: {
            cwd: path.resolve(__dirname, 'src/icons'),
            glob: '*.png'
        },
        target: {
            image: path.resolve(__dirname, 'src/sprite/sprite.png'),
            css: path.resolve(__dirname, 'src/sprite/sprite.css')
        },
        apiOptions: {
            cssImageRef: "sprite.png"
        }
      })   
  ], 
  module: {
    rules: [
      {
        //正規表達
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        //正規表達式 尋找sass和css檔
        test: /\.s?css$/,
        //要按照順序哦 就是這個順序
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader, //順序雷 小心不要放錯
          "css-loader",
          "sass-loader"
        ]
      },
      //loading ejs
      {
        test: /\.ejs$/,
        loader: 'ejs-loader'
      },
      //loading file and images loader
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/',
              publicPath: "/images"
            }
          },
          {
            loader: "image-webpack-loader",
          }
        ]
      }
    ]
  },
  //在chrome開發者模式下可顯示錯誤訊息，輸出之後將會隱藏???
  devtool: "eval-source-map",
  //server架起時會針對哪ㄧ資料夾
  devServer: {
    contentBase: path.resolve(__dirname, "dist")
    //可設port 預設8080
  }
};
