import React, { useState } from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

const AddCategory = () => {
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Category: ", category);
    console.log("Subcategory: ", subcategory);
  };

  return (
    <div className="mx-4">
      <h1 className="text-3xl text-indigo-600  text-center font-bold my-6 ">
        Add Category
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="md:flex  items-center  mb-4 bg-pink-50  hover:bg-pink-100 py-10 px-4 rounded-2xl">
          <h2 className="font-semibold mb-2  md:mb-0  mr-4">
            add Category Name:{" "}
          </h2>

          <input
            required
            className="input input-bordered w-full max-w-xs"
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div
          className={`grid md:grid-cols-2 md:items-center  mb-4 bg-blue-50  hover:bg-blue-100 py-10 px-4 rounded-2xl   ${
            category ? " " : " hidden "
          }`}
        >
          <h2 className="font-semibold mb-2 md:mb-0  mr-4">
            add Sub-Cate Name:{" "}
          </h2>
          <input
            required
            className={`input input-bordered w-full max-w-xs`}
            type="text"
            placeholder="Subcategory"
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
          />
        </div>

        <div
          className={`flex  items-center justify-center mb-4 bg-pink-50 hover:bg-pink-100 py-10 px-4 rounded-2xl h-20 w-48  ${
            subcategory ? " " : "hidden "
          }`}
        >
          <AiOutlineAppstoreAdd size={"3em"} />
        </div>

        <button
          disabled={!subcategory}
          className="btn btn-wide btn-outline btn-success mt- "
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
