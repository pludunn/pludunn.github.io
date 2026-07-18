let n = 12;

const update = function() {
    let fibs = [0, 1];
    while (fibs.length < n) {
        fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
    }
    document.getElementById("fibs").textContent = fibs;
    let phi = fibs[fibs.length - 1] / fibs[fibs.length - 2];
    document.getElementById("phi").value = phi;
    let rt5 = (2 * phi) - 1;
    document.getElementById("rt5").value = rt5;
    let psi = (1 - rt5) / 2;
    document.getElementById("psi").value = psi;
}

update();
document.getElementById("n").value = n;
document.getElementById("n").addEventListener("input", function(e) {
    n = parseInt(e.target.value);
    update();
});
