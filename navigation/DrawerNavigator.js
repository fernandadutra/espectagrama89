import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";
import { SafeAreaView, View, StyleSheet, Image, Text, FlatList } from "react-native";

const Drawer=createDrawerNavigator();
export default class DrawerNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      light_theme: true
    };
  }

  componentDidMount() {
    let theme;
    firebase
      .database()
      .ref("/users/" + firebase.auth().currentUser.uid)
      .on("value", function (snapshot) {
        theme = snapshot.val().current_theme;
      });
    this.setState({ light_theme: theme === "light" ? true : false });
  }

  render() {
    let props = this.props;
    return (
      <Drawer.Navigator
       drawerContentOptions={{
        activeTintColor:"e91e63",
        inactiveTintColor:this.state.light_theme?"black":"white",
        itemStyle:{marginVertical:5}
       }}
      >
        <Drawer.Screen
          name="Tela Inicial"
          component={StackNavigator}
          options={{ unmountOnBlur: true }}
        />
        <Drawer.Screen
          name="Perfil"
          component={Profile}
          options={{ unmountOnBlur: true }}
        />
        <Drawer.Screen
          name="Logout"
          component={Logout}
          options={{ unmountOnBlur: true }}
        />
      </Drawer.Navigator>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"red",},
  
      droidSafeArea:{
        marginTop:Plataform.OS==="android"?StatusBar.currentHeight:RFValue(35),
      },
  
      appTitle:{
        flex:0.07,
        flexDirection:"row"
      },
  
      appIcon:{
        flex:0.2,
        justifyContent:"center",
        alignItems:"center"
      },
  
      iconImage:{
        width:"100%",
        height:"100%",
        resizeMode:"contain"
      },
  
      appTitleTextContainer:{
        flex:0.8,
        justifyContent:"center"
      },
  
      appTitleText:{
        color:"white",
        fontSize:RFValue(28)
      },
  
      cardContainer:{
        flex:0.85
      }
  });

 