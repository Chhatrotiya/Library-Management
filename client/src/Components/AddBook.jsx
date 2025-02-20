import React, { useState } from "react";
import axios from "axios";

export default function AddBook() {
  const [formData, setFormData] = useState({
    bookName: "",
    rfid: "",
    author: "",
    quantity: "",
    section: "",
    publication: "",
  });

  const [message, setMessage] = useState({ text: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleReset = () => {
    setFormData({
      bookName: "",
      rfid: "",
      author: "",
      quantity: "",
      section: "",
      publication: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/book/add",
        formData
      );
      setMessage({ text: response.data.message, type: "success" });
      handleReset();
    } catch (error) {
      setMessage({
        text: error.response?.data?.message || "Failed to add book",
        type: "error",
      });
    }

    // Hide message after 3 seconds
    setTimeout(() => setMessage({ text: "", type: "" }), 1400);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Notification Message */}
      {message.text && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-md text-white text-center z-50 transition-all duration-500 ${
            message.type === "success" ? "bg-green-600" : "bg-red-600"
          } ${
            message.text
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-4 scale-95"
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Form Section */}
      <div className="flex justify-center items-center p-6 bg-gray-800">
        <div className="w-full max-w-lg relative">
          <h2 className="text-3xl text-center mb-4">Add Book</h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            {/* Book Name Field */}
            <div>
              <label htmlFor="bookName" className="block text-sm text-white mb-2">
                Book Name
              </label>
              <input
                type="text"
                id="bookName"
                name="bookName"
                value={formData.bookName}
                onChange={handleChange}
                placeholder="Enter book name"
                required
                className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* RFID Number Field */}
            <div>
              <label htmlFor="rfid" className="block text-sm text-white mb-2">
                RFID Number
              </label>
              <input
                type="text"
                id="rfid"
                name="rfid"
                value={formData.rfid}
                onChange={handleChange}
                placeholder="Enter RFID number"
                required
                className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Author Field */}
            <div>
              <label htmlFor="author" className="block text-sm text-white mb-2">
                Author
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Enter author name"
                required
                className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Quantity Field */}
            <div>
              <label htmlFor="quantity" className="block text-sm text-white mb-2">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="Enter quantity"
                required
                className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Section Field */}
            <div>
              <label htmlFor="section" className="block text-sm text-white mb-2">
                Section
              </label>
              <input
                type="text"
                id="section"
                name="section"
                value={formData.section}
                onChange={handleChange}
                placeholder="Enter section"
                required
                className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Publication Field */}
            <div>
              <label htmlFor="publication" className="block text-sm text-white mb-2">
                Publication
              </label>
              <input
                type="text"
                id="publication"
                name="publication"
                value={formData.publication}
                onChange={handleChange}
                placeholder="Enter publication"
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
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
