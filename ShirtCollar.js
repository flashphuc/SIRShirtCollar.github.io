// jQuery(document).ready(function ($) {

//     $(document).ready(function () {

//         var parent;
//         var img_prefix = 'tie';
//         var img_num_cur = 4;
//         var $rotateTarget = $('.rotate-target');

//         $rotateTarget.mouseover(function () {
//             var $figWrap = $(this).closest('figure');
//             var img_num = $(this).attr('rel');
//             if (img_num_cur != img_num) {
//                 img_num_cur = img_num;
//                 $figWrap.css('background-image', 'url(' + eval("pic" + img_num + img_prefix + ".src") + ')');
//             }
//         });

//         $thumbsItem = $('.thumbs li');
//         $thumbsItem.click(function (e) {
//             e.preventDefault();
//             img_prefix = $(this).data('target');
//             $('.collar_rotate_cont').hide();
//             $('#thumbs_' + img_prefix).removeClass('hide').fadeIn(150);
//             $thumbsItem.removeClass('active');
//             $(this).addClass('active');
//             $('.collar_change_thumbs').removeClass('collar_border_yes').addClass('collar_border_no');
//             $('#click_' + img_prefix).removeClass('collar_border_no').addClass('active');
//         });

//     });

// });

document.getElementById("change4").addEventListener("mouseover", function () {
    document.getElementById("picture__high").style.backgroundImage = "url('img/1.png')";
}, document.getElementById("picture__high").style.backgroundImage = "url('img/4.png')");
document.getElementById("change4").addEventListener("mouseout", function () {
    document.getElementById("picture__high").style.backgroundImage = "url('img/1.png')";
}, document.getElementById("picture__high").style.backgroundImage = "url('img/4.png')");

// document.getElementById("change2").addEventListener("mouseover", function () {
//     document.getElementById("picture__high").style.backgroundImage = "url('img/2.png')";
// }, document.getElementById("picture__high").style.backgroundImage = "url('img/4.png')");
// document.getElementById("change2").addEventListener("mouseout", function () {
//     document.getElementById("picture__high").style.backgroundImage = "url('img/2.png')";
// }, document.getElementById("picture__high").style.backgroundImage = "url('img/4.png')");


// document.getElementById("change3").addEventListener("mouseover", function () {
//     document.getElementById("picture__high").style.backgroundImage = "url('img/3.png')";
// }, document.getElementById("picture__high").style.backgroundImage = "url('img/4.png')");
// document.getElementById("change3").addEventListener("mouseout", function () {
//     document.getElementById("picture__high").style.backgroundImage = "url('img/3.png')";
// }, document.getElementById("picture__high").style.backgroundImage = "url('img/4.png')");


// document.getElementById("change1").addEventListener("mouseover", function () {
//     document.getElementById("picture__high").style.backgroundImage = "url('img/4.png')";
// }, document.getElementById("picture__high").style.backgroundImage = "url('img/4.png')");
// document.getElementById("change1").addEventListener("mouseout", function () {
//     document.getElementById("picture__high").style.backgroundImage = "url('img/4.png')";
// }, document.getElementById("picture__high").style.backgroundImage = "url('img/4.png')");

// document.getElementById("change5").addEventListener("mouseover", function () {
//     document.getElementById("picture__high").style.backgroundImage = "url('img/5.png')";
// }, document.getElementById("picture__high").style.backgroundImage = "url('img/4.png')");
// document.getElementById("change5").addEventListener("mouseout", function () {
//     document.getElementById("picture__high").style.backgroundImage = "url('img/5.png')";
// }, document.getElementById("picture__high").style.backgroundImage = "url('img/4.png')");


// document.getElementById("change6").addEventListener("mouseover", function () {
//     document.getElementById("picture__high").style.backgroundImage = "url('img/6.png')";
// }, document.getElementById("picture__high").style.backgroundImage = "url('img/4.png')");
// document.getElementById("change6").addEventListener("mouseout", function () {
//     document.getElementById("picture__high").style.backgroundImage = "url('img/6.png')";
// }, document.getElementById("picture__high").style.backgroundImage = "url('img/4.png')");


