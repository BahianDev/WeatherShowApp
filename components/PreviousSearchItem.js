import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../utils/index'
import { AntDesign } from '@expo/vector-icons'

export default function PreviousSearchItem() {
    return (
        <View style={styles.main}>
            <View style={styles.cityView}>
                <View style={styles.separator}/>
                <View style={styles.nameCityView}>
                    <Text>São luís</Text>
                    <Text>MA, Brazil</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.fowardButton}>
                <AntDesign name="arrowright" size={24} color={colors.PRIMARY_COLOR} />   
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '95%',
        height: 60,
        backgroundColor: '#C0C0C0',
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cityView: {
        flexDirection: 'row',
        flex: 1,
    },
    nameCityView: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    fowardButton: {
        justifyContent: 'center',
        marginRight: 10,
    },
    separator: {
        height: '60%',
        marginLeft: 20,
        marginTop: 12,
        width: 5,
        borderRadius: 50,
        backgroundColor: colors.PRIMARY_COLOR 
    }
})
