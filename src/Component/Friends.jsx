import React from 'react';
import { Link } from 'react-router';


const Friends = ({friend}) => {
  const tags =friend.tags
  return (
    <Link to={`friendsDetails/${friend.id}`}>
      <div className="transition-all duration-300 ease-out
            hover:-translate-y-1 hover:shadow-lg hover:border-gray-200
            cursor-pointer">
        <div className="flex items-center justify-center ">
          <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center gap-2 w-full ">

            <div className=" rounded-full overflow-hidden">
              <img src={friend.picture} alt="" />
            </div>


            <h2 className="text-xl font-bold text-center">
              {friend.name}
            </h2>


            <p className="text-gray-500  ">
              {friend.days_since_contact}d ago
            </p>


            <div className="px-4  text-sm font-medium flex flex-wrap gap-2">
              {
                tags.map((tag , index ) => <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700 " tag={tag} key={index}> {tag}</span> )
              }
            </div>


            <span className={`px-3 py-1 rounded-full  text-white   ${friend.status =='On-Track' ? 'bg-[#244D3F]' : friend.status == 'overdue' ? 'bg-[#EF4444]' : 'bg-[#EFAD44]' }`}>
              {friend.status}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Friends;
