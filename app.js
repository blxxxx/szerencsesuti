$(function(){

    $('#luckynum').click(function () {
    $('.fortune').addClass('open');
    var tl = new TimelineMax({yoyo:true, repeat:0, repeatDelay:0});

    tl.to($('.fortune'),0.1,{rotation:-5, delay:1});
    tl.to($('.fortune'),0.1,{rotation:5});
    tl.to($('.fortune'),0.1,{rotation:-5});
    tl.to($('.fortune'),0.1,{rotation:5});
    tl.to($('.fortune'),0.1,{rotation:-5});
    tl.to($('.fortune'),0.1,{rotation:0});
    tl.addLabel("break", "+=0.3");
    tl.to($('.fortune-left'),0.5,{rotation:-45, x:-70, y:70},"break");
    tl.to($('.fortune-right'),0.5,{rotation:45, x:70, y:70},"break");

    tl.from($('.fortune-message span'),1,{x:'110%'},"break");

    });

});