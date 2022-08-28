import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from "react-native-web"

import Forecast from './Forecast';


export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=8e95fc6e73ad4bdebe8e74ec296e5709`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])
    return (
        <View>
            <ImageBackground source={require('../sky.png')} style={styles.backdrop}>
                <View style={styles.container}>
                    <Text>Zip Code</Text>
                    <Text>{props.zipCode}</Text>
                    <Forecast {...forecastInfo} />
                </View>
            </ImageBackground>
        </View>

    );
}

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        width: '100%',
        height: '100%',

    },
    container: {
        
        backgroundColor: '#ffb6c1',
        opacity: 0.4,
        height: '50%',
        flexDirexction: 'column',
        alignItems: 'center',
    }
})