var url = '/songs';
d3.json(url).then(function(data) {
    var releaseDate = data.release_date;
    var uniqueWords = data.percent_unique;
    var wordCount = data.word_count;
    var song = data.song;
    var song_url = data.song_url

    var bubbleTrace = {
        x: releaseDate,
        y: uniqueWords,
        text: song,
        mode: 'markers',
        marker: {
            size: wordCount/100,
            colorscale: 'blue'
        }
    };
    var bubbleData = [bubbleTrace];
    var bubbleLayout = {
        xaxis: {
            showlegend: false,
            title: {
                text: 'years',
                font: {
                    size: 20
                }
            }
        }
    };

    Plotly.plot('bubble', bubbleData, bubbleLayout, {response: true});
});