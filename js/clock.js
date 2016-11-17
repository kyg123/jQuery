/**
 * Created by user on 2016-11-15.
 */

function startClock(){
    //alert("1111");

    //현재시간 구하기 "몇시 몇분 몇초"
    //div영역에 출력
    //html div영역을 javascript 객체로 들고온다.
    var div = document.getElementById("clockDiv");

    //div.innerHTML = "바뀜"; 객체로 변환시킨 것 = > document object(문서객체)

    //1초마다 반복적으로 현재 시간을 구하여 div에 출력

    //window.setInterval("반복할 함수[function()], 시간")

    window.setInterval(function(){
        //1. 현재시간 구하기
        //2. 현재시간을 div에 출력
        var today = new Date().toLocaleString();
        div.innerHTML = today;
    },1000);
}

