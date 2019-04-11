(function(){
    window.PLOTLYENV={'BASE_URL': 'https://plot.ly'};

    var gd = document.getElementById('4f47b437-228b-47f9-8ade-182be188ff3f')
    var resizeDebounce = null;

    function resizePlot() {
        var bb = gd.getBoundingClientRect();
        Plotly.relayout(gd, {
            width: bb.width,
            height: bb.height
        });
    }

    
    window.addEventListener('resize', function() {
        if (resizeDebounce) {
            window.clearTimeout(resizeDebounce);
        }
        resizeDebounce = window.setTimeout(resizePlot, 100);
    });
    

    
    Plotly.plot(gd,  {
        data: figure.data,
        layout: figure.layout,
        frames: figure.frames,
        config: {"showLink": true, "linkText": "Export to plot.ly", "mapboxAccessToken": "pk.eyJ1IjoiY2hyaWRkeXAiLCJhIjoiY2lxMnVvdm5iMDA4dnhsbTQ5aHJzcGs0MyJ9.X9o_rzNLNesDxdra4neC_A"}
    });
    
}());