function ecrireFichier(temps, fichier) {
    const fs = require('fs');
    const content = `Temps d'exécution : ${temps} ms`;

    fs.writeFile(fichier, content, err => {
        if (err) {
            console.error(err);
            return;
        }
    })
}

module.exports = { ecrireFichier };