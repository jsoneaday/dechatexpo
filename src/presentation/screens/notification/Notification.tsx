import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, Text} from 'react-native';
import {RootStackParamList} from '../../../../App';
import {styleRootContainer} from '../../common/theme/element-styles/BaseStyles';

type Props = BottomTabScreenProps<RootStackParamList, 'Notification'>;

export default function Notification({navigation}: Props) {
  return (
    <View
      style={{
        ...(styleRootContainer as object),
      }}>
      <Text>Notification Screen</Text>
    </View>
  );
}
