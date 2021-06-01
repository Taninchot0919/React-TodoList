import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import FetchingData from "./FetchingData";
import Modal from "./Modal";

const ListDetails = () => {
  const { id } = useParams();
  const { data: list, isPending } = FetchingData(
    "http://localhost:9000/Lists/" + id
  ); // เอา data ที่มาจาก FechingData มาเปลี่ยนชื่อเป็น list
  const [isModalOn, setIsModalOn] = useState(false);
  const [stateStatus, setStateStatus] = useState("");
  const history = useHistory();

  const handleDelete = () => {
    console.log("Has click at delete button");
    fetch("http://localhost:9000/Lists/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        history.push("/");
      }
    });
  };
  const closeModal = () => {
    setIsModalOn(false);
  };

  const handleStatusButton = (status) => {
    if (status === "On going") {
      setStateStatus("Done");
    } else if (status === "Done") {
      setStateStatus("On going");
    }
    console.log(stateStatus);
  };

  let modal = null;
  if (isModalOn) {
    modal = <Modal data={list} handleCancel={closeModal} />;
  }

  useEffect(() => {
    let oldStatus = list.status;
    setStateStatus(oldStatus);
  }, []);

  return (
    <div>
      {isPending && <p>Loading...</p>}
      {!isPending && (
        <div>
          <button onClick={() => handleStatusButton(stateStatus)}>
            {stateStatus}
          </button>
          <p className="font-bold text-xl">
            Title: <span className="font-normal">{list.title}</span>
          </p>
          <p className="font-bold text-xl">
            Added at: <span className="font-normal">{list.date}</span>
          </p>
          <p className="font-bold text-xl">
            Details: <span className="font-normal">{list.details}</span>
          </p>
          <div className="space-x-3 my-5 flex justify-center">
            <button
              className="border border-black px-3 py-1 bg-yellow-200"
              onClick={() => setIsModalOn(true)}
            >
              Edit
            </button>
            <button
              className="border border-black px-3 py-1 bg-red-200"
              onClick={() => handleDelete()}
            >
              Delete
            </button>
          </div>
          {modal}
        </div>
      )}
    </div>
  );
};

export default ListDetails;
