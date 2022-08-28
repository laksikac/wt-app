import React from 'react';
import { Text, View, StyleSheet } from "react-native-web";
export default function Forecast(props) {
    return (
        <View style ={styles.wrap}>
            <Text style ={styles.text}>{props.main}</Text>
            <Text style ={styles.text} >{props.description}</Text>
            <View style = {styles.temp}>
                <Text style ={styles.text}>{props.temp}</Text>
                <Text style ={styles.text}>°C</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    temp:{
        flexDirection: 'row',
        
    },
    wrap:{
        fontSize: 30,
    fontWeight: "bold",
        flexDirexction: 'column',
        alignItems: 'center',
    },
    text:{
        fontSize: 30,
    fontWeight: "bold",
        
    }
})