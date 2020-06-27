(function(w) {
    function enterLine() {
        document.getElementById("btnEnter1").onclick = function() {
            window.open('http://www.haoda1.net', "_blank");
        }
        document.getElementById("btnEnter2").onclick = function() {
            window.open('http://www.haoda2.net', "_blank");
        }
        document.getElementById("btnEnter3").onclick = function() {
            window.open('http://www.haoda3.net', "_blank");
        }
    }
    function init() {
        enterLine();
    }
    window.addEventListener("DOMContentLoaded", init, !1);
})(window);