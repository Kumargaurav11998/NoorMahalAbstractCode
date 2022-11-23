import { StyleSheet } from 'react-native'
import { heightToDp, widthToDp } from '../../Utils/Responsive'

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    TopView: {
        flexDirection: 'row',
        marginTop: heightToDp('4'),
        marginStart: widthToDp('3'),
        justifyContent:'space-between'
    },
    TextView: {
        marginStart: widthToDp('5')
    },
    TopText: {
        color: '#000',
        fontSize: widthToDp('6'),
        fontWeight: 'bold'
    },
    Icon:{
marginEnd:widthToDp('6')
    },
    MainView: {
        marginTop: heightToDp('4')
    },
    BoxView: {
        marginTop: heightToDp('4')
    },
    CodeView: {
        marginStart: widthToDp('15')
    },
    CodeText: {
        color: 'rgb(255,91,5)'
    },
    CallNameFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    NameView: {
        marginStart: widthToDp('6'),
        marginTop: heightToDp('1.5')
    },
    NameText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: widthToDp('4')
    },
    CallView: {
        borderWidth: 1,
        width: widthToDp('15'),
        marginEnd: widthToDp('6'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: widthToDp('1'),
        height: heightToDp('4'),
    },
    CallText: {
        color: '#000',
        fontSize: widthToDp('4')
    },
    PriceView: {
        marginStart: widthToDp('6'),
        marginTop: heightToDp('1.5')
    },
    PriceText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: widthToDp('4')
    },
    DateView: {
        marginStart: widthToDp('6'),
        marginTop: heightToDp('0.7')
    },
    DateText: {
        color: '#000'
    },
    TimeView: {
        marginStart: widthToDp('6'),
        marginTop: heightToDp('0.7')
    },
    InMainView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginStart: widthToDp('7'),
        marginTop: heightToDp('1')
    },
    InText: {
        color: 'rgb(0,155,68)',
        fontSize: widthToDp('4')
    },
    IconView: {
        marginStart: widthToDp('3')
    },
    ButtonView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: heightToDp('2')
    },
    Ready: {
        borderWidth: 1,
        width: widthToDp('40'),
        height: heightToDp('5'),
        borderRadius: widthToDp('20'),
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgb(0,155,68)'
    },
    ReadyText: {
        fontSize: widthToDp('4'),
        color: 'rgb(0,155,68)',
        fontWeight: 'bold'
    },
    ViewButton: {
        borderWidth: 1,
        width: widthToDp('30'),
        height: heightToDp('5'),
        borderRadius: widthToDp('20'),
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgb(0,155,68)'
    },
    ViewText: {
        fontSize: widthToDp('5'),
        color: 'rgb(0,155,68)',
        fontWeight: 'bold'
    },
    UnderLine: {
        marginTop: heightToDp('4'),
        alignItems: 'center'
    },
    BackButton: {
        height: heightToDp('0.1')
    },
    BackButtonView: {
        bottom: heightToDp('10'), width: widthToDp('25')
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


export default Styles