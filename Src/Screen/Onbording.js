import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions } from "react-native";

export default function Welcomescreen({navigation}) {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../../assets/Rectangle.png")}
        style={styles.ImageBackground}
      >
        <View>
          <Image
            source={require("../../assets/ililustration.png")}
            style={styles.Image}
          />

          <Text style={styles.text1}>We Need To Change Our Scoiety</Text>

          <Text style={styles.text2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor non
            vestibulum vitae.
          </Text>
        </View>

        <View style={{ alignItems: "center", marginTop: 30 }}>
          <TouchableOpacity style={styles.Touch1}>
            <Text style={styles.text3}>Creat Account</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Touch}
            onPress={() => navigation.navigate("Tabnavigation")}
          >
            <Text style={styles.text4}>Log In as Guest</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ImageBackground: { height: "100%" },
  Image: { height: 250, width: 200, alignSelf: "center", marginTop: "40%" },
  text1: {
    color: "white",
    width: "60%",
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "bold",
  },
  text2: { color: "white", fontSize: 14, marginLeft: 13 },
  Touch1: {
    height: 50,
    backgroundColor: "white",
    width: "90%",
    justifyContent: "center",
    marginBottom: 20,
    borderRadius: 15,
  },
  Touch: {
    height: 50,
    backgroundColor: "#00A36C",
    width: "90%",
    justifyContent: "center",
    marginBottom: 10,
    borderRadius: 15,
  },

  text3: { alignSelf: "center", color: "green" },
  text4: { alignSelf: "center", color: "white" },
});
