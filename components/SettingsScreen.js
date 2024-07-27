import { Image, StyleSheet, Platform,View,Text, TouchableOpacity } from 'react-native';

export default function SettingsScreen (props) {
  return (
    <View>
        <Text style={styles.homeContainer}>
          {props.route.params.name}
          </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    homeContainer: {
      display:'flex',
      justifyContent : "center",
      alignItems:'center',
      fontSize:20,
      
    },
   
  });