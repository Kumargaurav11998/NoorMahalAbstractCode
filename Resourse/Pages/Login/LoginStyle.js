import { StyleSheet } from 'react-native'
import { heightToDp, widthToDp } from '../../Utils/Responsive'

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    MainView: {
        marginTop: heightToDp('10')
    },
    LogoView: {
        alignItems: 'center'
    },
    Logo: {
        height: heightToDp('18'),
        width: widthToDp('78')
    },
    TextView: {
        alignItems: 'center',
        marginTop: heightToDp('3')
    },
    Text: {
        color: '#000',
        fontSize: widthToDp('5'),
        fontWeight: 'bold'
    },
    TextInputView: {
        borderWidth: 0.5,
        height: heightToDp('6'),
        marginTop: heightToDp('5'),
        borderRadius: widthToDp('1'),
        flexDirection: 'row'
    },
    TextInput1: {
        marginStart: widthToDp('3')
    },
    TextInput2: {
        marginStart: widthToDp('3'),
        width: widthToDp('65')
    },
    TextInput: {
        color: '#000'
    },
    IconView: {
        justifyContent: 'center'
    },
    IconText:{
        fontWeight:'bold'
    },
    ForgetView: {
        marginTop: heightToDp('5')
    },
    ForgetText: {
        color: 'rgb(25,118,198)',
        fontWeight: '500'
    },
    LoginView: {
        height: heightToDp('6'),
        marginTop: heightToDp('1'),
        backgroundColor: 'rgb(0,130,244)',
        borderRadius: widthToDp('1'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    LoginText: {
        color: '#fff',
        fontSize: widthToDp('4.5'),
        fontWeight: 'bold'
    }
});

export default Styles