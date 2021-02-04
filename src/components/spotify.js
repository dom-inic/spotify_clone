

export const authEndpoint = 
"https://accounts.spotify.com/authorize";

const redirectUri  = "http://localhost:3000/";

const clientId = "";  
 
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

// export const getTokenFromUrl = () =>

// export const loginUrl = '${authEndpoint}?client_id=${clientId}?redirect_uri=${redirectUri}?user_scopes=${scopes}';