import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { colors } from '../utils/index'

export default function PrimaryButton(props) {
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            {props.children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      width: 100,
      padding: 15,
      backgroundColor: colors.PRIMARY_COLOR,
      color: 'white',
      borderRadius: 10,
    }
});
