let button1=document.getElementById("button1");
let button2=document.getElementById("button2");
let button3=document.getElementById("button3");
let button4=document.getElementById("button4");
let button5=document.getElementById("button5");
let mytimer;
button1.addEventListener("click",b1Click);
button2.addEventListener("click",b2Click);
button3.addEventListener("click",b3Click);
button4.addEventListener("click",b4Click);
button5.addEventListener("click",b5Click);


function b1Click(){
    let inputTime=document.getElementById("inputTime").value;
    let hours=document.getElementById("hours").checked;
    let minutes=document.getElementById("minutes").checked;
    let seconds=document.getElementById("seconds").checked;
    let timee=document.getElementById("timee");
    if(inputTime==""||inputTime==null){
        document.getElementById("head").innerHTML="Please enter the Input Time";
        return;
    }
    if(!hours&&!minutes&&!seconds){
        document.getElementById("head").innerHTML="Please select one of the options";
        return;
    }
    document.getElementById("inp").style.display="none";
    document.getElementById("radio").style.display="none";
    document.getElementById("head").innerHTML="My Timer";   
    button2.style.display="block";    
    button3.style.display="block";
    button1.style.display="none";
    let minTime=59;
    let secTime=59;

    if(hours){
        timee.style.display="flex";
        inputTime--;
        document.getElementById("hrs").innerHTML=inputTime;
        document.getElementById("min").innerHTML=minTime;
        document.getElementById("sec").innerHTML=secTime;
        mytimer=setInterval(timerr,1000);
        function timerr(){
            if(secTime>0){
            secTime--;
            document.getElementById("sec").innerHTML=formatZero(secTime);
            
            }
            if(secTime==0 && minTime>0 ){
                minTime--;
                document.getElementById("min").innerHTML=formatZero(minTime);
                secTime=59;
                
            }
            if(minTime==0 && inputTime>0){
                inputTime--;
                document.getElementById("hrs").innerHTML=formatZero(inputTime);
                
            }
            if(inputTime==0 && secTime==0 && minTime==0){
                document.getElementById("sec").innerHTML=formatZero(secTime);
                document.getElementById("head").innerHTML="Timer Done!!";
                button5.style.display="block";
                button4.style.display="none";
                button3.style.display="none";
                button2.style.display="none";
                return;
                }
        return secTime;
        }
    }
    if(minutes){
        timee.style.display="flex";
        inputTime--;
        document.getElementById("hrs").innerHTML="00"
        document.getElementById("min").innerHTML=formatZero(inputTime);
        document.getElementById("sec").innerHTML=formatZero(secTime);
        mytimer=setInterval(timerr,1000);
        function timerr(){
            if(secTime<1 && inputTime>0){
                inputTime--;
                document.getElementById("min").innerHTML=formatZero(inputTime);
                secTime=59;
            }
            if(secTime>0){
            secTime--;
            document.getElementById("sec").innerHTML=formatZero(secTime);
            }
            if(inputTime==0&&secTime==0){
                document.getElementById("sec").innerHTML=formatZero(secTime);
                document.getElementById("head").innerHTML="Timer Done!!";
                button5.style.display="block";
                button4.style.display="none";
                button3.style.display="none";
                button2.style.display="none";
                return;
            }
            return secTime;
        }   
    }
    if(seconds){
        timee.style.display="flex";
        document.getElementById("hrs").innerHTML="00"
        document.getElementById("min").innerHTML="00";
        document.getElementById("sec").innerHTML=formatZero(inputTime);
        mytimer=setInterval(timerr,1000);
        function timerr(){
            if(inputTime>=1){
            inputTime--;
            document.getElementById("sec").innerHTML=formatZero(inputTime);
            }
            if(inputTime==0){
                document.getElementById("sec").innerHTML=formatZero(inputTime);
                document.getElementById("head").innerHTML="Timer Done!!";
                button5.style.display="block";
                button4.style.display="none";
                button3.style.display="none";
                button2.style.display="none";
                return;
            }
        return inputTime;
        }
    }
    function formatZero(time){
        time=time.toString();
        return time.length<2?"0"+time:time;
    }
}
function b2Click(){
    clearInterval(mytimer);
    button4.style.display="block";
    button2.style.display="none";
}
function b3Click(){
    clearInterval(mytimer);
    document.getElementById("hrs").innerHTML="00"
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    button5.style.display="block";
    button4.style.display="none";
    button3.style.display="none";
    button2.style.display="none";

}
function b4Click(){
    button4.style.display="none";
    button2.style.display="block";
    let sec=document.getElementById("sec").innerHTML;
    let min=document.getElementById("min").innerHTML;
    let hrs=document.getElementById("hrs").innerHTML;

    let secRem=parseInt(sec);
    let minRem=parseInt(min);
    let hrsRem=parseInt(hrs);
    mytimer=setInterval(timeee,1000);

    function timeee(){
        secRem--;
        document.getElementById("sec").innerHTML=secRem;
        if(secRem==1){
            if(minRem==0){
                if(hrsRem==0){
                    document.getElementById("head").innerHTML="Timer Done!!";
                }else{
                    hrsRem--;
                    document.getElementById("hrs").innerHTML=hrsRem;
                }
            }else{
                minRem--;
                document.getElementById("min").innerHTML=minRem;
            }
        }


    }
}
function b5Click(){
    clearInterval(mytimer);
    document.getElementById("head").innerHTML="Set Timer";
    document.getElementById("inp").style.display="flex";
    document.getElementById("radio").style.display="flex";
    document.getElementById("timee").style.display="none";
    button1.style.display="block";
    button2.style.display="none";
    button3.style.display="none";
    button4.style.display="none";
    button5.style.display="none";
    
    //timee.style.display="none"
}


