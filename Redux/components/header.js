import React from 'react'
import {Text, View,StyleSheet,TouchableWithoutFeedback,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'  // No olvidar react-native link 

const Header = props => {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => props.toggle()}>
                <Icon 
                    name="bars"
                    color="white"
                    size={25}
                />
            </TouchableWithoutFeedback>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#0066FF',
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    logo: {
        width: 120,
        height: 40
    }
})

export default Header