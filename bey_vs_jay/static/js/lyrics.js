var url = '/lyrics';
d3.json(url).then(function(lyricData) {
    var releaseDate = lyricData.release_data;
    var uniqueWords = lyricData.percent_unique;
    var wordCount = lyricData.word_count;
    var song = lyricData.song;
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