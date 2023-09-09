function copyToClipboard() {
  /* テキストを選択し、コピー */
  let copyText = document.getElementById("copyText");
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
}
