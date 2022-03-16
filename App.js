import React, { useState } from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { AuthProvider } from "./src/provider/AuthProvider";
import { ThemeProvider } from "react-native-rapi-ui";
import { LogBox } from "react-native";
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

export default function App(props) {

  const  [isReady, setIsReady]=  useState(false);
  const images = [
    require("./assets/icon.png"),
    require("./assets/splash.png"),
    require("./assets/login.png"),
    require("./assets/register.png"),
    require("./assets/forget.png"),
  ];


  


  // Ignore firebase v9 AsyncStorage warning
  React.useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        SFPRODISPLAYBOLD: require('./assets/fonts/SFPRODISPLAYBOLD.otf'),
      });
  
      setIsReady(true);
    }
    // LogBox.ignoreLogs([
    //   "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
    // ]);

  }, []);

  // async function loadFonts() {
  //   await Font.loadAsync({
  //     SFPRODISPLAYBOLD: require('./assets/fonts/SFPRODISPLAYBOLD.otf'),
  //   });

  //   setIsReady(true);
  // }

  // if (!isReady) {
  //   return <AppLoading></AppLoading>;
  // }

  return (
    <ThemeProvider images={images}>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </ThemeProvider>
  );
}
