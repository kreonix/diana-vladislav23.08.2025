(function () {
    var _id = "6c549238a085cc633b5a391aca2d1269";
    while (document.getElementById("timer" + _id)) _id = _id + "0";
    document.write("<div id='timer" + _id + "' style='min-width:242px;height:56px;'></div>");
    var _t = document.createElement("script");
    _t.src = "https://megatimer.ru/timer/timer.min.js?v=1";
    var _f = function (_k) {
        var l = new MegaTimer(_id, {
            "view": [1, 1, 1, 1],
            "type": {"currentType": "1", "params": {"usertime": false, "tz": "3", "utc": 1755968400000}},
            "design": {
                "type": "text",
                "params": {
                    "number-font-family": {
                        "family": "Poiret One",
                        "link": "<link href='https://fonts.googleapis.com/css?family=Poiret+One&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    },
                    "number-font-size": "43",
                    "number-font-color": "#000",
                    "separator-margin": "10",
                    "separator-on": true,
                    "separator-text": ":",
                    "text-on": true,
                    "text-font-family": {
                        "family": "Poiret One",
                        "link": "<link href='https://fonts.googleapis.com/css?family=Poiret+One&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    },
                    "text-font-size": "12",
                    "text-font-color": "#434343"
                }
            },
            "designId": 1,
            "theme": "white",
            "width": 242,
            "height": 56
        });
        if (_k != null) l.run();
    };
    _t.onload = _f;
    _t.onreadystatechange = function () {
        if (_t.readyState == "loaded") _f(1);
    };
    var _h = document.head || document.getElementsByTagName("head")[0];
    _h.appendChild(_t);
}).call(this);
