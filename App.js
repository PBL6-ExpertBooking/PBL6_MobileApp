import { PaperProvider } from 'react-native-paper'
import { Root as PopupRootProvider } from 'react-native-popup-confirm-toast'
import AuthContextProvider from './contexts/AuthContext'
import Navigators from './navigation'
import AppContextProvider from './contexts/AppContext'

export default function App() {
  return (
    <PopupRootProvider>
      <AppContextProvider>
        <AuthContextProvider>
          <PaperProvider>
            <Navigators />
          </PaperProvider>
        </AuthContextProvider>
      </AppContextProvider>
    </PopupRootProvider>
  )
}
