import React, { useState } from 'react';
import doctor from '../assets/doctor.png';
import { SmileIcon } from 'lucide-react';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // Reset form by finding and resetting it
    document.querySelector('form').reset();
  };

  return (
    <div className='min-h-screen absolute inset-0'>
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${doctor})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Background Overlay */}
      <div 
        className="absolute inset-0 z-10 bg-black/30"
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative z-20 container mx-auto h-full flex flex-col lg:flex-row items-center justify-between pt-20 pb-8">
       
        {/* Text Content Container */}
        <div className="w-full max-w-lg text-white p-8 rounded-lg">
          <h1 className="text-7xl text-blue-900 font-bold mb-4">Your Health, Our Priority</h1>
          <button className="ml-4 px-6 py-3 bg-blue-800 text-white rounded-md hover:bg-blue-500 transition-colors duration-300">
            Read More
          </button>
        </div>

         {/* Form Container */}
         <div className="w-full max-w-md backdrop-blur-sm bg-white/30 p-8 rounded-lg shadow-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block font-medium text-blue-900">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 bg-white/70"
                required
              />
            </div>

            <div>
              <label htmlFor="age" className="block font-medium text-blue-900">
                Age
              </label>
              <select
                id="age"
                name="age"
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 bg-white/70"
                required
              >
                <option value="">Select Age</option>
                {[...Array(100)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="file" className="block font-medium text-blue-900">
                Upload File (PDF/JPEG/PNG)  
              </label>
              <input
                type="file"
                id="file"
                name="file"
                accept=".pdf,.jpeg,.jpg,.png"
                className="mt-1 block w-full text-sm text-blue-900
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-500 file:text-white
                hover:file:bg-blue-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="items-center bg-white rounded-lg p-6 shadow-xl">  
            <p className="text-lg text-green-600 font-semibold mb-4">Form submitted successfully!</p>
            <button
              onClick={handleCloseModal}
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Hero