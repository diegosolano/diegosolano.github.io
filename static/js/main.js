$(document).ready(function () {

    var fade_time = 100;

    // $('#content a').hover(
    //     function(){
    //         // fadeTo(time,opacity)
    //         $(this).fadeTo(fade_time,0.7);
    //     },function(){
    //         $(this).fadeTo(fade_time,1);
    //     }
    // );

    $('#resume').hover(
        function(){
            $(this).fadeTo(fade_time,0.9);
        },function(){
            $(this).fadeTo(fade_time,1);
        }
    );

});
