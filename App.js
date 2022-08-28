import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './screen/ZipCodeScreen';
import WeatherScreen from './screen/WeatherScreen';

export default function App() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={ZipCodeScreen} />
                <Stack.Screen name="Weather" component={WeatherScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

// {/* <View style={styles.container}>
//             <Weather zipCode="90110" />
//             <StatusBar style="auto" />
//             <Text>kpp</Text>
//         </View> */}