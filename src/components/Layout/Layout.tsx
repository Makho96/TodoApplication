import { ReactNode } from "react"

interface PropTypes {
  children: ReactNode
}

const Layout = ({children}: PropTypes) => {

  return (
    <div className={`min-h-screen bg-skin-page-background`}>
      {children}
    </div>
  )
}

export default Layout