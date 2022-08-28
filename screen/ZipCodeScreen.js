import React from "react";
import { FlatList, View, Text, StatusBar, StyleSheet } from "react-native-web";
import { TouchableHighlight } from "react-native-gesture-handler";
import {useNavigation} from '@react-navigation/native'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code})}>
        <View style={styles.zipItems}>
            <Text>{place}</Text>
            <Text>{code}</Text>
        </View>
    </TouchableHighlight>
)
// const _keyExtractor = item => item.code
export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <FlatList
                data={availableZipItems}
                keyExtractor={item => item.code}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation}/>}
            />
            <StatusBar style="auto" />
        </View>
    );

}

const styles = StyleSheet.create({
    zipItems: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection:
            'row',
        justifyContent:
            'space-between',
        
     
       

    },
   

})


