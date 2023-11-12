import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { RootStackParamList } from "../../../../App";
import { styleRootContainer } from "../../common/theme/element-styles/BaseStyles";
import { primary } from "../../common/theme/Colors";
import ProfileFilterBar from "../../common/components/ProfileFilterBar";
import MessagesList from "../../common/components/message/MessagesList";
import PostMessageTypeSelector from "../../common/components/message/PostMessageTypeSelector";
import { useAws } from "../../common/hooks/AwsHooks";
import log from "../../../domain/utils/logger";

type Props = BottomTabScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation }: Props) {
  const aws = useAws();
  useEffect(() => {
    const messages = aws.getFeed("", 10);
    log("messages", messages);
  }, []);

  return (
    <View style={{ ...(styleRootContainer as object) }}>
      <ProfileFilterBar data={[]} />
      <MessagesList messages={aws.getFeed("", 10)} />
      <PostMessageTypeSelector style={styles.postMsg} />
    </View>
  );
}

const styles = StyleSheet.create({
  postMsg: {
    position: "absolute",
    bottom: 15,
    right: 15,
    backgroundColor: primary(true),
    zIndex: 1000,
  },
});
