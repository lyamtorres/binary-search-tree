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

    this.creerABRComplet = function(p, val = Math.pow(2, p + 1), racine = this.racine, pos = 'racine') {
        if (p >= 0) {
            if (pos === 'racine') {
                racine = new Noeud(Math.pow(2, p));
            } else if (pos === 'gauche') {
                racine = new Noeud(val - Math.pow(2, p));
            } else if (pos === 'droite') {
                racine = new Noeud(val + Math.pow(2, p));
            }
            
            racine.sag = this.creerABRComplet(p - 1, racine.val, racine.sag, 'gauche');
            racine.sad = this.creerABRComplet(p - 1, racine.val, racine.sad, 'droite');
        }

        return racine;
    }
}

let afficherAbre = tree => console.log(JSON.stringify(tree, null, 2));
let abr = new ABR();

let arbre = abr.creerABRComplet(3);
afficherAbre(arbre);



/* this.creerABRComplet = function(p, racine = this.racine) {
    if (p >= 0) {
        let noeud;
        let val = Math.pow(2, p);

        if (!this.racine) {
            noeud = new Noeud(val);
            this.racine = noeud;
        } else {
            console.log(val);
            if (val < racine.val) {
                noeud = new Noeud(this.racine.val - val);
                racine.sag = noeud;
                return this.creerABRComplet(p - 1, racine.sag);
            } else {
                noeud = new Noeud(this.racine.val + val);
                racine.sad = noeud;
                return this.creerABRComplet(p - 1, racine.sad);
            }
        }
    } else {
        return null;
    }
} */
