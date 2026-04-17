import React, { use, useEffect, useState } from 'react';
import Friends from './Friends';




const AllFriends = () => {
  const [AllFriend, setAllFriend] = useState(null);
    useEffect(() => {
        fetch("/allFriends.json")
          .then((res) => res.json())
          .then((data) => setAllFriend(data));
      }, []);

  return (
      <div className='mt-5 p-4 mb-10 sm:mt-8'>
            <div className='mb-4 sm:mb-6'>
                <h2 className='font-bold text-2xl'>Your Friends</h2>
            </div>
            {
              !AllFriend ?  <div className="text-center py-20">
          <span className="loading loading-spinner loading-xl"></span>
        </div>:

            <div className='grid  gap-4 sm:grid-cols-2 md:grid-cols-4'>
                {
                    AllFriend.map(friend => <Friends key={friend.id} friend ={friend}></Friends>)
                }

            </div>
            }


        </div>
  );
};

export default AllFriends;
