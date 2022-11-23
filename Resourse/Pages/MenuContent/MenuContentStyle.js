import {StyleSheet} from 'react-native'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
const Styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'rgb(255,202,196)'
},
MainView:{
    marginStart:widthToDp('5'),
    marginTop:heightToDp('5')
},
View:{
    marginTop:heightToDp('3')
},
Text:{
    color:'#000',
    fontSize:widthToDp('5.5')
},
BottomView:{
    alignItems:'center',
    backgroundColor:'rgb(255,202,196)'
},
BottomText:{
    color:'#000',
    fontSize:widthToDp('4.5')
}
});

export default Styles;