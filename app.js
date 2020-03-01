$(document).ready(function(){
    
    $('.sidenav').sidenav(); 

    var counter = 0;
    window.addEventListener('userproximity', function(event) {
        if (event.near) {
            if(counter % 2 == 0) {
                // Floating Action Button
                $('.fixed-action-btn').css("left", "23px");
                $('.fixed-action-btn').css("right", "auto");

                //NavBar
                $('.brand-logo').remove();
                $('#nav-mobile').remove();

                $('#navtopbar').append('<a href="#" class="brand-logo right"><span id="overview">My Overview &emsp;</span></a><ul id="nav-mobile" class="left show-on-med-and-down"><li><a href="index.html"><div class="topbar-links"><span id="links">Links</span></div></a></li><li><a href="index2.html"><div class="topbar-links"><span id="todos">Todos</span></div></a></li></ul>');
            
                //SideBar
                $('#ulSidenav').sidenav({
                    edge:'right'
                });
            } else {
                // Floating Action Button
                $('.fixed-action-btn').css("right", "23px");
                $('.fixed-action-btn').css("left", "auto");

                //NavBar
                $('.brand-logo').remove();
                $('#nav-mobile').remove();

                $('#navtopbar').append('<a href="#" class="brand-logo left"><span id="overview">&emsp;My Overview</span></a><ul id="nav-mobile" class="right show-on-med-and-down"><li><a href="index.html"><div class="topbar-links"><span id="links">Links</span></div></a></li><li><a href="index2.html"><div class="topbar-links"><span id="todos">Todos</span></div></a></li></ul>')
                
                //SideBar
                $('#ulSidenav').sidenav({
                    edge:'left'
                });
            }
            counter++;
        }
    });
});


