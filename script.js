const inputElement = document.getElementById('inputbox');
var h = inputElement.scrollHeight;
inputElement.addEventListener('input', function () {
    if (inputElement.scrollHeight > h) this.style.height = (this.scrollHeight) + 'px';
    else if (inputElement.scrollHeight > inputElement.clientHeight) this.style.height = (this.scrollHeight - 74) + 'px';
    console.log(inputElement.scrollHeight);
    h = inputElement.scrollHeight;
});