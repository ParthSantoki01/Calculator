function gethistory(){
    return document.getElementById("historyvalue").innerText;
}
function printhistory(num){
    return document.getElementById("historyvalue").innerText=num;
}
function getans(){
    return document.getElementById("ans").innerText;
}
function printans(num){
    if(num=="")
    {
        document.getElementById("ans").innerText=num;
    }
    else{
        return document.getElementById("ans").innerText=getformattednumber(num);
    }
}
//for coma saparated number
function getformattednumber(num)
{
    if(num=="-")
    {
        return "";
    }
    var n=Number(num);
    var value=n.toLocaleString("en");
    return value;
}
function getoriginalformat(num){
    return Number(num.replace(/,/g,''));
}
var operator=document.getElementsByClassName("operator");
for (var i = 0; i< operator.length; i++) {
        operator[i].addEventListener('click',function(){
            if(this.id=="clear")
            {
                printhistory("");
                printans("0");
            }
            else if(this.id=="backspace")
            {
                var output=getoriginalformat(getans()).toString();
                if(output.length==1)
                {
                    printans("0");
                }
                else if(output!=NaN)
                {
                    output=output.substring(0,output.length-1);
                    printans(output);
                }
            }
            else 
            {
                var output=getans();
                var history=gethistory();
                    if(output==""&&history!="")
                    {
                        if(isNaN(history[history.length-1]))
                        {
                            history=history.substring(0,history.length-1); 
                        }
                    }
                    
                if(output!=""||history!="")
                {
                    output= output==""? output:getoriginalformat(output);
                    history=history+output;
                    if(this.id=="=")
                    {
                        var ans=eval(history);
                        printans(ans);
                        printhistory("");
                    }
                    else{
                        history=history+this.id;
                        printhistory(history);
                        printans("");
                    }
                }
            }
    });
}
var number=document.getElementsByClassName("number");
for (var i = 0; i< number.length; i++) {
        number[i].addEventListener('click',function(){
            var output=getoriginalformat(getans());
            if(output!=NaN)
            {
                if(output=="0")
                {
                    output="";
                }
            output=output+this.id;
            printans(output);
            }
    });
}