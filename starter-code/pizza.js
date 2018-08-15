// Write your Pizza Builder JavaScript in this file.
$(".crust").removeClass("crust-gluten-free");
$(".sauce ").removeClass("sauce-white")
$(".btn-crust ").removeClass("active")
$(".btn-sauce ").removeClass("active")
$("li:contains('gluten-free')").hide()
$("li:contains('white sauce')").hide()


$(".btn-pepperonni").on("click", function(){
    $( ".pep" ).toggle();
    $(this).toggleClass("active");
    $("li:contains('pepperonni')").toggle()
     
})

$(".btn-mushrooms").on("click", function(){
    $( ".mushroom" ).toggle();
    $(this).toggleClass("active");
    $("li:contains('mushrooms')").toggle()

})

$(".btn-green-peppers").on("click", function(){
    $( ".green-pepper" ).toggle();
    $(this).toggleClass("active");
    $("li:contains('green peppers')").toggle()

})

$(".btn-crust ").on("click" , function(){
    $(".crust").toggleClass("crust-gluten-free")
    $(this).toggleClass("active");
    $("li:contains('gluten-free')").toggle()
})

$(".btn-sauce  ").on("click" , function(){
    $(".sauce ").toggleClass("sauce-white")
    $(this).toggleClass("active");
    $("li:contains('white sauce')").toggle()
})