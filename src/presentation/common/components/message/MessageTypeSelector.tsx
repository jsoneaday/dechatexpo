import React, {useEffect, useState} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Message, MessageKind, TypeOfMessage} from '../../model/Message';
import {secondary} from '../../theme/Colors';
import {styleBodyFont} from '../../theme/element-styles/TextStyles';
import MessageFooter from './MessageFooter';
import MessageHeader from './MessageHeader';
import MessageTypeHeader from './MessageTypeHeader';
import MessageMedia from './message-body/MessageMedia';
import MessageText from './message-body/MessageText';

interface MessageBodyCreatorProps {
  message: Message;
}

export default function MessageTypeSelector({
  message,
}: MessageBodyCreatorProps) {
  const [content, setContent] = useState<JSX.Element>();

  const getAppropriateMessage = (
    typeHeaderUserName: string,
    message: Message,
    messageKind: MessageKind,
    showTypeHeader: boolean = true,
  ) => {
    const body = message.msg ? (
      <MessageText body={message.msg} />
    ) : (
      <MessageMedia caption={message.caption ?? ''} media={message.media} />
    );

    return (
      <>
        {showTypeHeader ? (
          <View style={styles.messageType}>
            <MessageTypeHeader messageKind={messageKind} />
          </View>
        ) : null}
        <MessageHeader message={message} />
        <View style={styles.messageBodyContainer}>{body}</View>
        <View style={styles.messageFooterContainer}>
          <MessageFooter message={message} />
        </View>
      </>
    );
  };

  useEffect(() => {
    switch (message.messageKind.msgType) {
      case TypeOfMessage.standard:
      case TypeOfMessage.like:
        setContent(
          <View>
            {getAppropriateMessage(
              message.userName,
              message,
              message.messageKind,
            )}
          </View>,
        );
        break;
      case TypeOfMessage.resend:
        const resentMsg = message.messageKind.respondingToMsg!;
        setContent(
          <>
            <View style={styles.messageType}>
              <MessageTypeHeader messageKind={message.messageKind} />
            </View>
            <MessageHeader message={message} />
            <Text style={styles.resendMsg}>{message.msg}</Text>
            <View style={styles.resentMsgContainer}>
              {getAppropriateMessage(
                resentMsg.userName,
                resentMsg,
                message.messageKind,
                false,
              )}
            </View>
            <View style={styles.messageFooterContainer}>
              <MessageFooter message={message} />
            </View>
          </>,
        );
        break;
      case TypeOfMessage.response:
        const respondingMsg = message.messageKind.respondingToMsg!;
        setContent(
          <View>
            {getAppropriateMessage(
              message.userName,
              respondingMsg,
              message.messageKind,
            )}
            <View style={styles.responseContainer}>
              <View style={styles.respondingLine}></View>
              <View style={styles.respondingBodyContainer}>
                <MessageHeader message={message} />
                <View style={styles.messageBodyContainer}>
                  {message.msg ? (
                    <MessageText body={message.msg} />
                  ) : (
                    <MessageMedia
                      caption={message.caption ?? ''}
                      media={message.media}
                    />
                  )}
                </View>
                <View style={styles.messageFooterContainer}>
                  <MessageFooter message={message} />
                </View>
              </View>
            </View>
          </View>,
        );
        break;
    }
  }, [message]);

  return <View>{content}</View>;
}

const styles = StyleSheet.create({
  messageType: {
    marginLeft: 15,
    marginBottom: 5,
  },
  messageBodyContainer: {
    marginTop: 10,
    ...styleBodyFont,
  },
  messageFooterContainer: {
    marginTop: 10,
  },
  resendMsg: {
    marginTop: 10,
    ...styleBodyFont,
  },
  responseContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  respondingLine: {
    height: '90%',
    width: 1,
    backgroundColor: secondary(),
    marginLeft: 20,
  },
  respondingBodyContainer: {
    marginLeft: 30,
  },
  resentMsgContainer: {
    borderOpacity: Platform.OS === 'ios' ? 0.05 : 0.2,
    borderWidth: Platform.OS === 'ios' ? 0.2 : 0.35,
    borderColor: secondary(),
    borderStyle: 'solid',
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 12,
    paddingBottom: 0,
    ...styleBodyFont,
  },
});
