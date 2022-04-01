const { performance } = require('perf_hooks');
const util = require('./writeFile');

function Noeud(val) {
    this.val = val;
    this.sag = null;
    this.sad = null;
}

function ABR() {
    this.racine = null;
    
    this.inserer = function(val, racine = this.racine) {
        let nouveauNoeud = new Noeud(val);

        if (!this.racine) {
            this.racine = nouveauNoeud;
        } else {
            if (val === racine.val) {
                return null;
            } else if (val < racine.val) {
                if (!racine.sag) {
                    racine.sag = nouveauNoeud;
                } else {
                    return this.inserer(val, racine.sag);
                }
            } else {
                if (!racine.sad) {
                    racine.sad = nouveauNoeud;
                } else {
                    return this.inserer(val, racine.sad);
                }
            }
        }
    }
    
    this.supprimer = function(x, A = this.racine) {
        // vérifie que A ne soit pas un arbre vide
        if (A) {
            if (x < A.val) {
                A.sag = this.supprimer(x, A.sag);
            } else if (x > A.val) {
                A.sad = this.supprimer(x, A.sad);
            } else {
                // x est égal à A.val arrivés ici
                if (!A.sag) {
                    return A.sad;
                } else if (!A.sad) {
                    return A.sag;
                } else {
                    // x possède 2 fils | à finir
                    A.val = this.supprimerMax(A.sad);
                    A.sad = this.supprimer(A.val, A.sad);
                }
            }
        } 
        return A;
    }

    this.supprimerMax = function(A) {
        let y = A.val;

        while (A.left != null) {
            y = A.sag.val;
            A = A.sag;
        }

        return y;
    }

    this.rechercher = function(x, A = this.racine) {
        if (!A) {
            A = null;
        } else if (x < A.val) {
            A = this.rechercher(x, A.sag);
        } else if (x > A.val) {
            A = this.rechercher(x, A.sad); 
        }

        return A; 
    }

    this.creerABRComplet = function(p, val = Math.pow(2, p + 1), racine = this.racine, pos = 'racine') {
        if (p >= 0) {
            if (pos === 'racine') {
                racine = new Noeud(Math.pow(2, p));
            } else if (pos === 'gauche') {
                racine = new Noeud(val - Math.pow(2, p));
            } else if (pos === 'droite') {
                racine = new Noeud(val + Math.pow(2, p));
            }

            this.inserer(Math.pow(2, p))
            
            racine.sag = this.creerABRComplet(p - 1, racine.val, racine.sag, 'gauche');
            racine.sad = this.creerABRComplet(p - 1, racine.val, racine.sad, 'droite');
        }

        return racine;
    }

    this.creerABRFiliforme = function(p) {
        let n = Math.pow(2, p + 1) - 1;

        for (let i = 1; i <= n; i++) {
            this.inserer(i);
        }
    }

    this.manipulerABRComplet = function(ABR, p) {
        for (let i = Math.pow(2, p); i >= 1; i--) {
            ABR.supprimer(i);
            ABR.inserer(i);
        }

        return ABR;
    }
}

let afficherAbre = tree => console.log(JSON.stringify(tree, null, 2));

/**
 * calcule le temps pour créer un arbre complet
 * ajoute le résultat dans complet.txt
 */
/*  let abrC = new ABR();

 start = performance.now();
 abrC.racine = abrC.creerABRComplet(2);
 afficherAbre(abrC);
 duration = performance.now() - start;

 util.ecrireFichier(duration, 'complet.txt'); */

/**
 * calcule le temps pour créer un arbre filiforme
 * ajoute le résultat dans filiforme.txt
 */
/*  let abrF = new ABR();

 start = performance.now();
 abrF.creerABRFiliforme(2);
 duration = performance.now() - start;

 util.ecrireFichier(duration, 'filiforme.txt'); */

/**
 * calcule le temps pour manipuler un arbre complet
 * ajoute le résultat dans complet-modif.txt
 */
 let abrC = new ABR();

 start = performance.now();
 abrC.racine = abrC.creerABRComplet(2); // faut changer ici la valeur de n
 afficherAbre(abrC);
 let abrCI = abrC.manipulerABRComplet(abrC, 2); // et ici !!
 duration = performance.now() - start;

 util.ecrireFichier(duration, 'complet-modif.txt');
 //afficherAbre(abrCI);