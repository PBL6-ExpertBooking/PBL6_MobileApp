import React, { useContext } from 'react'
import { AuthContext } from '../../../../../contexts'

import AuthRedirect from './components/AuthRedirect'
import UserProfile from './components/UserProfile'

export default function Profiles() {
  const { user } = useContext(AuthContext)

  return user ? <UserProfile /> : <AuthRedirect />
}
