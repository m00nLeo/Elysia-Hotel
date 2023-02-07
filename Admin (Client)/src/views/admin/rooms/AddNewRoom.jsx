import React from "react";
import Container from "../../../components/common/Container";

const AddNewRoom = () => {
  const Input = ({ id, title, type, placeholder }) => {
    return (
      <div className=" mb-6 flex flex-col ">
        <label htmlFor={id} className="font-semibold">
          {title}
        </label>
        <input
          id={id}
          type={type}
          className="w-60 outline-none px-4 py-2 border-b-2"
          placeholder={placeholder}
        />
      </div>
    );
  };
  return (
    <div className="">
      <Container>
        <div className="px-4 pt-10">
          {/* ACCOUNT INFO */}
          <div className="flex items-center justify-end ">
            <span className=" text-sm font-bold text-teal-600 border-l-gray-200 border-l-2 px-4">
              Rosie P
            </span>
            <div>
              <img
                src="https://i.pinimg.com/280x280_RS/e9/1d/06/e91d062f1c0708a9b1f0f1880a3d8f19.jpg"
                alt="profilepic"
                className=" aspect-square w-10 rounded-full border-spacing-2 p-[2px] border-slate-200 border-2"
              />
            </div>
          </div>
          <div>
            <div className="px-4 py-12">
              <div className="border border-b-4 w-full px-4 py-1 text-xl font-semibold">
                Add New Room
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 translate-x-40 ">
              <Input
                id="hotel title"
                title="Title"
                type="text"
                placeholder="Hotel Name"
              />
              <Input
                id="price"
                title="Price"
                type="number"
                placeholder="$100"
              />
              <Input
                id="bed"
                title="Bed"
                type="text"
                placeholder="1 King bed / 2 Child beds"
              />
              <Input
                id="Description"
                title="Description"
                type="text"
                placeholder="Street view, Private Lock"
              />
              <Input
                id="Room Size"
                title="Room Size"
                type="text"
                placeholder="35m2/75m2"
              />
              <Input
                id="imageUrl"
                title="ImageURL"
                type="file"
                placeholder="CLICK"
              />
            </div>
          </div>

          <div className="py-6 flex justify-end w-2/4">
            <input
              type="submit"
              className=" border cursor-pointer rounded-md bg-teal-600 hover:bg-teal-700 text-white  w-24 h-12 flex items-center justify-center "
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AddNewRoom;
