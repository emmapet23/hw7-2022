var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	
});

/*play*/
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume *100 + "%"
	video.play()
});

/*pause*/
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

/*slow down*/
document.querySelector("#slower").addEventListener("click", function() {
	console.log("video speed = ", video.playbackRate*=0.9);
	video.playbackRate*=0.9
});

/*speed up*/
document.querySelector("#faster").addEventListener("click", function() {
	console.log("video speed = ", video.playbackRate*=1.1);
	video.playbackRate*=1.1
});

/*skip ahead*/
document.querySelector("#skip").addEventListener("click", function() {
	console.log("skip ahead");
	video.currentTime += 10
});

/*mute*/
document.querySelector("#mute").addEventListener("click", function() {
	console.log("mute video");
	if (video.muted == false){
		video.muted = true
	}
	else {
		video.muted = false
	}
});

/*volume slider*/
document.querySelector("#slider").addEventListener("input", function(e) {
	console.log("hello")
	video.volume = e.currentTarget.value / 100;
	var volume = document.getElementById("slider").value;
	document.getElementById("volume").innerHTML = volume + "%";
});

/*styled*/
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("styled");
	video.classList.add("oldSchool");
});

/*original*/
document.querySelector("#orig").addEventListener("click", function() {
	console.log("styled 2");
	video.classList.remove("oldSchool");
});