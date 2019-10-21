import {combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'No scrubs', duration: '4:50'},
        { title: 'Macarena', duration: '2:30'},
        {title: 'All Star', duration: '3:15'},
        { title: 'I want it that way', duration: '1:00'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    else {
        return selectedSong;
    }
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});