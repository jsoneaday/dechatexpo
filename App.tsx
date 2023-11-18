import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/presentation/screens/home/Home";
import {
  browse,
  dm,
  home,
  notification,
} from "./src/presentation/common/theme/icons/MenuIcons";
import { secondary, tertiary } from "./src/presentation/common/theme/Colors";
import { SafeAreaView, Image, Platform, StyleSheet } from "react-native";
import NavHeader from "./src/presentation/common/components/NavHeader";
import Browse from "./src/presentation/screens/browse/Browse";
import Notification from "./src/presentation/screens/notification/Notification";
import Dm from "./src/presentation/screens/dm/Dm";
import { SuiClientProvider, WalletProvider } from "@mysten/dapp-kit";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { networkConfig } from "./src/domain/repository/sui/connector";

const queryClient = new QueryClient();

export type RootStackParamList = {
  Home: undefined;
  Browse: undefined;
  Notification: undefined;
  Dm: undefined;
};

const App = () => {
  const Tab = createBottomTabNavigator<RootStackParamList>();

  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork="testnet">
        <WalletProvider>
          <SafeAreaView>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused }) =>
                    getImageIcon(route.name, focused),
                  tabBarActiveTintColor: tertiary(),
                  tabBarInactiveTintColor: secondary(),
                })}
              >
                <Tab.Screen
                  name="Home"
                  component={Home}
                  options={{
                    headerTitle: (props) => <NavHeader />,
                    headerLeft: () => null,
                    headerStyle: styles.headerStyle,
                    tabBarShowLabel: false,
                  }}
                />
                <Tab.Screen
                  name="Browse"
                  component={Browse}
                  options={{
                    headerTitle: (props) => <NavHeader />,
                    headerLeft: () => null,
                    headerStyle: styles.headerStyle,
                    tabBarShowLabel: false,
                  }}
                />
                <Tab.Screen
                  name="Notification"
                  component={Notification}
                  options={{
                    headerTitle: (props) => <NavHeader />,
                    headerLeft: () => null,
                    headerStyle: styles.headerStyle,
                    tabBarShowLabel: false,
                  }}
                />
                <Tab.Screen
                  name="Dm"
                  component={Dm}
                  options={{
                    headerTitle: (props) => <NavHeader />,
                    headerLeft: () => null,
                    headerStyle: styles.headerStyle,
                    tabBarShowLabel: false,
                  }}
                />
              </Tab.Navigator>
            </NavigationContainer>
          </SafeAreaView>
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
};

export default App;

function getImageIcon(routeName: string, focused: boolean) {
  switch (routeName) {
    case "Home":
      return <Image style={styles.menuIcon} source={home(focused)} />;
    case "Browse":
      return <Image style={styles.menuIcon} source={browse(focused)} />;
    case "Notification":
      return <Image style={styles.menuIcon} source={notification(focused)} />;
    case "Dm":
      return <Image style={styles.menuIcon} source={dm(focused)} />;
    default:
      return <Image style={styles.menuIcon} source={home(focused)} />;
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    height: Platform.OS === "ios" ? 100 : 80,
  },
  menuIcon: {
    width: 35,
    height: 35,
  },
});
