import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {styleBodyFont} from '../../../theme/element-styles/TextStyles';

interface MessageTextProps {
  body: string;
}

export default function MessageText({body}: MessageTextProps) {
  return (
    <View>
      <Text style={styles.txt}>{body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    ...styleBodyFont,
  },
});
