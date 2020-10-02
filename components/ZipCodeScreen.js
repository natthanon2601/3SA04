import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet , ImageBackground, View, Text, FlatList, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Phuket', code: '83000'},
    { place: 'Songkla', code: '90000'},
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight underlayColor='#35d0ba'onPress={() => navigation.navigate('Weather', { zipCode: code })}>
        <View style={styles.Flexstyle}>
            <Text style = {styles.font}>{place}</Text>
            <Text style = {styles.font }>{code}</Text>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
             <ImageBackground source={require('../home.png')} style={styles.backdrop} >
            <FlatList 
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            <StatusBar style="auto" />
            </ImageBackground>
        </View>
    );

}

const styles = StyleSheet.create({
    Flexstyle: {   
        margin: 15,
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems : 'center',
    },
    backdrop: {
        width: '100%',
        height: '100%'
    },
    font: {
        color: '#050505',
        textAlign: 'center',
        fontWeight : 'bold',
        margin : 0.5,
        fontSize : 22,
    },

})
