import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StatusBar, TouchableOpacity, AsyncStorage, Dimensions, BackHandler, ActivityIndicator, ImageBackground, TextInput } from 'react-native';
import Header from '../components/header'
import DatePicker from 'react-native-datepicker';
import services from '../lib/service';
import { Actions } from 'react-native-router-flux';
import styles from './styles';
export default class Studentdetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            age: 0,
            firstName: '',
            lastName: '',
            education: '',
            specialization: '',
            doreno: '',
            vilage: '',
            district: '',
            state: '',
            key: '',
            isUbdate: false,
            data: services.getdata()
        };
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
            Actions.home();
            return true;
        });
        this.setData()

    }


    setData = () => {
        let obj = this.state.data;
        if (!(obj.length === 0)) {
            this.setState({
                key: obj.key,
                date: obj.value.dateofbirth,
                age: obj.value.age,
                firstName: obj.value.firstName,
                lastName: obj.value.lastName,
                education: obj.value.education,
                specialization: obj.value.specialization,
                doreno: obj.value.doreno,
                vilage: obj.value.vilage,
                district: obj.value.district,
                state: obj.value.state,
                isUbdate: true
            });
        }
    }
    save = () => {
        let obj = {};
        obj.firstName = this.state.firstName
        obj.lastName = this.state.lastName
        obj.dateofbirth = this.state.date
        obj.age = this.state.age
        obj.education = this.state.education
        obj.specialization = this.state.specialization
        obj.doreno = this.state.doreno
        obj.vilage = this.state.vilage
        obj.district = this.state.district
        obj.state = this.state.state
        services.updatePerson(obj, this.state.key)
        Actions.home()

    }
    getAge = (dateString) => {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        this.setState({ age: age.toString() });
    }
    render() {
        return (


            <View style={styles.main}>
                <Header name='studentdetails' />
                <ScrollView>
                    <View style={styles.submain}>
                        <Text style={styles.text}>firstName:</Text>
                        <TextInput
                            style={styles.education}
                            placeholder=""
                            textShadowColor='white'
                            value={this.state.firstName}
                            placeholderTextColor={"white"}
                            onChangeText={(text) => this.setState({ firstName: text })}
                        />
                    </View>
                    <View style={styles.submain}>
                        <Text style={styles.text}>lastName:</Text>
                        <TextInput
                            style={styles.education}
                            placeholder="pasword "
                            textShadowColor='white'
                            value={this.state.lastName}
                            placeholderTextColor={"white"}
                            onChangeText={(text) => this.setState({ lastName: text })}
                        />
                    </View>
                    <View style={styles.submain}>
                        <Text style={styles.text}>dateofbirth:</Text>
                        <DatePicker
                            style={styles.datePicker}
                            date={this.state.date}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            showIcon={false}
                            customStyles={styles.dateCustom}
                            onDateChange={(date) => { this.setState({ date: date }, this.getAge(date)) }}

                        />
                    </View>
                    <View style={styles.submain}>
                        <Text style={styles.text}>Age:</Text>
                        <TextInput
                            style={styles.education}
                            placeholder="pasword "
                            textShadowColor='white'
                            editable={false}
                            value={this.state.age}
                            placeholderTextColor={"white"}
                            onChangeText={(text) => this.setState({ age: text })}
                        />
                    </View>
                    <View style={styles.submain}>
                        <Text style={styles.text}>education:</Text>
                        <TextInput
                            style={styles.education}
                            placeholder="pasword "
                            textShadowColor='white'
                            value={this.state.education}
                            placeholderTextColor={"white"}
                            onChangeText={(text) => this.setState({ education: text })}
                        />
                    </View>
                    <View style={styles.submain}>
                        <Text style={styles.text}>specalization:</Text>
                        <TextInput
                            style={styles.education}
                            placeholder="pasword "
                            textShadowColor='white'
                            value={this.state.specialization}
                            placeholderTextColor={"white"}
                            onChangeText={(text) => this.setState({ specialization: text })}
                        />
                    </View>
                    <Text style={styles.adress}>Adress</Text>
                    <View style={styles.submain}>
                        <Text style={styles.text}>dore no:</Text>
                        <TextInput
                            style={styles.education}
                            placeholder="pasword "
                            textShadowColor='white'
                            value={this.state.doreno}
                            placeholderTextColor={"white"}
                            onChangeText={(text) => this.setState({ doreno: text })}
                        />
                    </View>
                    <View style={styles.submain}>
                        <Text style={styles.text}>vilage:</Text>
                        <TextInput
                            style={styles.education}
                            placeholder="pasword "
                            textShadowColor='white'
                            value={this.state.vilage}

                            placeholderTextColor={"white"}
                            onChangeText={(text) => this.setState({ vilage: text })}
                        />
                    </View>
                    <View style={styles.submain}>
                        <Text style={styles.text}>distric:</Text>
                        <TextInput
                            style={styles.education}
                            placeholder="pasword "
                            textShadowColor='white'
                            value={this.state.district}
                            placeholderTextColor={"white"}
                            onChangeText={(text) => this.setState({ district: text })}
                        />
                    </View>
                    <View style={styles.submain}>
                        <Text style={styles.text}>state:</Text>
                        <TextInput
                            style={styles.education}
                            placeholder="pasword "
                            textShadowColor='white'
                            value={this.state.state}
                            placeholderTextColor={"white"}
                            onChangeText={(text) => this.setState({ state: text })}
                        />
                    </View>
                    <TouchableOpacity style={styles.loginTuch} onPress={() => { this.save() }}>
                        <Text style={styles.mainTuch}>update</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}