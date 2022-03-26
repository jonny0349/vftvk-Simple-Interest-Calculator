function compute()
{
    var principal = document.getElementById("principal").value;      
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);      
    document.getElementById("result").innerHTML="If you deposit <mark> " +principal+"</mark>,\<br\> at interest rate of <mark>" +rate+ "</mark> %\<br\>You will receive an amount of <mark>" +interest+ "</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"

     //Validation of a input with amount of money (no negative numbers) 
     if(principal <= 0){
        alert("Enter a positive number");
        principal.focus();
        return false;
    }
    //If everything is good, the system returns true
    return true; 
}
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}  