$(function update() {
    $('#btn-delete-facebook').click(function() {
        $('#facebook-delete').remove();
        $('#btn-add-facebook').removeAttr("disabled");
        update();
    });
    $('#btn-delete-google').click(function() {
        $('#google-delete').remove();
        $('#btn-add-google').removeAttr("disabled");
        update();
    });
    $('#btn-delete-kit').click(function() {
        $('#kit-delete').remove();
        $('#btn-add-kit').removeAttr("disabled");
        update();
    });
    $('#btn-delete-netflix').click(function() {
        $('#netflix-delete').remove();
        $('#btn-add-netflix').removeAttr("disabled");
        update();
    });
    $('#btn-delete-twitter').click(function() {
        $('#twitter-delete').remove();
        $('#btn-add-twitter').removeAttr("disabled");
        update();
    });
    $('#btn-delete-youtube').click(function() {
        $('#youtube-delete').remove();
        $('#btn-add-youtube').removeAttr("disabled");
        update();
    });
    $('#btn-add-facebook').click(function() {
        if ($('#btn-add-facebook').attr("disabled") == "disabled") {
        } else {
            $('#wrapper').append('<div class="icon-delete" id="facebook-delete"><img class="icon" id="facebook" src="facebook.png" alt="facebook"><a id="btn-delete-facebook" class="btn-floating red"><i class="material-icons">delete</i></a></div>');
            $('#btn-add-facebook').attr("disabled", "disabled");
            update();
        }
    });
    $('#btn-add-google').click(function() {
        if ($('#btn-add-google').attr("disabled") == "disabled") {
        } else {
            $('#wrapper').append('<div class="icon-delete" id="google-delete"><img class="icon" id="google" src="google.png" alt="google"><a id="btn-delete-google" class="btn-floating red"><i class="material-icons">delete</i></a></div>');
            $('#btn-add-google').attr("disabled", "disabled");
            update();
        }
    });
    $('#btn-add-kit').click(function() {
        if ($('#btn-add-kit').attr("disabled") == "disabled") {
        } else {
            $('#wrapper').append('<div class="icon-delete" id="kit-delete"><img class="icon" id="kit" src="kit.png" alt="kit"><a id="btn-delete-kit" class="btn-floating red"><i class="material-icons">delete</i></a></div>');
            $('#btn-add-kit').attr("disabled", "disabled");
            update();
        }
    });
    $('#btn-add-netflix').click(function() {
        if ($('#btn-add-netflix').attr("disabled") == "disabled") {
        } else {
            $('#wrapper').append('<div class="icon-delete" id="netflix-delete"><img class="icon" id="netflix" src="netflix.png" alt="netflix"><a id="btn-delete-netflix" class="btn-floating red"><i class="material-icons">delete</i></a></div>');
            $('#btn-add-netflix').attr("disabled", "disabled");
            update();
        }
    });
    $('#btn-add-twitter').click(function() {
        if ($('#btn-add-twitter').attr("disabled") == "disabled") {
        } else {
            $('#wrapper').append('<div class="icon-delete" id="twitter-delete"><img class="icon" id="twitter" src="twitter.png" alt="twitter"><a id="btn-delete-twitter" class="btn-floating red"><i class="material-icons">delete</i></a></div>');
            $('#btn-add-twitter').attr("disabled", "disabled");
            update();
        }
    });
    $('#btn-add-youtube').click(function() {
        if ($('#btn-add-youtube').attr("disabled") == "disabled") {
        } else {
            $('#wrapper').append('<div class="icon-delete" id="youtube-delete"><img class="icon" id="youtube" src="youtube.png" alt="youtube"><a id="btn-delete-youtube" class="btn-floating red"><i class="material-icons">delete</i></a></div>');
            $('#btn-add-youtube').attr("disabled", "disabled");
            update();
        }
    });
    var isDraggingFacebook = false;
    $("#facebook")
    .mousedown(function() {
        isDraggingFacebook = false;
    })
    .mousemove(function() {
        isDraggingFacebook = true;
     })
    .mouseup(function() {
        var wasDraggingFacebook = isDraggingFacebook;
        isDraggingFacebook = false;
        if (!wasDraggingFacebook) {
            openInNewTab('https://www.facebook.com');
        }
    });
    var isDraggingGoogle= false;
    $("#google")
    .mousedown(function() {
        isDraggingGoogle = false;
    })
    .mousemove(function() {
        isDraggingGoogle = true;
     })
    .mouseup(function() {
        var wasDraggingGoogle = isDraggingGoogle;
        isDraggingGoogle = false;
        if (!wasDraggingGoogle) {
            openInNewTab('https://www.google.com');
        }
    });
    var isDraggingKit = false;
    $("#kit")
    .mousedown(function() {
        isDraggingKit = false;
    })
    .mousemove(function() {
        isDraggingKit = true;
     })
    .mouseup(function() {
        var wasDraggingKit = isDraggingKit;
        isDraggingKit = false;
        if (!wasDraggingKit) {
            openInNewTab('https://www.kit.edu');
        }
    });
    var isDraggingYoutube = false;
    $("#youtube")
    .mousedown(function() {
        isDraggingYoutube = false;
    })
    .mousemove(function() {
        isDraggingYoutube = true;
     })
    .mouseup(function() {
        var wasDraggingYoutube = isDraggingYoutube;
        isDraggingYoutube = false;
        if (!wasDraggingYoutube) {
            openInNewTab('https://www.youtube.com');
        }
    });
    var isDraggingTwitter = false;
    $("#twitter")
    .mousedown(function() {
        isDraggingTwitter = false;
    })
    .mousemove(function() {
        isDraggingTwitter = true;
     })
    .mouseup(function() {
        var wasDraggingTwitter = isDraggingTwitter;
        isDraggingTwitter = false;
        if (!wasDraggingTwitter) {
            openInNewTab('https://www.twitter.com');
        }
    });
    var isDraggingNetflix = false;
    $("#netflix")
    .mousedown(function() {
        isDraggingNetflix = false;
    })
    .mousemove(function() {
        isDraggingNetflix = true;
     })
    .mouseup(function() {
        var wasDraggingNetflix = isDraggingNetflix;
        isDraggingNetflix = false;
        if (!wasDraggingNetflix) {
            openInNewTab('https://www.netflix.com');
        }
    });

    /*
   $(".icon").draggable({
       containment: '#wrapper',
   });
   */
    $("#facebook-delete").draggable({
        containment: '#wrapper',
        stop: function(event, ui) { 
            var left = ui.offset.left;
            var top = ui.offset.top;
            top = top;
        
            console.log('left' + left);
            console.log('top' + top);

            left = (Math.round(left / 30.0) * 30.0);
            top = (Math.round(top / 30.0) * 30.0);

            console.log('left' + left);
            console.log('top' + top);
            $("#facebook-delete").offset({left:left,top:top});
            console.log($("#facebook-delete").position());
            }
    }).css({position: 'absolute'});
    $("#google-delete").draggable({
        containment: '#wrapper',
        stop: function(event, ui) { 
            var left = ui.offset.left;
            var top = ui.offset.top;
        
            console.log('left' + left);
            console.log('top' + top);

            left = (Math.round(left / 30.0) * 30.0);
            top = (Math.round(top / 30.0) * 30.0);

            console.log('left' + left);
            console.log('top' + top);
            $("#google-delete").offset({left:left,top:top});
            console.log($("#google-delete").position());
            }
    }).css({position: 'absolute'});
    $("#kit-delete").draggable({
        containment: '#wrapper',
        stop: function(event, ui) { 
            var left = ui.offset.left;
            var top = ui.offset.top;
        
            console.log('left' + left);
            console.log('top' + top);

            left = (Math.round(left / 30.0) * 30.0);
            top = (Math.round(top / 30.0) * 30.0);

            console.log('left' + left);
            console.log('top' + top);
            $("#kit-delete").offset({left:left,top:top});
            console.log($("#kit-delete").position());
            }
    }).css({position: 'absolute'});
    $("#netflix-delete").draggable({
        containment: '#wrapper',
        stop: function(event, ui) { 
            var left = ui.offset.left;
            var top = ui.offset.top;
        
            console.log('left' + left);
            console.log('top' + top);

            left = (Math.round(left / 30.0) * 30.0);
            top = (Math.round(top / 30.0) * 30.0);

            console.log('left' + left);
            console.log('top' + top);
            $("#netflix-delete").offset({left:left,top:top});
            console.log($("#netflix-delete").position());
            }
    }).css({position: 'absolute'});
    $("#twitter-delete").draggable({
        containment: '#wrapper',
        stop: function(event, ui) { 
            var left = ui.offset.left;
            var top = ui.offset.top;
        
            console.log('left' + left);
            console.log('top' + top);

            left = (Math.round(left / 30.0) * 30.0);
            top = (Math.round(top / 30.0) * 30.0);

            console.log('left' + left);
            console.log('top' + top);
            $("#twitter-delete").offset({left:left,top:top});
            console.log($("#twitter-delete").position());
            }
    }).css({position: 'absolute'});
    $("#youtube-delete").draggable({
        containment: '#wrapper',
        stop: function(event, ui) { 
            var left = ui.offset.left;
            var top = ui.offset.top;
        
            console.log('left' + left);
            console.log('top' + top);

            left = (Math.round(left / 30.0) * 30.0);
            top = (Math.round(top / 30.0) * 30.0);

            console.log('left' + left);
            console.log('top' + top);
            $("#youtube-delete").offset({left:left,top:top});
            console.log($("#youtube-delete").position());
            }
    }).css({position: 'absolute'});
    /*
    $(".icon").droppable({
        containment: '#wrapper'
    });
    */
});

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

function popupwindow(url, title) {
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    var w = (screen.width/2)-(w/2);
    var h = (screen.height/2)-(h/2);
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
} 