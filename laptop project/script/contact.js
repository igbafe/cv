function show()
{
	var fname = document.getElementById("fname").value; 
	var email = document.getElementById("email").value; 
    var address = document.getElementById("add").value;
    var phone = document.getElementById("phonenumber").value;
    var section =document.getElementById("section").value;
    var sub =document.getElementById("sub").value;
	var msg =document.getElementById("msg").value;
	
	

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
    }
}