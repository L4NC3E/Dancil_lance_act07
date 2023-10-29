var hang = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hang.addEventListener("click", function(onclick){
	this.classList.toggle("click");
	navlist.classList.toggle("open");
});
