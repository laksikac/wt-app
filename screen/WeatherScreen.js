import React from "react";
import Weather from "../component/Weather";
import { View, StatusBar } from "react-native-web";

export default function WeatherScreen({ route }) {
    return (
        <View>
            <Weather zipCode={route.params.zipCode} />
            <StatusBar style="auto" />
        </View>
    );
}
