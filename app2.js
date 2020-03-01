$(document).ready(function() {
    M.updateTextFields();

    $('.fixed-action-btn').floatingActionButton();

    var counter = 0;
    window.addEventListener('userproximity', function(event) {
        if (event.near) {
            document.getElementById('textarea1').value = 'NEEEEEEEEEEEAAAAAAARRRRRRR';
            if(counter % 2 == 0) {
                // Floating Action Button
                $('.fixed-action-btn').css("left", "23px");
                $('.fixed-action-btn').css("right", "auto");

                //NavBar
                $('.brand-logo').remove();
                $('#nav-mobile').remove();

                $('#navtopbar').append('<a href="#" class="brand-logo right"><span id="overview">My Overview &emsp;</span></a><ul id="nav-mobile" class="left show-on-med-and-down"><li><a href="index.html"><div class="topbar-links"><span id="links">Links</span></div></a></li><li><a href="index2.html"><div class="topbar-links"><span id="todos">Todos</span></div></a></li></ul>');
            } else {
                // Floating Action Button
                $('.fixed-action-btn').css("right", "23px");
                $('.fixed-action-btn').css("left", "auto");

                //NavBar
                $('.brand-logo').remove();
                $('#nav-mobile').remove();

                $('#navtopbar').append('<a href="#" class="brand-logo left"><span id="overview">&emsp;My Overview</span></a><ul id="nav-mobile" class="right show-on-med-and-down"><li><a href="index.html"><div class="topbar-links"><span id="links">Links</span></div></a></li><li><a href="index2.html"><div class="topbar-links"><span id="todos">Todos</span></div></a></li></ul>')
            }
            counter++;
        }
    });
});

$('textarea').click(function () {
    $(this).css('resize', 'none');
});

$('#wtf').click(function() {
    $('#inner').append('' + 
    '<div class="row">' +
    '<div id="left">' +
      '<label>' +
      '<input type="checkbox" />' +
      '<span>Done</span>' +
      '</label>' +
      '</div>' +
      '<form class="col s12" id="right">' +
      '<div class="row">' +
      '<div class="input-field col s12">' +
      '<textarea id="textarea1" class="materialize-textarea"></textarea>' +
      '<label for="textarea1">Todo</label>' +
      '</div>' +
      '</div>' +
      '</form>' +
      '</div>'
      );
});
