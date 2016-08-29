
setTimeout(myFunction, 120000);

function myFunction(){
	window.location.reload()
	var a = document.getElementById("FormView1_ctl00_Label6");
	var status = "OUT";


	if(a.innerHTML != status){
	var newWindow = window.open("", "MsgWindow", "width=800px,height=800px");
    newWindow.document.write('<H1><span style="font-size:50px;color:red;">THE PERSON IS INSIDE NOW</span></H1>');
    status = a.innerHTML;
	}else{
	console.log("The Person is outside office");
	};
};


console.log("This page title is Modified for developement purposes");
console.log("---------------------------------------------------------");
console.log("Developed by");
console.log("CHAKRADHAR REDDY <www.chakrireddy.com>");
console.log("---------------------------------------------------------");