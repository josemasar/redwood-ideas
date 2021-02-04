import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'

const BarChartIdeas = (props) => {

  console.log(props)

  return(
    <BarChart width={730} height={250} data={ props.data }>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="readyInYear" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  )
}

export default BarChartIdeas

