import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {styleBodyFont} from '../../../theme/element-styles/TextStyles';

interface MessageMediaProps {
  caption: string;
  media: any;
}

export default function MessageMedia({caption, media}: MessageMediaProps) {
  return (
    <View>
      <Text style={styles.txt}>{caption}</Text>
      <Image source={media} />
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    ...styleBodyFont,
  },
});
