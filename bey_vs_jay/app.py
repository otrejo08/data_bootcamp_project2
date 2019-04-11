import pandas as pd
import numpy as np
import requests
from pprint import pprint
from bs4 import BeautifulSoup
import datetime as dt

import re, string
import nltk
import contractions
from nltk.corpus import stopwords

# from api_keys import api_key

from flask import Flask, render_template, jsonify

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/lyrics/<lyrics>")
def lyric_analysis(lyrics):
    
    api_key = 'SywGQVPd8KXvMLMPDKJzoFjyVZnyBAqR0lUFv-oC3vJk2G6XLVnYY26OamLBQWVY'
    
    def request_song_info(artist_id, page_number):
        base_url = f'https://api.genius.com'
        headers = {f'Authorization': f'Bearer {api_key}'}
        search_url = f'{base_url}/artists/{artist_id}/songs?per_page=40&page={page_number}&sort=popularity'
        response = requests.get(search_url, headers=headers)

        return response

    jay_dict = {}
    beyonce_dict = {}
    destiny_dict = {}
    artist_dict = {2 : jay_dict, 498 : beyonce_dict, 2831 : destiny_dict}
        
    for artist_id, artist_dict in artist_dict.items():      

        for page in range (1, 20):
            response = request_song_info(artist_id, page)
            json = response.json()
            remote_song_info = None

            for song in json['response']['songs']:
                if str(artist_id) in str(song['primary_artist']['id']):
                    remote_song_info = song

                    if remote_song_info:
                        song_url = remote_song_info['url']

                    if len(artist_dict) == 100:
                        break

                    else:
                        artist_dict.update({song['title'].lower() : song_url})
    
    def scrap_song_url(song_url, date_index):
        page = requests.get(song_url)
        html = BeautifulSoup(page.text, 'html.parser')
        release_date = dt.datetime.strptime(html.find_all('span', {'class': 'metadata_unit-info metadata_unit-info--text_only'})[date_index].get_text(), '%B %d, %Y').strftime('%Y%m%d')
        lyrics = html.find('div', class_='lyrics').get_text()

        return release_date, lyrics
    
    relationship_start = scrap_song_url(jay_dict["'03 bonnie & clyde"], 1)[0]

    pre_jay_dict = {}
    post_jay_dict = {}

    for song, song_url in jay_dict.items():
        try:
            if int(scrap_song_url(song_url, 1)[0]) >= int(relationship_start):
                if len(post_jay_dict) == 7:
                    continue
                else:
                    post_jay_dict.update({song : [scrap_song_url(song_url, 1)[0], song_url, scrap_song_url(song_url, 1)[1]]})
            else:
                if len(pre_jay_dict) == 7:
                    continue
                else:
                    pre_jay_dict.update({song : [scrap_song_url(song_url, 1)[0], song_url, scrap_song_url(song_url, 1)[1]]})
        except:
            try:
                if int(scrap_song_url(song_url, 0)[0]) >= int(relationship_start):
                    if len(post_jay_dict) == 7:
                        continue
                    else:
                        post_jay_dict.update({song : [scrap_song_url(song_url, 0)[0], song_url, scrap_song_url(song_url, 0)[1]]})
                else:
                    if len(pre_jay_dict) == 7:
                        continue
                    else:
                        pre_jay_dict.update({song : [scrap_song_url(song_url, 0)[0], song_url, scrap_song_url(song_url, 0)[1]]})                
            except:
                pass
    
    pre_beyonce_dict = {}
    post_beyonce_dict = {}

    for song, song_url in beyonce_dict.items():
        try:
            if int(scrap_song_url(song_url, 1)[0]) >= int(relationship_start):
                if len(post_beyonce_dict) == 7:
                    continue
                else:
                    post_beyonce_dict.update({song : [scrap_song_url(song_url, 1)[0],  song_url, scrap_song_url(song_url, 1)[1]]})
            else:
                if len(pre_beyonce_dict) == 7:
                    continue
                else:
                    pre_beyonce_dict.update({song : [scrap_song_url(song_url, 1)[0], song_url, scrap_song_url(song_url, 1)[1]]})
        except:
            try:
                if int(scrap_song_url(song_url, 0)[0]) >= int(relationship_start):
                    if len(post_beyonce_dict) == 7:
                        continue
                    else:
                        post_beyonce_dict.update({song : [scrap_song_url(song_url, 0)[0], song_url, scrap_song_url(song_url, 0)[1]]})
                else:
                    if len(pre_beyonce_dict) == 7:
                        continue
                    else:
                        pre_beyonce_dict.update({song : [scrap_song_url(song_url, 0)[0], song_url, scrap_song_url(song_url, 0)[1]]})                
            except:
                pass

    pre_destiny_dict = {}

    for song, song_url in destiny_dict.items():
        try:
            if int(scrap_song_url(song_url, 1)[0]) < int(relationship_start):
                if len(pre_destiny_dict) == 7:
                    continue
                else:
                    pre_destiny_dict.update({song : [scrap_song_url(song_url, 1)[0], song_url, scrap_song_url(song_url, 1)[1]]})
        except:
            try:
                if int(scrap_song_url(song_url, 0)[0]) < int(relationship_start):
                    if len(pre_destiny_dict) == 7:
                        continue
                    else:
                        pre_destiny_dict.update({song : [scrap_song_url(song_url, 0)[0], song_url, scrap_song_url(song_url, 0)[1]]})
            except:
                pass

    pre_jay_df = pd.DataFrame.from_dict(pre_jay_dict, orient = 'index', columns = ['release_date', 'song_url', 'lyrics', ])
    post_jay_df = pd.DataFrame.from_dict(post_jay_dict, orient = 'index', columns = ['release_date', 'song_url', 'lyrics'])
    pre_beyonce_df = pd.DataFrame.from_dict(pre_beyonce_dict, orient = 'index', columns = ['release_date', 'song_url', 'lyrics'])
    post_beyonce_df = pd.DataFrame.from_dict(post_beyonce_dict, orient = 'index', columns = ['release_date', 'song_url', 'lyrics'])
    pre_destiny_df = pd.DataFrame.from_dict(pre_destiny_dict, orient = 'index', columns = ['release_date', 'song_url', 'lyrics'])

    stop = stopwords.words('english')

    def clean_text(artist_df):
        artist_df = artist_df.apply(lambda x: x.replace('\n', ' '))
        artist_df = artist_df.apply(lambda x: re.sub('\[[^]]*\]', '', x))
        artist_df = artist_df.apply(lambda x: x.lower())
        artist_df = artist_df.apply(lambda x: contractions.fix(x))
        artist_df = artist_df.apply(lambda x: re.sub(r'[^\w\s]','', x))
        artist_df = artist_df.apply(lambda x: [item for item in x.split() if item not in stop])
        return artist_df
    
    pre_jay_df.lyrics = clean_text(pre_jay_df.lyrics)
    post_jay_df.lyrics = clean_text(post_jay_df.lyrics)
    pre_beyonce_df.lyrics = clean_text(pre_beyonce_df.lyrics)
    post_beyonce_df.lyrics = clean_text(post_beyonce_df.lyrics)
    pre_destiny_df.lyrics = clean_text(pre_destiny_df.lyrics)

    pre_beyonce_df = pd.concat([pre_beyonce_df, pre_destiny_df])

    pre_jay_df['unique_words'] = pre_jay_df.lyrics.apply(lambda x: len(set(x)))
    pre_jay_df['word_count'] = pre_jay_df.lyrics.apply(lambda x: len(x))
    pre_jay_df['percent_unique'] = pre_jay_df.unique_words / pre_jay_df.word_count

    post_jay_df['unique_words'] = post_jay_df.lyrics.apply(lambda x: len(set(x)))
    post_jay_df['word_count'] = post_jay_df.lyrics.apply(lambda x: len(x))
    post_jay_df['percent_unique'] = post_jay_df.unique_words / post_jay_df.word_count

    pre_beyonce_df['unique_words'] = pre_beyonce_df.lyrics.apply(lambda x: len(set(x)))
    pre_beyonce_df['word_count'] = pre_beyonce_df.lyrics.apply(lambda x: len(x))
    pre_beyonce_df['percent_unique'] = pre_beyonce_df.unique_words / pre_beyonce_df.word_count

    post_beyonce_df['unique_words'] = post_beyonce_df.lyrics.apply(lambda x: len(set(x)))
    post_beyonce_df['word_count'] = post_beyonce_df.lyrics.apply(lambda x: len(x))
    post_beyonce_df['percent_unique'] = post_beyonce_df.unique_words / post_beyonce_df.word_count

    pre_jay_data = {'release_date' : pre_jay_df.release_date.values.tolist(), 
               'percent_unique' : pre_jay_df.percent_unique.values.tolist(),
               'word_count' : pre_jay_df.word_count.values.tolist(),
               'song': pre_jay_df.index.tolist(),
               'song_url': pre_jay_df.song_url.values.tolist()}
    
    return jsonify(pre_jay_data)

if __name__ == '__main__':
    app.run()