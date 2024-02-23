import Nav from '../sections/Nav'
import { objectives } from '../data/Data'
import ObjectiveCard from '../components/ObjectiveCard'
import Popup from '../components/Popup'
import { useState } from 'react'

const MyObjective = () => {
  const [buttonPopup, setButtonPopup] = useState(false)
  return (
    <div>
      <Nav />
      <div className=" p-20 flex flex-col gap-10">
        <div className=" flex justify-between">
          <h1 className=" font-bold text-3xl">My Objective</h1>
          <button
            onClick={() => setButtonPopup(true)}
            className=" bg-myblue text-white p-3 rounded-full  w-36 "
          >
            Add
          </button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
        </div>
        <div className=" flex gap-10">
          {objectives.map((card) => (
            <ObjectiveCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyObjective
