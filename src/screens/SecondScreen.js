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
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';



export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <TopNav
        middleContent="Menu"
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
                justifyContent:"center",}}>
        <SectionContent style={{alignItems: "center"}}>
        {/* <Image
              resizeMode="contain"
              style={{
                height: 50,
                width: 50,
              
              }}
              source={require("../../assets/driving.png")}
            /> */}
          <Fontisto name="blood-test" size={24} color= {isDarkmode ? "#FFFFFF" : "#000000"}/>
          <Text style={{ fontFamily: 'SFPRODISPLAYBOLD', fontSize:25,fontweight: "bold", color: isDarkmode ? "#FFFFFF" : "#000000", textAlign: "center"}}>Alcohol Test</Text>
         
        </SectionContent>
      </Section>
        </View>
        <View style={{flex: 1,margin:10}} >
        <Card color= {isDarkmode ? "#FFFFFF" : "#000000"} style={{height:200,borderRadius: 10,backgroundColor: isDarkmode ? "#000000" : "#FFFFFF"}}>
            {/* <Card.Title title="Card Title" subtitle="Card Subtitle"  /> */}
            <Card.Content style={{alignItems: "center"}}>
              <Title><Fontisto name="blood-test" size={24} color= {isDarkmode ? "#FFFFFF" : "#000000"}/></Title>
              <Title style={{ fontFamily: 'SFPRODISPLAYBOLD', color: isDarkmode ? "#FFFFFF" : "#000000"}}>Alcohol Test</Title>
            </Card.Content>
          
            <Card.Actions style={{alignItems:"center",justifyContent: "center", backgroundColor:"#045DE9",bottom:0,flex: 1,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
              <Button color="white" style={{ fontFamily: 'SFPRODISPLAYBOLD'}}>Test</Button>
              
            </Card.Actions>
          </Card>
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
