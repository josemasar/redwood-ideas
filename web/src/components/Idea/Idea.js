import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/IdeasCell'

const DELETE_IDEA_MUTATION = gql`
  mutation DeleteIdeaMutation($id: Int!) {
    deleteIdea(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Idea = ({ idea }) => {
  const { addMessage } = useFlash()
  const [deleteIdea] = useMutation(DELETE_IDEA_MUTATION, {
    onCompleted: () => {
      navigate(routes.ideas())
      addMessage('Idea deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete idea ' + id + '?')) {
      deleteIdea({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Idea {idea.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{idea.id}</td>
            </tr>
            <tr>
              <th>Opps</th>
              <td>{checkboxInputTag(idea.opps)}</td>
            </tr>
            <tr>
              <th>Part num</th>
              <td>{idea.partNum}</td>
            </tr>
            <tr>
              <th>Product</th>
              <td>{idea.product}</td>
            </tr>
            <tr>
              <th>System</th>
              <td>{idea.system}</td>
            </tr>
            <tr>
              <th>Vendor</th>
              <td>{idea.vendor}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{idea.title}</td>
            </tr>
            <tr>
              <th>Body</th>
              <td>{idea.body}</td>
            </tr>
            <tr>
              <th>Value</th>
              <td>{idea.value}</td>
            </tr>
            <tr>
              <th>Author</th>
              <td>{idea.author}</td>
            </tr>
            <tr>
              <th>Active</th>
              <td>{checkboxInputTag(idea.active)}</td>
            </tr>
            <tr>
              <th>Ready in month</th>
              <td>{idea.readyInMonth}</td>
            </tr>
            <tr>
              <th>Ready in year</th>
              <td>{idea.readyInYear}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(idea.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editIdea({ id: idea.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(idea.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Idea
