import { StyleSheet } from 'react-native'
import { heightToDp, widthToDp } from '../../../Utils/Responsive';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    TopView: {
        flexDirection: 'row',
        marginTop: heightToDp('2'),
        marginStart: widthToDp('4')
    },
    IconView: {
        justifyContent: 'center'
    },
    TopTextView: {
        marginStart: widthToDp('4')
    },
    OrderFlex: {
        flexDirection: 'row'
    },
    TopText: {
        fontSize: widthToDp('4'),
        color: '#000'
    },
    TopText1: {
        fontSize: widthToDp('4'),
        color: 'rgb(255,91,5)'
    },
    Text: {
        paddingTop: heightToDp('1'),
        color: '#a9a9a9'
    },
    AddressView: {
        marginStart: widthToDp('8'),
        marginTop: heightToDp('5')
    },
    AddressText: {
        color: '#000',
        fontSize: widthToDp('4.5')
    },
    AddressView1: {
        marginTop: heightToDp('1')
    },
    AddressText1: {
        fontSize: widthToDp('4'),
        color: '#000'
    },
    TopUnderline:{
        fontSize: 8,
        borderBottomWidth: 1,
        color: "#191970",
    },
    UnderLine: {
        marginTop: heightToDp('3'),
        alignItems: 'center',
    },
    UnderLineText: {
        fontSize: 1,
        borderBottomWidth: 1,
        color: "#a9a9a9",
        width: widthToDp('85')
    },
    BillMainView: {
        marginStart: widthToDp('4'),
        marginTop: heightToDp('3'),
        marginEnd: widthToDp('4')
    },
    BillText: {
        color: '#000',
        fontSize: widthToDp('4')
    },
    DetailFlexMain: {
        marginTop: heightToDp('2')
    },
    DetailFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    Detail1: {
        flexDirection: 'row',

    },
    DetailName: {
        marginStart: widthToDp('1'),
        width: widthToDp('35')
    },
    Details1Text: {
        color: '#000'
    },
    BottomView: {
        marginTop: heightToDp('2')
    },
    Bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    BottomText: {
        color: 'a9a9a9'
    },
    Total: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: heightToDp('4')
    },
    TotalText: {
        color: '#000'
    }
});

export default Styles