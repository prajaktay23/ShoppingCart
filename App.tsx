import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src /navigation/RootNavigator'
import { Provider } from 'react-redux'
import { store } from './src /state/store'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default App