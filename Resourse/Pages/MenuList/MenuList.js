import { View, Text, SafeAreaView, TextInput, Image, ImageBackground, TouchableOpacity, ScrollView, Pressable, StatusBar, ActivityIndicator, FlatList } from 'react-native'
import React, { useState } from 'react'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { FirstSlide, PizzaLogo, Slide1, Slider2, RDLogo } from '../../Utils/Image'
import Swiper from 'react-native-swiper'
import Styles from './MenuListStyle'
import AddStyles from '../AddItem/AddStyle'
import { BottomSheet } from 'react-native-btr';
import { Camera, Gallery } from '../../Utils/Image'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { BANEERAction } from '../../Action/BaneerAction'
export default function MenuList(props) {

  const data = [
    {
      id: 0,
      name: 'Suppli Classico Pizza',
      Price: '119',
      subtitle: `Corn,Capsicum,Paneer
Topped With Mozzarella 
Cheese
      `,
      quantity: 1,
      image: require('../../Assets/PizzaLogo.png')
    },
    {
      id: 1,
      name: 'Farm Fresh Pizza',
      Price: '169',
      subtitle: `Capsicum,Tomato,
Mushroom,Onion
      `,
      quantity: 1,
      image: require('../../Assets/PizzaLogo.png')
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
  const token = useSelector(state => state.LoginReducer.Login[0].token);
  const [checked, setChecked] = useState([])
  const [loader, setloader] = useState(true);
  const [add,setAdd] = useState(false)
  const [searchdata, setSearchData] = useState(data);
  const [visible, setVisible] = useState(false);
  const [Recomanded, setRecomanded] = useState(true);
  const [salad, setSalad] = useState(true);
  const [Pizza, setPizza] = useState(true);
  const [Burger, setBurger] = useState(true);
  const [Sand, setSand] = useState(true);
  const [Sub, setSub] = useState(true);
  const [Wrap, setWrap] = useState(true);
  const dispatch = useDispatch();
  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    Baneer(token);
  }, [])

  const Baneer = (token) => {
    dispatch(BANEERAction.BaneerAction(token)).then(async data => {
      if (data) {
        setChecked(data.data);
        setloader(false);
      }

    })
  }
  const AddImage = ()=>{
    setAdd(!add);
  }
  const Images = [
    { image: 'http://noormahal.abstractbrains.uk/public/banner/banner-1.jpeg' },
    { image: 'http://noormahal.abstractbrains.uk/public/banner/banner-2.jpeg' },
    { image: 'http://noormahal.abstractbrains.uk/public/banner/banner-3.jpeg' },
    { image: 'http://noormahal.abstractbrains.uk/public/banner/banner-4.jpeg' },
  ]
  return (
    <>
      <SafeAreaView style={Styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor={'#fff'} />
        {loader ? (
          <ActivityIndicator
            size="large"
            color={'#000'}
            style={{ marginTop: heightToDp('50') }}
          />
        ) : (
          <View style={Styles.MainView}>

            <View style={Styles.TopView}>
              {/* <View style={{ marginTop: heightToDp('1') }}>
            <AntDesign name='left' size={30} color={'#fff'} />
          </View> */}
              <View style={Styles.FlexView}>
                <View style={Styles.SearchBar}>
                  <View style={Styles.SearchIcon}>
                    <AntDesign name='search1' color={'red'} size={18} />
                  </View>
                  <View style={Styles.TextInputView}>
                    <TextInput
                      placeholder='Search Menu'
                      placeholderTextColor={'#a9a9a9'}
                      onChangeText={(input) => {
                        Search(input);
                      }}
                      style={Styles.TextInput}
                    />
                  </View>
                </View>
                <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                  <View style={Styles.MenuView}>
                    <AntDesign name='ellipsis1' color={'#000'} size={20} />
                  </View>
                </TouchableOpacity>

              </View>
            </View>
            <View style={Styles.BanerMainView}>
              <View style={Styles.BanerView}>
                <View>
                  <FlatList
                    pagingEnabled={true}
                    horizontal={true}
                    data={Images}
                    renderItem={({ item }) => {
                      return (
                        <View>
                          <Image source={{ uri: item.image }} style={Styles.BanerImage} />
                        </View>
                      )
                    }}
                  />
                </View>

              </View>
            </View>
          </View>
        )}

        <ScrollView>
          <View>
            <View>
              <TouchableOpacity onPress={() => setRecomanded(!Recomanded)}>
                <View style={Styles.RecomandedMain}>

                  <View style={Styles.RecomandedView}>
                    <Text style={Styles.RecomandedText}>Recomended (2)</Text>
                  </View>
                  <View style={Styles.RecomandedIcon}>
                    {Recomanded == false ? <AntDesign name='caretdown' size={15} color={'#000'} /> :
                      <AntDesign name='caretup' size={15} color={'#000'} />}

                  </View>
                </View>
              </TouchableOpacity>
              {Recomanded &&
                <>
                  {searchdata.map((item, index) => (
                    <Pressable key={item.id}>
                      <View style={Styles.RecomandedListView}>
                        <View>
                          <View>
                            <View style={Styles.ListView}>
                              <View style={Styles.ListImText}>
                                <Image source={RDLogo} style={Styles.ListImage} />
                              </View>
                              <View style={Styles.ListTextView}>
                                <Text style={Styles.ListText}>Bestseller</Text>
                              </View>
                            </View>
                          </View>
                          <View style={Styles.ListNameView}>
                            <Text style={Styles.ListNameText}>{item.name}</Text>
                          </View>
                          <View style={Styles.ListNameView}>
                            <Text style={Styles.ListNameText}>₹{item.Price}</Text>
                          </View>
                          <View style={Styles.ListNameView}>
                            <Text style={Styles.ListNameText}>{item.subtitle}</Text>
                          </View>
                        </View>
                        <View style={Styles.LogoMainView}>
                          <View style={Styles.LogoView}>
                            <Image source={item.image} />
                          </View>
                          <View style={Styles.EditButtonView}>
                            <TouchableOpacity onPress={() =>props.navigation.navigate('Edit_Item',{Data:item})}>
                              <View style={Styles.EditButton}>
                                <Text style={Styles.EditButtonText}>Edit</Text>
                              </View>
                            </TouchableOpacity>
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
                <View style={Styles.RecomandedMain}>

                  <View style={Styles.RecomandedView}>
                    <Text style={Styles.RecomandedText}>Salad (2)</Text>
                  </View>
                  <View style={Styles.RecomandedIcon}>
                    {salad == false ? <AntDesign name='caretdown' size={15} color={'#000'} /> :
                      <AntDesign name='caretup' size={15} color={'#000'} />}

                  </View>
                </View>
              </TouchableOpacity>
              {salad &&
                <>
                  {searchdata.map((item, index) => (
                    <Pressable key={item.id}>
                      <View style={Styles.RecomandedListView}>
                        <View>
                          <View>
                            <View style={Styles.ListView}>
                              <View style={Styles.ListImText}>
                                <Image source={RDLogo} style={Styles.ListImage} />
                              </View>
                              <View style={Styles.ListTextView}>
                                <Text style={Styles.ListText}>Bestseller</Text>
                              </View>
                            </View>
                          </View>
                          <View style={Styles.ListNameView}>
                            <Text style={Styles.ListNameText}>{item.name}</Text>
                          </View>
                          <View style={Styles.ListNameView}>
                            <Text style={Styles.ListNameText}>₹{item.Price}</Text>
                          </View>
                          <View style={Styles.ListNameView}>
                            <Text style={Styles.ListNameText}>{item.subtitle}</Text>
                          </View>
                        </View>
                        <View style={Styles.LogoMainView}>
                          <View style={Styles.LogoView}>
                            <Image source={PizzaLogo} />
                          </View>
                          <View style={Styles.EditButtonView}>
                            <TouchableOpacity >
                              <View style={Styles.EditButton}>
                                <Text style={Styles.EditButtonText}>Edit</Text>
                              </View>
                            </TouchableOpacity>
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
                <View style={Styles.RecomandedMain}>

                  <View style={Styles.RecomandedView}>
                    <Text style={Styles.RecomandedText}>Pizza (2)</Text>
                  </View>
                  <View style={Styles.RecomandedIcon}>
                    {Pizza == false ? <AntDesign name='caretdown' size={15} color={'#000'} /> :
                      <AntDesign name='caretup' size={15} color={'#000'} />}

                  </View>
                </View>
              </TouchableOpacity>
              {Pizza &&
                <>
                  {searchdata.map((item, index) => (
                    <Pressable key={item.id}>
                      <View style={Styles.RecomandedListView}>
                        <View>
                          <View>
                            <View style={Styles.ListView}>
                              <View style={Styles.ListImText}>
                                <Image source={RDLogo} style={Styles.ListImage} />
                              </View>
                              <View style={Styles.ListTextView}>
                                <Text style={Styles.ListText}>Bestseller</Text>
                              </View>
                            </View>
                          </View>
                          <View style={Styles.ListNameView}>
                            <Text style={Styles.ListNameText}>{item.name}</Text>
                          </View>
                          <View style={Styles.ListNameView}>
                            <Text style={Styles.ListNameText}>₹{item.Price}</Text>
                          </View>
                          <View style={Styles.ListNameView}>
                            <Text style={Styles.ListNameText}>{item.subtitle}</Text>
                          </View>
                        </View>
                        <View style={Styles.LogoMainView}>
                          <View style={Styles.LogoView}>
                            <Image source={PizzaLogo} />
                          </View>
                          <View style={Styles.EditButtonView}>
                            <TouchableOpacity >
                              <View style={Styles.EditButton}>
                                <Text style={Styles.EditButtonText}>Edit</Text>
                              </View>
                            </TouchableOpacity>
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
                <View style={Styles.RecomandedMain}>

                  <View style={Styles.RecomandedView}>
                    <Text style={Styles.RecomandedText}>Burger (2)</Text>
                  </View>
                  <View style={Styles.RecomandedIcon}>
                    {Burger == false ? <AntDesign name='caretdown' size={15} color={'#000'} /> :
                      <AntDesign name='caretup' size={15} color={'#000'} />}

                  </View>
                </View>
              </TouchableOpacity>
              {Burger &&
                <>
                  {searchdata.map((item, index) => (
                    <Pressable key={item.id}>
                      <View style={Styles.RecomandedListView}>
                        <View>
                          <View>
                            <View style={Styles.ListView}>
                              <View style={Styles.ListImText}>
                                <Image source={RDLogo} style={Styles.ListImage} />
                              </View>
                              <View style={Styles.ListTextView}>
                                <Text style={Styles.ListText}>Bestseller</Text>
                              </View>
                            </View>
                          </View>
                          <View style={Styles.ListNameView}>
                            <Text style={Styles.ListNameText}>{item.name}</Text>
                          </View>
                          <View style={Styles.ListNameView}>
                            <Text style={Styles.ListNameText}>₹{item.Price}</Text>
                          </View>
                          <View style={Styles.ListNameView}>
                            <Text style={Styles.ListNameText}>{item.subtitle}</Text>
                          </View>
                        </View>
                        <View style={Styles.LogoMainView}>
                          <View style={Styles.LogoView}>
                            <Image source={PizzaLogo} />
                          </View>
                          <View style={Styles.EditButtonView}>
                            <TouchableOpacity >
                              <View style={Styles.EditButton}>
                                <Text style={Styles.EditButtonText}>Edit</Text>
                              </View>
                            </TouchableOpacity>
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
                <View style={Styles.RecomandedMain}>

                  <View style={Styles.RecomandedView}>
                    <Text style={Styles.RecomandedText}>Sandwitch (2)</Text>
                  </View>
                  <View style={Styles.RecomandedIcon}>
                    {Sand == false ? <AntDesign name='caretdown' size={15} color={'#000'} /> :
                      <AntDesign name='caretup' size={15} color={'#000'} />}

                  </View>
                </View>
              </TouchableOpacity>
              {Sand &&
                <>
                  {searchdata.map((item, index) => (
                    <Pressable key={item.id}>
                      <View style={Styles.RecomandedListView}>
                        <View>
                          <View>
                            <View style={Styles.ListView}>
                              <View style={Styles.ListImText}>
                                <Image source={RDLogo} style={Styles.ListImage} />
                              </View>
                              <View style={Styles.ListTextView}>
                                <Text style={Styles.ListText}>Bestseller</Text>
                              </View>
                            </View>
                          </View>
                          <View style={Styles.ListNameView}>
                            <Text style={Styles.ListNameText}>{item.name}</Text>
                          </View>
                          <View style={Styles.ListNameView}>
                            <Text style={Styles.ListNameText}>₹{item.Price}</Text>
                          </View>
                          <View style={Styles.ListNameView}>
                            <Text style={Styles.ListNameText}>{item.subtitle}</Text>
                          </View>
                        </View>
                        <View style={Styles.LogoMainView}>
                          <View style={Styles.LogoView}>
                            <Image source={PizzaLogo} />
                          </View>
                          <View style={Styles.EditButtonView}>
                            <TouchableOpacity >
                              <View style={Styles.EditButton}>
                                <Text style={Styles.EditButtonText}>Edit</Text>
                              </View>
                            </TouchableOpacity>
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
                <View style={Styles.RecomandedMain}>

                  <View style={Styles.RecomandedView}>
                    <Text style={Styles.RecomandedText}>Sub (2)</Text>
                  </View>
                  <View style={Styles.RecomandedIcon}>
                    {Sub == false ? <AntDesign name='caretdown' size={15} color={'#000'} /> :
                      <AntDesign name='caretup' size={15} color={'#000'} />}

                  </View>
                </View>
              </TouchableOpacity>
              {Sub &&
                <>
                  {searchdata.map((item, index) => (
                    <Pressable key={item.id}>
                      <View style={Styles.RecomandedListView}>
                        <View>
                          <View>
                            <View style={Styles.ListView}>
                              <View style={Styles.ListImText}>
                                <Image source={RDLogo} style={Styles.ListImage} />
                              </View>
                              <View style={Styles.ListTextView}>
                                <Text style={Styles.ListText}>Bestseller</Text>
                              </View>
                            </View>
                          </View>
                          <View style={Styles.ListNameView}>
                            <Text style={Styles.ListNameText}>{item.name}</Text>
                          </View>
                          <View style={Styles.ListNameView}>
                            <Text style={Styles.ListNameText}>₹{item.Price}</Text>
                          </View>
                          <View style={Styles.ListNameView}>
                            <Text style={Styles.ListNameText}>{item.subtitle}</Text>
                          </View>
                        </View>
                        <View style={Styles.LogoMainView}>
                          <View style={Styles.LogoView}>
                            <Image source={PizzaLogo} />
                          </View>
                          <View style={Styles.EditButtonView}>
                            <TouchableOpacity >
                              <View style={Styles.EditButton}>
                                <Text style={Styles.EditButtonText}>Edit</Text>
                              </View>
                            </TouchableOpacity>
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
                <View style={Styles.RecomandedMain}>

                  <View style={Styles.RecomandedView}>
                    <Text style={Styles.RecomandedText}>Wrap (1)</Text>
                  </View>
                  <View style={Styles.RecomandedIcon}>
                    {Wrap == false ? <AntDesign name='caretdown' size={15} color={'#000'} /> :
                      <AntDesign name='caretup' size={15} color={'#000'} />}

                  </View>
                </View>
              </TouchableOpacity>
              {Wrap &&
                <>
                  {searchdata.map((item, index) => (
                    <Pressable key={item.id}>
                      <View style={Styles.RecomandedListView}>
                        <View>
                          <View>
                            <View style={Styles.ListView}>
                              <View style={Styles.ListImText}>
                                <Image source={RDLogo} style={Styles.ListImage} />
                              </View>
                              <View style={Styles.ListTextView}>
                                <Text style={Styles.ListText}>Bestseller</Text>
                              </View>
                            </View>
                          </View>
                          <View style={Styles.ListNameView}>
                            <Text style={Styles.ListNameText}>{item.name}</Text>
                          </View>
                          <View style={Styles.ListNameView}>
                            <Text style={Styles.ListNameText}>₹{item.Price}</Text>
                          </View>
                          <View style={Styles.ListNameView}>
                            <Text style={Styles.ListNameText}>{item.subtitle}</Text>
                          </View>
                        </View>
                        <View style={Styles.LogoMainView}>
                          <View style={Styles.LogoView}>
                            <Image source={PizzaLogo} />
                          </View>
                          <View style={Styles.EditButtonView}>
                            <TouchableOpacity >
                              <View style={Styles.EditButton}>
                                <Text style={Styles.EditButtonText}>Edit</Text>
                              </View>
                            </TouchableOpacity>
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
      <View style={Styles.BottomView}>
        <View style={Styles.AddMain}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Add_Item')}>
            <View style={Styles.AddView}>
              <Entypo name='plus' size={25} color={'#fff'} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}