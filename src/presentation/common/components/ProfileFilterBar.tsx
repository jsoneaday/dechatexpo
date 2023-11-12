import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {all} from '../theme/icons/FilterRowIcons';
import Avatar from './Avatar';

type ProfileFilterBarModel = {
  id: string;
  name: string;
  file: any;
};

interface ProfileFilterBarProps {
  data: Array<ProfileFilterBarModel>;
}

export default function ProfileFilterBar({data}: ProfileFilterBarProps) {
  const renderItem = ({item}: any) => (
    <View style={styles.avatarContainer}>
      <Avatar id={item.id} imgFile={item.file} size={65} />
      <Text style={styles.avatarLabel}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar id={'0'} imgFile={all()} size={65} />
        <Text style={styles.avatarLabel}>{'Everyone'}</Text>
      </View>

      <FlatList
        horizontal={true}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.avatarList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  avatarList: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  avatarContainer: {
    alignItems: 'center',
    marginRight: 20,
  },
  avatarLabel: {
    fontWeight: 'bold',
    marginTop: 10,
  },
});
