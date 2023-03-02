import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CreatePostsScreen from "./Screens/CreatePostsScreen";


import PostsScreen from "./Screens/PostsScreen";
import RegisterForm from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";
import CommentsScreen from "./Screens/CommentsScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import Tabs from "./components/MyTabs/Tabs";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="auto" />
      <MainStack.Navigator initialRouteName="Post">
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Register"
          component={RegisterForm}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Post"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="CreatePosts"
          component={CreatePostsScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
