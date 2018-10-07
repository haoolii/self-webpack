Webpack初始檔
===
 <img width="200" height="200" src="webpack-logo.png">
 
## 說明
這是參與課程活動，產出的一Webpack初始檔，這樣以後使用較方便，這是個範本。也需要也可以自己取用。

## 10/06 DreamForest - webpack
[10/05 台中前端 x 夢森林 與Webpack同行 Google簡報](https://docs.google.com/presentation/d/1SZe9LyKxekhsYxvgW5pmlVm1Fv83huWyV6eYeAFMsLo/edit#slide=id.g4388dd36c7_0_43)
## CSS Purge
[CSS Purge官網](http://www.csspurge.com/)

清除無使用到的CSS樣式，優化整體專案Loading速度，Bootstrap過於肥大的CSS包可以使用。

## Css Sprit
webpack協助合併圖片

## Grunt/Gulp
納入比較原因為可自動化打包以及自動化測試，Webpack著重在打包，所以並不細談。
Jest、Mocha等等

## Webpack
防止套件相依造web在載入時要特別注意Script引入順序，不然可能會報錯或是產生非預期結果。且請求伺服器次數將會提升，也可能造成阻塞。

圖片Base 64可提升網頁載入圖片速度，將圖片轉為字串傳送較能加快速度，但因舊瀏覽器部分支援問題，還是得慎用。
*另外先前我認為圖片實際在瀏覽器讀取時，也是透過壓縮編碼，為何透過Base64會比較優化呢？*

### 架構

src/index.js 會放引入的所有東西scss那些543，
dist 最後輸出

webpack-cli 4.0以後才需要安裝

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

### 備註
參考簡報可了解有部分流程，像是CSS可以直接從bundle.js注入，並沒有特別獨立出CSS，我是不覺得這樣有什麼不好？
