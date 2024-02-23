import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../../store/slices";
// import { addTodo, removeTodo, updateTodo } from "../../store/todos";
import { arrTodo } from "../../store/todos/todos.selectors";
import {
  addTodo,
  updateTodo,
  deleteTodo,
} from "../../store/todos/todos.actions";
// const Homepage = () => {
//   const counter = useSelector((state) => state.counter.value);
//   const dispatch = useDispatch();
//   const todoData = useSelector((state) => state.todos.arrTodo);

//   const uid = function () {
//     return Date.now().toString(36) + Math.random().toString(36).substr(2);
//   };
//   const handleUpdate = (data, e) => {
//     const newData = { id: data.id, item: e.target.value };
//     dispatch(updateTodo(newData));
//   };
//   return (
//     <div>
//       <span>counter :{counter}</span>
//       <button
//         className="py-1.5 px-3 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
//         onClick={() => dispatch(increment())}
//       >
//         +
//       </button>
//       <button
//         className="py-1.5 px-3 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
//         onClick={() => dispatch(decrement())}
//       >
//         -
//       </button>
//       <button
//         className="py-1.5 px-3 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
//         onClick={() => dispatch(incrementByAmount(100))}
//       >
//         ++
//       </button>

//       <div className=" m-auto">
//         <h1>Todos</h1>

//         <div>
//           <button
//             className="py-1.5 px-3 me-2 mb-2 text-sm font-medium focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
//             onClick={() =>
//               dispatch(
//                 addTodo({
//                   id: uid(),
//                   item: "item 1",
//                 })
//               )
//             }
//           >
//             Add{" "}
//           </button>
//         </div>
//         <div className="border">
//           {todoData &&
//             todoData.map((data, indx) => (
//               <div className="flex items-center px-3 gap-5 " key={indx}>
//                 <span>
//                   <input
//                     type="text"
//                     value={data.item}
//                     className="outline-none border-b-[1.5px] "
//                     onChange={(e) => handleUpdate(data, e)}
//                   />
//                 </span>
//                 <button
//                   className="py-1.5 px-3 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
//                   onClick={() => dispatch(removeTodo(data))}
//                 >
//                   X
//                 </button>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

const Homepage = ({ todoData, addTodo, updateTodo, deleteTodo }) => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  console.log("todos :>> ", todoData);
  const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };
  const handleUpdate = (data, e) => {
    const newData = { id: data.id, item: e.target.value };
    updateTodo(newData);
  };
  return (
    <div>
      <span>counter :{counter}</span>
      <button
        className="py-1.5 px-3 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <button
        className="py-1.5 px-3 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <button
        className="py-1.5 px-3 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={() => dispatch(incrementByAmount(100))}
      >
        ++
      </button>

      <div className=" m-auto">
        <h1>Todos</h1>

        <div>
          <button
            className="py-1.5 px-3 me-2 mb-2 text-sm font-medium focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={() =>
              addTodo({
                id: uid(),
                item: "item 1",
              })
            }
          >
            Add{" "}
          </button>
        </div>
        <div className="border">
          {todoData &&
            todoData.map((data, indx) => (
              <div className="flex items-center px-3 gap-5 " key={indx}>
                <span>
                  <input
                    type="text"
                    value={data.item}
                    className="outline-none border-b-[1.5px] "
                    onChange={(e) => handleUpdate(data, e)}
                  />
                </span>
                <button
                  className="py-1.5 px-3 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  onClick={() => deleteTodo(data.id)}
                >
                  X
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todoData: arrTodo(state.todos),
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (data) => dispatch(addTodo(data)),
  updateTodo: (item) => dispatch(updateTodo(item)),
  deleteTodo: (id) => dispatch(deleteTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);

// export default Homepage;
