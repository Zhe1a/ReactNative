import { Text, TouchableOpacity } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useState } from "react";
import { styles } from "./styles";

export default useFonts = async () =>
  await Font.loadAsync({
    "Roboto-Medium": require("../../assets/Fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../../assets/Fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("../../assets/Fonts/Roboto-Regular.ttf"),
  });

export function HeaderText({ title }) {
  const [IsReady, SetIsReady] = useState(false);
  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }
  return (
    <>
      <Text style={styles.HeaderText}>{title}</Text>
    </>
  );
}

export function H3Text({ title, Boolean, style }) {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }
  return (
    <>
      {Boolean ? (
        <>
          <Text style={{...styles.H3TextTrue,...style}}>{title}</Text>
        </>
      ) : (
   
          <Text style={styles.H3Text}>{title}</Text>
  
      )}
    </>
  );
}

export function CommentText({ Boolean, title }) {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }

  return (
    <>
      {Boolean ? (
        <>
          <Text style={styles.CommentText}>{title}</Text>
        </>
      ) : (
        <Text style={styles.CommentData}>{title}</Text>
      )}
    </>
  );
}

export function TextH1({ title, style }) {
  const [IsReady, SetIsReady] = useState(false);
  const LoadFonts = async () => {
    await useFonts();
  };
  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }
  return (
    <>
      <Text style={styles.RobotoBold}>{title}</Text>
    </>
  );
}
export function TextH3({ title, style }) {
  const [IsReady, SetIsReady] = useState(false);
  const LoadFonts = async () => {
    await useFonts();
  };
  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }
  return (
    <>
      <Text style={{ ...styles.RobotoRegular, ...style }}>{title}</Text>
    </>
  );
}

export function TextH2({ title, style }) {
  const [IsReady, SetIsReady] = useState(false);
  const LoadFonts = async () => {
    await useFonts();
  };
  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }
  return (
    <>
      <Text style={styles.TextH2}>{title}</Text>
    </>
  );
}

export function TextEmail({ title }) {
  const [IsReady, SetIsReady] = useState(false);
  const LoadFonts = async () => {
    await useFonts();
  };
  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }
  return (
    <>
      <Text style={styles.RobotoMediumEmail}>{title}</Text>
    </>
  );
}
export function TextName({ title }) {
  const [IsReady, SetIsReady] = useState(false);
  const LoadFonts = async () => {
    await useFonts();
  };
  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }
  return (
    <>
      <Text style={styles.RobotoMediumName}>{title}</Text>
    </>
  );
}
