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
      <section className="flex max-w-7xl  gap-4 p-4 justify-around  ">
        <div className=" flex bg-body-tertiary w-auto h-auto p-2 gap-4 rounded-sm">
          <div className="bg-lime-600  mx-auto p-2 ">
            <Users className="rounded-md" />
          </div>
          <div className=" p-2 rounded-md hover:bg-lime-50">
            <p>Total number of users</p>
            <span>2,500</span>
          </div>
        </div>
        <div className=" flex bg-body-tertiary w-auto h-auto p-2 gap-4 rounded-sm">
          <div className="bg-green-500 p-2">
            <User2Icon />
          </div>
          <div className="p-2 rounded-md hover:bg-green-50">
            <p>Total active users</p>
            <span>2,000</span>
          </div>
        </div>
        <div className=" flex bg-body-tertiary w-auto h-auto p-2 gap-4 rounded-sm">
          <div className="bg-red-500 p-2">
            <ActivitySquare />
          </div>
          <div className="p-2 rounded-md hover:bg-red-50">
            <p>Total nonactive users</p>
            <span>200</span>
          </div>
        </div>
        <div className=" flex bg-body-tertiary w-auto h-auto p-2 gap-4 rounded-sm">
          <div className="bg-red-400 p-2">
            <IndianRupeeIcon />
          </div>
          <div className="p-2 rounded-md hover:bg-yellow-50">
            <p>Total Payment </p>
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
