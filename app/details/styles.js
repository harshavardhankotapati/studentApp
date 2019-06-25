import React, { Component } from 'react';

export default {
    main: { alignItems: 'center' },
    Text: { alignSelf: 'flex-start', left: 60, fontSize: 16, color: 'black' },
    mainView: { flex: 1 },
    textInput: { margin: 10, borderColor: "black", borderWidth: 1, height: 50, width: "70%", alignSelf: 'center', paddingLeft: 40, color: "black" },
    datePicker: { margin: 10, borderColor: "black", borderWidth: 1, height: 50, width: '70%', alignSelf: 'center', color: "black" },
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

    }
};