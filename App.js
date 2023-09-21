import AuthContextProvider from './contexts/AuthContext'
import { PaperProvider } from 'react-native-paper'
import Navigators from './navigation'

export default function App() {
  return (
    <AuthContextProvider>
      <PaperProvider>
        <Navigators />
      </PaperProvider>
    </AuthContextProvider>
  )
}
