let fields = []; // Array, der die mit onclick übergebenen Werte speichert

let currentShape = 'cross';  // Variable, die sagt, mit welchem Image gestartet werden soll

function fillShape(id) { // Aufruf durch onclick und Übergabe von Parameter ID, welches Feld geklickt wurde
    if (!fields[id]) { // Funktion wird wegen Negation Operator nur ausgeführt, wenn Bedingung undefined zurückgibt, also noch kein Wert vorhanden ist
                       // so werden Doppelklicks verhindert.
        if (currentShape == 'cross') { // if-Abfrage, die abwechselnd 'cross' und 'circle' in den Array gibt
            currentShape = 'circle';
            document.getElementById('player-1').classList.remove('player-inactive'); // entfernt Transparenz von Player 1 und
            document.getElementById('player-2').classList.add('player-inactive'); // fügt Transparenz zu Player 2 hinzu
        } else {
            currentShape = 'cross';
            document.getElementById('player-1').classList.add('player-inactive'); // fügt Transparenz zu Player 1 hinzu und
            document.getElementById('player-2').classList.remove('player-inactive'); // entfernt Transparenz von Player 2
        }

        fields[id] = currentShape; // pusht aktuelle Indexstelle (currentShape) mit 'cross' oder 'circle' in den Array
        console.log(fields);
        draw();
        checkForWin();
    }
}

function draw() {  //entfernen von entsprechendem display-none im CSS beim click
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }

        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}

function checkForWin() {
    let winner; // Variable mit der ich überprüfe ob ein Wert vorhanden oder undefined ist

    // First row
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        // erfragt die verschiedenen Möglichkeiten, ob drei gleiche Werte in einer senk-, waagerechten oder diagonalen sind
        // außerdem ob Wert vorhanden (zweites &&), sonst wird nächste Zeile nicht ausgeführt
        winner = fields[0]; // überprüft ob Wert an Index 0, 1 oder 2 vorhanden, ansonsten undefined
        document.getElementById('line-1').style.transform = 'scaleX(1)'; // Animation von durchgezogener Linie bei Gewinn
    }

    // Second Row
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
    }
    
    // Third Row
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[7]) {
        winner = fields[6];
        document.getElementById('line-3').style.transform = 'scaleX(1)';
    }
    
    // Vertical Left
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
    }

    // Vertical Middle
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
    }

    // Vertical Right
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-6').style.transform = 'rotate(90deg) scaleX(1)';
    }

    // Diagonal Left
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-7').style.transform = 'rotate(45deg) scaleX(1)';
    }

    // Diagonal Right 
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[6]) {
        winner = fields[2];
        document.getElementById('line-8').style.transform = 'rotate(-45deg) scaleX(1)';
    }

    if (winner) {
        console.log('GEWONNEN', winner);
    }
}
