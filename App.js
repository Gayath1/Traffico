import React, { useState } from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { AuthProvider } from "./src/provider/AuthProvider";
import { ThemeProvider,Text } from "react-native-rapi-ui";

import { AppLoading } from "expo-app-loading";
import { StatusBar } from 'react-native'
import { useFonts } from 'expo-font';

export default function App(props) {


  const images = [
    require("./assets/icon.png"),
    require("./assets/splash.png"),
    require("./assets/login.png"),
    require("./assets/register.png"),
    require("./assets/forget.png"),
  ];

  
  const [loaded] = useFonts({
    SFPRODISPLAYBOLD: require('./assets/fonts/SFPRODISPLAYBOLD.otf'),
    SFProTextBold: require('./assets/fonts/SF-Pro-Text-Bold.otf'),
    SFProTextBlack: require('./assets/fonts/SF-Pro-Text-Black.otf'),
    SFProTextRegular: require('./assets/fonts/SF-Pro-Text-Regular.otf')
  });


  if (!loaded) {
    return null;
  }
  return (
    <ThemeProvider images={images}>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </ThemeProvider>
  );
}
