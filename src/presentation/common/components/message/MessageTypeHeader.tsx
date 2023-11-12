import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {MessageKind, TypeOfMessage} from '../../model/Message';
import {styleSubHeaderFont} from '../../theme/element-styles/TextStyles';
import {dislike, like, resend, respond} from '../../theme/ToolBar';

interface MessageTypeProps {
  messageKind: MessageKind;
}

export default function MessageTypeHeader({messageKind}: MessageTypeProps) {
  const getIconSource = () => {
    switch (messageKind.msgType) {
      case TypeOfMessage.like:
        return like();
      case TypeOfMessage.dislike:
        return dislike();
      case TypeOfMessage.resend:
        return resend();
      case TypeOfMessage.response:
        return respond();
    }
  };

  return (
    <View style={styles.container}>
      <Image
        testID="message-type-icon"
        source={getIconSource()}
        style={styles.icon}
      />
      <Text style={styles.userName}>{`@${
        messageKind.msgTypeSubmitterUserName ?? ''
      }`}</Text>
      <Text style={styles.msgType}>{`${messageKind.msgType}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
    marginRight: 10,
    ...styleSubHeaderFont,
  },
  msgType: {
    marginRight: 10,
    ...styleSubHeaderFont,
  },
});
