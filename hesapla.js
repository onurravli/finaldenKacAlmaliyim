/* Onur RAVLI - 2021 */
function kontrol()
{

var vize1 = document.forms["vize"]["vize1"].value;
var vize2 = document.forms["vize"]["vize2"].value;
if(vize1 == "100"){alert("OOO TEBR�KLER :D");}
if(vize1 != "")
{
text = text + "<br><br><br>";
				if(isNaN(vize1) || isNaN(vize2)) 
				{alert("Say� giriniz.");}
				else if(typeof +vize1 == "number" && typeof +vize2 == "number")
				{			

				if(vize2 == "")
				{
				var mfn;
				var text="";
				for(mfn = 0;mfn<=100;mfn++)
				{
				text = text + "Finalden " + mfn + " al�rsan, ortalamalan " + (+mfn*6/10 + (+vize1)*4/10) +" olur." + "<br>";
				}
				document.getElementById("final").innerHTML = text;
				}
				else
				{
				var vizeOrt = (+vize1 + +vize2) / 2;
				var mfn;
				var text="";
				for(mfn = 0;mfn<=100;mfn++)
				{
				text = text + "Finalden " + mfn + " al�rsan, ortalamalan " + (+mfn*6/10 + (+vizeOrt)*4/10) +" olur." + "<br>";
				}
				document.getElementById("final").innerHTML = text;
				}
				}
				else{alert("Say� giriniz");}
}
else
{
alert("1. vize bo� b�rak�lamaz.");
}
}