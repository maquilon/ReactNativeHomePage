import React, { Component } from 'react'
import {
    Dimensions,
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableHighlight
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

const { width, height } = Dimensions.get('window')

class Menu extends Component {

    render() {
        return (
            <View >
                <View>
                    <View>
                        <Text style={styles.siteMap}>Site Map</Text>
                    </View>
                </View>
                <ScrollView style={styles.scrollContainer}>
                    <View >
                        <Text style={styles.textMenuOptions}>Home</Text>
                        <Text style={styles.textMenuOptions}>Reimbursements</Text>
                        <Text style={styles.textMenuOptions}>Prepaid</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    siteMap: {
        backgroundColor: '#C0C0C0',
        height: 60,
        fontSize: 25,
        color: '#FFFFFF',
        paddingVertical: 23,
        paddingLeft: 5
    },
    scrollContainer: {
        width: width / 2 + 59
    },
    textMenuOptions: {
        color: '#808080',
        fontSize: 20,
        paddingVertical: 10,
        paddingLeft: 5
    }
})

export default Menu