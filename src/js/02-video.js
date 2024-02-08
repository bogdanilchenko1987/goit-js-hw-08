import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
import { common } from './common';

const player = new Player('vimeo-player');

// const CURRENT_TIME = 'videoplayer-current-time';

const onPlay = function ({ seconds }) {
  localStorage.setItem(common.CURRENT_TIME, seconds);
};

player.on('timeupdate', throttle(onPlay, 100));
player
  .setCurrentTime(localStorage.getItem(common.CURRENT_TIME))
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });

localStorage.clear();
