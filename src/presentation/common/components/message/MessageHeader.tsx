import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Message} from '../../model/Message';
import {secondary} from '../../theme/Colors';
import {styleSubHeaderFont} from '../../theme/element-styles/TextStyles';
import {testAvatar} from '../../theme/ToolBar';
import Avatar from '../Avatar';

interface MessageHeaderProps {
  message: Message;
}

export default function MessageHeader({message}: MessageHeaderProps) {
  return (
    <View style={styles.container}>
      <Avatar
        id={message.id}
        imgFile={testAvatar()}
        size={40}
        style={styles.avatar}
      />
      <View style={styles.txtContainer}>
        <View style={styles.txtNames}>
          <Text style={styles.fullName}>{message.fullName}</Text>
          <Text style={styles.userName}>{`@${message.userName}`}</Text>
        </View>
        <Text style={styles.timestamp}>{message.timestamp}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  avatar: {
    marginRight: 10,
  },
  txtContainer: {
    flex: 1,
  },
  txtNames: {
    flexDirection: 'row',
  },
  fullName: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  userName: {
    color: secondary(),
  },
  timestamp: {
    ...styleSubHeaderFont,
  },
});
