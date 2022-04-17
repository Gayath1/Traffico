import React from "react";
import {
  View,
  Linking,
  Card,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { getAuth, signOut } from "firebase/auth";
import {
  Layout,
  Button,
  Text,
  TopNav,
  Section,
  SectionContent,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  const auth = getAuth();
  return (
    <Layout>
      <TopNav
        middleContent="Profile"
        middleTextStyle={{
          fontFamily: "SFPRODISPLAYBOLD",
          color: isDarkmode ? "#E3E1E6" : "#585E71",
        }}
        backgroundColor={isDarkmode ? "#1B1B1F" : "#FFFFFF"}
        borderColor={isDarkmode ? "#1B1B1F" : "#FFFFFF"}
        // leftContent={<Ionicons
        //     name={isDarkmode ? "sunny" : "moon"}
        //     size={20}
        //     color={isDarkmode ? themeColor.white100 : themeColor.dark}
        //   />}
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
        <Text
          style={{
            fontFamily: "SFPRODISPLAYBOLD",
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 10,
            marginTop: 10,
            color: isDarkmode ? "#E3E1E6" : "#585E71",
          }}
        >
          Good Morning, Officer
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
              backgroundColor: isDarkmode ? "#2B3042" : "#fff",
              height: 200,
              borderRadius: 10,
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
              elevation: 5,
            }}
          >
            <View
              style={{
                flex: 1,
                margin: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "SFPRODISPLAYBOLD",
                  fontSize: 20,
                  marginTop: 30,
                  fontWeight: "bold",
                  textAlign: "center",
                  color: isDarkmode ? "#E3E1E6" : "#494E5C",
                }}
              >
                Let’s get to work...
                <Ionicons
                  name={isDarkmode ? "shield-checkmark" : "shield-checkmark"}
                  size={20}
                  color={isDarkmode ? "#E3E1E6" : "#494E5C"}
                />
              </Text>

              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 30,
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#00164D",
                    width: "60%",
                    height: 40,
                    justifyContent: "center",
                    borderRadius: 10,
                  }}
                  // onPress={onPress}
                  onPress={() => {
                    navigation.navigate("Menu");
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontFamily: "SFProTextBold",
                      color: isDarkmode ? "#FFFFFF" : "#FFFFFF",
                    }}
                  >
                    Dashboard
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
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
              backgroundColor: isDarkmode ? "#2B3042" : "#fff",
              height: 200,
              borderRadius: 10,
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
              elevation: 5,
            }}
          >
            <View
              style={{
                flex: 1,
                margin: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "SFPRODISPLAYBOLD",
                  fontSize: 20,
                  marginTop: 30,
                  fontWeight: "bold",
                  textAlign: "center",
                  color: isDarkmode ? "#E3E1E6" : "#494E5C",
                }}
              >
                Get off from work...
                <Ionicons
                  name={isDarkmode ? "log-out" : "log-out"}
                  size={25}
                  color={isDarkmode ? "#E3E1E6" : "#494E5C"}
                />
              </Text>

              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 30,
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#6F0000",
                    width: "60%",
                    height: 40,
                    justifyContent: "center",
                    borderRadius: 10,
                  }}
                  // onPress={onPress}
                  onPress={() => {
                    signOut(auth);
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontFamily: "SFProTextBold",
                      color: isDarkmode ? "#FFFFFF" : "#FFFFFF",
                    }}
                  >
                    log out
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        {/* <Section style={{ marginTop: 20 }}>
          <SectionContent>
            <Text fontWeight="bold" style={{ textAlign: "center" }}>
              These UI  components provided by Rapi UI
            </Text>
            <Button
              style={{ marginTop: 10 }}
              text="Rapi UI Documentation"
              status="info"
              onPress={() => Linking.openURL("https://rapi-ui.kikiding.space/")}
            />
            <Button
              text="Go to second screen"
              onPress={() => {
                navigation.navigate("Menu");
              }}
              style={{
                marginTop: 10,
              }}
            />
            <Button
              status="danger"
              text="Logout"
              onPress={() => {
                signOut(auth);
              }}
              style={{
                marginTop: 10,
              }}
            />
          </SectionContent>
        </Section> */}
      </ScrollView>
    </Layout>
  );
}
