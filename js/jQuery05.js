/**
 * Created by user on 2016-11-16.
 */

//var test;

function myFunc(){
    //idx = 인덱스 번호, item = 현재 선택된 문서객체, $(item)=>jQuery의 문서객체로 변화
    /*$("ul > li").each(function(idx,item){
        console.log($(item).text() + " 입니다.")
    });*/

    //$("ul > li").addClass("myStyle")



}


function inStyle2(){
    //현재 선택된 li에 대하여 스타일을 적용한다.
    console.log("in");
    $(this).addClass("inStyle");
    $(this).removeClass("outStyle");
}

function outStyle2(){
    console.log("out");
    $(this).addClass("outStyle");
    $(this).removeClass("inStyle");
}
