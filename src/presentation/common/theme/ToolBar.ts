import {Appearance} from 'react-native';

const colorScheme = Appearance.getColorScheme();
const baseImageDir = './assets/images';

export function resend() {
  if (colorScheme === 'dark') {
    return require(baseImageDir + '/toolbar/d-resend-100.png');
  }
  return require(baseImageDir + '/toolbar/l-resend-100.png');
}

export function like() {
  if (colorScheme === 'dark') {
    return require(baseImageDir + '/toolbar/d-like-100.png');
  }
  return require(baseImageDir + '/toolbar/l-like-100.png');
}

export function dislike() {
  if (colorScheme === 'dark') {
    return require(baseImageDir + '/toolbar/d-dislike-100.png');
  }
  return require(baseImageDir + '/toolbar/l-dislike-100.png');
}

export function respond() {
  if (colorScheme === 'dark') {
    return require(baseImageDir + '/toolbar/d-respond-100.png');
  }
  return require(baseImageDir + '/toolbar/l-respond-100.png');
}

export function share() {
  if (colorScheme === 'dark') {
    return require(baseImageDir + '/toolbar/d-share-100.png');
  }
  return require(baseImageDir + '/toolbar/l-share-100.png');
}

// todo: replace when ready
export function testAvatar() {
  const ran = Math.random();
  if (ran === 0) {
    return require(baseImageDir + '/profile/longhair.jpg');
  }
  if (ran > 0 && ran < 0.5) {
    return require(baseImageDir + '/profile/mrglasses.jpg');
  }
  return require(baseImageDir + '/profile/mylady.jpg');
}
