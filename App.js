import 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import React from 'react'
import MainNavigation from './Resourse/Route/MainNavigation/MainNavigation'
import {Provider} from 'react-redux'
import {store} from './Resourse/Helper/Store'
export default function App() {
  return (
<Provider store={store}>
  <MainNavigation />
</Provider>
  )
}