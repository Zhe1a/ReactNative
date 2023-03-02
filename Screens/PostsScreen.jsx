import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useState } from "react";
import ComponentsHeader from "../components/Header/Header";

import Post from "../components/Post/Post";
import { TextEmail, TextName } from "../components/Text/Text";

function PostsScreen({ navigation }) {
  const [name, setName] = useState("zhe1a");
  const [email, setEmail] = useState("mgr5800@llasd");
  return (
    <View style={styles.container}>
      <View>
        <ComponentsHeader
          onPress={() => navigation.navigate("Login")}
          title={"Публикации"}
          Boolean={true}
        />
      </View>
      <View style={{ width: "100%", alignItems: "center" }}>
        <View style={styles.main}>
          <Image style={styles.img} source={require("../assets/PhotoG.png")} />
          <View style={styles.content}>
            <TextName title={name}></TextName>
            <TextEmail title={email}></TextEmail>
          </View>
        </View>
      </View>
      <View style={styles.post}>
        <SafeAreaView style={styles.containerSafe}>
          <ScrollView style={styles.scrollView}>
            <Post
              navigation={navigation}
              comment={"0"}
              Boolean={false}
              location={"1234567"}
            />
          </ScrollView>
        </SafeAreaView>
      </View>

    </View>
  );
}

export default PostsScreen;

const styles = StyleSheet.create({
  containerSafe: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  container: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  post: {
    height: 540,
    alignItems: "center",
  },
  main: {
    backgroundColor: "#FFFFFF",
    width: 343,
    alignItems: "center",
    marginTop: 32,
    flexDirection: "row",
    marginBottom: 32,
  },
  content: {
    marginLeft: 8,
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 15,
  },
});
