import { Task } from "../../interfaces/task";
import styles from "./taskList.module.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface TaskListProps {
  taskList: Task[];
  onDelete: (id: number) => void;
  handleEdit: (data: Task) => void;
}

const TaskList = ({ taskList, onDelete, handleEdit }: TaskListProps) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <button onClick={() => handleEdit(task)}>
                <EditIcon />
              </button>
              <button onClick={() => onDelete(task.id)}>
                <DeleteIcon />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas!</p>
      )}
    </>
  );
};

export default TaskList;
