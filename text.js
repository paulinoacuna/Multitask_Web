document.getElementById("n1").addEventListener("click", n1);
document.getElementById("n2").addEventListener("click", n2);
document.getElementById("n3").addEventListener("click", n3);
document.getElementById("n4").addEventListener("click", n4);
document.getElementById("n5").addEventListener("click", n5);
document.getElementById("n6").addEventListener("click", n6);
document.getElementById("n7").addEventListener("click", n7);
document.getElementById("n8").addEventListener("click", n8);
document.getElementById("n9").addEventListener("click", n9);
document.getElementById("n0").addEventListener("click", n0);

document.getElementById("s").addEventListener("click", suma);
document.getElementById("r").addEventListener("click", resta);
document.getElementById("d").addEventListener("click", div);
document.getElementById("m").addEventListener("click", mult);

document.getElementById("igual").addEventListener("click", igual);
document.getElementById("del").addEventListener("click", del);


var opActive = false;

var a = 0;

//numeric panel

function n1() {

	if (opActive == true) {
		document.getElementById('resultado').innerHTML = null;

	}

	var actual = document.getElementById('resultado').innerHTML;
	var sumado = document.getElementById('n1').innerHTML;

	document.getElementById('resultado').innerHTML = actual + sumado;

	opActive = false;

}

function n2() {
	var actual = document.getElementById('resultado').innerHTML;
	var sumado = document.getElementById('n2').innerHTML;

	document.getElementById('resultado').innerHTML = actual + sumado;


}

function n3() {
	var actual = document.getElementById('resultado').innerHTML;
	var sumado = document.getElementById('n3').innerHTML;

	document.getElementById('resultado').innerHTML = actual + sumado;


}

function n4() {
	var actual = document.getElementById('resultado').innerHTML;
	var sumado = document.getElementById('n4').innerHTML;

	document.getElementById('resultado').innerHTML = actual + sumado;


}

function n5() {
	var actual = document.getElementById('resultado').innerHTML;
	var sumado = document.getElementById('n5').innerHTML;

	document.getElementById('resultado').innerHTML = actual + sumado;


}

function n6() {
	var actual = document.getElementById('resultado').innerHTML;
	var sumado = document.getElementById('n6').innerHTML;

	document.getElementById('resultado').innerHTML = actual + sumado;


}

function n7() {
	var actual = document.getElementById('resultado').innerHTML;
	var sumado = document.getElementById('n7').innerHTML;

	document.getElementById('resultado').innerHTML = actual + sumado;


}

function n8() {
	var actual = document.getElementById('resultado').innerHTML;
	var sumado = document.getElementById('n8').innerHTML;

	document.getElementById('resultado').innerHTML = actual + sumado;


}

function n9() {
	var actual = document.getElementById('resultado').innerHTML;
	var sumado = document.getElementById('n9').innerHTML;

	document.getElementById('resultado').innerHTML = actual + sumado;


}

function n0() {
	var actual = document.getElementById('resultado').innerHTML;
	var sumado = document.getElementById('n0').innerHTML;

	document.getElementById('resultado').innerHTML = actual + sumado;
}

//ops


function suma() {

	a = parseInt(document.getElementById('resultado').innerHTML);

	//code some adding op animation..

	opActive = true;
}

function resta() {
	console.log("working")

}

function mult() {
	console.log("working")

}

function div() {
	console.log("working")

}


function igual() {

	var b = parseInt(document.getElementById('resultado').innerHTML);
	document.getElementById('resultado').innerHTML = null;
	document.getElementById('resultado').innerHTML = (a + b);


}

function del () {
	document.getElementById('resultado').innerHTML = null;
}



