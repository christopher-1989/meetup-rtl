import { RenderOptions, render } from '@testing-library/react'
import { UserProvider } from '../providers/UserProvider'

// All providers that are needed to run tests
// eslint-disable-next-line react-refresh/only-export-components
const AllProviders = ({ children }: { children?: React.ReactNode }) => (
  <UserProvider>{children}</UserProvider>
)

// Pass in AllProviders to the wrapper option for RTLs render function
const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options })

export { customRender as render }
