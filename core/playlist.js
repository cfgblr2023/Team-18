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
        maxResults: 1,
        type: 'video'
    });

    return res.data.items[0].id.videoId;
}

module.exports = searchPlaylist;