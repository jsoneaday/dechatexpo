import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, Button, Text} from 'react-native';
import {RootStackParamList} from '../../../../App';
import {styleRootContainer} from '../../common/theme/element-styles/BaseStyles';

type Props = BottomTabScreenProps<RootStackParamList, 'Browse'>;

export default function Browse({navigation}: Props) {
  return (
    <View
      style={{
        ...(styleRootContainer as object),
      }}>
      <Text>Browse Screen</Text>
    </View>
  );
}
