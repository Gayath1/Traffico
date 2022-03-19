import React, { useState } from "react";
import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import {
  Layout,
  TopNav,
  themeColor,
  Section,
  SectionContent,
  useTheme,
} from "react-native-rapi-ui";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { Avatar, Card, Title, Paragraph, Divider } from "react-native-paper";

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  const [MonthName, setMonthName] = useState();

  React.useEffect(() => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const d = new Date();
    let monthName = months[d.getMonth()];
    setMonthName(monthName);
  });
  return (
    <Layout >
      <TopNav
      // style={{elevation:0}}
        middleContent="Menu"
        borderColor="#fff"
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

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor:'#FFFFFF'
        }}
      >
        <Text
          style={{
            fontFamily: "SFPRODISPLAYBOLD",
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 10,
            marginTop: 10,
            color: isDarkmode ? "#FFFFFF" : "#585E71",
          }}
        >
          Good Morning, Officer
        </Text>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            margin: 15,
            backgroundColor: "#fff",
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
          }}
        >
          {/* <Card color= {isDarkmode ? "#FFFFFF" : "#000000"} style={{flex:1,flexDirection: 'row', width: "100%",borderRadius: 10,backgroundColor: isDarkmode ? "#000000" : "#FFFFFF"}}> */}
          <View
            style={{
              flex: 1,
              margin: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "SFPRODISPLAYBOLD",
                fontWeight: "bold",
                fontSize: 80,
                textAlign: "center",
                color: isDarkmode ? "#FFFFFF" : "#00164D",
              }}
            >
              {new Date().getDate()}
            </Text>
            <Text
              style={{
                fontFamily: "SFPRODISPLAYBOLD",
                fontSize: 20,
                textAlign: "center",
                fontWeight: "bold",
                color: isDarkmode ? "#FFFFFF" : "#00164D",
              }}
            >
              {MonthName}
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              margin: 10,
              borderLeftWidth: 4,
              borderColor: "#585E71",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Text
              style={{
                fontFamily: "SFPRODISPLAYBOLD",
                fontSize: 15,
                color: isDarkmode ? "#FFFFFF" : "#00164D",
                textAlign: "left",
                fontWeight: "bold",
                marginLeft: 5,
              }}
            >
              Today Routes
            </Text>
            <Text
              style={{
                fontFamily: "SFProTextRegular",
                fontSize: 15,
                textAlign: "left",
                color: isDarkmode ? "#FFFFFF" : "#161B2C",
                marginLeft: 15,
                marginTop: 10,
              }}
            >
              Udugampola - Gampaha
            </Text>
            <Text
              style={{
                fontFamily: "SFProTextRegular",
                fontSize: 15,
                color: isDarkmode ? "#FFFFFF" : "#161B2C",
                textAlign: "left",
                marginLeft: 15,
                marginTop: 10,
              }}
            >
              Udugampola - Minuwangoda
            </Text>
          </View>
          {/* </Card> */}
        </View>
        <Text
          style={{
            fontFamily: "SFPRODISPLAYBOLD",
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 10,
            marginTop: 10,
            color: isDarkmode ? "#FFFFFF" : "#585E71",
          }}
        >
          Let's Ensure Road Safety
        </Text>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              margin: 10,
              shadowColor: "#000",
              backgroundColor: "#fff",
              height: 250,
              borderRadius: 10,
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
              elevation: 5,
            }}
          >
            <Image
              resizeMode="contain"
              style={{
                height: 130,
                width: 150,
              }}
              source={require("../../assets/VCESmartPass.png")}
            />
            <Text
              style={{
                fontFamily: "SFPRODISPLAYBOLD",
                fontSize: 18,
                fontWeight: "bold",
                padding: 20,
                color: isDarkmode ? "#FFFFFF" : "#00164D",
              }}
            >
              Drunk Detection
            </Text>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#585E71",
                  width: "60%",
                  height: 40,
                  justifyContent: "center",
                  borderRadius: 15,
                }}
                // onPress={onPress}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontFamily: "SFProTextBold",
                    color: isDarkmode ? "#FFFFFF" : "#FFFFFF",
                  }}
                >
                  Test
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              margin: 10,
              backgroundColor: "#fff",
              height: 250,
              borderRadius: 10,
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
              elevation: 5,
            }}
          ></View>
        </View>
      </ScrollView>
    </Layout>
  );
}
