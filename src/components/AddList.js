import { useState } from "react";
import { useHistory } from "react-router";

const AddList = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toDateString();

    let newList = {
      title: title,
      status: "On going",
      details: details,
      date: date,
    };
    console.log(newList);
    fetch("http://localhost:9000/Lists", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newList),
    }).then((res) => {
      if (res.ok) {
        history.push("/");
      }
    });
  };

  return (
    <div id="add-list" className="flex justify-center w-full">
      <form>
        <label className="text-left block text-xl mt-3">Title : </label>
        <input
          type="text"
          className="block border border-black max-w-full px-2"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label className="text-left block text-xl mt-3">Details :</label>
        <textarea
          className="block border border-black max-w-full h-32 px-2"
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        {/* {details} */}
        <button
          className="px-3 py-1 mt-3 border-black border"
          onClick={handleSubmit}
        >
          Adding list
        </button>
      </form>
    </div>
  );
};

export default AddList;
