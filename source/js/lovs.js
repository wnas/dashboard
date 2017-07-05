var lovs = (function() {
    var config = {
            "group": "https://volgsysteem-afname-o.secure.cito.nl/api/v1/toetspakketonderdelen/801/groepen"

        },
        loadJSON = function(callback, file) {
            var xobj = new XMLHttpRequest(),
                file = file;
            xobj.overrideMimeType("application/json");
            xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
            xobj.onreadystatechange = function() {
                if (xobj.readyState === 4 && xobj.status === "200") {
                    // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                    callback(xobj.responseText);
                } else {
                    console.log(xobj);
                }
            };
            xobj.send(null);
        },
        init = function() {
            loadJSON(function(response, config.group) {
                // Parse JSON string into object
                console.log(JSON.parse(response));

            });
        };
    return {
        init: init
    };
}());

lovs.init();