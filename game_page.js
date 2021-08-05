player1name=localStorage.getItem("player1");
player2name=localStorage.getItem("player2");

player1score=0
player2score=0

document.getElementById("player1name").innerHTML=player1name+" : ";
document.getElementById("player2name").innerHTML=player2name+" : ";

document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;

document.getElementById("playerquestion").innerHTML="Question Turn : "+player1name;
document.getElementById("playeranswer").innerHTML="Answer Turn : "+player2name;

function send()
{
    number1=document.getElementById("1").value;
    number2=document.getElementById("2").value;
    


    question_word="<h4 id='word_display'>"+number1+"X"+number2+"</h4>";
    input_box="<br>answer: <input type='text'id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info'onclick=check()>check</button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

questionturn="player1";
answerturn="player2";

function check()
{
    getanswer=document.getElementById("input_check_box").value;
    answer=number1*number2;
    if(answer==getanswer)
    {
        if(answerturn=="player1")
        {
            player1score=player1score+1;
            document.getElementById("player1score").innerHTML=player1score;
        }
         else
         {
            player2score=player2score+1;
            document.getElementById("player2score").innerHTML=player2score;
         }
    }

    if(questionturn=="player1")
    {
        questionturn="player2";
        document.getElementById("playerquestion").innerHTML="question turn: "+player2name;
    }
    else
    {
        questionturn="player1";
        document.getElementById("playerquestion").innerHTML="question turn: "+player1name; 
    }

    if(answerturn=="player1")
    {
        answerturn="player2";
        document.getElementById("playeranswer").innerHTML="answer turn: "+player2name;
    }
    else
    {
        answerturn="player1";
        document.getElementById("playeranswer").innerHTML="answer turn: "+player1name; 
    }
    
    document.getElementById("output").innerHTML="";
}
