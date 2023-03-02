import { Image, View } from "react-native";
import ButtonTouchable from "../Button/ButtonTouchable";

import { Geolocation, Like, Shape, ShapeOn } from "../Svg/Svg";
import { TextH2, TextH3 } from "../Text/Text";
import { styles } from "./styles";

function Post({ title, img, location, comment, like, navigation, Boolean }) {
  return (
    <View style={styles.conteiner}>
      <Image style={styles.img} source={require("../../assets/PhotoG.png")} />
      <View style={styles.conteinerTitle}>
        <TextH2 title={title}></TextH2>
      </View>
      <View style={styles.footer}>
        <ButtonTouchable
          style={styles.comment}
          props={Boolean ? <Shape /> : <ShapeOn />}
          title={comment}
          onPress={() => navigation.navigate("Comments")}
        />
        {like && (
          <ButtonTouchable
            style={styles.like}
            props={<Like />}
            title={like}
            onPress={null}
          />
        )}
        <View
          style={
            like
              ? { ...styles.location }
              : location.length >= 8
              ? { ...styles.location, marginLeft: 53 }
              : { ...styles.location, marginLeft: 190 }
          }
        >
          <Geolocation />
          <TextH3 title={location} style={styles.titleLocation}></TextH3>
        </View>
      </View>
    </View>
  );
}

export default Post;
