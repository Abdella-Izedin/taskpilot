import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AppHome() {
  const [projects, setProjects] = useState([
    "خطة التسويق",
    "زيارات",
    "dreamer",
  ]);
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

  const handleCreateProject = () => {
    if (newProject.trim() === "") return;
    setProjects([...projects, newProject]);
    setTasks({ ...tasks, [newProject]: [] });
    setNewProject("");
    setOpen(false);
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

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4 space-y-4">
        <h2 className="text-xl font-bold">TaskPilot</h2>
        <nav className="space-y-2">
          <div className="cursor-pointer hover:bg-gray-700 p-2 rounded">
            Home
          </div>
          <div className="cursor-pointer hover:bg-gray-700 p-2 rounded">
            My Tasks
          </div>
          <div className="cursor-pointer hover:bg-gray-700 p-2 rounded">
            Inbox
          </div>
          <div className="mt-4 text-sm text-gray-400">Projects</div>
          {projects.map((project, index) => (
            <div
              key={index}
              className="cursor-pointer hover:bg-gray-700 p-2 rounded"
              onClick={() => handleSelectProject(project)}
            >
              ⦿ {project}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6 overflow-auto">
        {selectedProject && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">
                مهام المشروع: {selectedProject}
              </h3>
              <Button variant="default" onClick={() => setTaskDialog(true)}>
                + Add Task
              </Button>
            </div>
            <ul className="space-y-2">
              {tasks[selectedProject].map((task, index) => (
                <li key={index} className="p-2 bg-white rounded shadow">
                  ⦿ {task}
                </li>
              ))}
            </ul>
          </div>
        )}

        <Dialog open={taskDialog} onOpenChange={setTaskDialog}>
          <DialogContent>
            <h2 className="text-lg font-semibold mb-4">إضافة مهمة جديدة</h2>
            <Input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="أدخل اسم المهمة"
            />
            <Button className="mt-4 w-full" onClick={handleCreateTask}>
              حفظ المهمة
            </Button>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
}
