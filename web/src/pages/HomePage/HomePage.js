import AppLayout from 'src/layouts/AppLayout'
import BarChartIdeas from 'src/components/BarChartIdeas'
import IdeasListCell from 'src/components/IdeasListCell'
import IdeasLayout from 'src/layouts/AppLayout/AppLayout'

const HomePage = () => {
  return (
    <>
      <AppLayout>
      <h1>Thinking on costs</h1>
      <h2>What ideas your organisation has to reduce the cost of your products?</h2>
      <IdeasListCell />
      </AppLayout>
    </>
  )
}

export default HomePage
