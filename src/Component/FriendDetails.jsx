import React, { useContext, useEffect, useState } from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';
import { Link, useParams } from 'react-router';
import { InteractionContext } from '../Context/InteractionProvider';
import { toast } from 'react-toastify';


const FriendDetails = () => {
  const {addInteraction}=useContext(InteractionContext)
  const { id } = useParams();
  const [friends, setFriends] = useState(null);
  useEffect(() => {
      fetch("/allFriends.json")
        .then((res) => res.json())
        .then((data) => setFriends(data));
    }, []);

    //loading spinner
    if (!friends) {
      return (
        <div className="text-center py-20">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      );
    }

    const clickedFriend = friends.find(
      (f) => f.id == parseInt(id)
    );

    // ⚠️ যদি friend না পাওয়া যায়
    if (!clickedFriend) {
      return (
        <div className="text-center py-20">
          <h2 className="text-xl font-semibold">Friend not found 😢</h2>
        </div>
      );
    }
  const tags = clickedFriend.tags;
  const handleInteraction = (type) => {
    toast.success(`${type} with${clickedFriend.name}`)
  const newInteraction = {
    id: Date.now(),
    friendName: clickedFriend.name,
    type: type, // call / text / video
    date: new Date().toLocaleDateString(),
  };

  addInteraction(newInteraction);
};





  return (
    <div className="">
      <div className="max-w-5xl mx-auto p-6  ">

        <div className="flex flex-col md:flex-row gap-6">

          <div className="w-full md:w-1/3 flex flex-col gap-4">

            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <img
                src={clickedFriend.picture}
                alt={clickedFriend.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <h2 className="text-xl font-bold text-slate-800 mb-2">
                {clickedFriend.name}
              </h2>

              {/* Badges */}
              <div className="flex flex-col gap-2 mb-4">
                <span className={`px-5 py-2 rounded-full  text-white  font-medium ${clickedFriend.status =='On-Track' ? 'bg-[#244D3F]' : clickedFriend.status == 'overdue' ? 'bg-[#EF4444]' : 'bg-[#EFAD44]' }`}>
              {clickedFriend.status}
            </span>
                <div className="flex gap-2 flex-wrap">
                  {
                tags.map((tag , index ) => <span className="px-3 py-2 rounded-full bg-green-100 text-green-700 font-medium" tag={tag} key={index}> {tag}</span> )
                }
                </div>
              </div>


              <p className="text-slate-500 italic text-sm mb-2">
                {clickedFriend.bio}
              </p>
              <p className="text-slate-400 text-xs">Preferred: {clickedFriend.email}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2">
              <button className="w-ful btn  text-slate-700 py-3 rounded-lg shadow-sm hover:bg-slate-50 flex items-center justify-center gap-2 text-sm font-medium transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  ></path>
                </svg>
                Snooze 2 Weeks
              </button>
              <button className="w-full btn text-slate-700 py-3 rounded-lg shadow-sm hover:bg-slate-50 flex items-center justify-center gap-2 text-sm font-medium transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
                Archive
              </button>
              <button className="w-ful btn text-red-500 py-3 rounded-lg shadow-sm hover:bg-red-50 flex items-center justify-center gap-2 text-sm font-medium transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  ></path>
                </svg>
                Delete
              </button>
            </div>
          </div>

          {/* --- RIGHT COLUMN: Stats & Interactions --- */}
          <div className="w-full md:w-2/3 flex flex-col gap-6">
            {/* Top Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 text-center">
                <div className="text-3xl font-bold text-slate-800 mb-1">{clickedFriend.days_since_contact}</div>
                <div className="text-slate-500 text-sm">Days Since Contact</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 text-center">
                <div className="text-3xl font-bold text-slate-800 mb-1">{clickedFriend.goal}</div>
                <div className="text-slate-500 text-sm">Goal (Days)</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 text-center">
                <div className="text-2xl font-bold text-slate-800 mb-1 mt-1">
                  {clickedFriend.next_due_date}
                </div>
                <div className="text-slate-500 text-sm">Next Due</div>
              </div>
            </div>

            {/* Relationship Goal */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="text-slate-700 font-semibold mb-2">
                  Relationship Goal
                </h3>
                <p className="text-slate-500">
                  Connect every{" "}
                  <span className="font-bold text-slate-800">30 days</span>
                </p>
              </div>
              <button className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-600 rounded text-sm font-medium hover:bg-slate-100 transition-colors">
                Edit
              </button>
            </div>

            {/* Quick Check-In */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
              <h3 className="text-slate-700 font-semibold mb-4">
                Quick Check-In
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button onClick={() => handleInteraction("call")} className="bg-slate-50 border cursor-pointer border-slate-100 p-4 rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-slate-100 transition-colors group">
                  <svg
                    className="w-6 h-6 text-slate-600 group-hover:text-slate-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <span className="text-slate-700 font-medium">Call</span>
                </button>

                <button onClick={() => handleInteraction("text")} className="bg-slate-50 border cursor-pointer border-slate-100 p-4 rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-slate-100 transition-colors group">
                  <svg
                    className="w-6 h-6 text-slate-600 group-hover:text-slate-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                  </svg>
                  <span className="text-slate-700 font-medium">Text</span>
                </button>

                <button onClick={() => handleInteraction("video")} className="bg-slate-50 border cursor-pointer  border-slate-100 p-4 rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-slate-100 transition-colors group">
                  <svg
                    className="w-6 h-6 text-slate-600 group-hover:text-slate-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <span className="text-slate-700 font-medium">Video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center m-5'>
        <Link to={'/'} className="btn bg-[#244D3F] text-white mb-4"> <MdArrowBackIosNew></MdArrowBackIosNew>  Back</Link>
      </div>
    </div>

  );
};

export default FriendDetails;
