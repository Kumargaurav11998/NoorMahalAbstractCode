import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import { useState } from 'react'
import Styles from './Order_HistoryStyle'
export default function Order_History(props) {

  const data = [
    {
      id: 1,
      name:'Parveen',
      phone:9032234532,
      email:'parveen@gmail.com',
      code: '#676540',
      Price: 1368.00,
      Date: '21,jun 2021',
      Time: '4.55PM',
      Guest:7,
      Loaction: 'Zirakpur'
    },
    {
      id: 2,
      name:'Gaurav',
      phone:9032234532,
      email:'gaurav@gmail.com',
      code: '#898767',
      Price: 1368.00,
      Date: '22,Aug 2021',
      Time: '5.55PM',
      Guest:3,
      Loaction: 'Zirakpur'
    },
  ]
  const [Data, setData] = useState(data);
  return (
    <>
      <SafeAreaView style={Styles.container}>
        <View style={Styles.TopView}>
          <View style={Styles.TopTextView}>
            <Text style={Styles.TopText}>Order History</Text>
          </View>
          <View style={Styles.Icon1}>
            <TouchableOpacity onPress={()=>props.navigation.openDrawer()} >
              <Entypo name='grid' size={33} color={'rgb(252,73,17)'} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
        {Data.map((item)=>{
          return(
            <View style={Styles.ChildView}>
            <View>
              <View style={Styles.Code}>
                <Text style={Styles.CodeText}>{item.code}</Text>
              </View>
              <View style={Styles.Name}>
                <Text style={Styles.NameText}>{item.name}</Text>
              </View>
              <View style={Styles.Date}>
                <Text style={Styles.NameText}>{item.phone}</Text>
              </View>
              <View style={Styles.Date}>
                <Text style={Styles.NameText}>{item.email}</Text>
              </View>
              <View style={Styles.Date}>
                <Text style={Styles.NameText}>₹{item.Price}.00</Text>
              </View>
              <View style={Styles.Date}>
                <Text style={Styles.DateText}>Date:{item.Date}</Text>
              </View>
              <View style={Styles.Date}>
                <Text style={Styles.DateText}>Spacial Instruction</Text>
              </View>
              <View style={Styles.TableCancel}>
                <TouchableOpacity onPress={() => props.navigation.navigate('View')}>
                  <View style={Styles.Cancel}>
                    <Text style={Styles.CancelText}>View Order</Text>
                  </View>
                </TouchableOpacity>
  
                <View style={Styles.Table}>
                  <Text style={Styles.TableText}>Delivered</Text>
                  <View style={Styles.Icon}>
                    <AntDesign name='checkcircleo' size={20} color={'rgb(0,155,68)'} />
                  </View>
                </View>
              </View>
              <View style={Styles.UnderLine}>
                <Text
                  style={Styles.UnderLineText}
                ></Text>
              </View>
            </View>
          </View>
          )
        })}
        </ScrollView>
      </SafeAreaView>
      <View style={Styles.BackMainView}>
        <View style={Styles.MainView}>
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