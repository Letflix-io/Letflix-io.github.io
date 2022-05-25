import * as React from "react"
import HeaderContainer from "../containers/HeaderContainer"

function Layout({ location, children }) {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <main>{children}</main>
    </div>
  )
}

export default Layout
