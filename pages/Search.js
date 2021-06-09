import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import Input from '../components/Input'
import PreviousSearchItem from '../components/PreviousSearchItem'
import { MaterialIcons } from '@expo/vector-icons'

export default function Search() {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 18, marginTop: 50, marginLeft: 10}}>Type your location here</Text>
            <Input />
            <View style={styles.row}>
                <PrimaryButton> 
                    <Text style={{color: 'white'}}>Submit</Text>
                </PrimaryButton>
                <PrimaryButton>
                    <MaterialIcons name="gps-fixed" size={24} color="white" />
                </PrimaryButton>
            </View>
            <View style={styles.previous}>
                <Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'left', marginBottom: 10}}>Previous Searches</Text>
                <PreviousSearchItem />
                <PreviousSearchItem />
                <PreviousSearchItem />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
    },
    previous: {

        marginLeft: 10
    }
})