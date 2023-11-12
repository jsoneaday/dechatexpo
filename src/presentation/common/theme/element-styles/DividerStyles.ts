import {Platform} from 'react-native';
import {secondary} from '../Colors';

export const styleHeaderOrFooter = {
  borderOpacity: Platform.OS === 'ios' ? 0.05 : 0.2,
  borderColor: secondary(),
  borderStyle: 'solid',
  shadowOpacity: 0,
  width: '100%',
  maxHeight: 100,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
};

export const styleListBottomDivider = {
  borderOpacity: Platform.OS === 'ios' ? 0.05 : 0.2,
  borderBottomWidth: Platform.OS === 'ios' ? 0.17 : 0.2,
  borderColor: secondary(),
  borderStyle: 'solid',
  shadowOpacity: 0,
};
