import React from 'react'
import { LinkingOptions, NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/navigation/RootNavigator'
import { Provider } from 'react-redux'
import { store } from './src/state/store'
import { RootStackParamList } from './src/types/navigation'

const App = () => {

  const linking: LinkingOptions<RootStackParamList> = {
    prefixes: ['myapp://'],
    config: {
      screens: {
        Product: {
          screens: {
            UsersList: {
              screens: {
                Users: {
                  screens: {
                    UserDetail: 'user/:id',
                  }
                }
              },
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
    </Provider>
  )
}

export default App