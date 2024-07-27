import { Image, StyleSheet, Platform,View,Text, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"

import HomeScreen from "../../components/HomeScreen"
import SettingsScreen from "../../components/SettingsScreen"

export default function Home() {
  const TabNav = createBottomTabNavigator()

  const [count,setCount] = useState(0)

  const tabConfig = [
    {
      name:'Home',
      component:HomeScreen,
      focusedIcon:'home',
      unfocusedIcon:'home-outline',
      iconComponent:Ionicons
    },

    {
      name:'Settings',
      component:SettingsScreen,
      focusedIcon:'settings',
      unfocusedIcon:'settings-outline',
      iconComponent:Ionicons
    },
  ];

  const screenOptions = ({route}) => ({
    tabBarIcon: ({focused, color, size}) => {
      const routeConfig = tabConfig.find(config => config.name == route.name)
      const iconName = focused ? routeConfig?.focusedIcon : routeConfig?.unfocusedIcon
      const IconComponent = routeConfig?.iconComponent;

      return <IconComponent name={iconName} size={size} color={color} />;
    },

    tabBarLabelStyle:{
      fontSize:14,
      paddingBottom:5,
      fontWeight:600
    },
    tabBarActiveTintColor:"#0163d2",
    tabBarInactiveTintColor:"black",
    tabBarStyle: {
      height:60,
      paddingTop:0,
    }
  })

  return (
    // <NavigationContainer >
<TabNav.Navigator screenOptions={screenOptions}
// screenOptions={{
//   tabBarLabelStyle:{
//     fontSize:14,
//     paddingBottom:5,
//     fontWeight:600
//   },
//   tabBarActiveTintColor:"#0163d2",
//   tabBarInactiveTintColor:"black",
//   tabBarStyle: {
//     height:60,
//     paddingTop:0,
//   }
// }}

>

{tabConfig.map(routeConfig => (
    <TabNav.Screen key={routeConfig.name}
    name={routeConfig.name}
    component={routeConfig.component}
    />
  ))}

 
</TabNav.Navigator>
    // </NavigationContainer>
    // <View>
    //   <Text style={{marginTop:30}}>Counter</Text>
    //   <Text>{count}</Text>
    //   <TouchableOpacity onPress={()=>setCount(count+1)} style={styles.btn}><Text style={{color:`#fff`}}>Press me</Text></TouchableOpacity>
    // </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  btn: {
    backgroundColor: `blue`,
    color: `#fff`,
    paddingHorizontal: 20,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems:'center'
    
  }
});

 {/* <TabNav.Screen name="Home"
   options={{
    tabBarIcon:({focused}) => (
      <Ionicons name='home' size={28} color={focused ? "#0163d2" : "black"} />
    )
   }}
    component={HomeScreen} />
  <TabNav.Screen name="Settings" 
   options={{
    tabBarIcon:({focused}) => (
      <Ionicons name='settings' size={28} color={focused ? "#0163d2" : "black"} />
    )
   }}
    component={SettingsScreen} /> */}