// document.getElementById("change7").addEventListener("mouseover", function () {
//     document.getElementById("picture__high").style.backgroundImage = "url('img/7.png')";
// }, document.getElementById("picture__high").style.backgroundImage = "url('img/4.png')");
// document.getElementById("change7").addEventListener("mouseout", function () {
//     document.getElementById("picture__high").style.backgroundImage = "url('img/7.png')";
// }, document.getElementById("picture__high").style.backgroundImage = "url('img/4.png')");



/*
*************  SHIRT COLLAR WHITE  *****************
*/



// document.getElementById("change4__white").addEventListener("mouseover", function () {
//     document.getElementById("picture__high__white").style.backgroundImage = "url(img/white/1.png)";
// }, document.getElementById("picture__high__white").style.backgroundImage = "url(img/white/4.png)");
// document.getElementById("change4__white").addEventListener("mouseout", function () {
//     document.getElementById("picture__high__white").style.backgroundImage = "url(img/white/1.png)";
// }, document.getElementById("picture__high__white").style.backgroundImage = "url(img/white/4.png)");

// document.getElementById("change2__white").addEventListener("mouseover", function () {
//     document.getElementById("picture__high__white").style.backgroundImage = "url(img/white/2.png)";
// }, document.getElementById("picture__high__white").style.backgroundImage = "url(img/white/4.png)");
// document.getElementById("change2__white").addEventListener("mouseout", function () {
//     document.getElementById("picture__high__white").style.backgroundImage = "url(img/white/2.png)";
// }, document.getElementById("picture__high__white").style.backgroundImage = "url(img/white/4.png)");


// document.getElementById("change3__white").addEventListener("mouseover", function () {
//     document.getElementById("picture__high__white").style.backgroundImage = "url(img/white/3.png)";
// }, document.getElementById("picture__high__white").style.backgroundImage = "url(img/white/4.png)");
// document.getElementById("change3__white").addEventListener("mouseout", function () {
//     document.getElementById("picture__high__white").style.backgroundImage = "url(img/white/3.png)";
// }, document.getElementById("picture__high__white").style.backgroundImage = "url(img/white/4.png)");


// document.getElementById("change1__white").addEventListener("mouseover", function () {
//     document.getElementById("picture__high__white").style.backgroundImage = "url(img/white/4.png)";
// }, document.getElementById("picture__high__white").style.backgroundImage = "url(img/white/4.png)");
// document.getElementById("change1__white").addEventListener("mouseout", function () {
//     document.getElementById("picture__high__white").style.backgroundImage = "url(img/white/4.png)";
// }, document.getElementById("picture__high__white").style.backgroundImage = "url(img/white/4.png)");

// document.getElementById("change5__white").addEventListener("mouseover", function () {
//     document.getElementById("picture__high__white").style.backgroundImage = "url(img/white/5.png)";
// }, document.getElementById("picture__high__white").style.backgroundImage = "url(img/white/4.png)");
// document.getElementById("change5__white").addEventListener("mouseout", function () {
//     document.getElementById("picture__high").style.backgroundImage = "url(img/white/5.png)";
// }, document.getElementById("picture__high__white").style.backgroundImage = "url(img/white/4.png)");


// document.getElementById("change6__white").addEventListener("mouseover", function () {
//     document.getElementById("picture__high__white").style.backgroundImage = "url(img/white/6.png)";
// }, document.getElementById("picture__high__white").style.backgroundImage = "url(img/white/4.png)");
// document.getElementById("change6__white").addEventListener("mouseout", function () {
//     document.getElementById("picture__high__white").style.backgroundImage = "url(img/white/6.png)";
// }, document.getElementById("picture__high__white").style.backgroundImage = "url(img/white/4.png)");

// document.getElementById("change7__white").addEventListener("mouseover", function () {
//     document.getElementById("picture__high__white").style.backgroundImage = "url(img/white/7.png)";
// }, document.getElementById("picture__high__white").style.backgroundImage = "url(img/white/4.png)");
// document.getElementById("change7__white").addEventListener("mouseout", function () {
//     document.getElementById("picture__high__white").style.backgroundImage = "url(img/white/7.png)";
// }, document.getElementById("picture__high__white").style.backgroundImage = "url(img/white/4.png)");



/*
*************  SHIRT COLLAR WHITE  *****************
*/



