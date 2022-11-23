import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image, Switch, ToastAndroid, Alert } from 'react-native'
import React from 'react'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { FirstSlide, PizzaLogo, Slide1, Slider2, RDLogo } from '../../Utils/Image'
import Swiper from 'react-native-swiper'
import { useState } from 'react'
import {launchImageLibrary} from 'react-native-image-picker'
import Styles from './EditBanerImage_Style'
export default function EditBanerImage(props) {
    const [enable, setEnable] = useState(false);
    const [pic,setPic] = useState('')
    const toggleSwitch = () => {
        setEnable(e => !e);
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
    return (
        <>

        <SafeAreaView style={Styles.container}>
            <View style={Styles.TopView}>
                <View style={Styles.Edit}>
                    <Text style={Styles.EditText}>Edit Baner Image</Text>
                </View>
                <View style={Styles.Icon1}>
                <TouchableOpacity onPress={()=>props.navigation.openDrawer()}>
                            <Entypo name='grid' size={33} color={'rgb(252,73,17)'} />
                        </TouchableOpacity>
        </View>
            </View>
            <View style={Styles.MainView}>

                <TouchableOpacity onPress={()=>Upload()}>
                    <View style={Styles.Icon}>
                        <FontAwesome5 name='file-upload' size={30} color={'rgb(42,98,255)'} />
                    </View>
                    <View style={Styles.Text}>
                        <Text style={{ color: '#000', fontSize: widthToDp('5') }}>Select File to Upload</Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={Styles.SubmitView}>
                        <Text style={Styles.SubmitText}>Submit</Text>
                    </View>
                </TouchableOpacity>

                <View style={Styles.ListView}>
                    <Text style={Styles.ListText}>List Baner Image</Text>
                </View>
            </View>
            <ScrollView horizontal={true}>
                <View style={Styles.BoxMainView}>
                    <View style={Styles.BoxView}>
                        <View>
                            <Image source={FirstSlide} style={Styles.Image} />
                        </View>
                        <View style={Styles.FlexView}>
                            <View style={Styles.Switch}>
                                <Switch
                                    trackColor={{ false: "#81b0ff", true: "#00ffff" }}
                                    thumbColor={enable ? "#f5dd4b" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={enable}
                                />
                            </View>
                            <TouchableOpacity>
                                <View style={Styles.Delete}>
                                    <MaterialCommunityIcons name='delete' size={25} color={'red'} />
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
                <View style={Styles.BoxMainView}>
                    <View style={Styles.BoxView}>
                        <View>
                            <Image source={FirstSlide} style={Styles.Image} />
                        </View>
                        <View style={Styles.FlexView}>
                            <View style={Styles.Switch}>
                                <Switch
                                    trackColor={{ false: "#81b0ff", true: "#00ffff" }}
                                    thumbColor={enable ? "#f5dd4b" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={enable}
                                />
                            </View>
                            <TouchableOpacity>
                                <View style={Styles.Delete}>
                                    <MaterialCommunityIcons name='delete' size={25} color={'red'} />
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
                <View style={Styles.BoxMainView}>
                    <View style={Styles.BoxView}>
                        <View>
                            <Image source={FirstSlide} style={Styles.Image} />
                        </View>
                        <View style={Styles.FlexView}>
                            <View style={Styles.Switch}>
                                <Switch
                                    trackColor={{ false: "#81b0ff", true: "#00ffff" }}
                                    thumbColor={enable ? "#f5dd4b" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={enable}
                                />
                            </View>
                            <TouchableOpacity>
                                <View style={Styles.Delete}>
                                    <MaterialCommunityIcons name='delete' size={25} color={'red'} />
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
                <View style={Styles.BackButton}>
                <View style={Styles.BackButtonView}>
                  <TouchableOpacity onPress={() => props.navigation.replace('Menu')}>
                    <View style={Styles.BackView}>
                    <AntDesign name='arrowleft' color={'#fff'} size={25} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              </>
    )
}