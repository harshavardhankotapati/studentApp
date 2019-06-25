import React, { Component } from 'react';

export default {
    dateCustom: {

        dateIcon: {
            position: 'absolute',
            left: 0,
            marginLeft: 0
        },
        dateTouch: {
            height: 100,
            width: '100%'
        },
        dateTouchBody: {

        },
        dateInput: {
            height: 50,
            top: 5,

        }

    },
    main: { flex: 1 },
    adress:{ fontSize: 20, color: 'black', margin: 10, alignSelf: 'center',fontweight:'400'},
    text: { fontSize: 16, color: 'black', marginTop: 20 },
    submain: { flexDirection: 'row', margin: 10, justifyContent: 'space-between' },
    loginTuch: { backgroundColor: "green", height: 40, width: 100, borderRadius: 8, justifyContent: "center", alignItems: "center", margin: 10, alignSelf: 'flex-end' },
    mainTuch: { fontSize: 16, color: 'white' },
    education: { margin: 10, borderColor: "black", borderWidth: 1, height: 50, width: "70%", alignSelf: 'center', paddingLeft: 40, color: "black" },
    datePicker: { margin: 10, borderColor: "black", borderWidth: 1, height: 50, width: '70%', alignSelf: 'center', color: "black" },
};