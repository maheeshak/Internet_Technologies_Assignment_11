$("#customer").css('display','none');
$("#item").css('display','none');
$("#order").css('display','none');
$('.order_details').css('display', 'none');


/*Buttons*/
$('#customer_btn').on("click", () => {
    event.preventDefault();
    $("#customer").css('display','block');
    $("#item").css('display','none');
    $("#order").css('display','none');
    $("#home_main").css('display','none');

})
$('#item_btn').on("click", () => {
    event.preventDefault();
    $("#customer").css('display','none');
    $("#item").css('display','block');
    $("#order").css('display','none');
    $("#home_main").css('display','none');


})
$('#order_btn').on("click", () => {
    event.preventDefault();
    $("#customer").css('display','none');
    $("#item").css('display','none');
    $("#order").css('display','block');
    $("#home_main").css('display','none');

})


/*Nav Bar*/
$('.navbar-brand').on("click", () => {
    event.preventDefault();
    $("#customer").css('display','none');
    $("#item").css('display','none');
    $("#order").css('display','none');
    $("#home_main").css('display','block');

})
$('#nav_home').on("click", () => {
    event.preventDefault();
    $("#customer").css('display','none');
    $("#item").css('display','none');
    $("#order").css('display','none');
    $("#home_main").css('display','block');

})

$('#nav_cust').on("click", () => {
    event.preventDefault();
    $("#customer").css('display','block');
    $("#item").css('display','none');
    $("#order").css('display','none');
    $("#home_main").css('display','none');

})

$('#nav_item').on("click", () => {
    event.preventDefault();
    $("#customer").css('display','none');
    $("#item").css('display','block');
    $("#order").css('display','none');
    $("#home_main").css('display','none');

})




$('#nav_place').on('click', () => {
    event.preventDefault();
    $("#customer").css('display','none');
    $("#item").css('display','none');
    $("#order").css('display','block');
    $("#home_main").css('display','none');
});
$('#nav_recent').on('click', () => {
    event.preventDefault();
    $("#customer").css('display','none');
    $("#item").css('display','none');
    $("#order").css('display','none');
    $("#home_main").css('display','none');
    $(".order_details").css('display','block');

});

let clicked = false;

$('.dropdown-toggle').on('click', () => {
    if (!clicked) {
        $('.dropdown-menu').addClass('show');
        clicked = true;
    } else {
        $('.dropdown-menu').removeClass('show');
        clicked = false;
    }
});
