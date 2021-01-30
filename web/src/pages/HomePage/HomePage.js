import AppLayout from 'src/layouts/AppLayout'
import BarChartIdeas from 'src/components/BarChartIdeas'

const HomePage = () => {
  return (
    <>
      <AppLayout>
      <h1>Thinking on costs</h1>
      <h2>What ideas your organisation has to reduce the cost of your products?</h2>
      <BarChartIdeas />
      </AppLayout>
    </>
  )
}

export default HomePage
