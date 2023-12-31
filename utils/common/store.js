import * as SecureStore from 'expo-secure-store'

export async function saveTokens({ access_token, refresh_token }) {
  await SecureStore.setItemAsync('access_token', access_token)
  await SecureStore.setItemAsync('refresh_token', refresh_token)
}

export async function clearTokens() {
  await SecureStore.deleteItemAsync('access_token')
  await SecureStore.deleteItemAsync('refresh_token')
}

export async function getTokens() {
  const access_token = await SecureStore.getItemAsync('access_token')
  const refresh_token = await SecureStore.getItemAsync('refresh_token')
  return { access_token, refresh_token }
}

export async function initLocales() {
  const lng = await SecureStore.getItemAsync('lang')
  if (!lng) await SecureStore.setItemAsync('lang', 'vi')
}

export async function setLanguage(lng) {
  await SecureStore.setItemAsync('lang', lng)
}

export async function getLanguage() {
  return await SecureStore.getItemAsync('lang')
}
