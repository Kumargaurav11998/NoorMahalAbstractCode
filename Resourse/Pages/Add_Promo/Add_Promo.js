import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Switch, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { TextInput } from 'react-native-gesture-handler'
import { useState } from 'react'
import Styles from './AddPromoStyle'
import {useDispatch, useSelector} from 'react-redux'
import {ADDPromoAction} from '../../Action/AddPromoAction'
import { useEffect } from 'react'
import { heightToDp } from '../../Utils/Responsive'
export default function Add_Promo(props) {

  const token= useSelector(state=>state.LoginReducer.Login[0].token)
  const [checked,setChecked] = useState([])
  const [enable,setEnable] = useState(true)
  const [loader, setloader] = useState(true);
  console.log(checked,'-=-=-=-=-=-=-');
  const dispatch = useDispatch();
  useEffect(()=>{
   Promolist(token);
  },[])
  const Promolist = (token)=>{
     dispatch(ADDPromoAction.AddPromoAction(token)).then(async data =>{
       console.log(data,'ppppppppppp')
       if(data){
        setChecked(data.data);
         setloader(false);
       }

   })
  }
  const handleChange = (item, index) => {
    if (enable == true) {
      const newArr = checked.map((obj, i) => {
        if (index == i) {
          return {
            ...obj,
            enable: (checked[index].enable = false),
          };
        }
        return obj;
      });
      console.log(newArr);
      setChecked(newArr);
      // settotalprice(istotalprice + parseInt(item.discount_price));
    } else {
      const newArr = checked.map((obj, i) => {
        if (index == i) {
          return {
            ...obj,
            enable: (checked[index].enable = true),
          };
        }
        return obj;
      });
      console.log(newArr);
      setChecked(newArr);
    }
  };

  return (
  
    <>

   <SafeAreaView style={Styles.container}>
    {loader ? (
<ActivityIndicator
              size="large"
              color={'#000'}
              style={{marginTop:heightToDp('50')}}
/>
    ):(
<View>
<View style={Styles.TopView}>
        <View style={Styles.AddPromo}>
          <Text style={Styles.AddPromoText}>Add Promo</Text>
        </View>
        <View style={Styles.Icon}>
        <TouchableOpacity onPress={()=>props.navigation.openDrawer()}>
                            <Entypo name='grid' size={33} color={'rgb(252,73,17)'} />
                        </TouchableOpacity>
        </View>
      </View>
      <View style={Styles.MainView}>
        <View style={Styles.TextInput}>
          <TextInput
            placeholder='Enter Your Promo'
            placeholderTextColor={'#000'}
            style={Styles.TextInputText}
          />
        </View>
        <View style={Styles.TextInput}>
          <TextInput
            placeholder='Enter Promo %'
            placeholderTextColor={'#000'}
            style={Styles.TextInputText}
          />
        </View>
        <TouchableOpacity>
          <View style={Styles.SubmitView}>
            <Text style={Styles.SubmitText}>Submit</Text>
          </View>
        </TouchableOpacity>
        <View style={Styles.PromoView}>
          <Text style={Styles.PromoText}>Promo List</Text>
        </View>
      </View>
<View>
<FlatList 
data={checked}
renderItem={({item})=>{
  return(
    <View style={Styles.BottomTop}>
          <View style={Styles.BottomView}>
    <View style={Styles.CodeView}>
      <Text style={Styles.CodeText}>{item.promo_code}</Text>
    </View>
    <View style={Styles.SwitchView}>
      <Switch
        trackColor={{ false: "#81b0ff", true: "#00ffff" }}
        thumbColor={enable ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={()=>handleChange(item,index)}
        value={checked}
      />
    </View>
  </View>
    </View>

  )
}}
/>
</View>
</View>
    )}


    </SafeAreaView>
    <View style={Styles.BackButton}>
        <View style={Styles.BackButtonView}>
          <TouchableOpacity onPress={() => props.navigation.replace('Menu')}>
            <View style={Styles.BackView}>
            <AntDesign name='arrowleft' color={'#fff'} size={25} />
            </View>
          </TouchableOpacity>
        </View>
      </View></>
   
   
   
  )
}