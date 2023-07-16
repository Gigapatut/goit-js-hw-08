import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

const getTime = data => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data.seconds));
} 
player.on('timeupdate',throttle(getTime,1000 ));

player.setCurrentTime(JSON.parse(localStorage.getItem(STORAGE_KEY)) || 0);
