import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, Button, Text} from 'react-native';
import {RootStackParamList} from '../../../../App';
import {styleRootContainer} from '../../common/theme/element-styles/BaseStyles';

type Props = BottomTabScreenProps<RootStackParamList, 'Dm'>;

export default function Dm({navigation}: Props) {
  return (
    <View
      style={{
        ...(styleRootContainer as object),
      }}>
      <Text>Direct Message Screen</Text>
    </View>
  );
}
