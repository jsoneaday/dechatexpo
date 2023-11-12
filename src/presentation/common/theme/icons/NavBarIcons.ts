import {Appearance} from 'react-native';

const colorScheme = Appearance.getColorScheme();
const baseImageDir = '../assets/images';

export function logo() {
  if (colorScheme === 'dark') {
    return require(baseImageDir + '/logo/d-logo-100.png');
  }
  return require(baseImageDir + '/logo/l-logo-100.png');
}

export function person() {
  if (colorScheme === 'dark') {
    return require(baseImageDir + '/navheader/person-dark.png');
  }
  return require(baseImageDir + '/navheader/person-light.png');
}

export function config() {
  if (colorScheme === 'dark') {
    return require(baseImageDir + '/navheader/config-dark.png');
  }
  return require(baseImageDir + '/navheader/config-light.png');
}
