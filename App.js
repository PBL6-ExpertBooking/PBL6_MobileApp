import { PaperProvider } from 'react-native-paper'
import { Root as PopupRootProvider } from 'react-native-popup-confirm-toast'
import { StatusBar } from 'react-native'
import Navigator from './navigation/navigators'
import AuthContextProvider from './contexts/AuthContext'
import AppContextProvider from './contexts/AppContext'
import SettingContextProvider from './contexts/LocaleContext'
import { colors } from './themes'

export default function App() {
  return (
    <PopupRootProvider>
      <AppContextProvider>
        <AuthContextProvider>
          <PaperProvider theme="light">
            <SettingContextProvider>
              <StatusBar animated backgroundColor={colors.primary} />
              <Navigator />
            </SettingContextProvider>
          </PaperProvider>
        </AuthContextProvider>
      </AppContextProvider>
    </PopupRootProvider>
  )
}
