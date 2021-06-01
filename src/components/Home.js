import { Link } from "react-router-dom";
import FetchingData from "./FetchingData";
import TodoList from "./TodoList";

const Home = () => {
  const { data, isPending, error } = FetchingData(
    "http://localhost:9000/Lists"
  );

  const date = new Date().toDateString();

  return (
    <div id="Home">
      <p className="text-xl font-semibold mt-5">Todo List :</p>
      {date}
      {isPending && <p>Loading ...</p>}
      {!isPending && <TodoList lists={data} />}
      {error && <p>{error}</p>}
      <div className="w-full flex justify-center">
        <Link to={"/add"}>
          <button className="border px-2 py-3 bg-green-400 text-white">
            Add Things to do
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
