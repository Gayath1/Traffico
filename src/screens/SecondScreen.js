import React from "react";
import { View } from "react-native";
import {
  Layout,
  TopNav,
  Text,
  themeColor,
  Section,
  SectionContent,
  useTheme,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <TopNav
        middleContent="Second Screen"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        leftAction={() => navigation.goBack()}
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        rightAction={() => {
          if (isDarkmode) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      />
      <View style={{flex: 1, flexDirection: 'row',alignItems: "center",justifyContent:"center"}}>
 
      
        <View style={{flex: 1, margin:10 }} >
        <Section >
        <SectionContent>
          {/* This text using ubuntu font */}
          <Text fontWeight="bold">This is the second screen</Text>
        </SectionContent>
      </Section>
        </View>
        <View style={{flex: 1,margin:10}} >
        <Section >
        <SectionContent>
          {/* This text using ubuntu font */}
          <Text fontWeight="bold">This is the second screen</Text>
        </SectionContent>
      </Section>
        </View>
      </View>
    </Layout>
  );
}
