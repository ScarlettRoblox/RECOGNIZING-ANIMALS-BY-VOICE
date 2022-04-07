function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random()* 255) + 1;
        random_number_g = Math.floor(Math.random()* 255) + 1;
        random_number_b = Math.floor(Math.random()* 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear -'+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy-'+ (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('Cow_female_black_white');
        img = document.getElementById('download');
        img = document.getElementById('June_odd-eyed-cat_cropped');
        img = document.getElementById('sumatran-tiger-thumbnail-nationalgeographic_ 1456276');

        if (results[0].label == "barking") {
            img1.src = 'dog gif.gif';
            img2.src = 'sumatran-tiger-thumbnail-nationalgeographic_1456276.webp';
            img3.src = 'June_odd-eyed-cat_cropped.jpg';
            img4.src = 'Cow_female_black_white.jpg';

        } else if (results[0].label == "meowing") {
            img1.src = 'sumatran-tiger-thumbnail-nationalgeographic_1456276.webp';
            img2.src = 'download.jpg';
            img3.src = 'cat.gif';
            img4.src = 'Cow_female_black_white.jpg';
            
        } else if(results[0].label == "Mooing") {
            img1.src = 'cow.gif';
            img2.src = 'June_odd-eyed-cat_cropped.jpg';
            img3.src = 'sumatran-tiger-thumbnail-nationalgeographic_1456276.webp';
            img4.src = 'download.jpg';
    }else (results[0].label == "Roar")
        img1.src = 'tiger.webp';
        img2.src = 'download.jpg';
        img3.src = 'Cow_female_black_white.jpg';
        img4.src = 'June_odd-eyed-cat_cropped.jpg';
}}