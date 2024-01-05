# 基本規範

## 合併版控方式

* 本機端從 main 開分支，命名規則參考 feature/{date}-{name}，EX: featute/20240105-login
* 要併版前先合併最新 main 版本到自己的分支
* 至 github 申請 pull request
* 自己點 merge 即可

## 開發注意事項

* 專案內有加入 .vscode/settings.json，開發時如果 js/css 有拋毛毛蟲可以先忽略，按下存檔會自行修正排版，如果沒有修正再手動排除
* guideline system 見 /guideline 頁面

## 開發環境與編譯方式

* node.js 版本：v18.12 以上
* 執行 npm install
* 執行 npm run dev
* vite 打包工具有時畫面更新較慢，重新 npm run dev 即可

## TS 型別定義

* 型別可以統一定義在 types 資料夾（參考影音課程『TS 型別模組化教學』這篇）
