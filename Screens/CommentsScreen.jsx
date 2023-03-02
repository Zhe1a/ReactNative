import { useState } from "react";
import { Image, View, StyleSheet, TextInput } from "react-native";
import Comments from "../components/Comments/Comments";
import ComponentsHeader from "../components/Header/Header";
import { SvgAddComment } from "../components/Svg/AddSvgImg";

function CommentsScreen({ navigation }) {
  const [comments, setComments] = useState();
  const [getComment, setGetComment] = useState([]);
  const inputHandlerComments = (text) => setComments(text);

  const HendelAddComment = () => {
    if (comments === "") {
      return;
    }
    setGetComment([{ comments: comments, data: "21,02,2000" }]);
    setComments("");
  };

  const getWight = () => {
    if (getComment.length === 0) {
      return { marginBottom: 365 };
    } else if (getComment.length === 1) {
      return { marginBottom: 250 };
    } else if (getComment.length === 2) {
      return { marginBottom: 200 };
    } else if (getComment.length === 3) {
      return { marginBottom: 100 };
    }
  };
  return (
    <>
      <View style={styles.conteiner}>
        <ComponentsHeader
          title={"Комментарии"}
          Boolean={false}
          onPress={() => navigation.navigate("Post")}
        />
      </View>
      <View style={styles.conteinerImg}>
        <Image
          style={styles.img}
          source={require("../assets/PhotoG.png")}
        ></Image>
      </View>
      <View style={{ backgroundColor: "#FFFFFF", alignItems: "center",height:"100%" }}>
        <View style={getComment.length > 4 ? { marginBottom: 0 } : getWight()}>
          {getComment
            ? getComment.map(({ id, img, data, comments }) => {
                return (
                  <Comments
                    key={id}
                    img={img}
                    data={data}
                    comments={comments}
                  />
                );
              })
            : ""}
        </View>
        <View style={styles.conteinerInput}>
          <TextInput
            style={styles.input}
            placeholder="Комментировать..."
            value={comments}
            onChangeText={inputHandlerComments}
          />
          <SvgAddComment onPress={HendelAddComment} />
        </View>
      </View>
    </>
  );
}

export default CommentsScreen;

const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: "#FFFFFF",
    
    
  },
  conteinerImg: {
    paddingTop: 32,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  
  },
  img: {
    width: 343,
    height: 240,
    borderRadius: 8,
  },
  conteinerInput: {
    paddingTop: "auto",
    position: "relative",

    marginTop: 31,
    paddingLeft: 16,
    width: 343,
    height: 50,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: 100,
  },
  input: {
    width: 343,
    height: 50,
  },
});
