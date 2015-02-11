function myFunction() {
		var kont = document.getElementById("content").offsetHeight;
		var ablak = window.innerHeight;
		var marg = (ablak-kont)/2;

		document.getElementById("content").style.marginTop = marg + "px";
}

window.onload = myFunction;

