var url = '/songs';
d3.json(url).then(function(data) {
    var releaseDate = data.release_data;
    var uniqueWords = data.percent_unique;
    var wordCount = data.word_count;
    var song = data.song;
    var song_url = lyricData.song_url

    var BubbleTrace = {
        x: releaseDate,
        y: uniqueWords,
        text: song,
        mode: 'markers',
        marker: {
            size: wordCount,
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

    Plotly.Plot('bubble', bubbleData, bubbleLayout, {response: true});
});