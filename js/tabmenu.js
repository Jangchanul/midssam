$(function () {
    // 컨텐츠 내용을 숨겨주세요!
    var tabBtn = $("#tab-btn > ul > li"); //각각의 버튼을 변수에 저장
    var tabCont = $("#tab-cont > div"); //각각의 컨텐츠를 변수에 저장

    tabCont.hide().eq(0).show();

    tabBtn.click(function () {
        var target = $(this); //버튼의 타켓(순서)을 변수에 저장
        var index = target.index(); //버튼의 순서를 변수에 저장
        // alert(index);
        tabBtn.removeClass("active"); //버튼의 클래스를 삭제
        target.addClass("active"); //타켓의 클래스를 추가
        tabCont.css("display", "none");
        tabCont.eq(index).css("display", "block");
    });
})