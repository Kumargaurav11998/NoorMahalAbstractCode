import { StyleSheet } from 'react-native'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
const Styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff'
    },
    TopView: {
        flexDirection: 'row',
        marginTop: heightToDp('5'),
        marginStart: widthToDp('3'),
        justifyContent: 'space-between'
    },
    TopTextView: {
        marginStart: widthToDp('5')
    },
    TopText: {
        color: '#000',
        fontSize: widthToDp('6'),
        fontWeight: 'bold'
    },
    Icon1: {
        marginEnd: widthToDp('6')
    },
    ChildView: {
        marginTop: heightToDp('4'),
        marginBottom:heightToDp('1')
    },
    Code: {
        marginStart: widthToDp('15')
    },
    CodeText: {
        color: 'rgb(255,91,5)'
    },
    Name: {
        marginStart: widthToDp('6'),
        marginTop: heightToDp('1.5')
    },
    NameText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: widthToDp('4')
    },
    // Call: {
    //     borderWidth: 1,
    //     width: widthToDp('15'),
    //     marginEnd: widthToDp('7'),
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderRadius: widthToDp('1.5'),
    //     height: heightToDp('4')
    // },
    // CallText: {
    //     fontSize: widthToDp('4'), color: '#000'
    // },
    Date: {
        marginStart: widthToDp('6'),
        marginTop: heightToDp('0.7')
    },
    DateText: {
        color: '#000'
    },
    // Time: {
    //     marginStart: widthToDp('6'),
    //     marginTop: heightToDp('0.7')
    // },
    // TimeText: {
    //     color: '#000'
    // },
    Guest: {
        color: '#000'
    },
    TableCancel: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: heightToDp('2')
    },
    Cancel: {
        borderWidth: 1,
        width: widthToDp('35'),
        height: heightToDp('5'),
        borderRadius: widthToDp('20'),
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgb(0,155,68)'
    },
    CancelText: {
        fontSize: widthToDp('4'),
        color: 'rgb(0,155,68)',
        fontWeight: 'bold'
    },
    Table: {
        flexDirection: 'row', alignItems: 'center'
    },
    TableText: {
        color: 'rgb(0,155,68)', fontSize: widthToDp('4')
    },
    Icon: {
        marginStart: widthToDp('3')
    },
    UnderLine: {
        marginTop: heightToDp('4'),
        alignItems: 'center'
    },
    UnderLineText: {
        fontSize: 1,
        borderBottomWidth: 1,
        color: "#a9a9a9",
        width: widthToDp('85')
    },
    BackMainView: {
        height: heightToDp('0.1')
    },
    MainView: {
        bottom: heightToDp('10'),
        width: widthToDp('25')
    },
    BackView: {
        height: heightToDp('8.5'),
        width: widthToDp('17.5'),
        borderRadius: widthToDp('15'),
        marginStart: widthToDp('5'),
        marginBottom: heightToDp('1'),
        backgroundColor: 'rgb(255,130,50)',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Styles