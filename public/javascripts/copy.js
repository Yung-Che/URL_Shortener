function copyShortURL() {
  const copyText = document.getElementById('inputURL')
  navigator.clipboard.writeText(copyText.textContent)
  alert("Copied!", {
    button: false,
    timer: 1000,
  })
}