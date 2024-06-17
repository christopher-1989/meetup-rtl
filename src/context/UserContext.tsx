import { createContext } from 'react'

export type User = {
  firstName: string
  lastName: string
  email: string
  dob: string
} | null

export type UserContextValue = {
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
}

export const UserContext = createContext<UserContextValue | undefined>(undefined)
