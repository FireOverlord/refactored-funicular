Webcam.set({
height:350,
width:300,
image_format:"png",
png_quality:100
});
camera=document.getElementById("Webcam");
Webcam.attach('#Webcam');
function takeSnap(){
    Webcam.snap(function(data_uri){
document.getElementById("snap").innerHTML='<img id="snapped" src="'+data_uri+'"/>'
    });
}
console.log('m15 version:', m15.version)
classifier=m15.imageClassifier("https://teachablemachine.withgoogle.com/models/mW5ip7Hxd/",modelLoaded);
function modelLoaded(){
    console.log("model loaded!");
}