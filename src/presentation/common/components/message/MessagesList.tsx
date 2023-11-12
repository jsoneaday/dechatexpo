import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Message} from '../../model/Message';
import MessageView from './MessageView';

interface MessagesDisplayerProps {
  messages: Array<Message>;
}

export default function MessagesList({messages}: MessagesDisplayerProps) {
  const renderItem = ({item}: any) => {
    return <MessageView message={item} />;
  };

  return <FlatList data={messages} renderItem={renderItem} />;
}
