$(function () {
    $(".num").click(function () {
        $(".num").removeClass("on");
        $(this).addClass("on");
    });
    $("footer .li").click(function () {
        $("footer .li").removeClass("on");
        $(this).addClass("on");
        // if($("footer .li:nth-child(1)")){
        //     location.href='index.html'

        // }
    });
    $(".video_box").click(function () {
        location.href = 'detail.html'
    });
    $(".bt_like").click(function () {
        $(this).toggleClass("on");
    });
    $(".master .left").click(function () {
        $(this).children(".with").toggle();
    });
    $(".mid2 .a1").click(function () {
        $(this).next(".a2").toggle();
    });
    $(".bt_manual").click(function () {
        $(".manual").show();
        if ($(".manual").show()) {
            $(".manual button").click(function () {
                $(".manual").hide();
            })
        }
    });
    $(".bt_save").click(function () {
        $(".popup").show();
    });
    $(".bt_ck").click(function () {
        $(".popup").hide();
    });
    $(".bt_x").click(function () {
        $(".popup").hide();
    });
    $(".bg").click(function () {
        $(".popup").hide();
    });
    $(".introduce .mid .a2 .b1 .c2 .d1").click(function () {
        var aa = $(this).parent().parent().next(".b2");
        aa.slideDown();
        if (aa.slideDown()) {
            $(".introduce .mid .a2 .b2 .c2").click(function () {
                $(this).parent().slideUp();
            })
        }
    })
    $(".bt_pin").click(function () {
        $(this).toggleClass("on")
        var arrowImage = $(this).children("img");
        arrowImage.attr("src", function (index, attr) {
            if (attr.match('npin')) {
                return attr.replace("npin", "pin");
            } else {
                return attr.replace("pin", "npin");
            }
        });
    });
    $(".bt_member").click(function(){
        $(".member_pop").fadeIn();
        if($(".member_pop").fadeIn()){
            $(".bt_x").click(function(){
                $(".member_pop").fadeOut();
            });
        }
    });
});