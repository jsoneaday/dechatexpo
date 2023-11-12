import {Appearance} from 'react-native';

const colorScheme = Appearance.getColorScheme();
const baseImageDir = '../assets/images/filter-row';

export function all(isSelected: Boolean = false) {
  if (colorScheme === 'dark') {
    return require(baseImageDir + '/d-all.png');
  }
  return require(baseImageDir + '/l-all.png');
}
