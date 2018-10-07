Webpack初始檔
===
 <img width="200" height="200" src="webpack-logo.png">
 
## 10/06 DreamForest - webpack
(與Webpack同行 Google簡報)[https://docs.google.com/presentation/d/1SZe9LyKxekhsYxvgW5pmlVm1Fv83huWyV6eYeAFMsLo/edit#slide=id.g4388dd36c7_0_43]
### Css Purge
用不到的樣式，優化，排除沒用到的Css class 

### Css Sprit
webpack協助合併圖片

### Grunt/Gulp
自動化

## Webpack
ohh 套件相依？
單獨引入載入順序問題、Loading太慢、減少請求次數
圖片Base64轉檔

index.js 會放引入的所有東西
dist 最後輸出

webpack cli 4.0以後才需要安裝？

npm -D = devDependencies
npm package 有分 Dependencies 和 devDependencies
最後產出的Dependencies並不會包含dev
工具類才會在devDependencies

---
初始流程
```
npm init -y
code .
npm i -D webpack webpack-dev-server webpack-cli
(下一頁)
touch webpack.config.js

```
webpack.config.js webpack3以前要設置 4之後可設定其他名稱

dist src 自己建立
驚嘆號展開!!
! + tab = html:5 +tab

啟動dev伺服器並不會直接產生dist
需後續執行dist產檔

### Babel轉檔
針對舊瀏覽器 不支援新語法
Babel引入檔案前小老鼠 是官方指定 

```
module: {
   rules: [
     {
     //正規式哦
       test: /\.js$/,
       use: {
         loader: 'babel-loader',
         options: {
           presets: ['@babel/preset-env']
         }
       }
     }
   ]
 }

```

css sass支援要npm載四個套件
```
npm i -D css-loader sass-loader style-loader node-sass
```

>css-loader: 讓webpack能讀取css的檔案, 
sass-loader:讓webpack能讀取sass的檔案,
style-loader: 讓js能夠認得css的語法, 
node-sass: 讓js能夠認得sass的語法

plugin是外掛 不是loader
放的地方不依樣哦！！


### html拆分
```
npm i -D html-webpack-plugin
```
會自動榜上bundle.js和起始style.css

麵包屑導覽列???????

###test2

