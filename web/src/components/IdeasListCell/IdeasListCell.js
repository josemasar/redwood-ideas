export const QUERY = gql`
  query IdeasListQuery {
    ideas {
      id
      opps
      value
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ ideas }) => {
  return JSON.stringify(ideas)

}


