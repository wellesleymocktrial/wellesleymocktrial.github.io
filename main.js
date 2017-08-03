/* Emily Wang - contact: ewang10(at)wellesley */
/* global $ */
$(".welcome-container").on('click',
    '#welcome-btn',
    function (event) {
        console.log("click handler for welcome button");
        $(".welcome-container").fadeOut(500);;
        
    });

(function(){ 
    var cw = $('.bio-container').width();
    $('.bio-container').css({'height':cw+'px'}); 
})();
