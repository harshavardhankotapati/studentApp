import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StatusBar, TouchableOpacity, AsyncStorage, RefreshControl, BackHandler, ActivityIndicator, ImageBackground, TextInput } from 'react-native';
import Header from '../components/header'
import { Actions } from 'react-native-router-flux';
import ActionButton from 'react-native-action-button';
import { firebaseDb } from '../lib/firebase'
import styles from './styles';
import services from '../lib/service';
const item = firebaseDb.ref('/studentdetails')


export default class Home extends Component {
    state = {
        dataForm: [],
        refreshing: false,
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
            Actions.login();
            return true;
        });
        this.getdata();

    }
    getdata = () => {
        let arr = [];
        item.on("value", snap => {
            let pass = snap.val();
            pass ? Object.keys(pass).forEach(key => {
                let obj = {};
                obj.key = key,
                    obj.value = pass[key];
                arr.push(obj);

                this.setState({ dataForm: arr });

            }) : null;
        });
    }
    set = (data) => {
        services.savedata(data);
        Actions.studsentdetail()
    }
    delete = (data) => {
        let userRef = firebaseDb.ref('/studentdetails/' + data)
        userRef.remove()
    }

    render() {
        const showData = this.state.dataForm && this.state.dataForm.map((itemList, s) => {
            return (
                <TouchableOpacity style={styles.mainTuch} key={s} onPress={() => { this.set(itemList) }}>
                    <View style={styles.card}>
                        <View style={styles.colorSide}>
                        </View>
                        <View style={styles.sideView}>
                            <Text style={styles.mainName}>{itemList.value.firstName}.{itemList.value.lastName}</Text>
                            <View style={styles.rowView}>
                                <Text style={styles.rowText}>AGE:{itemList.value.age}</Text>
                                <Text style={styles.rowText}>DATA Of BIRTH:{itemList.value.dateofbirth}</Text>
                            </View>
                            <View style={styles.colorline}>
                            </View>
                            <Text style={styles.education}>{itemList.value.education}</Text>
                            <View style={{ marginTop: 10 }}>
                                <Text style={styles.adress}>{itemList.value.doreno}</Text>
                                <Text style={styles.adress}>{itemList.value.vilage}</Text>
                                <Text style={styles.adress}>{itemList.value.district}</Text>
                                <Text style={styles.adress}>{itemList.value.state}</Text>
                            </View>
                            <TouchableOpacity onPress={() => { this.delete(itemList.key) }}>
                                <Text style={styles.delete}>delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        });

        return (
            <View style={styles.main}>
                <Header name='H O M E' />
                <View style={styles.main} >
                    <ScrollView refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.delete()}

                        />
                    }>
                        {showData}
                    </ScrollView>
                    <ActionButton buttonColor="#336dcc" activeOpacity={2} onPress={() => { Actions.details() }}>
                    </ActionButton ></View>
            </View>
        );

    }
}