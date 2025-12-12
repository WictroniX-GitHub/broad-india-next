"use client";

export default function Applications() {
  const applications = [
    {
      title: "Petrochemical plants",
      icon: "🏭",
    },
    {
      title: "Food processing and beverage facilities",
      icon: "🍎",
    },
    {
      title: "Textile industries", 
      icon: "🧵",
    },
    {
      title: "Hospitals and medical facilities",
      icon: "🏥",
    },
    {
      title: "Commercial office buildings and hotels",
      icon: "🏢",
    },
    {
      title: "Data centers and green buildings",
      icon: "💻",
    },
  ];

  return (
    <div className="container mx-auto mt-16 px-4 md:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Applications
        </h2>
        <p className="text-lg text-gray-600">
          We deliver customized HVAC and chiller systems for:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map((app, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center space-x-4">
              <div className="text-3xl">{app.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">
                {app.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
