import React, { useState } from "react";

export default function IssueBook() {
  const [formData, setFormData] = useState({
    userRfid: "",
    bookRfid: "",
    issueDate: "",
    returnDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleReset = () => {
    setFormData({
      userRfid: "",
      bookRfid: "",
      issueDate: "",
      returnDate: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book issued:", formData);
    handleReset();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Form Section */}
      <div className="flex justify-center items-center p-6 bg-gray-800">
        <div className="w-full max-w-lg relative">
          <h2 className="text-3xl text-center mb-4">Issue Book</h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            {/* User RFID Field */}
            <div>
              <label htmlFor="userRfid" className="block text-sm text-white mb-2">
                RFID of User
              </label>
              <input
                type="text"
                id="userRfid"
                name="userRfid"
                value={formData.userRfid}
                onChange={handleChange}
                placeholder="Enter user RFID"
                required
                className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Book RFID Field */}
            <div>
              <label htmlFor="bookRfid" className="block text-sm text-white mb-2">
                RFID of Book
              </label>
              <input
                type="text"
                id="bookRfid"
                name="bookRfid"
                value={formData.bookRfid}
                onChange={handleChange}
                placeholder="Enter book RFID"
                required
                className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Issue Date Field */}
            <div>
              <label htmlFor="issueDate" className="block text-sm text-white mb-2">
                Issue Date
              </label>
              <input
                type="date"
                id="issueDate"
                name="issueDate"
                value={formData.issueDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Return Date Field */}
            <div>
              <label htmlFor="returnDate" className="block text-sm text-white mb-2">
                Return Date
              </label>
              <input
                type="date"
                id="returnDate"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between space-x-4">
              {/* Reset Button */}
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-2 bg-gray-700 text-white rounded-md focus:outline-none hover:bg-gray-600"
              >
                Reset
              </button>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2 bg-pink-500 text-white rounded-md focus:outline-none hover:bg-pink-600"
              >
                Issue Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
