import {
  ActivitySquare,
  IndianRupeeIcon,
  User2Icon,
  Users,
} from 'lucide-react';
import barchart from '../assets/BarChart.png';

const Admin = () => {
  return (
    <div className="P-4 bg-gray-100 w-full mx-auto min-h-screen  ">
      <section className="flex flex-wrap max-w-7xl  gap-4 p-4 justify-around  ">
        <div className=" flex bg-body-tertiary w-auto h-auto p-2 gap-4 rounded-md">
          <div className="bg-lime-600 rounded-md  mx-auto p-2 ">
            <Users className=" text-white" />
          </div>
          <div className=" p-2 rounded-md hover:bg-lime-50">
            <p>Total Users</p>
            <span>2,500</span>
          </div>
        </div>
        <div className=" flex bg-body-tertiary  w-auto h-auto p-2 gap-4 rounded-md">
          <div className="bg-green-500 p-2 rounded-md">
            <User2Icon className="text-white" />
          </div>
          <div className="p-2 rounded-md hover:bg-green-50">
            <p>Active users</p>
            <span>2,000</span>
          </div>
        </div>
        <div className=" flex bg-body-tertiary  w-auto h-auto p-2 gap-4 rounded-md">
          <div className="bg-red-500 p-2 rounded-md">
            <ActivitySquare className="text-white" />
          </div>
          <div className="p-2 rounded-md hover:bg-red-50">
            <p>Inactive users</p>
            <span>200</span>
          </div>
        </div>
        <div className=" flex bg-body-tertiary w-auto h-auto p-2 gap-4 rounded-md">
          <div className="bg-red-400 p-2 rounded-md">
            <IndianRupeeIcon className="text-white" />
          </div>
          <div className="p-2 rounded-md hover:bg-yellow-50">
            <p>Net Payment </p>
            <span>200,000</span>
          </div>
        </div>
      </section>

      <div className=" flex max-w-7xl p-4 ">
        <img src={barchart} className="mix-blend-multiply" />
      </div>
    </div>
  );
};

export default Admin;
