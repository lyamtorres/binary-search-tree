function ABR () {
        this.val = val;
        this.sag = null;
        this.sad = null;

    this.insererABR(A, x) = function () {
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
abr.insererABR(abr, 5);

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

displayTree(abr);