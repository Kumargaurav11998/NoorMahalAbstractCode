import {StyleSheet} from 'react-native'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
const Styles = StyleSheet.create({
container:{
    flex: 1, 
    backgroundColor: '#fff' 
},
TopView:{
    flexDirection: 'row', 
    marginTop: heightToDp('4'), 
    marginStart: widthToDp('3'),
    justifyContent:'space-between' 
},
AddPromo:{
    marginStart: widthToDp('5') 
},
AddPromoText:{
    color: '#000', fontSize: widthToDp('6'), fontWeight: 'bold' 
},
Icon:{
marginEnd:widthToDp('6')
},
MainView:{
    alignItems: 'center'
},
TextInput:{
 width: widthToDp('80'),elevation:5,backgroundColor:'#fff',borderRadius:widthToDp('2'),marginTop:heightToDp('4')
},
TextInputText:{
    color:'#000',
    paddingStart:widthToDp('5')
},
SubmitView:{
    marginTop: heightToDp('4'), width: widthToDp('60'), height: heightToDp('5'), justifyContent: 'center', alignItems: 'center', borderRadius: widthToDp('2'), backgroundColor: 'rgb(0,130,244)' 
},
SubmitText:{
    fontSize: widthToDp('4.5'), color: '#fff' 
},
PromoView:{
    marginTop: heightToDp('4') 
},
PromoText:{
    color: '#000', fontSize: widthToDp('5') 
},
BottomTop:{
alignItems:'center'
},
BottomView:{
 marginTop: heightToDp('2'), height: heightToDp('6'), flexDirection: 'row', justifyContent: 'space-between',width:widthToDp('80'),elevation:5,backgroundColor:'#fff',borderRadius:widthToDp('2')
},
CodeView:{
    justifyContent: 'center', marginStart: widthToDp('3') 
},
CodeText:{
    color: '#000' 
},
SwitchView:{
    justifyContent: 'center' 
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