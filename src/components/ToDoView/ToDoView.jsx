import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeToDo } from "../../features/toDoSlice";

export const ToDoView = () => {
  const tasks = useSelector((state) => state.toDo.tasks || []);
  const dispatch = useDispatch();

  const deleteTask = (id) => {
    dispatch(removeToDo(id));
  };

  return (
    <div className="bg-slate-200 ">
      <div className="max-w-[1400px] w-[100%] h-[94vh] flex justify-center items-center mx-auto">
        <div className="bg-white w-[350px] flex justify-center items-start p-9 rounded-xl shadow-lg shadow-gray-500/50 md:w-[500px] h-[500px]">
          <table className="w-[400px] border-collapse border border-black rounded-lg overflow-hidden">
            <tbody>
              <tr>
                <td className="w-[50px] font-bold border p-1 rounded-tl-lg">
                  ID
                </td>
                <td className="w-[400px] font-bold border p-1 rounded-tr-lg">
                  To Do
                </td>
              </tr>
              {tasks.map(({ id, description }) => (
                <tr
                  key={id}
                  className="group/task odd:bg-white even:bg-slate-100"
                  onClick={() => deleteTask(id)}
                >
                  <td className="w-[50px] border p-1 rounded-bl-lg group-hover/task:bg-sky-100">
                    {id}
                  </td>
                  <td className="w-[400px] border p-1 rounded-br-lg cursor-pointer group-hover/task:bg-sky-100">
                    {description}
                  </td>
                </tr>
              ))}
              <tr>
                <td className="w-[50px] border p-1 rounded-bl-lg"></td>
                <td className="w-[400px] border p-1 rounded-br-lg"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
