a = 1;
b = -13;
c = 42;

const solve = function() {
    let x1;
    let x2;
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        x1 = "NaN";
        x2 = "NaN";
    } else if (a == 0) {
        if (b == 0) {
            if (c == 0) {
                x1 = "ℝ";
                x2 = "ℝ";
            } else {
                x1 = "∅";
                x2 = "∅";
            }
        } else {
            x1 = -c / b;
            x2 = -c / b;
        }
    } else {
        let d = b * b - 4 * a * c;
        if (d < 0) {
            const imag = Math.sqrt(-d) / (2 * a);
            const real = -b / (2 * a);
            if (imag == 1) {
                if (real == 0) {
                    x1 = "-i";
                    x2 = "i";
                } else {
                    x1 = real + " - i";
                    x2 = real + " + i";
                }
            } else {
                if (real == 0) {
                    x1 = "-" + imag + "i";
                    x2 = imag + "i";
                } else {
                    x1 = real + " - " + imag + "i";
                    x2 = real + " + " + imag + "i";
                }
            }
        } else {
            x1 = (-b - Math.sqrt(d)) / (2 * a);
            x2 = (-b + Math.sqrt(d)) / (2 * a);
        }
    }
    document.getElementById("x1").value = x1;
    document.getElementById("x2").value = x2;
}

solve();

document.getElementById("a").addEventListener("input", function(e) {
    a = parseFloat(e.target.value);
    solve();
});

document.getElementById("b").addEventListener("input", function(e) {
    b = parseFloat(e.target.value);
    solve();
});

document.getElementById("c").addEventListener("input", function(e) {
    c = parseFloat(e.target.value);
    solve();
});
