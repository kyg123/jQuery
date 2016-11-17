function myFunc(){
    //$("div").remove();
    //$("div").empty();

    //만들기
    //<h1>새로운</h1>을 추가하기

    //var h1 = $("<h1></h1>").text("새로운");//<h1></h1>생성


    //원하는 위치에 붙이는 방법 네가지

    //$("div").append(h1);
    //1. 자식으로 맨 마지막에 붙이기 append

    //$("div").prepend(h1);
    //2. 자식으로 맨 첫번째로 붙이기 prepend


    //$("div > h2:nth-child(2)").before(h1);
    //3. 형제로 앞에 붙이기
    
    //$("div > h1:first").after(h1);
    //4. 형제로 뒤에 붙이기 after


    //<img src="img/돼지.jpg">

    
    //<img> 생성
    var img = $("<img />").attr("src","img/돼지.jpg").attr("width","50px");
    //var img = $("<img />").attr("src","img/돼지.jpg");
    $("div > h1:first").after(img);



}
