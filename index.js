// enregistrement noeud
class ABR {
    constructor(val) {
        this.val = val;
        this.sag = null;
        this.sad = null;
    }

    static insererABR(A, x) {
        var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
        if (A === null) {
            A = new ABR(x);
            displayTree(A);
        } else {
            if (x <= A.val) {
                this.insererABR(A.sag, x);
            } else {
                this.insererABR(A.sad, x);
            }
        }
    }
}

var abr = null;
ABR.insererABR(abr, 5);

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

displayTree(abr);
