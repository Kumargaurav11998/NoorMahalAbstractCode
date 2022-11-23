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
          <Text style={Styles.TopText}>Reservation</Text>
        </View>
        <View style={Styles.Icon1}>
        <TouchableOpacity onPress={()=>props.navigation.openDrawer()} >
                            <Entypo name='grid' size={33} color={'rgb(252,73,17)'} />
                        </TouchableOpacity>
        </View>
      </View>
     {Data.map((item)=>{
      return(
        <View style={Styles.ChildView}>
        <View>
          <View style={Styles.Code}>
            <Text style={Styles.CodeText}>{item.code}</Text>
          </View>
          <View style={Styles.NameCallView}>
            <View style={Styles.Name}>
              <Text style={Styles.NameText}>{item.name}</Text>
            </View>
            <View style={Styles.Name}>
              <Text style={Styles.NameText}>{item.phone}</Text>
            </View>
            <TouchableOpacity onPress={()=>Dialer()}>
              <View style={Styles.Call} >
                <Text style={Styles.CallText}>Call</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={Styles.Date}>
            <Text style={Styles.DateText}>Date:{item.Date}</Text>
          </View>
          <View style={Styles.Time}>
            <Text style={Styles.TimeText}>Time:{item.Time}</Text>
          </View>
          <View style={Styles.Time}>
            <Text style={Styles.Guest}>Number of Guest:{item.Guest}</Text>
          </View>
          <View style={Styles.Time}>
            <Text style={Styles.Guest}>Spacial Instruction</Text>
          </View>
          <View style={Styles.TableCancel}>
            <TouchableOpacity onPress={()=>Cancel()}>
              <View style={Styles.Cancel}>
                <Text style={Styles.CancelText}>Cancel</Text>
              </View>
            </TouchableOpacity>

            <View style={Styles.Table}>
              <Text style={Styles.TableText}>Table Confirmed</Text>
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