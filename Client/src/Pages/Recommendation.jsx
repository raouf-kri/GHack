import Button from '../components/Button'
import Nav from '../sections/Nav'

const Recommendation = () => {
  return (
    <div>
      <Nav />
      <div className=" flex flex-col p-[10%] gap-6">
        <h1 className=" text-center text-3xl relative bottom-8">
          You don't have any plans
        </h1>
        <h1 className=" text-center text-3xl ">
          <b className=" ">Put an objective and get recommendations using</b>
        </h1>
        <br />
        <span className=" text-myblue text-4xl text-center ">
          <b>AI</b>
        </span>
        <div className=" relative left-[600px] top-5">
          <Button
            label="Add objective"
            background=" bg-myblue"
            textColor="text-white"
          />
        </div>
      </div>
    </div>
  )
}

export default Recommendation
