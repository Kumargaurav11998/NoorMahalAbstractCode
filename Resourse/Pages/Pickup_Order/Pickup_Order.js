import { View, Text, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import Styles from './PickupStyle'
export default function Pickup_Order(props) {

    const Pickup = () => {
        props.navigation.navigate('View_Pickup')
    }
    return (
        <>

        <SafeAreaView style={Styles.container}>
            <View style={Styles.TopView}>
                <View style={Styles.TextView}>
                    <Text style={Styles.TopText}>PickUp Orders</Text>
                </View>
                <View style={Styles.Icon}>
                <TouchableOpacity onPress={()=>props.navigation.openDrawer()} >
                            <Entypo name='grid' size={33} color={'rgb(252,73,17)'} />
                        </TouchableOpacity>
        </View>
            </View>
            <View style={Styles.MainView}>
                <View>
                    <View style={Styles.CodeView}>
                        <Text style={Styles.CodeText}>#592967</Text>
                    </View>
                    <View style={Styles.CallNameFlex}>
                        <View style={Styles.NameView}>
                            <Text style={Styles.NameText}>xyz</Text>
                        </View>
                        <TouchableOpacity>
                            <View style={Styles.CallView}>
                                <Text style={Styles.CallText}>Call</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={Styles.PriceView}>
                        <Text style={Styles.PriceText}>9043345212</Text>
                    </View>
                    <View style={Styles.PriceView}>
                        <Text style={Styles.PriceText}>xyz@gmail.com</Text>
                    </View>
                    <View style={Styles.PriceView}>
                        <Text style={Styles.PriceText}>₹1368.00</Text>
                    </View>
                    <View style={Styles.DateView}>
                        <Text style={Styles.DateText}>Date of Order:21 jun 2021</Text>
                    </View>
                    <View style={Styles.TimeView}>
                        <Text style={Styles.DateText}>Time:4:44PM</Text>
                    </View>
                    <View style={Styles.InMainView}>
                        <Text style={Styles.InText}>In Kitchen</Text>
                        <View style={Styles.IconView}>
                            <AntDesign name='checkcircleo' size={20} color={'rgb(0,155,68)'} />
                        </View>
                    </View>
                    <View style={Styles.ButtonView}>
                        <View style={Styles.Ready}>
                            <Text style={Styles.ReadyText}>Ready To PickUp</Text>
                        </View>
                        <TouchableOpacity onPress={() => Pickup()}>
                            <View style={Styles.ViewButton}>
                                <Text style={Styles.ViewText}>View</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={Styles.UnderLine}>
                        <Text
                            style={{
                                fontSize: 1,
                                borderBottomWidth: 1,
                                color: "#a9a9a9",
                                width: widthToDp('85')
                            }}
                        ></Text>
                    </View>
                </View>
                <View style={Styles.BoxView}>
                    <View style={Styles.CodeView}>
                        <Text style={Styles.CodeText}>#592967</Text>
                    </View>
                    <View style={Styles.CallNameFlex}>
                        <View style={Styles.NameView}>
                            <Text style={Styles.NameText}>xyz</Text>
                        </View>
                        <TouchableOpacity>
                            <View style={Styles.CallView}>
                                <Text style={Styles.CallText}>Call</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={Styles.PriceView}>
                        <Text style={Styles.PriceText}>9035643123</Text>
                    </View>
                    <View style={Styles.PriceView}>
                        <Text style={Styles.PriceText}>xyz@gmail</Text>
                    </View>
                    <View style={Styles.PriceView}>
                        <Text style={Styles.PriceText}>₹1368.00</Text>
                    </View>
                    <View style={Styles.DateView}>
                        <Text style={Styles.DateText}>Date of Order:21 jun 2021</Text>
                    </View>
                    <View style={Styles.TimeView}>
                        <Text style={Styles.DateText}>Time:4:44PM</Text>
                    </View>
                    <View style={Styles.InMainView}>
                        <Text style={Styles.InText}>In Kitchen</Text>
                        <View style={Styles.IconView}>
                            <AntDesign name='checkcircleo' size={20} color={'rgb(0,155,68)'} />
                        </View>
                    </View>
                    <View style={Styles.ButtonView}>
                        <View style={Styles.Ready}>
                            <Text style={Styles.ReadyText}>Ready To PickUp</Text>
                        </View>
                        <TouchableOpacity onPress={() => Pickup()}>
                            <View style={Styles.ViewButton}>
                                <Text style={Styles.ViewText}>View</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={Styles.UnderLine}>
                        <Text
                            style={Styles.UnderLineText}
                        ></Text>
                    </View>
                </View>
            </View>
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