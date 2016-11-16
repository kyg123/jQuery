/**
 * Created by user on 2016-11-16.
 */

//var test;

function myFunc(){
    //var test;
    //현재 html 안에 있는 모든 element를 선택하여 글자의 색을 red로 변경

    //$(" * ").css("color","red"); //1. body안에있는 모든 element들이 선택됨

    //$("h1, input").css("color","red");//2. 태그선택자
    
    //$("#inchon").remove(); //3. id 선택자(#)

    //$(".myClass").css("background-color","yellow"); 4. 클래스 선택자

    //$("[type=button]").css("color","red"); //5. 속성 선택자

    //$("div > ul > li[id]").css("color","red"); 6. 구조 선택자

    //$("div li[id=inchon]").css("color","blue");

    //alert($("#inchon + li").text()); //형제

    
    ///////////////////////////////////////////////////////////////////////////////////////////연습문제

    alert($("#uId").val());//입력상자 안에 있는 값

    console.log($("ul").text()); //text는 태그안에 있는 텍스트
    //test = $("form > input").attr('id');

    console.log($("form > input").attr("id"));
    //attr("id", "kkk") => id의 값을 kkk로 바꿔라


    //console.log(test);
    console.log($("ol").text());


    console.log($("ol > li:first").text());
    console.log($("ol > li:nth-child(2)").text());
    console.log($("ol > li:last").text());
}