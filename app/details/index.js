import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StatusBar, TouchableOpacity, AsyncStorage, Dimensions, BackHandler, ActivityIndicator, ImageBackground, TextInput, Picker, Alert } from 'react-native';
import Header from '../components/header'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { Actions } from 'react-native-router-flux';
import Moment from 'moment';
import DatePicker from 'react-native-datepicker';
import services from '../lib/service';
import styles from './styles';
import { firebaseDb } from '../lib/firebase';
const item = firebaseDb.ref('/studentdetails')

export default class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            age: 0,
            firstName: '',
            lastName: '',
            education: '',
            doreno: '',
            vilage: '',
            district: '',
            state: '',
            key: '',
            isUbdate: false,
            data: services.getdata()
        }
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
            Actions.home();
            return true;
        });
        this.reset()
    }


    reset = () => {
        this.setState({
            firstName: '',
            lastName: '',
            dateofbirth: '',
            age: '',
            education: '',
            doreno: '',
            vilage: '',
            district: '',
            state: '',
            specialization: ''
        })
    }
    save = () => {
        if (this.state.doreno === '' || this.state.doreno === null && this.state.vilage === '' || this.state.vilage === null && this.state.district === '' || this.state.district === null && this.state.state === '' || this.state.state === null) {
            Alert.alert(
                'fill the required fealds'
            )
        } else {
            if (this.state.doreno === '' || this.state.doreno === null) {
                Alert.alert(
                    'plzz give dore-No'
                )
            } else {

                if (this.state.vilage === '' || this.state.vilage === null) {
                    Alert.alert(
                        'plzz give last name'
                    )
                } else {
                    if (this.state.state === '' || this.state.state === null) {
                        Alert.alert(
                            'plzz give state name'
                        )
                    } else {
                        if (this.state.district === '' || this.state.district === null) {
                            Alert.alert(
                                'plzz give district'
                            )
                        } else {
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
                            services.addPerson(obj)
                            Actions.home()

                        }
                    }
                }
            }

        }


    }

    fisrtNext = () => {
        if (this.state.firstname === '' || this.state.firstname === null && this.state.lastName === '' || this.state.lastName === null && this.state.date === new date() || this.state.date === null) {
            Alert.alert(
                'fill the required fealds'
            )
        } else {
            if (this.state.firstName === '' || this.state.firstname === null) {
                Alert.alert(
                    'plzz give first name'
                )
            } else {

                if (this.state.lastName === '' || this.state.lastName === null) {
                    Alert.alert(
                        'plzz give last name'
                    )
                } else {

                    if (this.state.date === new Date() || this.state.date === null) {
                        Alert.alert(
                            'plzz give last name'
                        )
                    } else {

                    }
                }
            }

        }
    }
    secondNext = () => {
        if (this.state.education === '' || this.state.education === null && this.state.specialization === '' || this.state.specialization === null) {
            Alert.alert(
                'fill the required fealds'
            )
        } else {
            if (this.state.education === '' || this.state.education === null) {
                Alert.alert(
                    'plzz give education'
                )
            } else {

                if (this.state.specialization === '' || this.state.specialization === null) {
                    Alert.alert(
                        'plzz give spclization'
                    )
                } else {


                }
            }

        }
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
            <View style={styles.mainView} >
                <Header name='D E T A I L S' />
                <ProgressSteps>
                    <ProgressStep label="persenal fealds" onNext={() => { this.fisrtNext() }}>

                        <View style={styles.main}>
                            <Text style={styles.Text}>First Name :</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder="first Name"
                                placeholderTextColor={"black"}
                                value={this.state.firstName}
                                onChangeText={(text) => this.setState({ firstName: text })}

                            />
                            <Text style={styles.Text}>last Name </Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder="last name "
                                textShadowColor='white'
                                value={this.state.lastName}
                                placeholderTextColor={"black"}
                                onChangeText={(text) => this.setState({ lastName: text })}

                            />
                            <Text style={styles.Text}> date of birth</Text>
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
                            <Text style={styles.Text}>Age</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder="age"
                                textShadowColor='white'
                                editable={false}
                                value={this.state.age}
                                placeholderTextColor={"black"}
                            />
                        </View>
                    </ProgressStep>
                    <ProgressStep label="Education fealds" onNext={() => { this.secondNext() }}>
                        <View style={styles.main}>
                            <Text style={styles.Text}>select education</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder="education cualification"
                                textShadowColor='white'
                                placeholderTextColor={"black"}
                                value={this.state.education}
                                onChangeText={(text) => this.setState({ education: text })}
                            />
                            <Text style={styles.Text}>specialization</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder=" specialization"
                                textShadowColor='white'
                                placeholderTextColor={"black"}
                                value={this.state.specialization}
                                onChangeText={(text) => this.setState({ specialization: text })}
                            />
                        </View>
                    </ProgressStep>
                    <ProgressStep label="Adress fealds" onSubmit={() => { this.save() }}>
                        <Text style={styles.Text}>Adress</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="doreno,line"
                            placeholderTextColor={"black"}
                            value={this.state.doreno}
                            onChangeText={(text) => this.setState({ doreno: text })}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder="location(or)vilge (or) city"
                            textShadowColor='white'
                            placeholderTextColor={"black"}
                            value={this.state.vilage}
                            onChangeText={(text) => this.setState({ vilage: text })}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder="district"
                            textShadowColor='white'
                            placeholderTextColor={"black"}
                            value={this.state.district}
                            onChangeText={(text) => this.setState({ district: text })}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder="state"
                            textShadowColor='white'
                            value={this.state.state}
                            placeholderTextColor={"black"}
                            onChangeText={(text) => this.setState({ state: text })}
                        />
                    </ProgressStep>
                </ProgressSteps>
            </View>
        )
    }

}