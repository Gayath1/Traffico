import React,{useState} from "react";
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
import { Avatar, Button, Card, Title, Paragraph,Divider } from 'react-native-paper';





export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  const [MonthName,setMonthName] = useState();


  React.useEffect(()=>{
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let monthName = months[d.getMonth()];
    setMonthName(monthName);
  })
  return (
    <Layout >
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

      <Text style={{ fontFamily: 'SFPRODISPLAYBOLD', fontSize:20,fontWeight: 'bold', paddingLeft:10,paddingTop:10, color: isDarkmode ? "#FFFFFF" : "#000000"}}>Good Morning, Officer</Text>

      <View style={{flex:1,flexDirection: 'row', margin:15, backgroundColor: "#fff",borderRadius:10,  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.8,
                  shadowRadius: 2,  
                  elevation: 5}}>
          {/* <Card color= {isDarkmode ? "#FFFFFF" : "#000000"} style={{flex:1,flexDirection: 'row', width: "100%",borderRadius: 10,backgroundColor: isDarkmode ? "#000000" : "#FFFFFF"}}> */}
                <View style={{flex: 1, margin:10,alignItems: "center",justifyContent:"center"}} >
                  <Text style={{fontFamily: 'SFPRODISPLAYBOLD',fontWeight:"bold",fontSize:80,textAlign:"center", }}>{new Date().getDate()}</Text>
                  <Text style={{fontFamily:"SFPRODISPLAYBOLD",fontSize:20,textAlign:"center",fontWeight:"bold" }}>{MonthName}</Text>
                </View>
                
                <View style={{flex: 1, margin:10,borderLeftWidth:4,borderColor:"#bcc9fe", borderRadius:2,overflow:"hidden" }} >
                
                  <Text style={{fontFamily: 'SFPRODISPLAYBOLD',fontSize:15,textAlign:'left',fontWeight:"bold",marginLeft:5 }}>Today Routes</Text>
                  <Text style={{fontFamily: 'SFProTextRegular',fontSize:15,textAlign:'left',marginLeft:15,marginTop: 10}}>Udugampola - 
                  Gampaha</Text>
                  <Text style={{fontFamily: 'SFProTextRegular',fontSize:15,textAlign:'left',marginLeft:15,marginTop: 10}}>Udugampola - 
                  Minuwangoda</Text>

                </View>
          {/* </Card> */}
      </View>
      <Text style={{ fontFamily: 'SFPRODISPLAYBOLD', fontSize:20,fontWeight: 'bold', padding:20, color: isDarkmode ? "#FFFFFF" : "#141414"}}>Let's Ensure Road Safety</Text>

      <View style={{flex: 1, flexDirection: 'row',alignItems: "center",justifyContent:"center"}}>
 
      
        <View style={{flex: 1, margin:10,shadowColor: '#000', backgroundColor:"#fff",
        height:200, borderRadius:10,
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.8,
                  shadowRadius: 2,  
                  elevation: 5 }} >
                  <Text style={{ fontFamily: 'SFPRODISPLAYBOLD', fontSize:20,fontWeight: 'bold', padding:20, color: isDarkmode ? "#FFFFFF" : "#141414"}}>Let's Ensure Road Safety</Text>

  
        </View>
        <View style={{flex: 1,margin:10,backgroundColor:"#fff",
        height:200, borderRadius:10,
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.8,
                  shadowRadius: 2,  
                  elevation: 5 }} >
        
        </View>
      </View>
    </Layout>
  );
}
