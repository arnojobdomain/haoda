(function(w) {
    function enterLine() {
        let enterUrl = 'http://www.haoda.net';
        document.getElementById("btnEnter").onclick = function() {
            window.open(enterUrl, "_blank");
        }
    }
    function init() {
        enterLine();
    }
    window.addEventListener("DOMContentLoaded", init, !1);
})(window);