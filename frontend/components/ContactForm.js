"use client"

export default function ContactForm() {
  return (
    <div className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-8 text-white">Interested for trek</h2>
      <p className="text-white mb-8 max-w-3xl mx-auto">
        Feel free to reach out to us with any questions or inquiries. Our team is here to assist you and will update about the trek.
      </p>
      <form className="max-w-3xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Name"
            className="bg-transparent border border-gray-600 rounded-md p-3 text-white w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent border border-gray-600 rounded-md p-3 text-white w-full"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Trek"
            className="bg-transparent border border-gray-600 rounded-md p-3 text-white w-full"
          />
          <input
            type="text"
            placeholder="Phone No"
            className="bg-transparent border border-gray-600 rounded-md p-3 text-white w-full"
          />
        </div>
        <textarea
          placeholder="Message"
          rows="5"
          className="w-full bg-transparent border border-gray-600 rounded-md p-3 text-white"
        ></textarea>
        <button
          type="submit"
          className="bg-white text-black px-10 py-3 hover:bg-gray-100 font-medium text-lg"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
}