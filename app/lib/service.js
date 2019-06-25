import { firebaseDb } from './firebase'
var studentData = {
    key:'',
    value: {
        firstName: '',
        lastName: '',
        dateofbirth: new Date(),
        age: '',
        education: '',
        doreno: '',
        vilage: '',
        district: '',
        state: '',
        specialization: ''
    }

};



var services = {
    savedata: function (data) {
        studentData = data;
    },
    getdata: function () {
        return studentData
    },
    clearData: function () {
        studentData = {
            key:'',
            value: {
                firstName: '',
                lastName: '',
                dateofbirth: new Date(),
                age: '',
                education: '',
                doreno: '',
                vilage: '',
                district: '',
                state: '',
                specialization: ''
            }
        }
    },
    addPerson: (item) => {
        firebaseDb.ref('/studentdetails').push({
            firstName: item.firstName,
            lastName: item.lastName,
            dateofbirth: item.dateofbirth,
            age: item.age,
            education: item.education,
            doreno: item.doreno,
            vilage: item.vilage,
            district: item.district,
            state: item.state,
            specialization: item.specialization
        })

    },

    updatePerson: (item, key) => {
        firebaseDb.ref().child('studentdetails').child(key).update({
            firstName: item.firstName,
            lastName: item.lastName,
            dateofbirth: item.dateofbirth,
            age: item.age,
            education: item.education,
            doreno: item.doreno,
            vilage: item.vilage,
            district: item.district,
            state: item.state,
            specialization: item.specialization
        });
    }
}

export default services;