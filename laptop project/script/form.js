function show()
{
	var title = document.getElementById("title").value; 
	var sname = document.getElementById("sname").value; 
	var oname = document.getElementById("oname").value;
	var email = document.getElementById("email").value; 
    var address = document.getElementById("add").value;
    var phone = document.getElementById("phonenumber").value;
    var amount =document.getElementById("amount").value;
    var laptop =document.getElementById("laps").value;

}
function changeColor(val)
{ 
	 if((val.value=="")||(val.value==null))
	{
		val.style.background="#007bff";
	}
	else
	{
		val.style.background="#FFFFFF";
		window.open("", "","width=600")
    }
}

// The select element tag
const ListOfLaptops = document.querySelector("#laptops");

ListOfLaptops.addEventListener ("change", function() {
    let selectedOption = this.value;
    const amount = document.getElementById("amount") ;

    if(selectedOption === "Toshiba Tecra A50-E") {
        amount.value = "N" + 100000 + " " + "naira"
    } else if (selectedOption === "Samsung Galaxy Book2") {
        amount.value = "N" + 150000 + " " + "naira"
    } else if (selectedOption === "Acer Travelmate P2") {
        amount.value = "N" + 400000 + " " + "naira"
    } else if (selectedOption === "DELL Inspiron 13") {
        amount.value = "N" + 170000 + " " + "naira"
    } else if (selectedOption === "HP Pavilion 15") {
        amount.value = "N" + 200000 + " " + "naira"
    } else if (selectedOption === "Microsoft SURFACE") {
        amount.value = "N" + 700000 + " " + "naira"
    } else if (selectedOption === "Apple MacBook Pro") {
        amount.value = "N" + 300000 + " " + "naira"
    } else if (selectedOption === "Lenovo Ideapad") {
        amount.value = "N" + 120000 + " " + "naira"
    } else if (selectedOption === "Dell Alienware 15") {
        amount.value = "N" + 550000 + " " + "naira"
    } else if (selectedOption === "DELL Inspiron 3510") {
        amount.value = "N" + 340000 + " " + "naira"
    } else if (selectedOption === "Lenovo Ideapad 3") {
        amount.value = "N" + 272000 + " " + "naira"
    } else if (selectedOption === "HP Flagship 15inch HD") {
        amount.value = "N" + 215000 + " " + "naira"
    } else if (selectedOption === "itel 14") {
        amount.value = "N" + 179000 + " " + "naira"
    } else if (selectedOption === "DELL Inspiron 15") {
        amount.value = "N" + 380000 + " " + "naira"
    } else if (selectedOption === "HP Envy x360") {
        amount.value = "N" + 630000 + " " + "naira"
    } 
    
    console.log(amount);
   
});