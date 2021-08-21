// This script prevents cut copy and pasting
function show_error() {
    alert("Cut Copy and Paste is disabled");
}

$(document).ready(function() {
    $('.prevent').keydown(function (e) {
        if (e.ctrlKey && (e.keyCode == 88 || e.keyCode == 67 || e.keyCode ==86 )) {
            show_error();
        }
    });
});