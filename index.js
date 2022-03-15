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
}

let afficherAbre = tree => console.log(JSON.stringify(tree, null, 2));
let abr = new ABR();

abr.inserer(5);
abr.inserer(3);
abr.inserer(7);
afficherAbre(abr);
