import React, { useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
    <div className="flex justify-center ">
    <button
        className="bg-gradient-to-r from-blue-500 to-teal-400 animate-text text-white active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow duration-300 ease-in hover:-translate-y-1 hover:shadow-xl outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Inquire
      </button>
    </div>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden fixed inset-0 bg-black/60 bg-opacity-50 overflow-y-auto h-full w-full ease-in duration-300">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gradient-to-b from-[#98cc9c] to-[#c1c1d9] outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-solid border-gray-300 rounded-t">
                  <button
                    className="bg-transparent border-0 text-black absolute top-0 right-0 mr-3"
                    onClick={() => setShowModal(false)}
                  >
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 sm:mt-1 md:mt-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                  </button>
                </div>
                <div className="relative p-6 flex-auto transition-all ease-in duration-300">
                  <form className="rounded px-8 pt-6 pb-8 w-full">
                    <h2 className="text-white font-bold my-4 ">Inquiry Details</h2>
                    <label className="block text-white font-bold text-lg mb-2">
                      Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black transition-all" />
                    <label className="block text-white font-bold text-lg mb-2">
                      Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-white font-bold text-lg mb-2">
                      Message
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                  </form>
                </div>
                <div className="flex items-center justify-center p-6 border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-gradient-to-r from-[#bddebd] to-teal-400 animate-text text-white active:bg-blue-500 
                    font-bold px-6 py-3 rounded shadow hover:shadow-2xl outline-none focus:outline-none mr-1 mb-1 duration-300 ease-in hover:-translate-y-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Send Inquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
export default Modal;