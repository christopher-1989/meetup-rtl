import { UserData } from '../components/ContactForm'

// returns the state of *all* features for current user
export default function postUserData(userData: UserData, succeed: boolean): Promise<{ok: boolean, data: UserData, status: 200 | 400}> {
  // in reality, this would have been a `fetch` call
  return new Promise((resolve, reject) => {
    let res
    if (succeed) {
      res = {
        data: userData,
        ok: true,
        status: 200,
      }
      console.log({ res })
      setTimeout(resolve, 300, res)
    } else {
      res = {
        data: null,
        ok: false,
        status: 400,
      }
      console.log({ res })
      setTimeout(reject, 300, res)
    }

  })
}
