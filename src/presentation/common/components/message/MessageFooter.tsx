import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Message} from '../../model/Message';
import {dislike, like, resend, respond, share} from '../../theme/ToolBar';

interface MessageFooterProps {
  message: Message;
}

export default function MessageFooter({message}: MessageFooterProps) {
  return (
    <View style={styles.container}>
      <Image testID="like-icon" source={like()} style={styles.icon} />
      <Image testID="dislike-icon" source={dislike()} style={styles.icon} />
      <Image testID="respond-icon" source={respond()} style={styles.icon} />
      <Image testID="resend-icon" source={resend()} style={styles.icon} />
      <Image testID="share-icon" source={share()} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
