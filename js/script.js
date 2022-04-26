var jtext = '{"Images":[' +
            '{"URL":"img/01.jpg", "Caprion":"Image 1"},' +
            '{"URL":"img/02.jpg", "Caprion":"Image 2"},' +
            '{"URL":"img/03.jpg", "Caprion":"Image 3"},' +
            '{"URL":"img/04.jpg", "Caprion":"Image 4"},' +
            '{"URL":"img/05.jpg", "Caprion":"Image 5"},' +
            '{"URL":"img/06.jpg", "Caprion":"Image 6"},' +
            '{"URL":"img/07.jpg", "Caprion":"Image 7"},' +
            '{"URL":"img/08.jpg", "Caprion":"Image 8"},' +
            '{"URL":"img/09.jpg", "Caprion":"Image 9"}' +
            ']}';

var json = JSON.parse(jtext);
//console.log(json);


var content = document.getElementById('content');
var heading = document.createElement('h1');
heading.innerText = "This is the Gallery Page";
content.appendChild(heading);

for(var i=0; i < json.Images.length; i++){
    var image = document.createElement('img');
    
    image.src = json.Images[i].URL;
    image.alt = json.Images[i].Caption;
    image.style = "width:26%";
    content.appendChild(image);
}
