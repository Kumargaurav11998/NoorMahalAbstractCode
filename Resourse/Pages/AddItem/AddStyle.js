import {StyleSheet} from 'react-native'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
const AddStyles = StyleSheet.create({
container:{
    flex: 1, 
    backgroundColor: '#fff' 
},
TopView:{
    height: heightToDp('45'), 
    backgroundColor: 'rgb(234,113,60)' 
},
TopMain:{
    marginTop: heightToDp('3'), 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
},
Icon:{
    marginStart:widthToDp('6')
},
AddItem:{
    justifyContent:'center',
    marginStart:widthToDp('5')
},
AddItemText:{
    color:'#fff',
    fontSize:widthToDp('4.5'),
    fontWeight:'bold'
},
Save:{
    justifyContent: 'center',
    marginEnd:widthToDp('5') 
},
SaveText:{
    fontSize: widthToDp('4'), 
    color: '#fff',
    fontWeight:'bold'
},
AddView:{
    marginTop:heightToDp('3'),
    flex:1,
    justifyContent:'center',
    alignItems:'center'
},
AddText:{
    color:'#fff',
    fontWeight:'bold'
},
TextInputMain:{
    alignItems:'center',
    marginTop:heightToDp('4'),
    height:heightToDp('50')
},
TextInputView:{
    marginTop:heightToDp('3'),
    width:widthToDp('80'),
    height:heightToDp('6'),
    backgroundColor:'#fff',
    elevation:5,
    borderRadius:widthToDp('2')
},
TextInput:{
    paddingStart:widthToDp('4')
},
Description:{
    marginTop:heightToDp('3'),
    width:widthToDp('80'),
    height:heightToDp('10'),
    backgroundColor:'#fff',
    elevation:5,
    borderRadius:widthToDp('2')
}
});

export default AddStyles