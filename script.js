const getCookie = function(name) {
    return Cookies.get(name);
}

const setCookie = function(name, value) {
    Cookies.set(name, value, { expires: 365, path: "/", sameSite: "none", secure: true });
}

const delCookie = function(name) {
    Cookies.remove(name, { path: "/", sameSite: "none", secure: true });
}

let theme = getCookie("theme");

if (!["light", "nil", "dark", "sepia", "milligram", "pure", "sakura", "skeleton", "bootstrap", "medium", "tufte"].includes(theme)) {
    theme = "light";
}
document.documentElement.setAttribute("data-theme", theme);
