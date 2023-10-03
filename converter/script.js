function convertcelsius(){
	const celsius = parseFloat(document.getElementById("input1").value);
	const fahren = (celsius * 9/5) + 32;
	const reslult = document.getElementById("result");
  if(isNaN(fahren)){
    reslult.innerHTML = "Enter Celsius Before Convert"
  }else{
    reslult.innerHTML = fahren.toFixed(2)+"° Fahrenheat";
  }	
}
function convertfahrenheat(){
	const fahrenheat = parseFloat(document.getElementById("input1").value);
	const celsius = (fahrenheat-32)*5/9 ;
	const reslult = document.getElementById("result");
  if(isNaN(celsius)){
    reslult.innerHTML = "Enter Fahrenheat Before Convert"
  }else{
    reslult.innerHTML = celsius.toFixed(2)+"° celsius";
  }
}	


document.getElementById("light").addEventListener("click",changelight())
function changelight(){
	document.body.style.backgroundColor = "white";
}

document.getElementById("dark").addEventListener("click",changedark())
function changedark(){
	document.body.style.backgroundColor = "#121212";
}

document.getElementById("swap").addEventListener("click",swap);
function swap(){
	let element = document.getElementById("convert");
	if(element.onclick == convertfahrenheat){
    document.getElementById("head").textContent = "Celsius to Fahrenheit";
    document.getElementById("result").textContent = "32° Fahrenheat"
    element.onclick = convertcelsius;
	}else{
		document.getElementById("head").textContent = "Fahrenheit to Celsius";
    document.getElementById("result").textContent = "-17.77° Celsius"
    element.onclick = convertfahrenheat;
	}
}
