import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./App.module.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useCallback, useState } from "react";
import { Task } from "./interfaces/task";
import BasicModal from "./components/Modal";

const App = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<Task | undefined>(undefined);

  const deleteTask = useCallback(
    (taskId: number) => {
      setTaskList(taskList.filter((task) => task.id !== taskId));
    },
    [taskList]
  );

  const editTask = (task: Task) => {
    setTaskToEdit(task);
    setShowModal(true);
  };

  const updateTask = useCallback(
    (updatedTask: Task): void => {
      const updatedItems = taskList.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      );
      setTaskList(updatedItems);
      setShowModal(false);
    },
    [taskList]
  );

  const handleClose = () => setShowModal(false);

  return (
    <>
      <BasicModal show={showModal} onHide={handleClose}>
        <TaskForm
          btnText="Editar tarefa"
          taskList={taskList}
          setTaskList={setTaskList}
          data={taskToEdit}
          handleUpdate={updateTask}
        />
      </BasicModal>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm
            btnText="Criar tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas</h2>
          <TaskList
            taskList={taskList}
            onDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
