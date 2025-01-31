"use client";

export default function ContactForm() {
  return (
    <div className="mb-10">
      <div className="bg-white shadow-lg rounded-lg">
        <div className="bg-blue-600 text-white px-6 py-4 rounded-t-lg">
          <h4 className="text-xl font-semibold">Get in Touch</h4>
        </div>
        <div className="p-6">
          <form
            action="https://send.pageclip.co/65eBhbmaUsB0Tsr1yJoeTjOITQgSz8Uc"
            method="post"
            className="space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="fname"
                  className="block text-gray-700 font-medium"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lname"
                  className="block text-gray-700 font-medium"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-gray-700 font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                required
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
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
