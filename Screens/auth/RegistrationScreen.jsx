import { useState } from "react";
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from "react-native";
import Button from "../../components/Button/ButtonAuth";
import ButtonTouchable from "../../components/Button/ButtonTouchable";
import RegisterFormImg from "../../components/ImgUser/RegisterFormImg";
import { H3Text, TextH1 } from "../../components/Text/Text";

import { styles } from "./styles";
function RegisterForm({ navigation }) {
  const [login, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);
  const [fileResponse, setFileResponse] = useState("");

  const inputHandlerLogin = (text) => setValue(text);
  const inputHandlerEmail = (text) => setEmail(text);
  const inputHandlerPasswod = (text) => setPassword(text);
  const secureTextEntry = () => {
    secureText ? setSecureText(false) : setSecureText(true);
  };

  async function HendelSumdit() {
    console.log(
      "Register",
      `email-${email}`,
      `password-${password}`,
      `-login-${login}`,
      fileResponse
    );
    await navigation.navigate("Post");
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ImageBackground
          source={require("../../assets/PhotoG.png")}
          style={{ width: "auto", height: 812 }}
        >
          <View style={styles.authRegister}>
            <RegisterFormImg
              fileResponse={fileResponse}
              setFileResponse={setFileResponse}
            />
            <KeyboardAvoidingView
              style={styles.containerKeyboardRegister}
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <View style={styles.title}>
                <TextH1 title={"Регистрация"}></TextH1>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Логин"
                value={login}
                onChangeText={inputHandlerLogin}
              />
              <TextInput
                style={styles.input}
                placeholder="Адрес электронной почты"
                value={email}
                onChangeText={inputHandlerEmail}
              />
              <View>
                <TextInput
                  textContentType={password}
                  style={styles.input}
                  placeholder="Пароль"
                  secureTextEntry={secureText}
                  value={password}
                  onChangeText={inputHandlerPasswod}
                />
                <Button
                  Boolean={false}
                  title={"Показать"}
                  onPress={secureTextEntry}
                />
              </View>
            </KeyboardAvoidingView>
            <Button
              Boolean={true}
              style={{ backgroundColor: "#FF6C00" }}
              title={"Зарегистрироваться"}
              onPress={HendelSumdit}
            />
            <View style={styles.navigate}>
              <H3Text Boolean={true} title={"Нет аккаунта?"} />
              <ButtonTouchable
                title="Войти"
                onPress={() => navigation.navigate("Login")}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default RegisterForm;
