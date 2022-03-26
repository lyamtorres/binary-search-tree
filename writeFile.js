function ecrireFichier(temps) {
    const fs = require('fs');
    const content = `Temps d'exécution : ${temps} ms`;

    fs.writeFile('output.txt', content, err => {
        if (err) {
            console.error(err);
            return;
        }
    })
}

module.exports = { ecrireFichier };