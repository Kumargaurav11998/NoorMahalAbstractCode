import { StyleSheet } from 'react-native'
import { heightToDp, widthToDp } from '../../Utils/Responsive'

const AboutStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    TopView: {
        flexDirection: 'row',
        marginEnd: widthToDp('4'),
        marginTop: heightToDp('4'),
        justifyContent: 'space-between'
    },
    AboutView: {
        marginStart: widthToDp('6')
    },
    AboutText: {
        color: '#000',
        fontSize: widthToDp('6'),
        fontWeight: 'bold'
    },
    Grid: {
        justifyContent: 'center'
    },
    MainView: {
        flex: 1
    },
    View: {
        alignItems: 'center'
    },
    AboutBox: {
        flexDirection: 'row',
        marginTop: heightToDp('2'),
        width: widthToDp('90'),
        height: heightToDp('8'),
        borderRadius: widthToDp('2'),
        elevation: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    BoxView: {
        marginStart: widthToDp('4'),
        width: widthToDp('75')
    },
    BoxText: {
        color: '#000'
    },
    ShowView: {
        height: heightToDp('10'),
        elevation: 0.5,
        backgroundColor: '#fff',
        bottom: heightToDp('1'),
        borderBottomStartRadius: widthToDp('3'),
        borderBottomEndRadius: widthToDp('3'),
        flexDirection: 'row',
        alignItems: 'center'
    },
    ShowText1: {
        color: '#000',
        fontSize: widthToDp('4'),
        paddingStart: widthToDp('4')
    },
    ShowText2: {
        color: '#000',
        fontSize: widthToDp('4'),
        paddingStart: widthToDp('2'),
        fontWeight: 'bold'
    },
    Show1: {
        height: heightToDp('10'),
        elevation: 0.5,
        backgroundColor: '#fff',
        bottom: heightToDp('1'),
        borderBottomStartRadius: widthToDp('3'),
        borderBottomEndRadius: widthToDp('3'),
        justifyContent: 'center'
    },
    Show1View:{
        marginStart:widthToDp('4')
    },
    BackMainView: {
        height: heightToDp('0.1')
    },
    MainBackView: {
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
});

export default AboutStyles;