import { UserData } from '../components/SignUpForm/SignUpForm'

// returns the state of *all* features for current user
export default function postUserData(
  userData: UserData
): Promise<{ ok: boolean; data: UserData; status: 200 | 400 }> {
  return new Promise((resolve) => {
    const res = {
      data: userData,
      ok: true,
      status: 200,
    }
    setTimeout(resolve, 300, res)
  })
}
