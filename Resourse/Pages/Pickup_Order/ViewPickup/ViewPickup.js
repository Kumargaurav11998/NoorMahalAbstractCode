import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Styles from '../../Order_History/ViewOrder/ViewOrderStyle'
import { heightToDp, widthToDp } from '../../../Utils/Responsive'
export default function ViewPickup(props) {
    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.TopView}>
                
                    <View style={Styles.IconView}>
                    <TouchableOpacity onPress={()=>props.navigation.replace('Menu')}>
                        <AntDesign name='arrowleft' size={25} color={'#000'} />
                        </TouchableOpacity>
                    </View>


                <View style={Styles.TopTextView} >
                    <View style={Styles.OrderFlex}>
                        <Text style={Styles.TopText}>OrderId:</Text>
                        <Text style={Styles.TopText1}> #592967</Text>
                    </View>
                    <Text style={Styles.Text}>Takeaway</Text>
                </View>
            </View>
            <View>
                <Text
                    style={{
                        fontSize: 8,
                        borderBottomWidth: 1,
                        color: "#191970",
                    }}
                ></Text>
            </View>
            <View style={Styles.AddressView}>
                <View>
                    <Text style={Styles.AddressText}>Zirakpur</Text>
                </View>
                <View style={Styles.AddressView1}>
                    <Text style={Styles.AddressText1}>2nd Floor,Dhillon Avenue,Chatt{'\n'}Road,Village-Singhpura,Zirakpur,SAS{'\n'}Nagar,PIN-140603,Punjab</Text>
                </View>
            </View>
            <View style={Styles.UnderLine}>
                <Text
                    style={{
                        fontSize: 1,
                        borderBottomWidth: 1,
                        color: "#191970",
                        width: widthToDp('90')
                    }}
                ></Text>
            </View>
            <View style={Styles.BillMainView}>
                <View>
                    <Text style={Styles.BillText}>BILL DETAILS</Text>
                </View>
                <View>
                    <View style={Styles.DetailFlexMain}>
                        <View style={Styles.DetailFlex}>
                            <View style={Styles.Detail1}>
                                <View>
                                    <Text style={Styles.Details1Text}>1.</Text>
                                </View>
                                <View style={Styles.DetailName}>
                                    <Text style={Styles.Details1Text}>Crispy Corn</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={Styles.Details1Text}>x1</Text>
                            </View>
                            <View>
                                <Text style={Styles.Details1Text}>₹139</Text>
                            </View>
                        </View>
                        <View style={Styles.DetailFlex}>
                            <View style={Styles.Detail1}>
                                <View>
                                    <Text style={Styles.Details1Text}>2.</Text>
                                </View>
                                <View style={Styles.DetailName}>
                                    <Text style={Styles.Details1Text}>NoorMahal in a Box</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={Styles.Details1Text}>x1</Text>
                            </View>
                            <View>
                                <Text style={Styles.Details1Text}>₹749</Text>
                            </View>
                        </View>
                        <View style={Styles.DetailFlex}>
                            <View style={Styles.Detail1}>
                                <View>
                                    <Text style={Styles.Details1Text}>3.</Text>
                                </View>
                                <View style={Styles.DetailName}>
                                    <Text style={Styles.Details1Text}>Butter Naan</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={Styles.Details1Text}>x10</Text>
                            </View>
                            <View>
                                <Text style={Styles.Details1Text}>₹300</Text>
                            </View>
                        </View>
                        <View style={Styles.DetailFlex}>
                            <View style={Styles.Detail1}>
                                <View>
                                    <Text style={Styles.Details1Text}>4.</Text>
                                </View>
                                <View style={Styles.DetailName}>
                                    <Text style={Styles.Details1Text}>Tandoori Paneer Tikka</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={Styles.Details1Text}>x1</Text>
                            </View>
                            <View>
                                <Text style={Styles.Details1Text}>₹219</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={Styles.BottomView}>
                    <View style={Styles.Bottom}>
                        <View>
                            <Text style={Styles.BottomText}>Item Total</Text>
                        </View>
                        <View>
                            <Text style={Styles.BottomText}>₹1407</Text>
                        </View>
                    </View>
                    <View style={Styles.Bottom}>
                        <View>
                            <Text style={Styles.BottomText}>Discount/Promo</Text>
                        </View>
                        <View>
                            <Text style={Styles.BottomText}>₹0</Text>
                        </View>
                    </View>
                    <View style={Styles.Bottom}>
                        <View>
                            <Text style={Styles.BottomText}>Taxes & Changes</Text>
                        </View>
                        <View>
                            <Text style={Styles.BottomText}>₹65</Text>
                        </View>
                    </View>
                </View>
                <View style={Styles.UnderLine}>
                    <Text
                        style={{
                            fontSize: 1,
                            borderBottomWidth: 1,
                            color: "#191970",
                            width: widthToDp('90')
                        }}
                    ></Text>
                </View>
                <View style={Styles.Total}>
                    <View>
                        <Text style={Styles.TotalText}>Total</Text>
                    </View>
                    <View>
                        <Text style={Styles.TotalText}>₹1368</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}