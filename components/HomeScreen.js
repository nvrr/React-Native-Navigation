
import { Image, StyleSheet, Platform,View,Text, TouchableOpacity, Button } from 'react-native';

export default function HomeScreen ({navigation}) {
  return (
    <View>
        <Text style={styles.homeContainer}>Home Screen</Text>
        <Button style={styles.homeContainer} title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
}

const styles = StyleSheet.create({
    homeContainer: {
      
      margin:'auto',
      justifyContent : "center",
      fontSize:50,
      marginHorizontal:20,
      
    },
   
  });