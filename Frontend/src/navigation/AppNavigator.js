import React, { useContext } from "react";
import { initializeApp, getApps } from "firebase/app";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../provider/AuthProvider";

// Main
import Home from "../screens/Home";
import SecondScreen from "../screens/SecondScreen";
import DrunkTest from "../screens/DrunkTest";
import NicDetails from "../screens/NicDetails";
import DrunkCamera from "../screens/DrunkCamera";

// Auth screens
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import ForgetPassword from "../screens/auth/ForgetPassword";

import Loading from "../screens/utils/Loading";

// Better put your these secret keys in .env file
const firebaseConfig = {
  apiKey: "AIzaSyAKdoJGktykqJ3kZM-ugZNMTrG2ICxhIVI",
  authDomain: "traffico-84a9c.firebaseapp.com",
  databaseURL: "https://traffico-84a9c.firebaseio.com",
  projectId: "traffico-84a9c",
  storageBucket: "traffico-84a9c.appspot.com",
  messagingSenderId: "212492132739",
  appId: "1:212492132739:android:d55dc6f5457646ef90d6b6",
};

if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

const AuthStack = createNativeStackNavigator();

const Auth = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
    </AuthStack.Navigator>
  );
};

const MainStack = createNativeStackNavigator();

const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="Menu" component={SecondScreen} />
      <MainStack.Screen name="NicDrunk" component={DrunkTest} />
      <MainStack.Screen name="NicDetails" component={NicDetails} />
      <MainStack.Screen name="DrunkCamera" component={DrunkCamera} />
      <MainStack.Screen name="Home" component={Home} />
    </MainStack.Navigator>
  );
};

export default () => {
  const auth = useContext(AuthContext);
  const user = auth.user;

  return (
    <NavigationContainer>
      {user == null && <Loading />}
      {user == false && <Auth />}
      {user == true && <Main />}
    </NavigationContainer>
  );
};
