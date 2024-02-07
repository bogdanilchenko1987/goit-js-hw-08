import throttle from 'lodash.throttle';

import Player from '@vimeo/player';

const player = new Player('vimeo-player');

// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';

const onPlay = function ({ seconds }) {
  localStorage.setItem(CURRENT_TIME, seconds);
};

player.on('timeupdate', throttle(onPlay, 100));
player
  .setCurrentTime(localStorage.getItem(CURRENT_TIME))
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
