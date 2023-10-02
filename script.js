let item1 = document.getElementById('item1');
item1.addEventListener('click', function () {
  /* テキストを選択し、コピー */
  let copyText = document.getElementById("copyText1");
  let textArea = document.createElement("textarea");
  let copiedBox = document.getElementById("copiedBox");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);

  /* コピーが完了したことをユーザーに通知 */
  copiedBox.classList.add('is-active')
  setTimeout(() => {
    copiedBox.classList.remove('is-active')
  }, 1600)
})

let item2 = document.getElementById('item2');
item2.addEventListener('click', function () {
  /* テキストを選択し、コピー */
  let copyText = document.getElementById("copyText2");
  let textArea = document.createElement("textarea");
  let copiedBox = document.getElementById("copiedBox");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);

  /* コピーが完了したことをユーザーに通知 */
  copiedBox.classList.add('is-active')
  setTimeout(() => {
    copiedBox.classList.remove('is-active')
  }, 1600)
})

let item3 = document.getElementById('item3');
item3.addEventListener('click', function () {
  /* テキストを選択し、コピー */
  let copyText = document.getElementById("copyText3");
  let textArea = document.createElement("textarea");
  let copiedBox = document.getElementById("copiedBox");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);

  /* コピーが完了したことをユーザーに通知 */
  copiedBox.classList.add('is-active')
  setTimeout(() => {
    copiedBox.classList.remove('is-active')
  }, 1600)
})

let item4 = document.getElementById('item4');
item4.addEventListener('click', function () {
  /* テキストを選択し、コピー */
  let copyText = document.getElementById("copyText4");
  let textArea = document.createElement("textarea");
  let copiedBox = document.getElementById("copiedBox");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);

  /* コピーが完了したことをユーザーに通知 */
  copiedBox.classList.add('is-active')
  setTimeout(() => {
    copiedBox.classList.remove('is-active')
  }, 1600)
})

let item5 = document.getElementById('item5');
item5.addEventListener('click', function () {
  /* テキストを選択し、コピー */
  let copyText = document.getElementById("copyText5");
  let textArea = document.createElement("textarea");
  let copiedBox = document.getElementById("copiedBox");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);

  /* コピーが完了したことをユーザーに通知 */
  copiedBox.classList.add('is-active')
  setTimeout(() => {
    copiedBox.classList.remove('is-active')
  }, 1600)
})

let item6 = document.getElementById('item6');
item6.addEventListener('click', function () {
  /* テキストを選択し、コピー */
  let copyText = document.getElementById("copyText6");
  let textArea = document.createElement("textarea");
  let copiedBox = document.getElementById("copiedBox");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);


  /* コピーが完了したことをユーザーに通知 */
  copiedBox.classList.add('is-active')
  setTimeout(() => {
    copiedBox.classList.remove('is-active')
  }, 1600)
})
