import { Image, View } from "react-native";
import { CommentText } from "../Text/Text";
import { styles } from "./styles";

function Comments({ img, comments, data }) {
  return (
    <View style={styles.continue}>
      <View>
        <Image style={styles.img} source={img} />
      </View>
      <View style={styles.continueComment}>
        <CommentText Boolean={true} title={comments} />
        <CommentText Boolean={false} title={data} />
      </View>
    </View>
  );
}

export default Comments;
