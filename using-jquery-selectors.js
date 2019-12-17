$(document).ready(() => {
    /*
    //Select by Tag Name
    var imgs = $('img');
    alert(imgs.length);
    

    //Change background in div and ul elements
    var elements = $('div, ul');
    var colors = ['red','yellow','blue','purple','green'];

    elements.each(function() {
        $(this).css('background', colors[ Math.floor(Math.random() * 10) ]);
    });
    */

    /*
    //Select by ID
    var lista = $("#lista").html()
    var elemento1 = $("#e1").html();    
    */

    /*
    //Select by ClassName
    var classXD = $(".classXD");
    classXD.each( function() {
        $(this).css('font-size', '19px');
    } );        
    $(".classXD2").css('border', '1px solid');
    */

    /*
    //Select by Attritube
    var elemento1 = $("li[title=Elemento1]");
    elemento1
        .css("color",'red')
        .css("font-size",'3em');
    alert(elemento1.length);
    */

    /*
    //Select input
    var input = $(':input');
    console.log(input.val());
    */


    var elefante = $('div:contains("elefante")').html();
    $('div[title*="Title"]').html("JAJAJAJ");
    console.log(elefante);

});