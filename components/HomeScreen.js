
import { Image, StyleSheet, Platform,View,Text, TouchableOpacity, Button } from 'react-native';

export default function HomeScreen ({navigation}) {
  return (
    <View>
        <Text style={styles.homeContainer}>Home Screen</Text>
        <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
}

const styles = StyleSheet.create({
    homeContainer: {
      // justifyContent : "center",
      alignItems:'center',
      textAlign:'center',
      justifyContent:'center',
      alignContent:"center",
      margin:"auto",
      width:"100%",
      height:"100%"
      
    },
   
  });