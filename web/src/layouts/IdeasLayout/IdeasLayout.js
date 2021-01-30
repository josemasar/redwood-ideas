import { Link, routes } from '@redwoodjs/router'
import { Flash } from '@redwoodjs/web'

const IdeasLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Flash timeout={1000} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.ideas()} className="rw-link">
            Ideas
          </Link>
        </h1>
        <Link to={routes.newIdea()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Idea
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default IdeasLayout
