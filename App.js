import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native-web';
import Weather from './component/Weather';
import Constants from 'expo-constants';
export default function App() {
    const doIt = () => {
        console.log("Hello from console")
        const image = { uri: "https://reactjs.org/logo-og.png" };
    }
    return (
        <View style={styles.container}>
           
            <Weather zipCode ="90110"></Weather>
            <StatusBar style="auto" />
            
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      paddingTop: Constants.StatusBarHeight,
      flex: 1,
    },
});
// {/* <View style={styles.container}>
//             <Weather zipCode="90110" />
//             <StatusBar style="auto" />
//             <Text>kpp</Text>
//         </View> */}