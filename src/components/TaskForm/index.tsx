import { useForm } from "react-hook-form";
import styles from "./taskForm.module.css";
import { Task } from "../../interfaces/task";

interface TaskFormProps {
  btnText: string;
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
  data?: Task;
  handleUpdate?: (task: Task) => void;
}

const TaskForm = ({
  btnText,
  taskList,
  setTaskList,
  data,
  handleUpdate,
}: TaskFormProps) => {
  const { register, handleSubmit, reset } = useForm<Task>({
    defaultValues: {
      id: data?.id,
      title: data?.title,
      difficulty: data?.difficulty,
    },
  });

  const onSubmit = (formData: Task) => {
    if (data && handleUpdate) {
      handleUpdate(formData);
    } else {
      const id = taskList.length > 0 ? taskList[taskList.length - 1].id + 1 : 1;
      const newTask: Task = {
        id: id,
        title: formData.title,
        difficulty: formData.difficulty,
      };
      setTaskList([...taskList, newTask]);
      reset();
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          placeholder="Título da tarefa"
          {...register("title")}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="text"
          placeholder="Dificuldade da tarefa"
          {...register("difficulty", { valueAsNumber: true })}
        />
      </div>
      <button type="submit">{btnText}</button>
    </form>
  );
};

export default TaskForm;
