import React, {useRef, useState} from 'react';
import {
  Animated,
  GestureResponderEvent,
  Image,
  Modal,
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
  ViewStyle,
} from 'react-native';
import {primary, secondary} from '../../theme/Colors';
import {styleHeaderOrFooter} from '../../theme/element-styles/DividerStyles';
import {
  photoMessage,
  postMessageTypeSelector,
  textMessage,
} from '../../theme/icons/MessageIcons';
import {
  styleBodyFont,
  styleErrorFont,
  styleSubHeaderFont,
} from '../../theme/element-styles/TextStyles';
import {styleButton} from '../../theme/element-styles/ButtonStyles';
import fs from 'fs/promises';
import path from 'path';
import {styleModal} from '../../theme/element-styles/ModalStyles';

const size = 65;

interface PostMessageTypeSelectorProps {
  style?: StyleProp<ViewStyle>;
}

enum PostMessageType {
  txt = 'text',
  photo = 'photo',
}

export default function PostMessageTypeSelector({
  style = {},
}: PostMessageTypeSelectorProps) {
  const [showBtnContainer, setShowBtnContainer] = useState(false);
  const postTypeContainerHeight = useRef(new Animated.Value(size)).current;
  const [showPostMessageModal, setShowPostMessageModal] = useState(false);
  const [txtMessageText, setTxtMessageText] = useState('');
  const [postMessageType, setPostMessageType] = useState<PostMessageType>(
    PostMessageType.txt,
  );
  const [headerTitle, setHeaderTitle] = useState('');
  const [postMessageErrorStr, setPostMessageErrorStr] = useState('');

  const togglePostMessageTypeSelector = () => {
    if (!showBtnContainer) {
      Animated.timing(postTypeContainerHeight, {
        toValue: 185,
        duration: 250,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(postTypeContainerHeight, {
        toValue: size,
        duration: 250,
        useNativeDriver: false,
      }).start();
    }

    setShowBtnContainer(!showBtnContainer);
  };

  const onPressToggleOpen = (e: GestureResponderEvent) => {
    togglePostMessageTypeSelector();
  };

  const onPressOpenPostPhoto = (e: GestureResponderEvent) => {
    setShowPostMessageModal(!showPostMessageModal);
    setPostMessageType(PostMessageType.photo);
    setHeaderTitle('Post a pic');
  };

  const onPressOpenPostText = (e: GestureResponderEvent) => {
    setShowPostMessageModal(!showPostMessageModal);
    setPostMessageType(PostMessageType.txt);
    setHeaderTitle('Post a text message');
  };

  const onShowPostMessageModal = (e: GestureResponderEvent) => {
    togglePostMessageTypeSelector();
  };

  const onRequestClosePostMessageModal = () => {
    setShowPostMessageModal(!showPostMessageModal);
  };

  const onChangeTxtMessageText = (txt: string) => {
    setTxtMessageText(txt);
  };

  const onPressCancelPostMessage = (e: GestureResponderEvent) => {
    setShowPostMessageModal(!showPostMessageModal);
  };

  const onPressSubmitPostMessage = async (e: GestureResponderEvent) => {
    if (postMessageType === PostMessageType.txt) {
    } else {
    }
  };

  return (
    <>
      <Modal
        visible={showPostMessageModal}
        transparent={true}
        animationType="slide"
        onShow={onShowPostMessageModal}
        onRequestClose={onRequestClosePostMessageModal}>
        <KeyboardAvoidingView
          style={styles.postMessageContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.postMessageInnerContainer}>
            <View style={styles.postMessageHeader}>
              <Text
                style={{
                  ...styleSubHeaderFont,
                  marginRight: 10,
                  fontWeight: 'bold',
                }}>
                {headerTitle}
              </Text>
            </View>
            <TextInput
              style={styles.txtMessageInput}
              multiline={true}
              numberOfLines={10}
              autoFocus={true}
              onChangeText={onChangeTxtMessageText}
              value={txtMessageText}
              placeholder="post your message"
            />
            <View style={styles.postMessageFooter}>
              <Text style={{...styleErrorFont}}>{postMessageErrorStr}</Text>
              <View style={styles.postMsgButtonContainer}>
                <TouchableOpacity onPress={onPressCancelPostMessage}>
                  <Text style={{...(styleButton as object), marginRight: 15}}>
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressSubmitPostMessage}>
                  <Text style={{...(styleButton as object)}}>Post</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
      <Animated.View
        style={{
          ...styles.container,
          ...(style as object),
          height: postTypeContainerHeight,
        }}>
        {showBtnContainer ? (
          <>
            <TouchableOpacity onPress={onPressOpenPostPhoto}>
              <Image source={photoMessage()} style={{...styles.mainImg}} />
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressOpenPostText}>
              <Image source={textMessage()} style={{...styles.typeImg}} />
            </TouchableOpacity>
          </>
        ) : null}

        <TouchableOpacity onPress={onPressToggleOpen}>
          <Image
            source={postMessageTypeSelector()}
            style={{...styles.mainImg}}
          />
        </TouchableOpacity>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexdirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: size,
    height: size,
    borderRadius: size / 2,
    shadowRadius: 3,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.25,
    shadowColor: secondary(false),
    elevation: 4,
    padding: 15,
  },
  postMessageTypeSwitch: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  txtMessageInput: {
    ...styleBodyFont,
    marginTop: Platform.OS === 'ios' ? 10 : 0,
    height: 250,
    width: '100%',
  },
  postMessageHeader: {
    ...(styleHeaderOrFooter as object),
    borderBottomWidth: Platform.OS === 'ios' ? 0.17 : 0.2,
    paddingBottom: 10,
  },
  postMessageFooter: {
    ...(styleHeaderOrFooter as object),
    borderTopWidth: Platform.OS === 'ios' ? 0.17 : 0.2,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  postMsgButtonContainer: {
    flexDirection: 'row',
  },
  postMessageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  postMessageInnerContainer: {
    ...(styleModal as object),
  },
  typeImg: {
    width: size - 45,
    height: size - 45,
  },
  mainImg: {
    width: size - 40,
    height: size - 40,
  },
});
