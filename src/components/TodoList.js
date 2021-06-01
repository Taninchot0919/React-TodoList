import { Link } from "react-router-dom";

const TodoList = ({ lists }) => {
  console.log(lists);
  return (
    <div className="space-y-3 my-3">
      {lists.map((list, index) => (
        // จำไว้ว่า map แล้วต้องเป็น () ไม่ใช่ {} ไอ่เวน
        <div key={index} className="border border-gray-300 rounded-md p-3">
          <Link to={`/list/${list.id}`}>
            <p className="text-lg font-semibold">Title : {list.title}</p>
            <p className="text-sm">Status : {list.status}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
