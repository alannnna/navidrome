const stylesheet = `

.react-jinke-music-player-main .music-player-panel {
    background-color: #1c1c1c;
    border-top: 1px solid #303030;
    box-shadow: none;
    font-family: tahoma, helvetica, sans-serif;
}

.react-jinke-music-player-main svg:active, .react-jinke-music-player-main svg:hover {
    color: #ffffff
}

.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-handle, .react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-track {
    background-color: #cccccc
}

.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-rail {
    background-color: #454545
}

.react-jinke-music-player-main ::-webkit-scrollbar-thumb {
    background-color: #454545;
}

.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-handle:active {
    box-shadow: 0 0 2px #cccccc
}

.react-jinke-music-player-main .audio-item.playing svg {
    color: #ffffff
}

.react-jinke-music-player-main .audio-item.playing .player-singer {
    color: #ffffff !important
}

.react-jinke-music-player-main .lyric-btn-active svg {
    color: #ffffff !important
}

.music-player-lyric {
    color: #cccccc !important
}

.audio-lists-panel {
    background-color: #282828;
    border: 1px solid #303030;
    border-radius: 0;
    box-shadow: none;
}

.audio-lists-panel-header {
    background-color: #121212;
    border-bottom: 1px solid #303030;
}

.audio-lists-panel-content .audio-item {
    background-color: #222222;
}

.audio-lists-panel-content .audio-item:nth-child(odd) {
    background-color: #222222;
}

.audio-lists-panel-content .audio-item:hover {
    background-color: #303030;
}

.audio-lists-panel-content .audio-item.playing, .audio-lists-panel-content .audio-item.playing svg {
    color: #ffffff
}

.audio-lists-panel-content .audio-item:active .group:not([class=".player-delete"]) svg, .audio-lists-panel-content .audio-item:hover .group:not([class=".player-delete"]) svg {
    color: #ffffff
}

.progress-bar-content .audio-title a {
    color: #cccccc
}

.react-jinke-music-player-main .music-player-panel svg {
    color: #cccccc;
}
`

export default stylesheet