// document.getElementById("change4__whitecollar").addEventListener("mouseover", function () {
//     document.getElementById("picture__high__whitecollar").style.backgroundImage = "url(img/whiteneck/1.png)";
// }, document.getElementById("picture__high__whitecollar").style.backgroundImage = "url(img/whiteneck/4.png)");
// document.getElementById("change4__whitecollar").addEventListener("mouseout", function () {
//     document.getElementById("picture__high__whitecollar").style.backgroundImage = "url(img/whiteneck/1.png)";
// }, document.getElementById("picture__high__whitecollar").style.backgroundImage = "url(img/whiteneck/4.png)");

// document.getElementById("change2__whitecollar").addEventListener("mouseover", function () {
//     document.getElementById("picture__high__whitecollar").style.backgroundImage = "url(img/whiteneck/2.png)";
// }, document.getElementById("picture__high__whitecollar").style.backgroundImage = "url(img/whiteneck/4.png)");
// document.getElementById("change2__whitecollar").addEventListener("mouseout", function () {
//     document.getElementById("picture__high__whitecollar").style.backgroundImage = "url(img/whiteneck/2.png)";
// }, document.getElementById("picture__high__whitecollar").style.backgroundImage = "url(img/whiteneck/4.png)");


// document.getElementById("change3__whitecollar").addEventListener("mouseover", function () {
//     document.getElementById("picture__high__whitecollar").style.backgroundImage = "url(img/whiteneck/3.png)";
// }, document.getElementById("picture__high__whitecollar").style.backgroundImage = "url(img/whiteneck/4.png)");
// document.getElementById("change3__whitecollar").addEventListener("mouseout", function () {
//     document.getElementById("picture__high__whitecollar").style.backgroundImage = "url(img/whiteneck/3.png)";
// }, document.getElementById("picture__high__whitecollar").style.backgroundImage = "url(img/whiteneck/4.png)");


// document.getElementById("change1__whitecollar").addEventListener("mouseover", function () {
//     document.getElementById("picture__high__whitecollar").style.backgroundImage = "url(img/whiteneck/4.png)";
// }, document.getElementById("picture__high__whitecollar").style.backgroundImage = "url(img/whiteneck/4.png)");
// document.getElementById("change1__whitecollar").addEventListener("mouseout", function () {
//     document.getElementById("picture__high__whitecollar").style.backgroundImage = "url(img/whiteneck/4.png)";
// }, document.getElementById("picture__high__whitecollar").style.backgroundImage = "url(img/whiteneck/4.png)");

// document.getElementById("change5__whitecollar").addEventListener("mouseover", function () {
//     document.getElementById("picture__high__whitecollar").style.backgroundImage = "url(img/whiteneck/5.png)";
// }, document.getElementById("picture__high__whitecollar").style.backgroundImage = "url(img/whiteneck/4.png)");
// document.getElementById("change5__whitecollar").addEventListener("mouseout", function () {
//     document.getElementById("picture__high").style.backgroundImage = "url(img/whiteneck/5.png)";
// }, document.getElementById("picture__high__whitecollar").style.backgroundImage = "url(img/whiteneck/4.png)");


// document.getElementById("change6__whitecollar").addEventListener("mouseover", function () {
//     document.getElementById("picture__high__whitecollar").style.backgroundImage = "url(img/whiteneck/6.png)";
// }, document.getElementById("picture__high__whitecollar").style.backgroundImage = "url(img/whiteneck/4.png)");
// document.getElementById("change6__whitecollar").addEventListener("mouseout", function () {
//     document.getElementById("picture__high__whitecollar").style.backgroundImage = "url(img/whiteneck/6.png)";
// }, document.getElementById("picture__high__whitecollar").style.backgroundImage = "url(img/whiteneck/4.png)");


// document.getElementById("change7__whitecollar").addEventListener("mouseover", function () {
//     document.getElementById("picture__high__whitecollar").style.backgroundImage = "url(img/whiteneck/7.png)";
// }, document.getElementById("picture__high__whitecollar").style.backgroundImage = "url(img/whiteneck/4.png)");
// document.getElementById("change7__whitecollar").addEventListener("mouseout", function () {
//     document.getElementById("picture__high__whitecollar").style.backgroundImage = "url(img/whiteneck/7.png)";
// }, document.getElementById("picture__high__whitecollar").style.backgroundImage = "url(img/whiteneck/4.png)");