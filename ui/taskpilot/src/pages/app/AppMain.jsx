import React, { useState } from "react";
import Modal from "../../components/common/Modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Outlet, useNavigate } from "react-router";
import { cn } from "@/lib/utils";

function AppMain() {
  const [projects, setProjects] = useState([
    "خطة التسويق",
    "زيارات",
    "dreamer",
  ]);
  const navigate = useNavigate();
  const [newProject, setNewProject] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [tasks, setTasks] = useState({
    "خطة التسويق": ["تصميم الشعار", "كتابة المحتوى"],
    زيارات: ["ترتيب الزيارات", "إرسال الدعوات"],
    dreamer: ["تحليل السوق", "إعداد التقارير"],
  });
  const [newTask, setNewTask] = useState("");
  const [taskDialog, setTaskDialog] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateProject = () => {
    // if (newProject.trim() === "") return;
    // setProjects([...projects, newProject]);
    // setTasks({ ...tasks, [newProject]: [] });
    // setNewProject("");
    // setOpen(false);
    closeModal();
    navigate("/app/projects/new");
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  const handleCreateTask = () => {
    if (newTask.trim() === "") return;
    setTasks({
      ...tasks,
      [selectedProject]: [...tasks[selectedProject], newTask],
    });
    setNewTask("");
    setTaskDialog(false);
  };

  const handleCreate = (e, userId) => {
    e.preventDefault();
    openModal();
  };

  const buttonClass = cn("bg-red-100");

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4 space-y-4">
        <h2 className="text-xl font-bold flex justify-between items-center">
          TaskPilot
          <Button className={buttonClass} onClick={handleCreate}>
            Create
          </Button>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div
              className="p-1 w-full bg-gray-600 hover:bg-gray-300 hover:cursor-pointer text-white hover:text-black"
              onClick={handleCreateProject}
            >
              Project
            </div>
            <div
              className="p-1 w-full bg-gray-600 hover:bg-gray-300 hover:cursor-pointer text-white hover:text-black"
              onClick={handleCreateTask}
            >
              Task
            </div>
          </Modal>
        </h2>
        <nav className="space-y-2">
          <div
            className="cursor-pointer hover:bg-gray-700 p-2 rounded"
            onClick={() => {
              navigate("/app");
            }}
          >
            Home
          </div>
          <div
            className="cursor-pointer hover:bg-gray-700 p-2 rounded"
            onClick={() => {
              navigate("/app/tasks");
            }}
          >
            My Tasks
          </div>
          <div
            className="cursor-pointer hover:bg-gray-700 p-2 rounded"
            onClick={() => {
              navigate("/app/inbox");
            }}
          >
            Inbox
          </div>
          <div
            className="cursor-pointer hover:bg-gray-700 p-2 rounded"
            onClick={() => {
              navigate("/app/projects");
            }}
          >
            Projects
          </div>
          {/* <div className="mt-4 text-sm text-gray-400">Projects</div> */}
          {/* {projects.map((project, index) => (
            <div
              key={index}
              className="cursor-pointer hover:bg-gray-700 p-2 rounded"
              onClick={() => handleSelectProject(project)}
            >
              ⦿ {project}
            </div>
          ))} */}
        </nav>
      </aside>

      <main className="flex-1 bg-gray-100 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default AppMain;
