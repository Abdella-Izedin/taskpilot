import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Modal from "../../components/common/Modal";
import { useNavigate } from "react-router";

export default function AppHome() {
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

  const handleCreate = (e, userId) => {
    e.preventDefault();
    openModal();
  };

  const buttonClass = cn("bg-red-100");

  return (
    <>
      Home
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
          <DialogTitle className="text-lg font-semibold mb-4">
            إضافة مهمة جديدة
          </DialogTitle>
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
    </>
  );
}
