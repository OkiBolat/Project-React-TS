import { createEffect, createEvent, createStore } from 'effector'
interface User {
  username: string
  email: string
  // Other properties of the authenticated user
}
export const $authUser = createStore<User | null>(null)
export const login = createEvent()
export const logout = createEvent()

export const loginFx = createEffect<{ username: string; password: string }, User>()
export const logoutFx = createEffect<void, void>()

loginFx.use(async ({ username, password }) => {
  // Perform login request and return authenticated user
  // const user = await  api.login(username, password)
  const user = new Promise<User>((resolve, reject) => {
    // resolve({result: {username, password}})
  })
  return user
})

logoutFx.use(async () => {
  // Perform logout request and return nothing
  // await api.logout()
})

$authUser.on(login, (_, user) => user)
$authUser.on(logout, () => null)

// loginFx.done.watch(({ result }) => login(result))
logoutFx.done.watch(() => logout())