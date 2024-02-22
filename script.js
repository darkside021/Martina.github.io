function aggiungiFrase() {
    var nuovaFrase = document.getElementById('nuovaFrase').value;

    if (nuovaFrase.trim() !== "") {
        // Simuliamo l'aggiunta della frase a una lista (sarà effettivo con un backend e un database)
        var listaFrasi = document.getElementById('listaFrasi');
        var nuovoElemento = document.createElement('li');
        nuovoElemento.innerText = nuovaFrase;
        listaFrasi.appendChild(nuovoElemento);

        // Pulisce l'input dopo l'aggiunta della frase
        document.getElementById('nuovaFrase').value = "";
    }
}
    // Funzione per colorare le parole specifiche
    function colorSpecificWords() {
        const phraseDisplay = document.getElementById('phrase-display');
        const wordsToColor = ['Martina', 'tiara', 'anima', 'mirata', 'mantra', 'amati', 'amanti', 'amarti'];
        const regex = new RegExp(`\\b(${wordsToColor.join('|')})\\b`, 'gi');

        phraseDisplay.innerHTML = phraseDisplay.innerHTML.replace(regex, '<span style="color: red;">$1</span>');
    }

    // Chiama la funzione colorSpecificWords quando la pagina è completamente caricata
    window.onload = colorSpecificWords;

// Funzione per capitalizzare le parole
function capitalizeWords(str) {
    return str.replace(/\b\w/g, function(match, index, fullStr) {
        if (index ===   0 || fullStr.charAt(index -   1) === ' ' || fullStr.charAt(index -   1) === '.' || fullStr.charAt(index -   1) === '!' || fullStr.charAt(index -   1) === '?') {
            return match.toUpperCase();
        } else {
            return match.toLowerCase();
        }
    });
}
    function addElement() {
        const element = document.createElement('div');
        element.textContent = 'Test';
        document.getElementById('dynamic-content').appendChild(element);
    }

    // Chiama la funzione addElement immediatamente
    addElement();
// Event listener per l'input che capitalizza le parole mentre si scrivono
document.getElementById('phrase-input').addEventListener('input', function() {
    this.value = capitalizeWords(this.value);
});

// Funzione per gestire l'evento click del pulsante "Emoji"
document.getElementById('emoji-button').addEventListener('click', function() {
    var emojiModal = document.getElementById('emoji-modal');
    emojiModal.style.display = 'block';
});

// Funzione per chiudere la modal degli emoji
document.querySelector('.close-emoji-modal').addEventListener('click', function() {
    var emojiModal = document.getElementById('emoji-modal');
    emojiModal.style.display = 'none';
});

// Funzione per aggiungere un emoji al campo di input
function addEmoji(emoji) {
    var phraseInput = document.getElementById('phrase-input');
    phraseInput.value += emoji;
}

// Aggiungi gestori di eventi per ciascun emoji nella modal
document.querySelectorAll('.emoji-category span').forEach(function(emojiSpan) {
    emojiSpan.addEventListener('click', function() {
        var emoji = this.textContent;
        addEmoji(emoji);
    });
});



// Funzione per gestire l'evento click del pulsante "Enter"
document.getElementById('enter-button').addEventListener('click', function() {
    var phraseInput = document.getElementById('phrase-input');
    var phraseDisplay = document.getElementById('phrase-display');
    var colorSelect = document.getElementById('color-select');
    var sizeSelect = document.getElementById('size-select');
    var phrase = phraseInput.value;

    // Aggiungi la frase all'area di visualizzazione con il colore e la dimensione selezionati
    phraseDisplay.style.color = colorSelect.value;
    phraseDisplay.style.fontSize = sizeSelect.value;
    phraseDisplay.textContent = phrase;

    // Pulisci il campo di input
    phraseInput.value = '';
});
function zoom(element) {
    var overlayImage = document.querySelector('#overlay img');
    var overlay = document.querySelector('#overlay');
    overlayImage.src = element.src;
    overlay.style.display = 'flex';
}

function unzoom() {
    var overlay = document.querySelector('#overlay');
    overlay.style.display = 'none';
}



    // Funzione per aggiungere una laber al contenitore
    function addLabel(text, color) {
        const label = document.createElement('div');
        label.textContent = text;
        label.style.backgroundColor = color;
        label.style.padding = '10px';
        label.style.margin = '5px';
        label.style.color = 'white';
        label.style.textAlign = 'center';
        label.style.borderRadius = '5px';
        document.getElementById('dynamic-content').appendChild(label);
    }

    // Funzione per aggiungere il bottone al contenitore
    function addButton() {
        const button = document.createElement('a');
        button.href = 'altra_pagina.html';
        button.textContent = 'Scopriamolo';
        button.style.display = 'inline-block';
        button.style.padding = '10px  20px';
        button.style.marginTop = '20px';
        button.style.backgroundColor = '#007bff';
        button.style.color = 'white';
        button.style.textDecoration = 'none';
        button.style.borderRadius = '5px';
        document.getElementById('dynamic-content').appendChild(button);
    }

    // Aggiungi la prima laber dopo  5 secondi
    setTimeout(() => {
        addLabel('Sì, anche altre si chiamano così dirai tu', '#ff0000');
    },  5000);

    // Aggiungi la seconda laber dopo  10 secondi
    setTimeout(() => {
        addLabel('ma qualcosa pure vorrà dire', '#00ff00');
    },  10000);

    // Aggiungi il bottone dopo  15 secondi
    setTimeout(() => {
        addButton();
    },  15000);

// Funzione per colorare le parole specifiche
function colorSpecificWords() {
    const phraseDisplay = document.getElementById('phrase-display');
    const wordsToColor = ['Martina', 'tiara', 'anima', 'mirata', 'mantra', 'amati', 'amanti', 'amarti'];
    const regex = new RegExp(`\\b(${wordsToColor.join('|')})\\b`, 'gi');

    phraseDisplay.innerHTML = phraseDisplay.innerHTML.replace(regex, '<span style="color: red;">$1</span>');
}

// Chiama la funzione colorSpecificWords quando la pagina è completamente caricata
window.onload = colorSpecificWords;
