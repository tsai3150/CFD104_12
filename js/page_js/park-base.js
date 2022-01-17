$(function () {
    $('.icon').mousemove(function(e){
        // 偵測螢幕上的 X座標和 Y座標
        //$('#theDiv').show().text(`X: ${e.pageX} | Y: ${e.pageY}`)

        let theText = $(this).attr('data-text')
        $('#theDiv').show().text(theText).css({
            left: e.pageX + 10,
            top: e.pageY + 10 ,
        });
    }).mouseout(function(){
        $('#theDiv').hide();
    });
});		