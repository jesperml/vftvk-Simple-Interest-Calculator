function compute() /* function to compute and write the accrued interest */
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * years * rate/100

    var year = new Date().getFullYear() + parseInt(years)

    document.getElementById("result").innerHTML = 
    "If you deposit <mark>"+principal+"</mark> <br>".concat(
           "at an interest rate of <mark>" + rate + "%</mark>.<br>",
           "You will receive an amount of <mark>" + interest + "</mark>,<br>",
           "in the year <mark>" + year +"</mark>. <br>")
}
        
function updateRate(){ /* function to update rate */
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%"
}

function checkPrincipal(){ /* function to check if value entered at principal is posive. Raises alert if not. */
    var principal = document.getElementById("principal")
    var principal_value = parseInt(principal.value)
    if (principal_value <= 0) {
        alert("Enter a positive number")
        principal.value = ""
        principal.focus()
        return false
    }
    return true
}