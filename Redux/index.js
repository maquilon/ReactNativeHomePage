import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';

import SideMenu from 'react-native-side-menu';
import Header from './components/header';
import Menu from './components/menu';
import Content from './components/content';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    updateMenu(isOpen) {
        this.setState({ isOpen })
    }

    render() {
        return (
            <View style={[{ flex: 1 }, styles.container]}>
                <StatusBar
                    barStyle="light-content"
                />
                <SideMenu menu={<Menu />} isOpen={this.state.isOpen} onChange={(isOpen) => this.updateMenu(isOpen)} >

                    <Header toggle={this.toggle.bind(this)} />
                    <Content />
                </SideMenu>

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