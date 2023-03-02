import * as DocumentPicker from "expo-document-picker";
import { useState } from "react";

import { ImageBackground, View } from "react-native";
import { AddSvgImg } from "../Svg/AddSvgImg";
import { SvgButton } from "../Svg/SvgButton";
import { styles } from "./styles";

function ImgUser({ Boolean, fileResponse, setFileResponse }) {
  const [open, setOpen] = useState(true);

  const handleDocumentSelection = async () => {
    try {
      const res = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        multiple: true,
        copyToCacheDirectory: true,
      });
      if (res.type === "cancel") {
        return;
      } else {
        setFileResponse(res);
      }
    } catch (err) {
      console.warn(err);
      return;
    }
  };

  const hendelOpneImg = () => {
    if (!fileResponse) {
      handleDocumentSelection();
      setOpen(false);
    } else {
      setOpen(true);
      setFileResponse("");
    }
  };
  return (
    <View style={Boolean ? styles.ContainerPhoto : styles.containerForm}>
      <ImageBackground
        source={fileResponse}
        style={Boolean ? styles.backgroundPhoto : styles.photo}
      >
        {Boolean ? (
          <AddSvgImg Boolean={open} onPress={hendelOpneImg} />
        ) : (
          <SvgButton Boolean={open} onPress={hendelOpneImg} />
        )}
      </ImageBackground>
    </View>
  );
}

export default ImgUser;
