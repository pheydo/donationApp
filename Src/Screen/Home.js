import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import {Dimensions} from 'react-native';

const { width, height } = Dimensions.get("window");


export default function Home({navigation}) {
  const [text, onChangeText] = useState("");
 
  return (
    <SafeAreaView style={{ marginHorizontal: 15, backgroundColor: "#E9F7EF", flex:1  }}>
      <ScrollView>
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
              source={require("../../assets/Ellipse36.png")}
              style={{ height: 30, width: 30 }}
            />
          </View>
        </View>

        <View style={{ marginTop: 15 }}>
          <Text style={styles.text1}>Hello, Lisa</Text>
          <Text>What do you wanna donate today?</Text>
        </View>

        <View style={{}}>
          <TextInput
            style={styles.input}
            placeholder={"Search here"}
            onChangeText={onChangeText}
            value={text}
          />
        </View>

        <ImageBackground
          source={require("../../assets/backpic.png")}
          style={{ height:height*0.2, marginTop: 5, }} resizeMode={"stretch"}
        >
          <View>
            <Text
              style={{
                fontSize: 18,
                width: "50%",
                fontWeight: "bold",
                margin: 12,
              }}
            >
              Do you really have a creative
                       <Text style={{ color: "green", fontSize: 20 }}> {""}idea?</Text>
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "green",
                height:height*0.06,
                width: 120,
                justifyContent: "center",
                borderRadius: 10,
                margin:10,
              }}
              onPress={()=>navigation.navigate("Campaign")}
            >
              <Text style={{ alignSelf: "center", color: "white" }}>
                Start campaign
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={{ margin: 12 }}>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>categories</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            margin: 12,
            justifyContent: "space-between",
          }}
        >
          <View>
            <TouchableOpacity
              style={[styles.touchee, { backgroundColor: "#D2B4DE" }]}
            >
              <Image
                style={styles.categories}
                source={require("../../assets/all.png")}
              />
            </TouchableOpacity>
            <Text style={{alignSelf:"center"}}>ALL</Text>
          </View>
          <View>
            <TouchableOpacity
              style={[styles.touchee, { backgroundColor: "#D5F5E3" }]}
            >
              <Image
                style={styles.categories}
                source={require("../../assets/bell.png")}
              />
            </TouchableOpacity>
            <Text style={{alignSelf:"center"}}>ALL</Text>
          </View>
          <View>
            <TouchableOpacity
              style={[styles.touchee, { backgroundColor: "#D6EAF8" }]}
            >
              <Image
                style={styles.categories}
                resizeMode={"stretch"}
                source={require("../../assets/Bag.png")}
              />
            </TouchableOpacity>
            <Text style={{alignSelf:"center"}}>ALL</Text>
          </View>
          <View>
            <TouchableOpacity
              style={[styles.touchee, { backgroundColor: "#FDEBD0" }]}
            >
             
              <Image
                style={styles.categories}
                source={require("../../assets/Dollar.png")}
              />
            </TouchableOpacity>
            <Text style={{alignSelf:"center"}}>ALL</Text>
          </View>
        </View>
        <View style={{ margin: 12 }}>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>My campaign</Text>
        </View>

        <View>
          <Image
            style={{ height: 150, width: "95%", margin: 12 }}
            resizeMode={"contain"}
            source={require("../../assets/omo.png")}
          />
          <Text ellipsizeMode='tail'  numberOfLines={5} style={{ textAlign: 'justify',
    lineHeight: 23,}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci nulla
            sagittis proin faucibus tincidunt. Eu ac feugiat turpis dolor
            pretium etiam id senectus arcu. Lacus, lorem lorem tristique
            facilisi tincidunt......Read more
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  text1: {
    color: "#00A36C",
    width: "60%",
    fontSize: 20,
    fontWeight: "bold",
  },

  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
  categories: { height: 40, width: 40, alignSelf: "center" },
  touchee: {
    height: 60,
    width: 60,
    justifyContent: "center",
    borderRadius: 10,
  },
});
