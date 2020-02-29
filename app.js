$( document ).ready(function() {
    
});

$(function() {
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

   $(".icon").draggable({
       containment: '#wrapper',
   });
   $("#facebook").draggable({
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
            $("#facebook").offset({left:left,top:top});
            console.log($("#facebook").position());
            }
    });
    $("#google").draggable({
        stop: function(event, ui) { 
            var left = ui.offset.left;
            var top = ui.offset.top;
        
            console.log('left' + left);
            console.log('top' + top);

            left = (Math.round(left / 30.0) * 30.0);
            top = (Math.round(top / 30.0) * 30.0);

            console.log('left' + left);
            console.log('top' + top);
            $("#google").offset({left:left,top:top});
            console.log($("#google").position());
            }
    });
    $("#kit").draggable({
        stop: function(event, ui) { 
            var left = ui.offset.left;
            var top = ui.offset.top;
        
            console.log('left' + left);
            console.log('top' + top);

            left = (Math.round(left / 30.0) * 30.0);
            top = (Math.round(top / 30.0) * 30.0);

            console.log('left' + left);
            console.log('top' + top);
            $("#kit").offset({left:left,top:top});
            console.log($("#kit").position());
            }
    });
    $("#netflix").draggable({
        stop: function(event, ui) { 
            var left = ui.offset.left;
            var top = ui.offset.top;
        
            console.log('left' + left);
            console.log('top' + top);

            left = (Math.round(left / 30.0) * 30.0);
            top = (Math.round(top / 30.0) * 30.0);

            console.log('left' + left);
            console.log('top' + top);
            $("#netflix").offset({left:left,top:top});
            console.log($("#netflix").position());
            }
    });
    $("#twitter").draggable({
        stop: function(event, ui) { 
            var left = ui.offset.left;
            var top = ui.offset.top;
        
            console.log('left' + left);
            console.log('top' + top);

            left = (Math.round(left / 30.0) * 30.0);
            top = (Math.round(top / 30.0) * 30.0);

            console.log('left' + left);
            console.log('top' + top);
            $("#twitter").offset({left:left,top:top});
            console.log($("#twitter").position());
            }
    });
    $("#youtube").draggable({
        stop: function(event, ui) { 
            var left = ui.offset.left;
            var top = ui.offset.top;
        
            console.log('left' + left);
            console.log('top' + top);

            left = (Math.round(left / 30.0) * 30.0);
            top = (Math.round(top / 30.0) * 30.0);

            console.log('left' + left);
            console.log('top' + top);
            $("#youtube").offset({left:left,top:top});
            console.log($("#youtube").position());
            }
    });
    $(".icon").droppable({
        containment: '#wrapper'
    });
});

$(function(){
    $('.fixed-action-btn').click( );
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