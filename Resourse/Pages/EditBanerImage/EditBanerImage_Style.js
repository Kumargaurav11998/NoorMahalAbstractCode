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
        justifyContent: 'space-between'
    },
    Edit: {
        marginStart: widthToDp('5')
    },
    EditText: {
        color: '#000',
        fontSize: widthToDp('6'),
        fontWeight: 'bold'
    },
    Icon1: {
        marginEnd: widthToDp('6')
    },
    MainView: {
        alignItems: 'center',
        marginTop: heightToDp('5')
    },
    Icon: {
        alignItems: 'center'
    },
    Text: {
        marginTop: heightToDp('2')
    },
    SubmitView: {
        marginTop: heightToDp('4'),
        width: widthToDp('60'),
        height: heightToDp('5'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: widthToDp('2'),
        backgroundColor: 'rgb(0,130,244)'
    },
    SubmitText: {
        fontSize: widthToDp('4.5'),
        color: '#fff'
    },
    ListView: {
        marginTop: heightToDp('4')
    },
    ListText: {
        color: '#000',
        fontSize: widthToDp('5')
    },
    BoxMainView: {
        marginStart: widthToDp('3'),
        marginEnd: widthToDp('3')
    },
    BoxView: {
        marginTop: heightToDp('5'),
        width: widthToDp('60'),
        height: heightToDp('27'),
        elevation: 5,
        backgroundColor: '#fff'
    },
    Image: {
        height: heightToDp('20'),
        width: widthToDp('60')
    },
    FlexView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', flex: 1
    },
    Switch: {
        marginStart: widthToDp('4')
    },
    Delete: {
        marginEnd: widthToDp('4')
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

export default Styles;