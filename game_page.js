player1name=localStorage.getItem("player_1")
player2name=localStorage.getItem("player_2")
document.getElementById("player1_name").innerHTML=player1name
document.getElementById("player2_name").innerHTML=player2name
var score1=0
var score2=0
document.getElementById("player1_score").innerHTML=score1
document.getElementById("player2_score").innerHTML=score2
document.getElementById("question").innerHTML="question turn:"+player1name
document.getElementById("answer").innerHTML="answer turn:"+player2name



function sent(){

    n1=document.getElementById("ques").value
   num1=number(n1)
     
    n2=document.getElementById("num2").value
    num2=number(n1)
    answer=num1+num2


   col1="<h3 id='display'>Q. " +num1+"+"+num2+ "</h3>"
   col2='<br><br> answer <input id="ans" type="text">'
   col3='<br><br> <button onclick="check()" class="btn btn-info" >check</button>'
   join=col1+col2+col3
   document.getElementById("charAt").innerHTML=join
   document.getElementById("ques").value=""
}
var question_turn="p1"
var answer_turn="p2"
function check(){
    value=document.getElementById("ans").value
    answer=value.number()
    if(answer==qw){ 
        if(question_turn=="p1"){
            score1=score1+1
            document.getElementById("player1_score").innerHTML=score1 
        }else{
            score2=score2+1
            document.getElementById("player2_score").innerHTML=score2

        }  
    }
    if(question_turn=="p1"){
        question_turn="p2"
        document.getElementById("question").innerHTML="question turn:"+player2name
    }
    else{
        question_turn="p1"
        document.getElementById("question").innerHTML="question turn:"+player1name

    }
    if(answer_turn=="p2"){
        answer_turn="p1"
        document.getElementById("answer").innerHTML="answer turn:"+player1name

    }
    else{
        answer_turn="p2"
        document.getElementById("answer").innerHTML="answer turn:"+player2name
    }
    document.getElementById("output").innerHTML=""

}

