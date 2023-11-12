import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {config, logo, person} from '../theme/icons/NavBarIcons';
import Avatar from './Avatar';

export default function NavHeader() {
  return (
    <View style={styles.container}>
      <TouchableOpacity testID="profileBtn">
        <Avatar size={35} imgFile={person()} />
      </TouchableOpacity>
      <Image style={styles.logo} source={logo()} testID="logo" />
      <TouchableOpacity testID="configBtn">
        <Image style={styles.config} source={config()} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: Platform.OS === 'ios' ? 20 : 0,
  },
  logo: {
    width: 65,
    height: 65,
  },
  config: {
    width: 30,
    height: 30,
  },
});
