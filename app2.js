$(document).ready(function() {
    M.updateTextFields();

    $('textarea').click(function () {
        $(this).css('resize', 'none');
    });

    $('.fixed-action-btn').floatingActionButton();
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
