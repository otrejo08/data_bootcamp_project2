import pandas as pd
import numpy as np
# import requests
# from pprint import pprint
# from bs4 import BeautifulSoup
# import datetime as dt

# import re, string
# import nltk
# import contractions
# from nltk.corpus import stopwords

# from api_keys import api_key

from flask import Flask, render_template, jsonify

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

# @app.route("/lyrics/<lyrics>")
# def lyric_analysis(lyrics):
#     print(lyrics)
#     return jsonify



if __name__ == '__main__':
    app.run()