//Touch event - doubletap om de pagina te refreshen
    var element = document.getElementById('touch');
    Hammer(element).on("doubletap", function(event) {
    location.reload();
    });


