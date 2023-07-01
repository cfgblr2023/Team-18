const { google } = require('googleapis');

require('dotenv').config();

const youtube = google.youtube({
    version: 'v3',
    auth: process.env.YOUTUBE_API_KEY
})

// search for a playlist
async function searchPlaylist(query) {
    const res = await youtube.search.list({
        part: 'snippet',
        q: query,
        maxResults: 10,
        type: 'playlist'
    });

    return res.data.items;
}

module.exports = searchPlaylist;