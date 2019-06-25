import React, { Component } from 'react';

export default {
    main: { flex: 1 },
    adress: {
        fontSize: 12,
        color: 'black'
    },
    education: {
        fontSize: 16,
        color: '#336dcc',
        marginTop: 5
    },
    mainTuch: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: { height: 180, backgroundColor: 'white', margin: 10, width: '95%', flexDirection: 'row', elevation: 4 },
    colorSide: { height: 180, width: '10%', backgroundColor: '#336dcc', },
    sideView: { margin: 10, width: '80%' },
    mainName: { fontSize: 18, color: 'black' },
    rowView: { flexDirection:'row',justifyContent:'space-between' },
    rowText: { fontSize: 13, color: 'black' },
    colorline: { height: 3, width: '100%', backgroundColor: '#336dcc', },
    delete: { fontSize: 12, color: 'red', alignSelf: 'flex-end' }
};