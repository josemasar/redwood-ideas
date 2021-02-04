import BarChartIdeas from 'src/components/BarChartIdeas'

export const QUERY = gql`
  query IdeasListQuery {
    ideas {
      opps
      value
      readyInYear
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ ideas }) => {
  return (
    <BarChartIdeas data = { ideas } />
  )
}


