function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * years * rate/100

    var year = new Date().getFullYear() + parseInt(years)

    document.getElementById("result").innerText = 
    "If you deposit " + principal + ",\n".concat(
           "at an interest rate of " + rate + "%.\n",
           "You will receive an amount of " + interest + ",\n",
           "in the year " + year +".")
}
        
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%"
}

function checkPrincipal(){
    var principal = document.getElementById("principal")
    var principal_value = parseInt(principal.value)
    if (principal_value < 0) {
        alert("Enter a positive number")
        principal.value = ""
        principal.focus()
        return false
    }
    return true
}