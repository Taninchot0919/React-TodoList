const AddList = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="add-list" className="flex justify-center w-full">
      <form>
        <label className="text-left block text-xl mt-3">Title : </label>
        <input type="text" className="block border border-black w-full px-2" />
        <label className="text-left block text-xl mt-3">Details : </label>
        <textarea className="block border border-black w-full h-32 px-2"></textarea>
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
