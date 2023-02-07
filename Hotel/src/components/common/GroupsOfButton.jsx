import React, { useState } from "react";

const GroupsOfButton = ({ listOfBtn }) => {
  const [active, setActive] = useState(0);

  const handleClick = (e) => {
    setActive(parseInt(e.target.id));
  };
  return (
    <>
      <div>
        {/* Group of Btns */}
        <div className="flex lg:w-4/5">
          {listOfBtn.map((btn, id) => {
            return (
              <button
                key={id}
                className={` md:w-full p-4 w-full font-subHeading font-semibold tracking-wider border-[#b18c57]/30 truncate ${
                  active === id
                    ? "bg-white dark:bg-[#f0ebe5] dark:border-light text-light border-2 border-b-0 "
                    : "bg-slate-100 dark:bg-inherit text-primary dark:text-white border-b-2"
                }`}
                id={id}
                onClick={handleClick}
              >
                {btn.btnName}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Details */}

      <div className="mb-8">{listOfBtn[active].details}</div>
    </>
  );
};

export default GroupsOfButton;
