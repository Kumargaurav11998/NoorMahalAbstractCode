import { View, Text, SafeAreaView, TextInput, Image, ImageBackground, TouchableOpacity, ScrollView, Pressable, StatusBar, Switch } from 'react-native'
import React, { useState } from 'react'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { FirstSlide, PizzaLogo, Slide1, Slider2, RDLogo } from '../../Utils/Image'
import Swiper from 'react-native-swiper'
import { useEffect } from 'react'
export default function ManageSpacialItem(props) {

  const [enable, setEnable] = useState(false);

  const toggleSwitch = () => {
    setEnable(e => !e);
  }

  const data = [
    {
      id: 0,
      name: 'Suppli Classico Pizza',
      Price: 119,
      subtitle: `Corn,Capsicum,Paneer
Topped With Mozzarella 
Cheese
      `,
      quantity: 1,
      ischecked: false
    },
    {
      id: 1,
      name: 'Farm Fresh Pizza',
      Price: 169,
      subtitle: `Capsicum,Tomato,
Mushroom,Onion
      `,
      quantity: 1,
      ischecked: false
    },
  ]
  const Data = [
    {
      id: 0,
      name: 'Suppli Classico Pizza',
      Price: 119,
      subtitle: `Corn,Capsicum,Paneer
Topped With Mozzarella 
Cheese
      `,
      quantity: 1,
      ischecked: false
    },
    {
      id: 1,
      name: 'Farm Fresh Pizza',
      Price: 169,
      subtitle: `Capsicum,Tomato,
Mushroom,Onion
      `,
      quantity: 1,
      ischecked: false
    },
  ]
  const Data1 = [
    {
      id: 0,
      name: 'Suppli Classico Pizza',
      Price: 119,
      subtitle: `Corn,Capsicum,Paneer
Topped With Mozzarella 
Cheese
      `,
      quantity: 1,
      ischecked: false
    },
    {
      id: 1,
      name: 'Farm Fresh Pizza',
      Price: 169,
      subtitle: `Capsicum,Tomato,
Mushroom,Onion
      `,
      quantity: 1,
      ischecked: false
    },
  ]
  const Data2 = [
    {
      id: 0,
      name: 'Suppli Classico Pizza',
      Price: 119,
      subtitle: `Corn,Capsicum,Paneer
Topped With Mozzarella 
Cheese
      `,
      quantity: 1,
      ischecked: false
    },
    {
      id: 1,
      name: 'Farm Fresh Pizza',
      Price: 169,
      subtitle: `Capsicum,Tomato,
Mushroom,Onion
      `,
      quantity: 1,
      ischecked: false
    },
  ]
  const Data3 = [
    {
      id: 0,
      name: 'Suppli Classico Pizza',
      Price: 119,
      subtitle: `Corn,Capsicum,Paneer
Topped With Mozzarella 
Cheese
      `,
      quantity: 1,
      ischecked: false
    },
    {
      id: 1,
      name: 'Farm Fresh Pizza',
      Price: 169,
      subtitle: `Capsicum,Tomato,
Mushroom,Onion
      `,
      quantity: 1,
      ischecked: false
    },
  ]
  const Data4 = [
    {
      id: 0,
      name: 'Suppli Classico Pizza',
      Price: 119,
      subtitle: `Corn,Capsicum,Paneer
Topped With Mozzarella 
Cheese
      `,
      quantity: 1,
      ischecked: false
    },
    {
      id: 1,
      name: 'Farm Fresh Pizza',
      Price: 169,
      subtitle: `Capsicum,Tomato,
Mushroom,Onion
      `,
      quantity: 1,
      ischecked: false
    },
  ]
  const Data5 = [
    {
      id: 0,
      name: 'Suppli Classico Pizza',
      Price: 119,
      subtitle: `Corn,Capsicum,Paneer
Topped With Mozzarella 
Cheese
      `,
      quantity: 1,
      ischecked: false
    },
    {
      id: 1,
      name: 'Farm Fresh Pizza',
      Price: 169,
      subtitle: `Capsicum,Tomato,
Mushroom,Onion
      `,
      quantity: 1,
      ischecked: false
    },
  ]

  const Search = (input) => {
    if (input) {
      const newData = searchdata.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const inputData = input.toUpperCase();
        return itemData.indexOf(inputData) > -1;
      });
      setSearchData(newData);
    } else {
      setSearchData(data);
    }
  }

  const handleChange = (item, index) => {
    console.log(item, '---', index);
    if (item.ischecked == true) {
      const newArr = searchdata.map((obj, i) => {
        if (index == i) {
          return {
            ...obj,
            ischecked: (searchdata[index].ischecked = false),
          };
        }
        return obj;
      });
      console.log(newArr);
      setSearchData(newArr);
      // settotalprice(istotalprice + parseInt(item.discount_price));
    } else {
      const newArr = searchdata.map((obj, i) => {
        if (index == i) {
          return {
            ...obj,
            ischecked: (searchdata[index].ischecked = true),
          };
        }
        return obj;
      });
      console.log(newArr);
      setSearchData(newArr);
    }
  };
  const handleChange1 = (item, index) => {
    console.log(item, '---', index);
    if (item.ischecked == true) {
      const newArr = searchdata1.map((obj, i) => {
        if (index == i) {
          return {
            ...obj,
            ischecked: (searchdata1[index].ischecked = false),
          };
        }
        return obj;
      });
      console.log(newArr);
      setSearchData1(newArr);
      // settotalprice(istotalprice + parseInt(item.discount_price));
    } else {
      const newArr = searchdata1.map((obj, i) => {
        if (index == i) {
          return {
            ...obj,
            ischecked: (searchdata1[index].ischecked = true),
          };
        }
        return obj;
      });
      console.log(newArr);
      setSearchData1(newArr);
    }
  };
  const handleChange2 = (item, index) => {
    console.log(item, '---', index);
    if (item.ischecked == true) {
      const newArr = searchdata2.map((obj, i) => {
        if (index == i) {
          return {
            ...obj,
            ischecked: (searchdata2[index].ischecked = false),
          };
        }
        return obj;
      });
      console.log(newArr);
      setSearchData2(newArr);
      // settotalprice(istotalprice + parseInt(item.discount_price));
    } else {
      const newArr = searchdata2.map((obj, i) => {
        if (index == i) {
          return {
            ...obj,
            ischecked: (searchdata2[index].ischecked = true),
          };
        }
        return obj;
      });
      console.log(newArr);
      setSearchData2(newArr);
    }
  };
  const handleChange3 = (item, index) => {
    console.log(item, '---', index);
    if (item.ischecked == true) {
      const newArr = searchdata3.map((obj, i) => {
        if (index == i) {
          return {
            ...obj,
            ischecked: (searchdata3[index].ischecked = false),
          };
        }
        return obj;
      });
      console.log(newArr);
      setSearchData3(newArr);
      // settotalprice(istotalprice + parseInt(item.discount_price));
    } else {
      const newArr = searchdata3.map((obj, i) => {
        if (index == i) {
          return {
            ...obj,
            ischecked: (searchdata3[index].ischecked = true),
          };
        }
        return obj;
      });
      console.log(newArr);
      setSearchData3(newArr);
    }
  };
  const handleChange4 = (item, index) => {
    console.log(item, '---', index);
    if (item.ischecked == true) {
      const newArr = searchdata4.map((obj, i) => {
        if (index == i) {
          return {
            ...obj,
            ischecked: (searchdata4[index].ischecked = false),
          };
        }
        return obj;
      });
      console.log(newArr);
      setSearchData4(newArr);
      // settotalprice(istotalprice + parseInt(item.discount_price));
    } else {
      const newArr = searchdata4.map((obj, i) => {
        if (index == i) {
          return {
            ...obj,
            ischecked: (searchdata4[index].ischecked = true),
          };
        }
        return obj;
      });
      console.log(newArr);
      setSearchData4(newArr);
    }
  };
  const handleChange5 = (item, index) => {
    console.log(item, '---', index);
    if (item.ischecked == true) {
      const newArr = searchdata5.map((obj, i) => {
        if (index == i) {
          return {
            ...obj,
            ischecked: (searchdata5[index].ischecked = false),
          };
        }
        return obj;
      });
      console.log(newArr);
      setSearchData5(newArr);
      // settotalprice(istotalprice + parseInt(item.discount_price));
    } else {
      const newArr = searchdata5.map((obj, i) => {
        if (index == i) {
          return {
            ...obj,
            ischecked: (searchdata5[index].ischecked = true),
          };
        }
        return obj;
      });
      console.log(newArr);
      setSearchData5(newArr);
    }
  };
  const handleChange6 = (item, index) => {
    console.log(item, '---', index);
    if (item.ischecked == true) {
      const newArr = searchdata6.map((obj, i) => {
        if (index == i) {
          return {
            ...obj,
            ischecked: (searchdata6[index].ischecked = false),
          };
        }
        return obj;
      });
      console.log(newArr);
      setSearchData6(newArr);
      // settotalprice(istotalprice + parseInt(item.discount_price));
    } else {
      const newArr = searchdata6.map((obj, i) => {
        if (index == i) {
          return {
            ...obj,
            ischecked: (searchdata6[index].ischecked = true),
          };
        }
        return obj;
      });
      console.log(newArr);
      setSearchData6(newArr);
    }
  };


  const [searchdata, setSearchData] = useState(data);
  const [searchdata1, setSearchData1] = useState(Data);
  const [searchdata2, setSearchData2] = useState(Data1);
  const [searchdata3, setSearchData3] = useState(Data2);
  const [searchdata4, setSearchData4] = useState(Data3);
  const [searchdata5, setSearchData5] = useState(Data4);
  const [searchdata6, setSearchData6] = useState(Data5);
  const [Recomanded, setRecomanded] = useState(true);
  const [salad, setSalad] = useState(true);
  const [Pizza, setPizza] = useState(true);
  const [Burger, setBurger] = useState(true);
  const [Sand, setSand] = useState(true);
  const [Sub, setSub] = useState(true);
  const [Wrap, setWrap] = useState(true);
  return (
    <>

      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <StatusBar barStyle='dark-content' backgroundColor={'#fff'} />
        <View style={{ height: heightToDp('33') }}>

          <View style={{ flexDirection: 'row', marginTop: heightToDp('4'), marginStart: widthToDp('3'),justifyContent:'space-between' }}>
            <View style={{ marginStart: widthToDp('4') }}>
              <Text style={{ color: '#000', fontSize: widthToDp('6'), fontWeight: 'bold' }}>Manage Spacial Items</Text>
            </View>
            <View style={{marginEnd:widthToDp('6')}}>
            <TouchableOpacity onPress={()=>props.navigation.openDrawer()} >
                            <Entypo name='grid' size={33} color={'rgb(252,73,17)'} />
                        </TouchableOpacity>
        </View>
          </View>
          <View style={{ alignItems: 'center', marginTop: heightToDp('2') }}>
            <View style={{ width: widthToDp('90'), height: heightToDp('18'), backgroundColor: '#fff', borderRadius: widthToDp('3'), elevation: 6 }}>
              <Swiper>
                <View>
                  <Image source={FirstSlide} style={{ height: heightToDp('18'), width: widthToDp('90') }} />
                </View>
                <View>
                  <Image source={Slide1} style={{ height: heightToDp('18'), width: widthToDp('90') }} />
                </View>
                <View>
                  <Image source={Slider2} style={{ height: heightToDp('18'), width: widthToDp('90') }} />
                </View>
              </Swiper>

            </View>
          </View>
        </View>
        <ScrollView>
          <View>
            <View>
              <TouchableOpacity onPress={() => setRecomanded(!Recomanded)}>
                <View style={{ flexDirection: 'row', height: heightToDp('7'), justifyContent: 'space-between' }}>

                  <View style={{ justifyContent: 'center', marginStart: widthToDp('5') }}>
                    <Text style={{ color: '#000', fontSize: widthToDp('4.5'), fontWeight: 'bold' }}>Recomended (2)</Text>
                  </View>
                  <View style={{ justifyContent: 'center', marginEnd: widthToDp('3') }}>
                    {Recomanded == false ? <AntDesign name='caretdown' size={15} color={'#000'} /> :
                      <AntDesign name='caretup' size={15} color={'#000'} />}

                  </View>
                </View>
              </TouchableOpacity>
              {Recomanded &&
                <>
                  {searchdata.map((item, index) => (
                    <Pressable key={item.id}>
                      <View style={{ flexDirection: 'row' }}>
                        <View>
                          <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                              <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('3') }}>
                                <Image source={RDLogo} style={{ height: heightToDp('3'), width: widthToDp('6') }} />
                              </View>
                              <View style={{ height: heightToDp('2.8'), justifyContent: 'center', marginTop: heightToDp('3'), marginStart: widthToDp('3'), width: widthToDp('19'), backgroundColor: 'rgb(234,113,60)', borderRadius: widthToDp('1.5') }}>
                                <Text style={{ color: '#fff', textAlign: 'center', fontSize: widthToDp('3.5') }}>Bestseller</Text>
                              </View>
                            </View>
                          </View>
                          <View style={{ marginTop: heightToDp('1.5'), marginStart: widthToDp('5'), width: widthToDp('40') }}>
                            <Text style={{ color: '#000', fontSize: widthToDp('4') }}>{item.name}</Text>
                          </View>
                          <View style={{ marginStart: widthToDp('5') }}>
                            <Text style={{ color: '#000', fontWeight: 'bold' }}>₹{item.Price}</Text>
                          </View>
                          <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('1'), width: widthToDp('40') }}>
                            <Text style={{ color: '#a9a9a9', fontSize: widthToDp('3.5') }}>{item.subtitle}</Text>
                          </View>
                        </View>
                        <View style={{ alignItems: 'center', marginStart: widthToDp('6'), marginBottom: heightToDp('2'), bottom: heightToDp('4') }}>
                          <View style={{ marginTop: heightToDp('3'), width: widthToDp('45'), alignItems: 'center' }}>
                            <Image source={PizzaLogo} />
                          </View>
                          <View style={{ marginTop: heightToDp('2') }}>
                            <Switch
                                    trackColor={{ false: "#81b0ff", true: "#00ffff" }}
                                    thumbColor={enable ? "#f5dd4b" : "#f4f3f4"}
                              onValueChange={() => handleChange(item, index)}
                              value={item.ischecked}
                            />
                          </View>
                        </View>

                      </View>
                    </Pressable>
                  ))}
                </>
              }
              <Text
                style={{
                  fontSize: 1,
                  borderBottomWidth: 1,
                  color: "#191970",
                }}
              ></Text>
            </View>

            <View>
              <TouchableOpacity onPress={() => setSalad(!salad)}>
                <View style={{ flexDirection: 'row', height: heightToDp('7'), justifyContent: 'space-between' }}>
                  <View style={{ justifyContent: 'center', marginStart: widthToDp('5') }}>
                    <Text style={{ color: '#000', fontSize: widthToDp('4.5'), fontWeight: 'bold' }}>Salad (2)</Text>
                  </View>
                  <View style={{ justifyContent: 'center', marginEnd: widthToDp('3') }}>
                    {salad == false ?
                      <AntDesign name='caretdown' size={15} color={'#000'} /> :
                      <AntDesign name='caretup' size={15} color={'#000'} />
                    }

                  </View>
                </View>
              </TouchableOpacity>
              {salad &&
                <>
                  {searchdata1.map((item, index) => (
                    <Pressable key={item.id}>
                      <View style={{ flexDirection: 'row' }}>
                        <View>
                          <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                              <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('3') }}>
                                <Image source={RDLogo} style={{ height: heightToDp('3'), width: widthToDp('6') }} />
                              </View>
                              <View style={{ height: heightToDp('2.8'), justifyContent: 'center', marginTop: heightToDp('3'), marginStart: widthToDp('3'), width: widthToDp('19'), backgroundColor: 'rgb(234,113,60)', borderRadius: widthToDp('1.5') }}>
                                <Text style={{ color: '#fff', textAlign: 'center', fontSize: widthToDp('3.5') }}>Bestseller</Text>
                              </View>
                            </View>
                          </View>
                          <View style={{ marginTop: heightToDp('1.5'), marginStart: widthToDp('5'), width: widthToDp('40') }}>
                            <Text style={{ color: '#000', fontSize: widthToDp('4') }}>{item.name}</Text>
                          </View>
                          <View style={{ marginStart: widthToDp('5') }}>
                            <Text style={{ color: '#000', fontWeight: 'bold' }}>₹{item.Price}</Text>
                          </View>
                          <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('1'), width: widthToDp('40') }}>
                            <Text style={{ color: '#a9a9a9', fontSize: widthToDp('3.5') }}>{item.subtitle}</Text>
                          </View>
                        </View>
                        <View style={{ alignItems: 'center', marginStart: widthToDp('6'), marginBottom: heightToDp('2'), bottom: heightToDp('4') }}>
                          <View style={{ marginTop: heightToDp('3'), width: widthToDp('45'), alignItems: 'center' }}>
                            <Image source={PizzaLogo} />
                          </View>
                          <View style={{ marginTop: heightToDp('2') }}>
                            <Switch
                                    trackColor={{ false: "#81b0ff", true: "#00ffff" }}
                                    thumbColor={enable ? "#f5dd4b" : "#f4f3f4"}
                              onValueChange={() => handleChange1(item, index)}
                              value={item.ischecked}
                            />
                          </View>
                        </View>

                      </View>
                    </Pressable>
                  ))}
                </>
              }
              <Text
                style={{
                  fontSize: 1,
                  borderBottomWidth: 1,
                  color: "#191970",
                }}
              ></Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => setPizza(!Pizza)}>
                <View style={{ flexDirection: 'row', height: heightToDp('10'), justifyContent: 'space-between' }}>
                  <View style={{ justifyContent: 'center', marginStart: widthToDp('5') }}>
                    <Text style={{ color: '#000', fontSize: widthToDp('4.5'), fontWeight: 'bold' }}>Pizza and Pasta (2)</Text>
                    <View style={{ marginTop: heightToDp('2') }}>
                      <Text style={{ color: '#a9a9a9' }}>Pasta 2</Text>
                    </View>
                  </View>
                  <View style={{ justifyContent: 'center', marginEnd: widthToDp('3') }}>
                    {Pizza == false ? <AntDesign name='caretdown' size={15} color={'#000'} /> : <AntDesign name='caretup' size={15} color={'#000'} />}

                  </View>
                </View>
              </TouchableOpacity>
              {Pizza &&
                <>
                  {searchdata2.map((item, index) => (
                    <Pressable key={item.id}>
                      <View style={{ flexDirection: 'row' }}>
                        <View>
                          <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                              <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('3') }}>
                                <Image source={RDLogo} style={{ height: heightToDp('3'), width: widthToDp('6') }} />
                              </View>
                              <View style={{ height: heightToDp('2.8'), justifyContent: 'center', marginTop: heightToDp('3'), marginStart: widthToDp('3'), width: widthToDp('19'), backgroundColor: 'rgb(234,113,60)', borderRadius: widthToDp('1.5') }}>
                                <Text style={{ color: '#fff', textAlign: 'center', fontSize: widthToDp('3.5') }}>Bestseller</Text>
                              </View>
                            </View>
                          </View>
                          <View style={{ marginTop: heightToDp('1.5'), marginStart: widthToDp('5'), width: widthToDp('40') }}>
                            <Text style={{ color: '#000', fontSize: widthToDp('4') }}>{item.name}</Text>
                          </View>
                          <View style={{ marginStart: widthToDp('5') }}>
                            <Text style={{ color: '#000', fontWeight: 'bold' }}>₹{item.Price}</Text>
                          </View>
                          <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('1'), width: widthToDp('40') }}>
                            <Text style={{ color: '#a9a9a9', fontSize: widthToDp('3.5') }}>{item.subtitle}</Text>
                          </View>
                        </View>
                        <View style={{ alignItems: 'center', marginStart: widthToDp('6'), marginBottom: heightToDp('2'), bottom: heightToDp('4') }}>
                          <View style={{ marginTop: heightToDp('3'), width: widthToDp('45'), alignItems: 'center' }}>
                            <Image source={PizzaLogo} />
                          </View>
                          <View style={{ marginTop: heightToDp('2') }}>
                            <Switch
                                    trackColor={{ false: "#81b0ff", true: "#00ffff" }}
                                    thumbColor={enable ? "#f5dd4b" : "#f4f3f4"}
                              onValueChange={() => handleChange2(item, index)}
                              value={item.ischecked}
                            />
                          </View>
                        </View>

                      </View>
                    </Pressable>
                  ))}
                </>
              }
              <Text
                style={{
                  fontSize: 1,
                  borderBottomWidth: 1,
                  color: "#191970",
                }}
              ></Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => setBurger(!Burger)}>
                <View style={{ flexDirection: 'row', height: heightToDp('12'), justifyContent: 'space-between' }}>
                  <View style={{ justifyContent: 'center', marginStart: widthToDp('5') }}>
                    <Text style={{ color: '#000', fontSize: widthToDp('4.5'), fontWeight: 'bold' }}>Burgers and Sandwiches</Text>
                    <View style={{ marginTop: heightToDp('2') }}>
                      <Text style={{ color: '#a9a9a9' }}>Burgers(10)</Text>
                    </View>
                  </View>
                  <View style={{ justifyContent: 'center', marginEnd: widthToDp('3') }}>
                    {Burger == false ? <AntDesign name='caretdown' size={15} color={'#000'} /> :
                      <AntDesign name='caretup' size={15} color={'#000'} />}

                  </View>
                </View>
              </TouchableOpacity>
              {Burger &&
                <>
                  {searchdata3.map((item, index) => (
                    <Pressable key={item.id}>
                      <View style={{ flexDirection: 'row' }}>
                        <View>
                          <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                              <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('3') }}>
                                <Image source={RDLogo} style={{ height: heightToDp('3'), width: widthToDp('6') }} />
                              </View>
                              <View style={{ height: heightToDp('2.8'), justifyContent: 'center', marginTop: heightToDp('3'), marginStart: widthToDp('3'), width: widthToDp('19'), backgroundColor: 'rgb(234,113,60)', borderRadius: widthToDp('1.5') }}>
                                <Text style={{ color: '#fff', textAlign: 'center', fontSize: widthToDp('3.5') }}>Bestseller</Text>
                              </View>
                            </View>
                          </View>
                          <View style={{ marginTop: heightToDp('1.5'), marginStart: widthToDp('5'), width: widthToDp('40') }}>
                            <Text style={{ color: '#000', fontSize: widthToDp('4') }}>{item.name}</Text>
                          </View>
                          <View style={{ marginStart: widthToDp('5') }}>
                            <Text style={{ color: '#000', fontWeight: 'bold' }}>₹{item.Price}</Text>
                          </View>
                          <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('1'), width: widthToDp('40') }}>
                            <Text style={{ color: '#a9a9a9', fontSize: widthToDp('3.5') }}>{item.subtitle}</Text>
                          </View>
                        </View>
                        <View style={{ alignItems: 'center', marginStart: widthToDp('6'), marginBottom: heightToDp('2'), bottom: heightToDp('4') }}>
                          <View style={{ marginTop: heightToDp('3'), width: widthToDp('45'), alignItems: 'center' }}>
                            <Image source={PizzaLogo} />
                          </View>

                          <View style={{ marginTop: heightToDp('2') }}>
                            <Switch
                                    trackColor={{ false: "#81b0ff", true: "#00ffff" }}
                                    thumbColor={enable ? "#f5dd4b" : "#f4f3f4"}
                              onValueChange={() => handleChange3(item, index)}
                              value={item.ischecked}
                            />
                          </View>
                        </View>

                      </View>
                    </Pressable>
                  ))}
                </>
              }
              <Text
                style={{
                  fontSize: 1,
                  borderBottomWidth: 1,
                  color: "#191970",
                }}
              ></Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => setSand(!Sand)}>
                <View style={{ flexDirection: 'row', height: heightToDp('7'), justifyContent: 'space-between' }}>
                  <View style={{ justifyContent: 'center', marginStart: widthToDp('5') }}>
                    <Text style={{ color: '#a9a9a9', fontSize: widthToDp('4.5') }}>Sandwiches (2)</Text>
                  </View>
                  <View style={{ justifyContent: 'center', marginEnd: widthToDp('3') }}>
                    {Sand == false ?
                      <AntDesign name='caretdown' size={15} color={'#000'} /> : <AntDesign name='caretup' size={15} color={'#000'} />
                    }
                  </View>
                </View>
              </TouchableOpacity>
              {Sand &&
                <>
                  {searchdata4.map((item, index) => (
                    <Pressable key={item.id}>
                      <View style={{ flexDirection: 'row' }}>
                        <View>
                          <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                              <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('3') }}>
                                <Image source={RDLogo} style={{ height: heightToDp('3'), width: widthToDp('6') }} />
                              </View>
                              <View style={{ height: heightToDp('2.8'), justifyContent: 'center', marginTop: heightToDp('3'), marginStart: widthToDp('3'), width: widthToDp('19'), backgroundColor: 'rgb(234,113,60)', borderRadius: widthToDp('1.5') }}>
                                <Text style={{ color: '#fff', textAlign: 'center', fontSize: widthToDp('3.5') }}>Bestseller</Text>
                              </View>
                            </View>
                          </View>
                          <View style={{ marginTop: heightToDp('1.5'), marginStart: widthToDp('5'), width: widthToDp('40') }}>
                            <Text style={{ color: '#000', fontSize: widthToDp('4') }}>{item.name}</Text>
                          </View>
                          <View style={{ marginStart: widthToDp('5') }}>
                            <Text style={{ color: '#000', fontWeight: 'bold' }}>₹{item.Price}</Text>
                          </View>
                          <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('1'), width: widthToDp('40') }}>
                            <Text style={{ color: '#a9a9a9', fontSize: widthToDp('3.5') }}>{item.subtitle}</Text>
                          </View>
                        </View>
                        <View style={{ alignItems: 'center', marginStart: widthToDp('6'), marginBottom: heightToDp('2'), bottom: heightToDp('4') }}>
                          <View style={{ marginTop: heightToDp('3'), width: widthToDp('45'), alignItems: 'center' }}>
                            <Image source={PizzaLogo} />
                          </View>

                          <View style={{ marginTop: heightToDp('2') }}>
                            <Switch
                                    trackColor={{ false: "#81b0ff", true: "#00ffff" }}
                                    thumbColor={enable ? "#f5dd4b" : "#f4f3f4"}
                              onValueChange={() => handleChange4(item, index)}
                              value={item.ischecked}
                            />
                          </View>
                        </View>

                      </View>
                    </Pressable>
                  ))}
                </>
              }
              <Text
                style={{
                  fontSize: 1,
                  borderBottomWidth: 1,
                  color: "#191970",
                }}
              ></Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => setSub(!Sub)}>
                <View style={{ flexDirection: 'row', height: heightToDp('7'), justifyContent: 'space-between' }}>
                  <View style={{ justifyContent: 'center', marginStart: widthToDp('5') }}>
                    <Text style={{ color: '#000', fontSize: widthToDp('4.5'), fontWeight: 'bold' }}>Sub (3)</Text>
                  </View>
                  <View style={{ justifyContent: 'center', marginEnd: widthToDp('3') }}>
                    {Sub == false ?
                      <AntDesign name='caretdown' size={15} color={'#000'} /> :
                      <AntDesign name='caretup' size={15} color={'#000'} />
                    }

                  </View>
                </View>
              </TouchableOpacity>
              {Sub &&
                <>
                  {searchdata5.map((item, index) => (
                    <Pressable key={item.id}>
                      <View style={{ flexDirection: 'row' }}>
                        <View>
                          <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                              <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('3') }}>
                                <Image source={RDLogo} style={{ height: heightToDp('3'), width: widthToDp('6') }} />
                              </View>
                              <View style={{ height: heightToDp('2.8'), justifyContent: 'center', marginTop: heightToDp('3'), marginStart: widthToDp('3'), width: widthToDp('19'), backgroundColor: 'rgb(234,113,60)', borderRadius: widthToDp('1.5') }}>
                                <Text style={{ color: '#fff', textAlign: 'center', fontSize: widthToDp('3.5') }}>Bestseller</Text>
                              </View>
                            </View>
                          </View>
                          <View style={{ marginTop: heightToDp('1.5'), marginStart: widthToDp('5'), width: widthToDp('40') }}>
                            <Text style={{ color: '#000', fontSize: widthToDp('4') }}>{item.name}</Text>
                          </View>
                          <View style={{ marginStart: widthToDp('5') }}>
                            <Text style={{ color: '#000', fontWeight: 'bold' }}>₹{item.Price}</Text>
                          </View>
                          <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('1'), width: widthToDp('40') }}>
                            <Text style={{ color: '#a9a9a9', fontSize: widthToDp('3.5') }}>{item.subtitle}</Text>
                          </View>
                        </View>
                        <View style={{ alignItems: 'center', marginStart: widthToDp('6'), marginBottom: heightToDp('2'), bottom: heightToDp('4') }}>
                          <View style={{ marginTop: heightToDp('3'), width: widthToDp('45'), alignItems: 'center' }}>
                            <Image source={PizzaLogo} />
                          </View>

                          <View style={{ marginTop: heightToDp('2') }}>
                            <Switch
                                    trackColor={{ false: "#81b0ff", true: "#00ffff" }}
                                    thumbColor={enable ? "#f5dd4b" : "#f4f3f4"}
                              onValueChange={() => handleChange5(item, index)}
                              value={item.ischecked}
                            />
                          </View>
                        </View>

                      </View>
                    </Pressable>
                  ))}
                </>

              }
              <Text
                style={{
                  fontSize: 1,
                  borderBottomWidth: 1,
                  color: "#191970",
                }}
              ></Text>
            </View>

            <View>
              <TouchableOpacity onPress={() => setWrap(!Wrap)}>
                <View style={{ flexDirection: 'row', height: heightToDp('7'), justifyContent: 'space-between' }}>
                  <View style={{ justifyContent: 'center', marginStart: widthToDp('5') }}>
                    <Text style={{ color: '#000', fontSize: widthToDp('4.5'), fontWeight: 'bold' }}>Wrap (1)</Text>
                  </View>
                  <View style={{ justifyContent: 'center', marginEnd: widthToDp('3') }}>
                    {Wrap == false ?
                      <AntDesign name='caretdown' size={15} color={'#000'} /> :
                      <AntDesign name='caretup' size={15} color={'#000'} />
                    }

                  </View>
                </View>
              </TouchableOpacity>
              {Wrap &&
                <>
                  {searchdata6.map((item, index) => (
                    <Pressable key={item.id}>
                      <View style={{ flexDirection: 'row' }}>
                        <View>
                          <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                              <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('3') }}>
                                <Image source={RDLogo} style={{ height: heightToDp('3'), width: widthToDp('6') }} />
                              </View>
                              <View style={{ height: heightToDp('2.8'), justifyContent: 'center', marginTop: heightToDp('3'), marginStart: widthToDp('3'), width: widthToDp('19'), backgroundColor: 'rgb(234,113,60)', borderRadius: widthToDp('1.5') }}>
                                <Text style={{ color: '#fff', textAlign: 'center', fontSize: widthToDp('3.5') }}>Bestseller</Text>
                              </View>
                            </View>
                          </View>
                          <View style={{ marginTop: heightToDp('1.5'), marginStart: widthToDp('5'), width: widthToDp('40') }}>
                            <Text style={{ color: '#000', fontSize: widthToDp('4') }}>{item.name}</Text>
                          </View>
                          <View style={{ marginStart: widthToDp('5') }}>
                            <Text style={{ color: '#000', fontWeight: 'bold' }}>₹{item.Price}</Text>
                          </View>
                          <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('1'), width: widthToDp('40') }}>
                            <Text style={{ color: '#a9a9a9', fontSize: widthToDp('3.5') }}>{item.subtitle}</Text>
                          </View>
                        </View>
                        <View style={{ alignItems: 'center', marginStart: widthToDp('6'), marginBottom: heightToDp('2'), bottom: heightToDp('4') }}>
                          <View style={{ marginTop: heightToDp('3'), width: widthToDp('45'), alignItems: 'center' }}>
                            <Image source={PizzaLogo} />
                          </View>

                          <View style={{ marginTop: heightToDp('2') }}>
                            <Switch
                                    trackColor={{ false: "#81b0ff", true: "#00ffff" }}
                                    thumbColor={enable ? "#f5dd4b" : "#f4f3f4"}
                              onValueChange={() => handleChange6(item, index)}
                              value={item.ischecked}
                            />
                          </View>
                        </View>

                      </View>
                    </Pressable>
                  ))}
                </>
              }
              <Text
                style={{
                  fontSize: 1,
                  borderBottomWidth: 1,
                  color: "#191970",
                }}
              ></Text>
            </View>

          </View>
        </ScrollView>


      </SafeAreaView>
      <View style={{height:heightToDp('0.1')}}>
        <View style={{ bottom: heightToDp('10'),width:widthToDp('25') }}>
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