import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CreatePostsScreen from "../../Screens/CreatePostsScreen";
import PostsScreen from "../../Screens/PostsScreen";
import ProfileScreen from "../../Screens/ProfileScreen";
import { Plus, User, Window } from "../Svg/Svg";
import {SvgTabs,PlusTabs} from "./MyTabs";

const Tab = createBottomTabNavigator();
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Profile") {
            iconName = focused ? (
              <User style={{ stroke: "#FFFFFF" }} />
            ) : (
              <User style={{ stroke: "rgba(33, 33, 33, 0.8)" }} />
            );
          } else if (route.name === "Posts") {
            iconName = focused ? (
              <Window style={{ stroke: "#FFFFFF" }} />
            ) : (
              <Window style={{ stroke: "#212121" }} />
            );
          } else if (route.name === "CreatePosts") {
            iconName = focused ? (
              <Plus style={{ fill: "#FFFFFF" }} />
            ) : (
              <Plus style={{ fill: "rgba(33, 33, 33, 0.8)" }} />
            );
          }
          return  <SvgTabs name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#FF6C00",
        inactiveTintColor: "#FFFFFF",
      }}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}


export default Tabs;
