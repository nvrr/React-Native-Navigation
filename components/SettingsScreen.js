import { Image, StyleSheet, Platform,View,Text, TouchableOpacity } from 'react-native';

export default function SettingsScreen () {
  return (
    <View>
        <Text style={styles.homeContainer}>Settings Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    homeContainer: {
      justifyContent : "center",
      alignItems:'center'
    },
   
  });