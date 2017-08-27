import React from 'react'
import {Text, View,StyleSheet,TouchableWithoutFeedback,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'  // No olvidar react-native link and run the app in xCode

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
            <Image style={styles.logo} source={require('../images/ClassWalletNew.png')} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#0066FF',
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    logo: {
        width: 280,
        height: 40
    }
})

export default Header