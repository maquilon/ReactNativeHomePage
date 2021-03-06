import React from 'react'
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'  // No olvidar react-native link and run the app in xCode

const Content = props => {
    return (
        <View style={styles.container}>
            <View style={styles.contentReimbursements}>
                <View style={styles.reimbursements} >
                    <Icon name="credit-card" size={25} color="#0066FF" />
                    <Text style={styles.titlePanel}>Reimbursements</Text>
                </View>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonReimbursement}>START A NEW REIMBURSEMENT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 80,
        backgroundColor: '#DCDCDC',
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    contentReimbursements: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#FFFFFF',
        height: 150,
        width: width / 2 + 160,
        borderRadius: 10,
    },
    reimbursements: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    buttonReimbursements: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        height: 80,
        borderRadius: 10,
    },
    titlePanel: {
        fontSize: 20
    },
    buttonContainer: {
        backgroundColor: '#0066ff',
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 15
    },
    buttonReimbursement: {
        color: '#FFFFFF',
        fontWeight: '500',
        textAlign: 'center'
    }
})

export default Content