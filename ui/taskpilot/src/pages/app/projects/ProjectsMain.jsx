import React from "react";

function ProjectsMain() {
  const projects = [
    {
      id: "1",
      name: "Project Alpha",
      description: "Developing a new web application.",
      deadline: "2024-07-30",
      status: "In Progress",
    },
    {
      id: "2",
      name: "Project Beta",
      description: "Designing the user interface for mobile app.",
      deadline: "2024-08-15",
      status: "Open",
    },
    {
      id: "3",
      name: "Project Gamma",
      description: "Implementing the backend API.",
      deadline: "2024-09-01",
      status: "Completed",
    },
    {
      id: "4",
      name: "Project Delta",
      description: "Creating marketing materials.",
      deadline: "2024-09-15",
      status: "Open",
    },
    {
      id: "5",
      name: "Project Epsilon",
      description: "Testing and debugging",
      deadline: "2024-10-20",
      status: "In Progress",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between transition-transform transform hover:scale-105"
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.name}
                </h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-2">
                  <span className="font-semibold text-gray-700">Deadline:</span>
                  <span className="text-gray-800 ml-1">{project.deadline}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Status:</span>
                  <span
                    className={`ml-1 px-2 py-1 rounded ${
                      project.status === "Completed"
                        ? "bg-green-200 text-green-700"
                        : project.status === "In Progress"
                        ? "bg-yellow-200 text-yellow-700"
                        : "bg-red-200 text-red-700"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsMain;
