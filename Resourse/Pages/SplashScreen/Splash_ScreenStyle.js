import { StyleSheet } from 'react-native'
import {heightToDp,widthToDp} from '../../Utils/Responsive'
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center'
    },
    LogoView:{
        alignItems:'center'
    },
    Logo:{
        height:heightToDp('30'),
        width:widthToDp('90')
    }
})

export default Styles