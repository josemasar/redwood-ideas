import AppLayout from 'src/layouts/AppLayout'
import IdeasListCell from 'src/components/IdeasListCell'


const HomePage = () => {
  return (
    <>
      <AppLayout>
      <div className="inline-flex bg-gray-100 ">
      <div className="flex flex-col ml-5 p-5 mt-4 justify-center">
        <h1 className="flex-1 text-3xl font-bold">Thinking on costs</h1>
        <h2 className="flex-1 text-xl">What ideas your organisation has to reduce the cost of your products?</h2>
      </div>
      <div className="flex mt-4 p-5">
        <IdeasListCell />
      </div>
      </div>
      </AppLayout>
    </>
  )
}

export default HomePage
