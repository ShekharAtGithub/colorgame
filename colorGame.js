var  box=document.querySelectorAll(".square")

colors= generateRandomColors(6)

    var display=document.querySelector("#display")
	var pickedColor=pickColor();
	display.textContent=pickedColor;
    var message=document.querySelector("#h2")
    var h1=document.querySelector("h1")
    var easy=document.querySelector("#easy")
    var hard=document.querySelector("#hard")
    var refresh=document.querySelector("div button")
refresh.addEventListener("click",function(){
	colors=generateRandomColors(6);
	pickedColor=pickColor();
	display.textContent=pickedColor

	for(var i=0;i<box.length;i++){
    box[i].style.background=colors[i]
    message.textContent=""
    h1.style.background="#232323"
}

})

    for(var i=0;i<box.length;i++){
    box[i].style.background=colors[i]
    box[i].addEventListener("click",function () {
    	// body...
    	var clickedColor=this.style.background
    	//console.log(clickedColor,pickedColor)
    	if(clickedColor===pickedColor){
    		message.textContent="CORRECT"
    		h1.style.background=clickedColor
    		for (var i = box.length - 1; i >= 0; i--) {
    			box[i].style.background=pickedColor
    		}
    	}
    	else{
    		    this.style.background="#232323"
    		    message.textContent="Try Again"
    	}
    })
}
function pickColor()
{
	var random=Math.floor(Math.random()*colors.length)
	return colors[random];
}
function generateRandomColors(num)
{
	var arr=[]
	for(var i=0;i<num;i++){
		arr.push(randomColor())
	}
	return arr;
}
function randomColor(){
		var r=Math.floor(Math.random()*256) 

		var g=Math.floor(Math.random()*256)

		var b=Math.floor(Math.random()*256)
		return	"rgb(" + r + ", " + g + ", " + b + ")"
}
easy.addEventListener("click",function(){
    easy.classList.add("selected")
    hard.classList.remove("selected")
})

hard.addEventListener("click",function(){
    hard.classList.add("selected")
    easy.classList.remove("selected")
})