import os

import pandas as pd
import numpy as np

# from api_keys import api_key

from flask import Flask, render_template, jsonify

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/songs")
def lyric_analysis():
    # pre_jay_path = 'pre_jay.csv'
    # pre_jay_csv = pd.read_csv(pre_jay_path)
    # pre_jay_df = pd.DataFrame(pre_jay_csv)

    # pre_jay_trace = {'x' : pre_jay_df.release_date.values.tolist(), 
    #            'y' : pre_jay_df.percent_unique.values.tolist(),
    #            'word_count' : pre_jay_df.word_count.values.tolist(),
    #            'song': pre_jay_df.index.tolist(),
    #            'song_url': pre_jay_df.song_url.values.tolist()}
    
    pre_jay_data = {'release_date': [19991013,
                                    20010911,
                                    20010911,
                                    20020508,
                                    19991228,
                                    20010911,
                                    19960624],
                                    'percent_unique': [0.4954545454545455,
                                    0.6666666666666666,
                                    0.6166328600405679,
                                    0.4928774928774929,
                                    0.6076555023923444,
                                    0.5073313782991202,
                                    0.5579514824797843],
                                    'word_count': [440, 459, 493, 351, 418, 341, 371],
                                    'song': [0, 1, 2, 3, 4, 5, 6],
                                    'song_url': ['https://genius.com/Dr-dre-still-dre-lyrics',
                                    'https://genius.com/Jay-z-renegade-lyrics',
                                    'https://genius.com/Jay-z-takeover-lyrics',
                                    'https://genius.com/Jay-z-song-cry-lyrics',
                                    'https://genius.com/Jay-z-big-pimpin-lyrics',
                                    'https://genius.com/Jay-z-izzo-hova-lyrics',
                                    'https://genius.com/Jay-z-devils-lyrics']}
        
    
    return jsonify(pre_jay_data)

if __name__ == '__main__':
    app.run()