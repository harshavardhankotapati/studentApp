import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StatusBar, TouchableOpacity, AsyncStorage, Dimensions, BackHandler, ActivityIndicator, ImageBackground, TextInput } from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View>
                <StatusBar backgroundColor='#336dcc' />
                <View style={{ height: 70, backgroundColor: '#336dcc' ,justifyContent:'center',alignContent:'center'}}><Text style={{color:'white',fontSize:22,alignSelf:'center'}}>{this.props.name}</Text></View>
            </View>
        );
    }
}