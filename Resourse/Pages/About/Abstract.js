import React from 'react'
import {WebView} from 'react-native-webview'
export default function Abstract() {
  return (
    <WebView source={{uri:'https://abstractbrains.com'}} />
  )
}