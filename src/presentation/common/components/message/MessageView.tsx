import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Message} from '../../model/Message';
import {styleListBottomDivider} from '../../theme/element-styles/DividerStyles';
import MessageTypeSelector from './MessageTypeSelector';

interface MessageViewProps {
  message: Message;
}

export default function MessageView({message}: MessageViewProps) {
  return (
    <View style={styles.container}>
      <MessageTypeSelector message={message} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...(styleListBottomDivider as object),
    marginTop: 10,
    paddingBottom: 7,
  },
  messageBodyContainer: {
    marginTop: 10,
  },
  messageFooterContainer: {
    marginTop: 7,
  },
});
