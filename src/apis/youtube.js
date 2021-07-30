import axios from "axios";
const KEY = 'AIzaSyCNvaOSbeiV0-Tn3ACYVOozZcJ9lrgLf0k';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'

    }
});

//youtube.get('/search')