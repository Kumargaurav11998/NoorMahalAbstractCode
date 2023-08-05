import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  ToastAndroid,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {BottomSheet} from 'react-native-btr';
import {heightToDp, widthToDp} from '../../Utils/Responsive';
import AddStyles from './AddStyle';
import {Camera, Gallery} from '../../Utils/Image';
import {useDispatch, useSelector} from 'react-redux';
import {ITEMAction} from '../../Action/ItemAction';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {Formik} from 'formik';

export default function AddItem(props) {
  const [visible, setVisible] = useState(false);
  const [pic, setPic] = useState('');
  const [Name, setName] = useState('');
  const [Price, setPrice] = useState('');
  const [Desc, setDesc] = useState('');
  const token = useSelector(state => state.LoginReducer.Login[0].token);
  const AddImage = () => {
    setVisible(!visible);
  };
  const setToastmsg = msg => {
    ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
  };
  const Upload = () => {
    let options = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        setToastmsg('Cancelled Image Selection');
      } else if (response.errorCode == 'permission') {
        setToastmsg('permission not satisfied');
      } else if (response.errorCode == 'others') {
        setToastmsg(response.errorMessage);
      } else if (response.assets[0].fileSize > 2097152) {
        Alert.alert(
          'Maximum image Size Expanded',
          'Please choose image under 2 MB',
          [{text: 'OK'}],
        );
      } else {
        setPic(response.assets[0].base64);
      }
    });
  };
  const CameraImg = () => {
    let options = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: true,
    };
    launchCamera(options, response => {
      if (response.didCancel) {
        setToastmsg('Cancelled Image Selection');
      } else if (response.errorCode == 'permission') {
        setToastmsg('permission not satisfied');
      } else if (response.errorCode == 'others') {
        setToastmsg(response.errorMessage);
      } else {
        setPic(response.assets[0].base64);
      }
    });
  };
  const dispatch = useDispatch();
  const AddItems = () => {
    if (!Name) {
      console.log(Name, '=====>');
      ToastAndroid.show('Enter Your Item', ToastAndroid.SHORT);
    } else if (!Price) {
      ToastAndroid.show('Enter Your Price', ToastAndroid.SHORT);
    } else if (!Desc) {
      ToastAndroid.show('Enter Your Decription', ToastAndroid.SHORT);
    } else {
      // var data = new FormData();
      var data = {
        item_name: 'MOMO',
        item_mrp: '100',
        item_desc: 'Streat Food',
        item_msp: '100',
        item_code: 'Momo1',
        item_status: '1',
        item_photo: 'abc.png',
      };
      // data.append('item_name', 'MOMO');
      // data.append('item_mrp', '100');
      // data.append('item_desc', 'Streat Food');
      // data.append('item_msp', '100');
      // data.append('item_code', 'Momo1');
      // // data.append('item_photo', '12');
      // data.append('item_status', '1');
      // data.append('item_photo',"abc.png");
      dispatch(ITEMAction.ItemAction(data, token)).then(async Data => {
        console.log(Data, 'dddd');
        // if (data.message) {
        //     ToastAndroid.show(data.message, ToastAndroid.SHORT);
        //     props.navigation.navigate('Menu');
        // } else {
        //     ToastAndroid.show('Error', ToastAndroid.SHORT);
        // }
      });
    }
  };
  return (
    <SafeAreaView style={AddStyles.container}>
      <StatusBar
        backgroundColor={'rgb(234,113,60)'}
        barStyle={'light-content'}
      />
      <ScrollView>
        <View style={AddStyles.TopView}>
          <View style={AddStyles.TopMain}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => props.navigation.goBack('Menu')}>
                <View style={AddStyles.Icon}>
                  <AntDesign name="arrowleft" size={25} color={'#fff'} />
                </View>
              </TouchableOpacity>

              <View style={AddStyles.AddItem}>
                <Text style={AddStyles.AddItemText}>Add item</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => AddItems()}>
              <View style={AddStyles.Save}>
                <Text style={AddStyles.SaveText}>SAVE</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={AddStyles.AddView}>
            <TouchableOpacity onPress={() => AddImage()}>
              <View style={{alignItems: 'center'}}>
                <MaterialIcons name="add-a-photo" size={25} color={'#fff'} />
              </View>
              <View>
                <Text style={AddStyles.AddText}>Add Images</Text>
              </View>
            </TouchableOpacity>
            <BottomSheet visible={visible} onBackButtonPress={AddImage}>
              <View
                style={{
                  height: heightToDp('30'),
                  backgroundColor: 'rgb(30,47,55)',
                  borderTopStartRadius: widthToDp('5'),
                  borderTopEndRadius: widthToDp('5'),
                }}>
                <View
                  style={{
                    marginStart: widthToDp('10'),
                    marginTop: heightToDp('4'),
                  }}>
                  <Text style={{color: '#fff', fontSize: widthToDp('6')}}>
                    Edit Image
                  </Text>
                </View>
                <View
                  style={{flexDirection: 'row', marginTop: heightToDp('4')}}>
                  <View>
                    <TouchableOpacity>
                      <View
                        style={{
                          borderWidth: 0.2,
                          height: heightToDp('8'),
                          width: widthToDp('16'),
                          borderRadius: widthToDp('20'),
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginStart: widthToDp('6'),
                          borderColor: '#fff',
                        }}>
                        <View
                          style={{
                            height: heightToDp('6'),
                            width: widthToDp('12'),
                            borderRadius: widthToDp('20'),
                            backgroundColor: 'rgb(252,60,23)',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <MaterialCommunityIcons
                            name="delete"
                            size={25}
                            color={'#fff'}
                          />
                        </View>
                      </View>
                      <View
                        style={{
                          alignItems: 'center',
                          marginStart: widthToDp('5'),
                        }}>
                        <Text style={{color: '#fff', fontSize: widthToDp('4')}}>
                          Remove
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity onPress={() => CameraImg()}>
                      <View
                        style={{
                          borderWidth: 1,
                          height: heightToDp('8'),
                          width: widthToDp('16'),
                          borderRadius: widthToDp('20'),
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginStart: widthToDp('6'),
                          borderColor: '#fff',
                        }}>
                        <View
                          style={{
                            borderWidth: 1,
                            height: heightToDp('5'),
                            width: widthToDp('10'),
                            borderRadius: widthToDp('20'),
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Image
                            source={Camera}
                            style={{
                              height: heightToDp('5'),
                              width: widthToDp('10'),
                            }}
                          />
                        </View>
                      </View>
                      <View
                        style={{
                          alignItems: 'center',
                          marginStart: widthToDp('5'),
                        }}>
                        <Text style={{color: '#fff', fontSize: widthToDp('4')}}>
                          Camera
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View>
                    <TouchableOpacity onPress={() => Upload()}>
                      <View
                        style={{
                          borderWidth: 1,
                          borderColor: '#fff',
                          height: heightToDp('8'),
                          width: widthToDp('16'),
                          borderRadius: widthToDp('20'),
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginStart: widthToDp('6'),
                        }}>
                        <View
                          style={{
                            height: heightToDp('5'),
                            width: widthToDp('10'),
                            borderRadius: widthToDp('20'),
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Image
                            source={Gallery}
                            style={{
                              height: heightToDp('5'),
                              width: widthToDp('10'),
                            }}
                          />
                        </View>
                      </View>
                      <View
                        style={{
                          alignItems: 'center',
                          marginStart: widthToDp('5'),
                        }}>
                        <Text style={{color: '#fff', fontSize: widthToDp('4')}}>
                          Gallery
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </BottomSheet>
          </View>
        </View>
        <View style={AddStyles.TextInputMain}>
          <View style={AddStyles.TextInputView}>
            <TextInput
              placeholder="Item Name"
              placeholderTextColor={'#000'}
              onChangeText={e => setName(e)}
              value={Name}
              style={AddStyles.TextInput}
            />
          </View>
          <View style={AddStyles.TextInputView}>
            <TextInput
              placeholder="Price"
              onChangeText={e => setPrice(e)}
              value={Price}
              placeholderTextColor={'#000'}
              style={AddStyles.TextInput}
            />
          </View>
          <View style={AddStyles.Description}>
            <TextInput
              placeholder="Description"
              onChangeText={e => setDesc(e)}
              value={Desc}
              placeholderTextColor={'#000'}
              style={AddStyles.TextInput}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
