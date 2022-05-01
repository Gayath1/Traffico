import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
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
import { StatusBar } from "react-native";
import axios from "axios";

export default function ({ route, navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  const [Driver, setDriver] = useState(route.params.Driver);
  const [Results, setResults] = useState(route.params.Results);
  const [NIC, setNIC] = useState();
  console.log(Results);
  const submit = async () => {
    // navigation.navigate("DrunkCamera", { Driver: Driver });
  };

  return (
    <>
      <StatusBar
        barStyle={isDarkmode ? "light-content" : "dark-content"}
        hidden={false}
        backgroundColor={isDarkmode ? "#1B1B1F" : "#FFFFFF"}
        translucent={true}
      />

      <Layout>
        <TopNav
          // style={{elevation:0}}
          middleContent="Results"
          middleTextStyle={{
            fontFamily: "SFPRODISPLAYBOLD",
            color: isDarkmode ? "#E3E1E6" : "#585E71",
          }}
          //   style={{ fontFamily: "SFPRODISPLAYBOLD"}}
          backgroundColor={isDarkmode ? "#1B1B1F" : "#FFFFFF"}
          borderColor={isDarkmode ? "#1B1B1F" : "#FFFFFF"}
          leftContent={
            <Ionicons
              name="chevron-back"
              size={20}
              color={isDarkmode ? "#E3E1E6" : "#585E71"}
            />
          }
          leftAction={() => navigation.goBack()}
          rightContent={
            <Ionicons
              name={isDarkmode ? "sunny" : "moon"}
              size={20}
              color={isDarkmode ? "#E3E1E6" : "#585E71"}
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
            backgroundColor: isDarkmode ? "#1B1B1F" : "#FFFFFF",
          }}
        >
          {/* <Text
            style={{
              fontFamily: "SFPRODISPLAYBOLD",
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: 10,
              marginTop: 10,
              color: isDarkmode ? "#E3E1E6" : "#585E71",
            }}
          >
            License Checking
          </Text> */}

          <View
            style={{
              //   flex: 1,
              //   flexDirection: "row",
              margin: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "SFPRODISPLAYBOLD",
                fontSize: 18,
                fontWeight: "bold",

                marginBottom: 10,
                color: isDarkmode ? "#E3E1E6" : "#585E71",
              }}
            >
              National Id
            </Text>
            <TextInput
              containerStyle={{ marginTop: 5 }}
              placeholder="NIC No"
              editable={false}
              style={{
                backgroundColor: isDarkmode ? "#44464E" : "#F9FAFA",
                height: 50,
                borderRadius: 10,
                borderColor: "#AFAFAF",
                borderWidth: 1,
                paddingLeft: 10,
                color: isDarkmode ? "#DDE1F9" : "#1B1B1F",
                placeholderTextColor: isDarkmode ? "#DDE1F9" : "#1B1B1F",
              }}
              value={Driver.Nic}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              keyboardType="NIC"
              onChangeText={(text) => setNIC(text)}
            />
          </View>
          <View
            style={{
              //   flex: 1,
              //   flexDirection: "row",
              margin: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "SFPRODISPLAYBOLD",
                fontSize: 18,
                fontWeight: "bold",

                marginBottom: 10,
                color: isDarkmode ? "#E3E1E6" : "#585E71",
              }}
            >
              Name
            </Text>
            <TextInput
              containerStyle={{ marginTop: 5 }}
              placeholder="Name"
              editable={false}
              style={{
                backgroundColor: isDarkmode ? "#44464E" : "#F9FAFA",
                height: 50,
                borderRadius: 10,
                borderColor: "#AFAFAF",
                borderWidth: 1,
                paddingLeft: 10,
                color: isDarkmode ? "#DDE1F9" : "#1B1B1F",
                placeholderTextColor: isDarkmode ? "#DDE1F9" : "#1B1B1F",
              }}
              value={Driver.name}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              keyboardType="NIC"
              onChangeText={(text) => setNIC(text)}
            />
          </View>
          <View
            style={{
              //   flex: 1,
              //   flexDirection: "row",
              margin: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "SFPRODISPLAYBOLD",
                fontSize: 18,
                fontWeight: "bold",

                marginBottom: 10,
                color: isDarkmode ? "#E3E1E6" : "#585E71",
              }}
            >
              Results
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: isDarkmode ? "#44464E" : "#F9FAFA",
                height: 150,
                borderRadius: 10,
                borderColor: "#AFAFAF",
                borderWidth: 1,
                paddingLeft: 10,
                color: isDarkmode ? "#DDE1F9" : "#1B1B1F",
              }}
            >
              <View style={{}}>
                <Text
                  style={{
                    fontFamily: "SFPRODISPLAYBOLD",
                    fontSize: 25,
                    fontWeight: "bold",
                    paddingLeft: 5,
                    paddingRight: 25,
                    color: isDarkmode ? "#DDE1F9" : "#232323",
                  }}
                >
                  Drunk Test
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                {Results !== "True" ? (
                  <Text
                    style={{
                      fontFamily: "Poppins",
                      fontSize: 20,
                      fontWeight: "600",
                      marginLeft: 20,
                      padding: 20,
                      color: isDarkmode ? "#DDE1F9" : "#232323",
                    }}
                  >
                    Passed
                  </Text>
                ) : (
                  <Text
                    style={{
                      fontFamily: "Poppins",
                      fontSize: 20,
                      fontWeight: "600",
                      marginLeft: 20,
                      padding: 20,
                      color: isDarkmode ? "#DDE1F9" : "#232323",
                    }}
                  >
                    Failed
                  </Text>
                )}
                <Ionicons
                  name={
                    Results !== "True" ? "checkmark-circle" : "close-circle"
                  }
                  size={25}
                  color={Results !== "True" ? "#42ba96" : "#B21313"}
                  style={{ alignSelf: "center", marginRight: 25 }}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              margin: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "SFPRODISPLAYBOLD",
                fontSize: 18,
                fontWeight: "bold",

                marginBottom: 10,
                color: isDarkmode ? "#E3E1E6" : "#585E71",
              }}
            >
              Driver Points
            </Text>
            <View
              style={{
                flexDirection: "row",
                paddingBottom: 5,
              }}
            >
              <Ionicons
                name={isDarkmode ? "star" : "star"}
                size={25}
                color={isDarkmode ? "#FFA800" : "#FFA800"}
                style={{ alignSelf: "center", marginRight: 25 }}
              />

              <TextInput
                containerStyle={{ marginTop: 5 }}
                placeholder="Points"
                editable={false}
                style={{
                  flex: 1,
                  backgroundColor: isDarkmode ? "#44464E" : "#F9FAFA",
                  height: 50,
                  borderRadius: 10,
                  borderColor: "#AFAFAF",
                  borderWidth: 1,
                  paddingLeft: 10,
                  color: isDarkmode ? "#DDE1F9" : "#1B1B1F",
                  placeholderTextColor: isDarkmode ? "#DDE1F9" : "#1B1B1F",
                }}
                value={
                  Driver.expires
                    ? (Driver.points - 3).toString()
                    : Driver.points.toString()
                }
                autoCapitalize="none"
                autoCompleteType="off"
                autoCorrect={false}
                keyboardType="numeric"
                onChangeText={(text) => setNIC(text)}
              />
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#1A3370",
                width: "90%",
                height: 50,
                justifyContent: "center",
                borderRadius: 15,
              }}
              onPress={submit}
              // onPress={() => {
              //   navigation.navigate("NicDrunk");
              // }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "SFProTextBold",
                  color: isDarkmode ? "#FFFFFF" : "#FFFFFF",
                }}
              >
                Issue A Ticket
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Layout>
    </>
  );
}
