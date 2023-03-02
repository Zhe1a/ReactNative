import { useState } from "react";
import { SafeAreaView, StatusBar, Text } from "react-native";
import { View, StyleSheet, ImageBackground, ScrollView } from "react-native";
import ButtonTouchable from "../components/Button/ButtonTouchable";

import Post from "../components/Post/Post";
import RegisterFormImg from "../components/ImgUser/RegisterFormImg";
import { HeaderBack } from "../components/Svg/Svg";
import { TextH1 } from "../components/Text/Text";

function ProfileScreen({ navigation }) {
  const [fileResponse, setFileResponse] = useState("");
  return (
    <View style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
      <ImageBackground
        source={require("../assets/PhotoG.png")}
        style={{ width: "auto", height: 812, flex: 1 }}
      >
        <View style={styles.conteiner}>
          <View style={styles.conteinerMain}>
            <RegisterFormImg
              Boolean={false}
              fileResponse={fileResponse}
              setFileResponse={setFileResponse}
            />
            <ButtonTouchable
              props={<HeaderBack />}
              onPress={() => navigation.navigate("Login")}
              style={styles.position}
              Boolean={false}
            />
            <View style={styles.title}>
              <TextH1 title={"Zhe1a"}></TextH1>
            </View>
            <View style={styles.containerScroll}>
              <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                  <Post
                    Boolean={true}
                    navigation={navigation}
                    title={"lis"}
                    img={"../assets/PhotoG.png"}
                    like={"153"}
                    comment={"8"}
                    location={"Ukraine"}
                  />
                </ScrollView>
              </SafeAreaView>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  containerScroll: {
    height: 340,
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  title: {
    marginBottom: 33,
    marginTop: 32,
  },
  conteiner: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    position: "relative",
    height: "50%",
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    top: 180,
  },
  conteinerMain: {
    flex: 1,
    alignItems: "center",
  },
  position: {
    position: "absolute",
    top: 24,
    left: 370,
  },
});
