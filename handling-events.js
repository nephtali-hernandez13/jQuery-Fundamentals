'use strict';

$(document).ready(() => {
    
    // Click Event
    $("#btn1").click( () => {
        $('.classXD').html(Math.random()); //Set text with random numbers in divs
    });

    // Onchange event
    $("#fruits").change( function() {
        //console.log($(this).val());
        alert($(this).val());
    });

    // Mouse events
    $("#div0").mouseenter( function(){
        $(this).html("Entraste al DIV!!").css('background','yellow')
    }).mouseup( function(e) {
        $(this).html("X: " + e.pageX + " Y: " + e.pageY).css('background','red');        
    }).mouseleave( function() {
        $(this).html("Saliste del DIV!!").css('background','red');
    });
    
    // Using ON in mouse events
    $("#div1").on('mouseenter mouseleave mouseup', function(){
        $(this).toggleClass("toggleClass");
    });

    $("#div2").on('click', function() {
        alert($(this).html());
    });

    $("#div2").hover( function() {
        $(this).addClass("bg-warning").css("font-size","3em");
    })
});