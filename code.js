const textArea = document.querySelector('.app__text-area'),
      CharsWithSpaces = document.getElementById('char-w-s'),
      CharsWithoutSpaces = document.getElementById('char-wo-s'),
      Words = document.getElementById('words'),
      Sentances = document.getElementById('sentances');

let text = null;

function updateText() {
    if (textArea.value.length > 0) {
        text = textArea.value + ' ';
        CharsWithSpaces.innerHTML = text.length - 1;
        CharsWithoutSpaces.innerHTML = text.replace(/\s/g, '').length;
        Words.innerHTML = text.match(/([\s]+)/g).length;
        Sentances.innerHTML = text.match(/(\.|\!|\?)( |$)/g || []).length;
    } else {
        text = null;
        CharsWithSpaces.innerHTML = 0;
        CharsWithoutSpaces.innerHTML = 0;
        Words.innerHTML = 0;
        Sentances.innerHTML = 0;
    }
}

textArea.addEventListener('input', updateText)