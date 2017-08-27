import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

// import SideMenu from 'react-native-side-menu';
import Header from './components/header';

class App extends Component {
    render() {
        return (
            <View style={[{ flex: 1 } , styles.container]}>
                <Header/>
                <Text>Testing</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF'
    }
})

export default App