
import { Image, StyleSheet, Platform,View,Text, TouchableOpacity, Button } from 'react-native';

// export default function HomeScreen ({navigation}) {
  export default function HomeScreen (props) {
  return (
    <View>
        <Text style={styles.homeContainer}>Home Screen</Text>
        {/* <Button style={styles.homeContainer} title="Go to Settings" onPress={() => navigation.navigate('Settings')} /> */}
        <Button title="Settings" onPress={(() => props.navigation.navigate('Ssettings', { name:"Lawdaaaa"}))}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    homeContainer: {
      display:'flex',
      margin:'auto',
      justifyContent : "center",
      fontSize:50,
      marginHorizontal:20,
      height:"50%"
    },
   
  });