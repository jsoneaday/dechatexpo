import {Appearance} from 'react-native';

const colorScheme = Appearance.getColorScheme();
const baseImageDir = '../assets/images';

export function postMessageTypeSelector() {
  if (colorScheme === 'dark') {
    return require(baseImageDir + '/message/d-post-message.png');
  }
  return require(baseImageDir + '/message/l-post-message.png');
}

export function photoMessage() {
  if (colorScheme === 'dark') {
    return require(baseImageDir + '/message/d-photo.png');
  }
  return require(baseImageDir + '/message/l-photo.png');
}

export function textMessage() {
  if (colorScheme === 'dark') {
    return require(baseImageDir + '/message/d-text.png');
  }
  return require(baseImageDir + '/message/l-text.png');
}
