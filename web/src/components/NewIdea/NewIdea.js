import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import IdeaForm from 'src/components/IdeaForm'

import { QUERY } from 'src/components/IdeasCell'

const CREATE_IDEA_MUTATION = gql`
  mutation CreateIdeaMutation($input: CreateIdeaInput!) {
    createIdea(input: $input) {
      id
    }
  }
`

const NewIdea = () => {
  const { addMessage } = useFlash()
  const [createIdea, { loading, error }] = useMutation(CREATE_IDEA_MUTATION, {
    onCompleted: () => {
      navigate(routes.ideas())
      addMessage('Idea created.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input) => {
    createIdea({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Idea</h2>
      </header>
      <div className="rw-segment-main">
        <IdeaForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewIdea
