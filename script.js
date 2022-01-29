function compute()
{
    p = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;

    final_value = p * (1 + rate) ** years

    cur_year = new Date().getFullYear()
    final_year = cur_year + years 

    document.getElementById("text").innerHTML = 
    "If you deposit" + p + "at an interest of " + rate + "%. You will receive an amount of " + final_value + ","+"in the year" + final_year + "."
    
}
        