import { Link, routes } from '@redwoodjs/router'

const IdeasLayout = ({ children }) => {
  return (
    <>
      <header>
        <div className="container space-y-1 space-x-1 ml-5 p-5">
          <h1 className="text-5xl text-green-500">
            <Link to={routes.home()}>Ideas</Link>
          </h1>
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}

export default IdeasLayout