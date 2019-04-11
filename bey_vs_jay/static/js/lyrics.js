var url = '/songs';
d3.json(url).then(function(data) {
    // var releaseDate = data.years;
    // var uniqueWords = data.percent_unique;
    // var wordCount = data.word_count;
    // var song = data.song;
    // var song_url = data.song_url

    var bubbleTrace = {
        x: data.years,
        y: data.percent_unique,
        name: 'Single Jay-Z',
        text: data.song,
        mode: 'markers',
        marker: {
            opacity: .5,
            size: data.wordCount,
            sizeref: .75,
            sizemode: 'area',
            colorscale: 'blue'
        }
    };
    var bubbleData = [bubbleTrace];
    var bubbleLayout = {
        xaxis: {
            title: {
                text: 'years',
                font: {
                    size: 15
                }
            }
        },
        yaxis: {
            tick0: 0,
            tickformat: ',.0%',
            title: {
                text: 'unique usage rate',
                font: {
                    size: 15
                }
            }
        }
    };

    Plotly.plot('bubble', bubbleData, bubbleLayout, {response: true});
});