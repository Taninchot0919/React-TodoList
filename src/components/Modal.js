import { useEffect, useRef } from "react";
import { useHistory } from "react-router";

const Modal = ({ data: list, handleCancel }) => {
  const enteredTitle = useRef();
  const enteredDetails = useRef();

  const history = useHistory();

  const handleEdit = () => {
    let editedList = {
      title: enteredTitle.current.value,
      details: enteredDetails.current.value,
    };
    fetch("http://localhost:9000/Lists/" + list.id, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(editedList),
    }).then((res) => {
      if (res.ok) {
        history.push("/");
      }
    });
  };

  useEffect(() => {
    enteredTitle.current.value = list.title;
    enteredDetails.current.value = list.details;
  }, []);

  return (
    <div className="fixed z-10 flex justify-center items-center top-0 left-0 right-0 bottom-0">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 w-full"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      />
      <div className="relative w-1/2 ">
        <div className="bg-white p-5">
          <label>Title :</label>
          <input
            type="text"
            className="block border border-black w-full px-2 py-1"
            ref={enteredTitle}
          />
          <label>Details:</label>
          <textarea
            className="block border border-black w-full px-2 py-1"
            ref={enteredDetails}
          />
          <div className="mt-5 space-x-3">
            <button className="px-3 py-1 bg-yellow-300" onClick={handleEdit}>
              Edit
            </button>
            <button className="px-3 py-1 bg-red-300" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
