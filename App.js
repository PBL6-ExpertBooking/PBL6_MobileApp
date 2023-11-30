import { PaperProvider } from 'react-native-paper'
import { Root as PopupRootProvider } from 'react-native-popup-confirm-toast'
import Navigator from './navigation/navigators'
import AuthContextProvider from './contexts/AuthContext'
import AppContextProvider from './contexts/AppContext'
import SettingContextProvider from './contexts/LocaleContext'

export default function App() {
  return (
    <PopupRootProvider>
      <AppContextProvider>
        <AuthContextProvider>
          <SettingContextProvider>
            <PaperProvider theme="light">
              <Navigator />
            </PaperProvider>
          </SettingContextProvider>
        </AuthContextProvider>
      </AppContextProvider>
    </PopupRootProvider>
  )
}
