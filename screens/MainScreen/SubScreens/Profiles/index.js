import React, { useContext } from 'react'
import { AuthContext } from '../../../../contexts'

import AuthRedirect from './components/AuthRedirect'
import UserInfo from './components/UserInfo'

export default function Profiles() {
  const { user } = useContext(AuthContext)

  return user ? <UserInfo /> : <AuthRedirect />
}
