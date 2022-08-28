import React from 'react';
import { Text, View, StyleSheet } from "react-native-web";
export default function Forecast(props) {
    return (
        <View style ={styles.wrap}>
            <Text>{props.main}</Text>
            <Text>{props.description}</Text>
            <View style = {styles.temp}>
                <Text>{props.temp}</Text>
                <Text>°C</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    temp:{
        flexDirection: 'row',
        
    },
    wrap:{
        flexDirexction: 'column',
        alignItems: 'center',
    }
})