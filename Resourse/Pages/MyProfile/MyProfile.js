import { View, Text, SafeAreaView, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { heightToDp, widthToDp } from '../../Utils/Responsive'

export default function MyProfile(props) {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
           
                <View style={{ flexDirection: 'row-reverse', marginTop: heightToDp('1') }}>
                    <View style={{ justifyContent: 'center',marginEnd:widthToDp('5') }}>
                        <TouchableOpacity >
                            <Entypo name='grid' size={33} color={'rgb(252,73,17)'} />
                        </TouchableOpacity>
                    </View>
                </View>
            <View style={{ flexDirection: 'row-reverse' }}>
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', top: heightToDp('5'), marginEnd: widthToDp('5') }}>
                        <View>
                            <EvilIcons name='pencil' size={30} color={'#000'} />
                        </View>
                        <View style={{ marginStart: widthToDp('3') }}>
                            <Text style={{ color: '#000' }}>edit</Text>
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
            <View style={{ alignItems: 'center' }}>

                <View style={{ borderWidth: 1, width: widthToDp('100'), height: heightToDp('20'), alignItems: 'center', backgroundColor: 'rgb(54,63,68)', marginTop: heightToDp('6') }}>
                    <View style={{ width: widthToDp('37'), height: heightToDp('19'), borderRadius: widthToDp('25'), elevation: 1, backgroundColor: '#fff', bottom: heightToDp('11') }}>

                    </View>
                </View>
            </View>
            <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('4') }}>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Feather name='phone-call' size={20} color={'#000'} />
                    </View>
                    <View style={{ marginStart: widthToDp('2') }}>
                        <Text style={{ color: '#000' }}>+91 1234567891</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: heightToDp('3') }}>
                    <View>
                        <Fontisto name='email' size={20} color={'#000'} />
                    </View>
                    <View style={{ marginStart: widthToDp('1') }}>
                        <Text style={{ color: '#a9a9a9' }}>add email</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: heightToDp('3') }}>
                    <View>
                        <FontAwesome5 name='birthday-cake' size={20} color={'#000'} />
                    </View>
                    <View style={{ marginStart: widthToDp('1') }}>
                        <Text style={{ color: '#a9a9a9' }}>add birthday</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: heightToDp('3') }}>
                    <View>
                        <MaterialCommunityIcons name='glass-flute' size={20} color={'#000'} />
                    </View>
                    <View style={{ marginStart: widthToDp('1') }}>
                        <Text style={{ color: '#a9a9a9' }}>add anniversary</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: heightToDp('8') }}>
                <TouchableOpacity onPress={() => props.navigation.replace('Menu')}>
                    <View style={{ height: heightToDp('8.5'), width: widthToDp('17.5'), borderRadius: widthToDp('15'), marginStart: widthToDp('5'), marginBottom: heightToDp('1'), backgroundColor: 'rgb(255,130,50)', alignItems: 'center', justifyContent: 'center' }}>
                        <AntDesign name='arrowleft' color={'#fff'} size={25} />
                    </View>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}