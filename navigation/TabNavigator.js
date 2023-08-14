import { CreateBottomNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
const Tab=createMaterialBottomTabNavigator();
const BottomTabNavigator=()=>{
  return (
    <Tab.Navigator
    labeled={false}
    barStyle={styles.bottomTabStyle}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Feed") {
            iconName = focused ? "book" : "book-outline";
          } else if (route.name === " CreatePost") {
            iconName = focused ? "create" : "create-outline";
          }
          return (
            <Ionicons name={iconName} size={size} color={color}></Ionicons>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="CreatePost" component={CreatePost} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute",
  },

  icons: { width: RFValue(30), height: RFValue(30) },
  
  container: {
      flex: 1,
      backgroundColor: "#15193c",
    },
    containerLight: {
      flex: 1,
      backgroundColor: "white",
    },
    droidSafeArea: {
      marginTop:
        Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
    },
    appTitle: {
      flex: 0.07,
      flexDirection: "row",
    },
    appIcon: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center",
    },
    iconImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain",
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center",
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
      fontFamily: "Bubblegum-Sans",
    },
    appTitleTextLight: {
      color: "black",
      fontSize: RFValue(28),
      fontFamily: "Bubblegum-Sans",
    },
    screenContainer: {
      flex: 0.85,
    },
    profileImageContainer: {
      flex: 0.5,
      justifyContent: "center",
      alignItems: "center",
    },
    profileImage: {
      width: RFValue(140),
      height: RFValue(140),
      borderRadius: RFValue(70),
    },
  
    nameText: {
      color: "white",
      fontSize: RFValue(40),
      fontFamily: "Bubblegum-Sans",
      marginTop: RFValue(10),
    },
    nameTextLight: {
      color: "black",
      fontSize: RFValue(40),
      fontFamily: "Bubblegum-Sans",
      marginTop: RFValue(10),
    },
    themeContainer: {
      flex: 0.2,
      flexDirection: "row",
      justifyContent: "center",
      marginTop: RFValue(20),
    },
    themeText: {
      color: "white",
      fontSize: RFValue(30),
      fontFamily: "Bubblegum-Sans",
      marginRight: RFValue(15),
    },
    themeTextLight: {
      color: "black",
      fontSize: RFValue(30),
      fontFamily: "Bubblegum-Sans",
      marginRight: RFValue(15),
    },
  });


export default BottomTabNavigator();