import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
export default function App() {
 const doIt = () => {
 console.log("Hello from console")
 }
 return (
 <View style={styles.container}>
 <Text onPress={doIt}>Hello world</Text>
 <View style={{width :50 , height:50, backgroundColor: '#00f'}}></View>
 <View style={{width :50 , height:50, backgroundColor: '#0f0'}}></View>
 <StatusBar style="auto" hidden ={false}/>
 </View>
 );
}
const styles = StyleSheet.create({
 container: {
 flex: 1,
 backgroundColor: '#fff',
 alignItems: 'center',
 justifyContent: 'center',
 },
});