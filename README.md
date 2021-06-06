# autoMarkRead
Gmailで大量の未読メールを開封するシンプルなスクリプト

- Gmailの未読メールを放置して大量に未読メールが溜まると、GmailのUIから手作業で開封するのは大変な作業になります。それを解決するためのスクリプトです。
- 7日以上経過した未読メールを最大200件まで開封します。
  - `const targetCount = 200;`ここの数値を修正して最大開封数を増減可能ですが、GASの仕様では最大500件しか処理できないようです。
- Google Apps Scriptのトリガーを設定してデイリーで未読メールを消化する運用を想定しています。
  - 数千件という未読メールを溜めてしまっていても、デイリートリガーを仕込んでおけば、日に日に未読数が減っていくことに気づくでしょう。
  - なかなかないことでしょうが、1日あたり200件以上のメールが届くようなアカウントであれば、`const targetCount = 200;`を増やして使うべきでしょう。
- Google Spreadsheetは使いません。
- 開封したメールのヘッダ情報`mailHeader`を`console.log()`で出力しており、[Google Apps Script](https://script.google.com/home/executions)の実行ログで参照できます。
  - `mailHeader`を任意のGoogle Spreadsheetへ出力するような転用も容易にできるでしょう。
