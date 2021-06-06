function autoMarkRead() {
  const targetCount = 200;  //処理するスレッド数
  const targetDate = 6;     //対象の受信日
  
  var searchCondition = 'is:unread older_than:' + targetDate + 'd';  //対象メールの条件(targetDateより古い未読スレッド)
  var threads = GmailApp.search(searchCondition , 0, targetCount);
  var msgs;
  var mailHeader = [];
  
  for (var i = 0 ; i < threads.length; i++) {
    msgs = GmailApp.getMessagesForThread(threads[i]);
    mailHeader.push([msgs[0].getTo(), msgs[0].getDate(), msgs[0].getSubject()]);
    threads[i].markRead();  // スレッドを既読にする
  }
  console.log(mailHeader);
  return mailHeader;
}