import IdeasLayout from 'src/layouts/IdeasLayout'
import IdeaCell from 'src/components/IdeaCell'

const IdeaPage = ({ id }) => {
  return (
    <IdeasLayout>
      <IdeaCell id={id} />
    </IdeasLayout>
  )
}

export default IdeaPage
