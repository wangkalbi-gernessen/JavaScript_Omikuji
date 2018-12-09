(function(){
	"use strict";
	var btn=document.getElementById("btn");
	btn.addEventListener("click",function(){
		var n=Math.random();
		if(n<0.05){
			this.textContent="Big Good"; //5%
		}else if(n<0.2){
			this.textContent="Good"; //15%
		}else{
			this.textContent="Bad"; //80%
		}
		//var results=["Good","Good","Good","Good","Bad"];
		//var n=Math.floor(Math.random()*results.length);
		//this.textContent=results[n];
		/*if(n===0){
			this.textContent="Very Good";
		}else if(n===1){
			this.textContent="Good";
		}else{
			this.textContent="Bad";
		}
		//this.textContent=n;*/
	});
	btn.addEventListener("mousedown",function(){
		this.className="pushed";
	});
	btn.addEventListener("mouseup",function(){
		this.className="";
	});
})();