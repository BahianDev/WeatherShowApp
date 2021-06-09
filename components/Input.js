import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default function Input() {
    return (
        <TextInput
            style={styles.input}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,   
        borderRadius: 15,
        borderColor: '#DCDCDC' 
    }
});
