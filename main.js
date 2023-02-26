Webcam.set({
    height: 350,
    width: 300,
    img_format: "png",
    png_quality: 90,
})

camera = document.getElementById("camera").value;
Webcam.attach("#camera");

function Captureit() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = "<img src=" + data_uri + " id='camr'>";
    });

};

console.log("Ml5 version is:", ml5.version);
classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/MzGX5T1PR/model.json", modelloaded)

function modelloaded() {
    console.log("Model Has Succesfully Been Loaded!")
};

function IdentifyThat() {
    img = document.getElementById("camr");
    classifier.classify(img, gotResults);

    function gotResults(error, results) {
        if (error) {
            console.error(error);
        } else {
            console.log(results);
            document.getElementById("accuracyi").innerHTML = "Accuracy:" + results[0].confidence.toFixed(2);
            document.getElementById("objecti").innerHTML = "Object:" + results[0].label;
        }
    };





};