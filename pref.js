document.getElementById("theme").value = theme;
document.getElementById("theme").addEventListener("change", function(e) {
    setCookie("theme", e.target.value);
    window.location.reload();
});
