import { StyleSheet } from 'react-native'

import { heightToDp, widthToDp } from '../../Utils/Responsive'

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    MainView: {
        height: heightToDp('33')
    },
    TopView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: heightToDp('4')
    },
    FlexView: {
        flexDirection: 'row'
    },
    SearchBar: {
        width: widthToDp('78'),
        marginEnd: widthToDp('2'),
        height: heightToDp('5.5'),
        borderRadius: widthToDp('10'),
        flexDirection: 'row',
        backgroundColor: '#fff',
        elevation: 5,
        marginStart: widthToDp('7')
    },
    SearchIcon: {
        justifyContent: 'center',
        marginStart: widthToDp('2')
    },
    TextInputView: {
        width: widthToDp('75')
    },
    TextInput: {
        color: '#000'
    },
    MenuView: {
        borderWidth: 1,
        width: widthToDp('11'),
        backgroundColor: '#fff',
        borderRadius: widthToDp('15'),
        height: heightToDp('5.5'),
        justifyContent: 'center',
        alignItems:'center'
    },
    BanerMainView: {
        alignItems: 'center',
        marginTop: heightToDp('2')
    },
    BanerView: {
        width: widthToDp('90'),
        height: heightToDp('18'),
        backgroundColor: '#fff',
        borderRadius: widthToDp('3'),
        elevation: 6
    },
    BanerImage: {
        height: heightToDp('20'),
        width: widthToDp('90')
    },
    RecomandedMain: {
        flexDirection: 'row',
        height: heightToDp('7'),
        justifyContent: 'space-between'
    },
    RecomandedView: {
        justifyContent: 'center',
        marginStart: widthToDp('5')
    },
    RecomandedText: {
        color: '#000',
        fontSize: widthToDp('4.5'),
        fontWeight: 'bold'
    },
    RecomandedIcon:{
        justifyContent: 'center', 
        marginEnd: widthToDp('3') 
    },
    RecomandedListView: {
        flexDirection: 'row'
    },
    ListView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ListImText: {
        marginStart: widthToDp('5'),
        marginTop: heightToDp('3')
    },
    ListImage: {
        height: heightToDp('3'),
        width: widthToDp('6')
    },
    ListTextView: {
        height: heightToDp('2.8'),
        justifyContent: 'center',
        marginTop: heightToDp('3'),
        marginStart: widthToDp('3'),
        width: widthToDp('19'),
        backgroundColor: 'rgb(234,113,60)',
        borderRadius: widthToDp('1.5')
    },
    ListText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: widthToDp('3.5')
    },
    ListNameView: {
        marginTop: heightToDp('1'),
        marginStart: widthToDp('5'),
        width: widthToDp('40')
    },
    ListNameText: {
        color: '#000',
        fontSize: widthToDp('3.7')
    },
    LogoMainView: {
        alignItems: 'center',
        marginStart: widthToDp('6')
    },
    LogoView: {
        marginTop: heightToDp('5'),
        width: widthToDp('45'),
        alignItems: 'center'
    },
    EditButtonView:{
        marginTop:heightToDp('2')
    },
    EditButton: {
        borderWidth: 1,
        width: widthToDp('25'),
        height: heightToDp('5'),
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: widthToDp('2'),
        backgroundColor: 'rgb(255,247,246)',
        borderColor: 'rgb(236,85,94)',
        flexDirection: 'row'
    },
    EditButtonText: {
        color: 'rgb(236,85,94)'
    },
    BottomView:{
        backgroundColor: '#fff', 
        height: heightToDp('0.1') 
    },
    AddMain:{
        flexDirection: 'row-reverse',
        bottom:heightToDp('12') 
    },
    AddView:{
        width: widthToDp('15'), 
        height: heightToDp('7.5'), 
        borderRadius: widthToDp('20'), 
        marginEnd: widthToDp('5'), 
        backgroundColor: 'rgb(234,113,60)', 
        justifyContent: 'center', 
        alignItems: 'center',
        right: widthToDp('2') 
    },
    SheetView:{
        height: heightToDp('100'), 
        backgroundColor: '#fff', 
        alignItems: 'center' 
    },
    SheetImView:{
        alignItems: 'center', 
        marginTop: heightToDp('2') 
    },
    SheetImg:{
        height: heightToDp('20'), 
        width: widthToDp('40')
    },
    EditInput:{
        marginTop: heightToDp('5'), 
        width: widthToDp('70'), 
        height: heightToDp('8'), 
        borderRadius: widthToDp('2'), 
        backgroundColor: '#fff', 
        elevation: 5 
    },
    EditText:{
        color: '#000', 
        paddingStart: widthToDp('4')
    },
    SubmitMain:{
        alignItems:'center'
    },
    SubmitView:{
        marginTop: heightToDp('5'), 
        width: widthToDp('60'), 
        height: heightToDp('7'), 
        borderRadius: widthToDp('2'), 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'rgb(254,82,0)'
    },
    SubmitText:{
        fontSize: widthToDp('6'), 
        color: '#fff', 
        fontWeight: 'bold' 
    }
})

export default Styles