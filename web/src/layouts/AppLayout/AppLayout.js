import { Link, routes } from '@redwoodjs/router'

const IdeasLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Ideas</Link>
        </h1>
      </header>
      <main>{children}</main>
    </>
  )
}

export default IdeasLayout