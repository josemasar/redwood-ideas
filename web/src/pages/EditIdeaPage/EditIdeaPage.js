import IdeasLayout from 'src/layouts/IdeasLayout'
import EditIdeaCell from 'src/components/EditIdeaCell'

const EditIdeaPage = ({ id }) => {
  return (
    <IdeasLayout>
      <EditIdeaCell id={id} />
    </IdeasLayout>
  )
}

export default EditIdeaPage
