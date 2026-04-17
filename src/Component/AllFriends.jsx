import React, { use } from 'react';
import Friends from './Friends';


const allFriendsPromise = fetch('/allFriends.json').then(res =>res.json());

const AllFriends = () => {
  const AllFriendsArray = use(allFriendsPromise);
  console.log(AllFriendsArray)

  return (
      <div className='mt-5 p-4 mb-10 sm:mt-8'>
            <div className='mb-4 sm:mb-6'>
                <h2 className='font-bold text-2xl'>Your Friends</h2>
            </div>

            <div className='grid  gap-5 sm:grid-cols-2 md:grid-cols-4'>
                {
                    AllFriendsArray.map(friend => <Friends key={friend.id} friend ={friend}></Friends>)
                }

            </div>


        </div>
  );
};

export default AllFriends;
