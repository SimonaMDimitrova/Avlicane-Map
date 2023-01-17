let infoBox = document.getElementById("info-box");
infoBox.style.display = 'none'

$.getJSON('http://127.0.0.1:5500/markers.json', function(data) {
    const properties = [];

    data.features.forEach(feature => {
        var id = feature.properties.id;
        var marker = document.getElementById(id);
        var nameElement = document.querySelector('#info-box div#notesHeader');
        var bodyElement = document.querySelector('#info-box div#notesBody');

        var name = feature.properties.name;
        var legend = feature.properties.legend;

        marker.addEventListener("click", (e) => {
            if (infoBox.style.display == '' || infoBox.style.display == 'none') {
                infoBox.style.display = 'block';
            }

            nameElement.innerHTML = name;
            bodyElement.innerHTML = legend;

            console.log(marker);
        });
    });

    var closeButton = document.querySelector('#info-box div#close');
    closeButton.addEventListener('click', () => {
        infoBox.style.display = 'none';
    })

    $(document).mouseup(function(e) {
        if (e.target.id != "info-box") { // if click is not in 'mydiv'
            infoBox.style.display = 'none';
        }
    });
});