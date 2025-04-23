"use client"

export default function ContactForm() {
  return (
    <div className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-8 text-white">Interested for trek</h2>
      <p className="text-white mb-8 max-w-2xl mx-auto">
        Feel free to reach out to us with any questions or inquiries. Our team is here to assist you and will update about the trek.
      </p>
      <form className="max-w-lg mx-auto space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="bg-transparent border border-gray-600 rounded-md p-2 text-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent border border-gray-600 rounded-md p-2 text-white"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Trek"
            className="bg-transparent border border-gray-600 rounded-md p-2 text-white"
          />
          <input
            type="text"
            placeholder="Phone No"
            className="bg-transparent border border-gray-600 rounded-md p-2 text-white"
          />
        </div>
        <textarea
          placeholder="Message"
          rows="4"
          className="w-full bg-transparent border border-gray-600 rounded-md p-2 text-white"
        ></textarea>
        <button
          type="submit"
          className="bg-white text-black font-medium px-8 py-2 rounded-md hover:bg-gray-100 mt-4"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
}