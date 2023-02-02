import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import {Dimensions} from 'react-native';

const { width, height } = Dimensions.get("window");

const Campaign = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#FAF9F6", flex: 1 }}>
      <View style={{ marginHorizontal: 12 }}>
        <View
          style={{
            flexDirection: "row",

            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <AntDesign name="bars" size={24} color="black" />

          <View style={{ flexDirection: "row" }}>
            <Feather name="bell" size={24} style={{ marginRight: 10 }} />

            <Image
              source={require("../../assets/heat.png")}
              style={{ height: 30, width: 30 }}
            />
          </View>
        </View>
        <View>
          <Image
            source={require("../../assets/pic2.png")}
            resizeMode={"stretch"}
            style={{ height:height*0.2, width: "100%", marginTop: 20 }}
          />
          <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 12 }}>
            Help them for better education
          </Text>
        </View>

        <View>
          <Image
            source={require("../../assets/talk.png")}
            resizeMode={"contain"}
            style={{ height: 40, marginTop: 12 }}
          />

          <Image
            source={require("../../assets/barman.png")}
            resizeMode={"stretch"}
            style={{ height: 10, marginTop: 12, width: "100%" }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>
              {" "}
              Goals: $2,000
            </Text>
            <Text style={{ color: "green", fontSize: 17 }}>
              {" "}
              Raised: $2,000 (95%)
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>organiser</Text>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../assets/Ellipse36.png")}
              style={{ height: 60, width: 60, marginTop: 15 }}
            />
            <View style={{ margin: 15 }}>
              <Text> Monika islam</Text>
              <Text style={{ marginTop: 10 }}>Dhaka Bangladesh </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <Text style={{ color: "green", fontSize: 17 }}>Discription</Text>
          <Text style={{ fontSize: 17 }}>Comments (58) </Text>
        </View>
        <View style={{marginTop:15}}>
          <Text style={{ textAlign:"auto",
    lineHeight: 25,}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci nulla
            sagittis proin faucibus tincidunt. Eu ac feugiat turpis dolor
            pretium etiam id senectus arcu. Lacus, lorem lorem tristique
            sagittis proin faucibus tincidunt. Eu ac feugiat turpis dolor
            pretium etiam id senectus arcu. Lacus, lorem lorem tristique
            facilisi tincidunt......Read more
          </Text>

          <View >
            <Pressable style={{backgroundColor:"green", height:60,justifyContent:"center", borderRadius:15,marginTop:10}}><Text style={{alignSelf:"center",color:"white"}}>Donate Now </Text></Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Campaign;

const styles = StyleSheet.create({});
