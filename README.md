## これはなに
Reactとbootstrap4の勉強用に作ったもの。  
アナログゲーム用のカードが簡単に作れるツール
カードを作成し、ブラウザ上から印刷するだけ。

## サンプル
 http://www.ginjake.net/card/
 
## コマンド
### npm start
開発用サーバーを立ち上げる。
http://hogehoge:3000 でアクセス可能

### npm run build
本番用にビルドする。
cardディレクトリに公開する設定になっているので、
フォルダを変えるときは
config/paths.js　の
`envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : '/card');`
を変更する
