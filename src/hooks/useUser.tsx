import { useContext } from 'react'
import { UserContext, UserContextValue } from '../context/UserContext'

export const useUser = (): NonNullable<UserContextValue> => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
