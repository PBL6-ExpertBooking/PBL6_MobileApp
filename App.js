import { PaperProvider } from 'react-native-paper'
import AuthContextProvider from './contexts/AuthContext'
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
