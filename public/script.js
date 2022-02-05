const videoGrid = document.getElementById('video-grid');

//  creating vie eelement
const myVideo = document.createElement('video');
myVideo.muted = true;

let myVideoStream;
navigator.mediaDevices.getUserMedia({
	video:true,
	audio:true 
}).then(function(stream){
	myVideoStream = stream;
	addVideoStream(myVideo,stream);
})


function addVideoStream(video,stream){
		video.srcObject = stream;
		video.addEventListener('loadmetadata',function(){
			video.play();
		})
		videoGrid.append(video);
}