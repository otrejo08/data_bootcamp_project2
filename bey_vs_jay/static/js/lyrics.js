var url = '/songs';
d3.json(url).then(function(data) {
    // var releaseDate = data.years;
    // var uniqueWords = data.percent_unique;
    // var wordCount = data.word_count;
    // var song = data.song;
    // var song_url = data.song_url

    var sjTrace = {
        x: data.sj_years,
        y: data.sj_percent_unique,
        name: 'Single Jay-Z',
        text: data.sj_song,
        mode: 'markers',
        marker: {
            opacity: .5,
            size: data.sj_word_count,
            sizeref: .5,
            sizemode: 'area',
            colorscale: 'blue'
        }
    };

    var mjTrace = {
        x: data.mj_years,
        y: data.mj_percent_unique,
        name: 'Relationship Jay-Z',
        text: data.mj_song,
        mode: 'markers',
        marker: {
            opacity: .5,
            size: data.mj_word_count,
            sizeref: .5,
            sizemode: 'area',
            colorscale: 'blue-teal'
        }
    };

    var sbTrace = {
        x: data.sb_years,
        y: data.sb_percent_unique,
        name: 'Single Beyonce',
        text: data.sb_song,
        mode: 'markers',
        marker: {
            opacity: .5,
            size: data.sb_word_count,
            sizeref: .5,
            sizemode: 'area',
            colorscale: 'raspberry yogurt pink'
        }
    };

    var mbTrace = {
        x: data.mb_years,
        y: data.mb_percent_unique,
        name: 'Relationship Beyonce',
        text: data.mb_song,
        mode: 'markers',
        marker: {
            opacity: .5,
            size: data.mb_word_count,
            sizeref: .5,
            sizemode: 'area',
            colorscale: 'muted purple'
        }
    };

    var bubbleData = [sjTrace, mjTrace, sbTrace, mbTrace];
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