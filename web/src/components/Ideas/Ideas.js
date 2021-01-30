import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/IdeasCell'

const DELETE_IDEA_MUTATION = gql`
  mutation DeleteIdeaMutation($id: Int!) {
    deleteIdea(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const IdeasList = ({ ideas }) => {
  const { addMessage } = useFlash()
  const [deleteIdea] = useMutation(DELETE_IDEA_MUTATION, {
    onCompleted: () => {
      addMessage('Idea deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete idea ' + id + '?')) {
      deleteIdea({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Opps</th>
            <th>Part num</th>
            <th>Product</th>
            <th>System</th>
            <th>Vendor</th>
            <th>Title</th>
            <th>Body</th>
            <th>Value</th>
            <th>Author</th>
            <th>Active</th>
            <th>Ready in month</th>
            <th>Ready in year</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {ideas.map((idea) => (
            <tr key={idea.id}>
              <td>{truncate(idea.id)}</td>
              <td>{checkboxInputTag(idea.opps)}</td>
              <td>{truncate(idea.partNum)}</td>
              <td>{truncate(idea.product)}</td>
              <td>{truncate(idea.system)}</td>
              <td>{truncate(idea.vendor)}</td>
              <td>{truncate(idea.title)}</td>
              <td>{truncate(idea.body)}</td>
              <td>{truncate(idea.value)}</td>
              <td>{truncate(idea.author)}</td>
              <td>{checkboxInputTag(idea.active)}</td>
              <td>{truncate(idea.readyInMonth)}</td>
              <td>{truncate(idea.readyInYear)}</td>
              <td>{timeTag(idea.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.idea({ id: idea.id })}
                    title={'Show idea ' + idea.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editIdea({ id: idea.id })}
                    title={'Edit idea ' + idea.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete idea ' + idea.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(idea.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default IdeasList
