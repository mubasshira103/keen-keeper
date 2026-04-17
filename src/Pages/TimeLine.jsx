import React, { useContext, useState } from 'react';
import callIcon from '../assets/call.png'
import textIcon from '../assets/text.png'
import videoIcon from '../assets/video.png'
import { InteractionContext } from '../Context/InteractionProvider';
const TimeLine = () => {
  const {interactions,deleteInteraction}=useContext(InteractionContext);
  const [filter, seFilter ]=useState('')
  const filteredData =
  filter == ''
    ? interactions
    : interactions.filter((item) => item.type === filter);

  console.log(interactions)
  return (
    <div className="px-5 py-4 max-w-11/12 mx-auto">
      {
        filteredData.length == 0 ? <div className="text-center py-10 text-gray-500">
      <h2 className="text-xl font-semibold">No interactions found </h2>
      <p className="text-sm mt-2">Try adding a call, message, or video</p>
    </div>:

        <div>
          <div className='mb-4 sm:mb-6'>
                <h2 className='font-bold text-2xl'>Your Friends</h2>
            </div>
      <div className="dropdown dropdown-bottom">
  <div tabIndex={0}  role="button" className="btn my-1 w-[200px] ">Filter timeline</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={()=>seFilter('call')} ><a>Audio call</a></li>
    <li onClick={()=>seFilter('text')}><a>message</a></li>
    <li onClick={()=>seFilter('video')}><a>video call</a></li>
  </ul>
</div>
        </div>
      }
    {filteredData.map((item,) => (
      <div className=' flex flex-col md:flex-row justify-between items-center bg-gray-100 py-4 px-8 my-3 rounded-2xl'>
        <div key={item.id} className="flex gap-3 items-center mb-4">
        <div>
          <img src={` ${item.type =='call'  ? callIcon : item.type =='text' ? textIcon : videoIcon }`} alt="icon " />
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <h2 className="text-xl font-semibold ">{item.type}</h2>
            <p className="text-xl font-semibold">with {item.friendName}</p>
          </div>
          <p className="text-gray-500">{item.date}</p>
        </div>
      </div>
      <div>
        <button onClick={()=>deleteInteraction(item.id)} className='btn text-red-500'>delete</button>
      </div>
      </div>

    ))}
  </div>
  );
};

export default TimeLine;

