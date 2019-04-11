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

@app.route("/lyrics")
def lyric_analysis():
    pre_jay_path = 'pre_jay.csv'
    pre_jay_csv = pd.read_csv(pre_jay_path)
    pre_jay_df = pd.DataFrame(pre_jay_csv)

    pre_jay_data = {'release_date' : pre_jay_df.release_date.values.tolist(), 
               'percent_unique' : pre_jay_df.percent_unique.values.tolist(),
               'word_count' : pre_jay_df.word_count.values.tolist(),
               'song': pre_jay_df.index.tolist(),
               'song_url': pre_jay_df.song_url.values.tolist()}    
    
    return jsonify(pre_jay_data)

if __name__ == '__main__':
    app.run()