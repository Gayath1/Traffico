import React, {
  useState,
  useMemo,
  useEffect,
  useRef,
  useCallback,
} from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions,
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
import {
  Camera,
  useCameraDevices,
  sortDevices,
  PhotoFile,
} from "react-native-vision-camera";

export default function ({ route, navigation }) {
  const { isDarkmode, setTheme } = useTheme();

  const [devices, setDevices] = useState([]);
  const device = useMemo(
    () => devices.find((d) => d.position === "back"),
    [devices]
  );
  const [permissons, setPermissons] = useState(false);

  const getPermissons = async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus();
    const microphonePermission = await Camera.getMicrophonePermissionStatus();

    if (
      microphonePermission === "authorized" &&
      cameraPermission === "authorized"
    ) {
      setPermissons(true);
    }
  };

  const [Driver, setDriver] = useState(route.params.Driver);
  const [NIC, setNIC] = useState();
  const camera = useRef(null);

  const height = Dimensions.get("window").height * 0.7;

  useEffect(() => {
    const loadDevices = async () => {
      try {
        const availableCameraDevices = await Camera.getAvailableCameraDevices();
        const sortedDevices = availableCameraDevices.sort(sortDevices);
        setDevices(sortedDevices);
      } catch (e) {
        console.error("Failed to get available devices!", e);
      }
    };
    loadDevices();
    getPermissons();
  }, []);

  if (!device && !permissons) {
    return null;
  }

  const submit = async () => {
    const photo = await camera.current.takePhoto({
      flash: "on",
      enableAutoRedEyeReduction: true,
    });

    const ext = photo.path.substring(photo.path.lastIndexOf(".") + 1);
    const fileName = photo.path.replace(/^.*[\\\/]/, "");
    // let xhr = new XMLHttpRequest();
    // xhr.open("POST", `http://10.0.2.2:5000/api/getResults`);
    const formData = new FormData();
    formData.append("image", {
      uri: "file://" + photo.path,
      name: fileName,
      type: `image/${ext}`,
    });
    // console.log(formData);
    // xhr.send(formData);
    let response = await new Promise((resolve) => {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", `http://10.0.2.2:5000/api/getResults`, true);
      xhr.onload = function (e) {
        resolve(xhr.response);
        console.log(xhr.response);
        navigation.navigate("DrunkResults", {
          Driver: Driver,
          Results: xhr.response,
        });
      };
      xhr.onerror = function () {
        resolve(undefined);
        console.error("** An error occurred during the XMLHttpRequest");
      };
      xhr.send(formData);
    });
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
          middleContent="Drunk Test"
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
          <View
            style={{
              //   flex: 1,
              //   flexDirection: "row",
              margin: 15,
              borderRadius: 10,
              overflow: "hidden",
              // height: height
            }}
          >
            <Camera
              ref={camera}
              style={{ height: height }}
              device={device}
              isActive={true}
              photo={true}
            />
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
                Check
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Layout>
    </>
  );
}
