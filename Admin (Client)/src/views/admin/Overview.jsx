import React from "react";
import Container from "../../components/common/Container";

const DashboardCard = ({ imgUrl, name, total, para, color }) => {
  return (
    <div className={`rounded-md border-2 w-[20%] aspect-auto p-4 ${color}`}>
      <div className="flex flex-col gap-8 items-center">
        <img src={imgUrl} alt={name} className="w-14 aspect-auto" />
        <div className="text-black self-start">
          <p className="font-bold text-xl">{name}</p>
          <p className="font-semibold text-lg my-1 px-4">{total}</p>
          <p className="text-sm italic text-blue-500">{para}</p>
        </div>
      </div>
    </div>
  );
};

const DashboardData = [
  {
    id: 1,
    imgUrl: "https://cdn-icons-png.flaticon.com/512/4256/4256900.png",
    name: "Total Sale",
    total: "$1K",
    para: "+8% from yesterday",
    color: "bg-red-200",
  },
  {
    id: 2,
    imgUrl: "https://cdn-icons-png.flaticon.com/512/9156/9156007.png",
    name: "Total Order",
    total: "150",
    para: "+5% from yesterday",
    color: "bg-orange-200",
  },
  {
    id: 3,
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1069/1069454.png",
    name: "Total New Room",
    total: "5",
    para: "+2.4% from last month",
    color: "bg-green-200",
  },
  {
    id: 4,
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3257/3257727.png",
    name: "Total 5 starts Rating",
    total: "1,326",
    para: "+12.4% from last month",
    color: "bg-violet-200",
  },
];

const DashboardTotal = () => {
  return (
    <>
      <div className="border-2 px-10 py-4 m-4 rounded-lg shadow-md shadow-teal-700">
        <div className="mb-10">
          <h2 className="font-bold text-xl dark:text-gray-100 mb-1">
            Today's Sale
          </h2>
          <p className="dark:text-gray-300">Sales Summery</p>
        </div>
        <div className="flex gap-4 justify-between">
          {DashboardData.map((item) => (
            <DashboardCard
              key={item.id}
              imgUrl={item.imgUrl}
              name={item.name}
              total={item.total}
              para={item.para}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const Map = ({ title, imgUrl }) => {
  return (
    <>
      <div className="border-2 flex flex-col items-center px-10 py-4 m-4 rounded-lg shadow-md shadow-teal-700 w-fit">
        <h2 className="font-bold text-xl dark:text-gray-100 mb-6">{title}</h2>
        <img src={imgUrl} alt="" className="w-96 h-72 border-2 rounded-md" />
      </div>
    </>
  );
};

const Overview = () => {
  return (
    <div>
      <div className="">
        <Container>
          <DashboardTotal />
          <div className="flex justify-between">
            <Map
              imgUrl="https://www.syncfusion.com/products/react-js2/control/images/maps/react-maps-with-legend-items.png"
              title="The Popularity of the Elysia hotel to the world (2022)"
            />
            <Map
              imgUrl="https://f4n3x6c5.stackpathcdn.com/article/angular-2-or-react-for-decision-makers/Images/Angular2-Vs-React-Popular-Countries.jpg"
              title="The Goal of reaching out to the world (2019 - 2029)
"
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Overview;
