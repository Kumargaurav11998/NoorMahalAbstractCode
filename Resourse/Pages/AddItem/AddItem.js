import { View, Text, SafeAreaView, TextInput, StatusBar, ScrollView, TouchableOpacity, Image,ToastAndroid,Alert } from 'react-native'
import React,{useState} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { BottomSheet } from 'react-native-btr';
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import Styles from './AddStyle'
import { Camera, Gallery } from '../../Utils/Image'
import {launchImageLibrary,launchCamera} from 'react-native-image-picker'

export default function AddItem(props) {
    const [visible, setVisible] = useState(false);
    const [pic,setPic] = useState('');
const AddImage = () =>{
setVisible(!visible);
}
const  setToastmsg = msg=>{
    ToastAndroid.showWithGravity(msg,ToastAndroid.SHORT,ToastAndroid.CENTER)
}
    const Upload = ()=>{
        let options = {
            mediaType:'photo',
            quality:1,
            includeBase64:true
        };
      launchImageLibrary(options,response=>{
        if(response.didCancel){
            setToastmsg('Cancelled Image Selection');
        }
        else if(response.errorCode == 'permission'){
            setToastmsg('permission not satisfied');
        }
        else if(response.errorCode == 'others'){
            setToastmsg(response.errorMessage);
        }
        else if(response.assets[0].fileSize>2097152){
            Alert.alert(
                'Maximum image Size Expanded',
                'Please choose image under 2 MB',
                [{text:'OK'}]
            )
        }
        else{
            setPic(response.assets[0].base64);
        }
      });
    }
    const CameraImg = ()=>{
        let options = {
            mediaType:'photo',
            quality:1,
            includeBase64:true
        };
      launchCamera(options,response=>{
        if(response.didCancel){
            setToastmsg('Cancelled Image Selection');
        }
        else if(response.errorCode == 'permission'){
            setToastmsg('permission not satisfied');
        }
        else if(response.errorCode == 'others'){
            setToastmsg(response.errorMessage);
        }
        else{
            setPic(response.assets[0].base64);
        }
      });
    }

    return (
        <SafeAreaView style={Styles.container}>
            <StatusBar 
            backgroundColor={'rgb(234,113,60)'}
            barStyle={'light-content'}
            />
            <ScrollView >
            <View style={Styles.TopView}>
                <View style={Styles.TopMain}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={()=>props.navigation.goBack('Menu')}>
                                                  <View style={Styles.Icon}>
                            <AntDesign name='arrowleft' size={25} color={'#fff'} />
                        </View>  
                        </TouchableOpacity>

                        <View style={Styles.AddItem}>
                            <Text style={Styles.AddItemText}>Add item</Text>
                        </View>
                    </View>
                    <View style={Styles.Save}>
                        <Text style={Styles.SaveText} >SAVE</Text>
                    </View>
                </View>

<View style={Styles.AddView}>
<TouchableOpacity onPress={()=>AddImage()}>
        <View style={{alignItems:'center'}}>
        <MaterialIcons name='add-a-photo' size={25} color={'#fff'} />
    </View>
    <View>
        <Text style={Styles.AddText}>Add Images</Text>
    </View>
</TouchableOpacity>
<BottomSheet
visible={visible}
onBackButtonPress={AddImage}>
<View style={{height:heightToDp('30'),backgroundColor:'rgb(30,47,55)',borderTopStartRadius:widthToDp('5'),borderTopEndRadius:widthToDp('5')}}>
<View style={{marginStart:widthToDp('10'),marginTop:heightToDp('4')}}>
    <Text style={{color:'#fff',fontSize:widthToDp('6')}}>Edit Image</Text>
</View>
<View style={{flexDirection:'row',marginTop:heightToDp('4')}}>
   <View>
    <TouchableOpacity>
          <View style={{borderWidth:0.2,height:heightToDp('8'),width:widthToDp('16'),borderRadius:widthToDp('20'),justifyContent:'center',alignItems:'center',marginStart:widthToDp('6'),borderColor:'#fff'}}>
     <View style={{height:heightToDp('6'),width:widthToDp('12'),borderRadius:widthToDp('20'),backgroundColor:'rgb(252,60,23)',justifyContent:'center',alignItems:'center'}} >
      <MaterialCommunityIcons name='delete' size={25} color={'#fff'} />
     </View>
    </View> 
    <View style={{alignItems:'center',marginStart:widthToDp('5')}}>
        <Text style={{color:'#fff',fontSize:widthToDp('4')}}>Remove</Text>
    </View>
    </TouchableOpacity>
   </View>
<View>
    <TouchableOpacity onPress={()=>CameraImg()}>
               <View style={{borderWidth:1,height:heightToDp('8'),width:widthToDp('16'),borderRadius:widthToDp('20'),justifyContent:'center',alignItems:'center',marginStart:widthToDp('6'),borderColor:'#fff'}}>
     <View style={{borderWidth:1,height:heightToDp('5'),width:widthToDp('10'),borderRadius:widthToDp('20'),justifyContent:'center',alignItems:'center'}} >
      <Image source={Camera} style={{height:heightToDp('5'),width:widthToDp('10')}} />
     </View>
    </View>
    <View style={{alignItems:'center',marginStart:widthToDp('5')}}>
        <Text style={{color:'#fff',fontSize:widthToDp('4')}}>Camera</Text>
    </View> 
    </TouchableOpacity>
</View>

    <View>
        <TouchableOpacity onPress={()=>Upload()}>
        <View style={{borderWidth:1,borderColor:'#fff',height:heightToDp('8'),width:widthToDp('16'),borderRadius:widthToDp('20'),justifyContent:'center',alignItems:'center',marginStart:widthToDp('6')}}>
     <View style={{height:heightToDp('5'),width:widthToDp('10'),borderRadius:widthToDp('20'),justifyContent:'center',alignItems:'center'}} >
      <Image source={Gallery}  style={{height:heightToDp('5'),width:widthToDp('10')}}/>
     </View>
    </View> 
    <View style={{alignItems:'center',marginStart:widthToDp('5')}}>
        <Text style={{color:'#fff',fontSize:widthToDp('4')}}>Gallery</Text>
    </View>
        </TouchableOpacity>
 
    </View>

</View>
</View>
</BottomSheet>
</View>
            </View>
            <View style={Styles.TextInputMain}>
             <View style={Styles.TextInputView}>
               <TextInput
               placeholder='Item Name'
               placeholderTextColor={'#000'}
               style={Styles.TextInput}
               />
             </View>
             <View style={Styles.TextInputView}>
               <TextInput
               placeholder='Price'
               placeholderTextColor={'#000'}
               style={Styles.TextInput}
               />
             </View>
             <View style={Styles.Description}>
               <TextInput
               placeholder='Description'
               placeholderTextColor={'#000'}
               style={Styles.TextInput}
               />
             </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}