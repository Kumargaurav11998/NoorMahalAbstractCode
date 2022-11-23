import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import { useState } from 'react'
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

      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={{ flexDirection: 'row', marginTop: heightToDp('4'), marginStart: widthToDp('3'), justifyContent: 'space-between' }}>
          <View style={{ marginStart: widthToDp('5') }}>
            <Text style={{ color: '#000', fontSize: widthToDp('6'), fontWeight: 'bold' }}>Order History</Text>
          </View>
          <View style={{ marginEnd: widthToDp('6') }}>
            <TouchableOpacity onPress={()=>props.navigation.openDrawer()} >
              <Entypo name='grid' size={33} color={'rgb(252,73,17)'} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>


        {Data.map((item)=>{
          return(
            <View style={{ marginTop: heightToDp('4'),marginBottom:heightToDp('1') }}>
            <View>
              <View style={{ marginStart: widthToDp('15') }}>
                <Text style={{ color: 'rgb(255,91,5)' }}>{item.code}</Text>
              </View>
              <View style={{ marginStart: widthToDp('6'), marginTop: heightToDp('1.5') }}>
                <Text style={{ color: '#000', fontWeight: 'bold', fontSize: widthToDp('4') }}>{item.name}</Text>
              </View>
              <View style={{ marginStart: widthToDp('6'), marginTop: heightToDp('0.7') }}>
                <Text style={{ color: '#000', fontWeight: 'bold', fontSize: widthToDp('4') }}>{item.phone}</Text>
              </View>
              <View style={{ marginStart: widthToDp('6'), marginTop: heightToDp('0.7') }}>
                <Text style={{ color: '#000', fontWeight: 'bold', fontSize: widthToDp('4') }}>{item.email}</Text>
              </View>
              <View style={{ marginStart: widthToDp('6'), marginTop: heightToDp('1') }}>
                <Text style={{ color: '#000', fontWeight: 'bold', fontSize: widthToDp('4') }}>₹{item.Price}.00</Text>
              </View>
              <View style={{ marginStart: widthToDp('6'), marginTop: heightToDp('0.7') }}>
                <Text style={{ color: '#000' }}>Date:{item.Date}</Text>
              </View>
              <View style={{ marginStart: widthToDp('6'), marginTop: heightToDp('0.7') }}>
                <Text style={{ color: '#000' }}>Time:{item.Time}</Text>
              </View>
              <View style={{ marginStart: widthToDp('6'), marginTop: heightToDp('0.7') }}>
                <Text style={{ color: '#000' }}>Number of Guest:{item.Guest}</Text>
              </View>
              <View style={{ marginStart: widthToDp('6'), marginTop: heightToDp('0.7') }}>
                <Text style={{ color: '#000' }}>Spacial Instruction</Text>
              </View>
              <View style={{ marginStart: widthToDp('6'), marginTop: heightToDp('0.7') }}>
                <Text style={{ color: '#000' }}>{item.Loaction}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: heightToDp('2') }}>
                <TouchableOpacity onPress={() => props.navigation.navigate('View')}>
                  <View style={{ borderWidth: 1, width: widthToDp('35'), height: heightToDp('5'), borderRadius: widthToDp('20'), justifyContent: 'center', alignItems: 'center', borderColor: 'rgb(0,155,68)' }}>
                    <Text style={{ fontSize: widthToDp('4'), color: 'rgb(0,155,68)', fontWeight: 'bold' }}>View Order</Text>
                  </View>
                </TouchableOpacity>
  
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ color: 'rgb(0,155,68)', fontSize: widthToDp('4') }}>Delivered</Text>
                  <View style={{ marginStart: widthToDp('3') }}>
                    <AntDesign name='checkcircleo' size={20} color={'rgb(0,155,68)'} />
                  </View>
                </View>
              </View>
              <View style={{ marginTop: heightToDp('4'), alignItems: 'center' }}>
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
          </View>
          )
        })}
        </ScrollView>
      </SafeAreaView>
      <View style={{ height: heightToDp('0.1') }}>
        <View style={{ bottom: heightToDp('10'), width: widthToDp('25') }}>
          <TouchableOpacity onPress={() => props.navigation.replace('Menu')}>
            <View style={{ height: heightToDp('8.5'), width: widthToDp('17.5'), borderRadius: widthToDp('15'), marginStart: widthToDp('5'), marginBottom: heightToDp('1'), backgroundColor: 'rgb(255,130,50)', alignItems: 'center', justifyContent: 'center' }}>
              <AntDesign name='arrowleft' color={'#fff'} size={25} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}