import {Appearance} from 'react-native';

const colorScheme = Appearance.getColorScheme();
const baseImageDir = '../assets/images/menu';

export function home(isSelected: Boolean = false) {
  if (isSelected) {
    return require(baseImageDir + '/sel-home.png');
  }
  if (colorScheme === 'dark') {
    return require(baseImageDir + '/d-home.png');
  }
  return require(baseImageDir + '/l-home.png');
}

export function browse(isSelected: Boolean = false) {
  if (isSelected) {
    return require(baseImageDir + '/sel-telescope.png');
  }
  if (colorScheme === 'dark') {
    return require(baseImageDir + '/d-telescope.png');
  }
  return require(baseImageDir + '/l-telescope.png');
}

export function notification(isSelected: Boolean = false) {
  if (isSelected) {
    return require(baseImageDir + '/sel-notification.png');
  }
  if (colorScheme === 'dark') {
    return require(baseImageDir + '/d-notification.png');
  }
  return require(baseImageDir + '/l-notification.png');
}

export function dm(isSelected: Boolean = false) {
  if (isSelected) {
    return require(baseImageDir + '/sel-chat.png');
  }
  if (colorScheme === 'dark') {
    return require(baseImageDir + '/d-chat.png');
  }
  return require(baseImageDir + '/l-chat.png');
}
