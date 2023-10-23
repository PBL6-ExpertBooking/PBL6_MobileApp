import { PaperProvider } from 'react-native-paper'
import { Root as PopupRootProvider } from 'react-native-popup-confirm-toast'
import AuthContextProvider from './contexts/AuthContext'
import Navigators from './navigation'

export default function App() {
  return (
    <PopupRootProvider>
      <AuthContextProvider>
        <PaperProvider>
          <Navigators />
        </PaperProvider>
      </AuthContextProvider>
    </PopupRootProvider>
  )
}
