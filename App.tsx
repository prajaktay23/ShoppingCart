import React from 'react'
import { LinkingOptions, NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/navigation/RootNavigator'
import { Provider } from 'react-redux'
import { store } from './src/state/store'
import { RootStackParamList } from './src/types/navigation'
import Toast from 'react-native-toast-message';

const App = () => {

  const linking: LinkingOptions<RootStackParamList> = {
    prefixes: ['myapp://'],
    config: {
      screens: {
        Product: {
          screens: {
            UsersList: {
              screens: {
                UserDetail: 'user/:id',
              }
            },
          },
        },
      },
    },
  };

  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <RootNavigator />
      </NavigationContainer>
      <Toast />
    </Provider>
  )
}

export default App