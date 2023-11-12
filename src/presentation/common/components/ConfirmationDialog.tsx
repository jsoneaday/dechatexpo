import React, {useState} from 'react';
import {
  GestureResponderEvent,
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {styleModal} from '../theme/element-styles/ModalStyles';

interface AmountToSpendWarningProps {
  messageToShow: string;
  show: boolean;
  accepted: (accept: boolean) => void;
}

// component shows user the amount they are about to spend
// in native currency and usd
export default function ConfirmationDialog({
  messageToShow,
  show,
  accepted,
}: AmountToSpendWarningProps) {
  const onShowWarning = (e: GestureResponderEvent) => {};

  return (
    <Modal
      transparent={true}
      visible={show}
      animationType="slide"
      onShow={onShowWarning}>
      <KeyboardAvoidingView
        style={styles.warningContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={{...(styleModal as object)}}>
          <Text>{messageToShow}</Text>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  warningContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
