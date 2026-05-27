import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ResultCard({resultado}) {
    return (
        <View> 
        <Text style={styles.ResultCard}>{resultado}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    ResultCard: {
        width: 220,
        margin: 60,
        padding: 10,
        backgroundColor: '#2196f3',
        color: 'white',
        fontSize: 15,
        borderRadius: 10,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})