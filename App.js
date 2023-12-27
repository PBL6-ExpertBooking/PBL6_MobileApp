import { PaperProvider } from 'react-native-paper'
import { Root as PopupRootProvider } from 'react-native-popup-confirm-toast'
import { StatusBar } from 'react-native'
import Navigator from './src/navigation/navigators'
import AuthContextProvider from './src/contexts/AuthContext'
import AppContextProvider from './src/contexts/AppContext'
import SettingContextProvider from './src/contexts/LocaleContext'
import { colors } from './src/themes'
import './src/config/firebase'

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
