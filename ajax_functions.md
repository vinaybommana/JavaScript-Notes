# ajax functions

** common syntax
$(selector).action();


* hiding text
** single click

$(document).ready(function(){
    $("p").click(function() {
        $(this).hide();
    });
});


The following function hides the paragraph <p> when clicked.

** double click

$(document).ready(function(){
    $("p").dblclick(function() {
        $(this).hide();
    });
});
The following function hides the paragraph <p> when double clicked.

* mouseenter
* mouseleave
* mouseup
* mousedown

* hover --> combination of mouseenter and mouseleave
$(document).ready(function(){
    $("p").hover(function(){
        alert("Entering paragraph");
    }, function(){
        alert("Now leaving paragraph");
    });
});


* focus
* blur


* on
attaches one or more event handlers


$(document).ready(function() {
    $("p").on({
        mouseenter: function() {
            $(this).css("background-color", "lightgray");
        }
        mouseleave: function() {
            $(this).css();
        }
        click: function() {
            $(this).css();
        }
    });
});

also refer methods like select and trigger

https://www.w3schools.com/jquery/jquery_ref_events.asp
