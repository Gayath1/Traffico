import React from "react";
import { View,  Image,Text } from "react-native";
import {
  Layout,
  TopNav,
  
  themeColor,
  Section,
  SectionContent,
  useTheme,
} from "react-native-rapi-ui";
import { Ionicons,Fontisto } from "@expo/vector-icons";


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
        <Section style={{height:200,alignItems: "center",
                justifyContent:"center"}}>
        <SectionContent style={{alignItems: "center"}}>
        <Image
              resizeMode="contain"
              style={{
                height: 50,
                width: 50,
              
              }}
              source={require("../../assets/driving.png")}
            />
          <Text style={{fontweight: "bold", fontFamily: 'SFPRODISPLAYBOLD', color: isDarkmode ? "#FFFFFF" : "#000000", textAlign: "center"}}>Alcohol Test</Text>

        </SectionContent>
      </Section>
        </View>
        <View style={{flex: 1,margin:10}} >
        <Section style={{height:200}}>
        <SectionContent>
          {/* This text using ubuntu font */}
          <Text fontWeight="bold">This is the second screen</Text>
          <Fontisto name="blood-test" size={24} color="black" />
        </SectionContent>
      </Section>
        </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
 
      
        <View style={{flex: 1, margin:10 }} >
        <Section style={{height:200}} >
        <SectionContent>
          {/* This text using ubuntu font */}
          <Text fontWeight="bold">This is the second screen</Text>
        </SectionContent>
      </Section>
        </View>
        <View style={{flex: 1,margin:10}} >
        <Section style={{height:200}}>
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
