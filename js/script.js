function inform(){
    alert("나는 alert 입니다.");
}

function grade(){
    // 합계 : 글씨 크기를 30px 로 바꾸어라.
    // 1) 합계 를 가지고 있는 태그 를 찾아서 id 속성 (total) 부여
    // 2) fontSize CSS 속성을 '30px' 로 변경

    // document.getElementById('total').style.fontSize = '30px';
    // $('#total').css({
    //     fontSize:30 
    // });
    // $('#total'),css("fontSize",30);
    $("#total").css("fontSize", "30px");

    var kor1 = parseInt(document.getElementById("kor1").innerHTML);
    var kor2 = parseInt(document.getElementById("kor2").innerHTML);
    var first = document.getElementById("first_g");
    first.innerHTML=kor1+kor2;
    // first.style.color="red";
    $("#first_g").css("color" , "red")

    var eng1 = parseInt(document.getElementById("eng1").innerHTML);
    var eng2 = parseInt(document.getElementById("eng2").innerHTML);
    var second=document.getElementById("second_g");
    second.innerHTML=eng1+eng2;
    second.style.color="red";

    var math1 = parseInt(document.getElementById("math1").innerHTML);
    var math2 = parseInt(document.getElementById("math2").innerHTML);
    var third = document.getElementById("third_g");
    third.innerHTML=math1+math2;
    third.style.color="red";
}