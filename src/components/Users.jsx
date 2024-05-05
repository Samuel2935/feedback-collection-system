import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Link } from 'react-router-dom';
import { Input } from './ui/input';
import { Avatar } from '@radix-ui/react-avatar';
import { AvatarDemo } from '@/pages/utils/Avatar';
import Sidebar from './Sidebar';
import Navbarpanel from './Navbarpanel';
import Footer from './Footer';

const users = [
  {
    name: 'Samuel',
    email: 'samuelblessed38@gmail.com',
    enrolled: '15 April, 2024',
    status: 'active',
  },
  {
    name: 'Chika',
    email: 'chiks@gmail.com',
    enrolled: '15 April, 2024',
    status: 'active',
  },
  {
    name: 'Samuel',
    email: 'samuelblessed38@gmail.com',
    enrolled: '15 April, 2024',
    status: 'active',
  },
  {
    name: 'Joseph',
    email: 'josr@gmail.com',
    enrolled: '15 April, 2024',
    status: 'inactive',
  },
  {
    name: 'Badar',
    email: 'badar38@gmail.com',
    enrolled: '12 April, 2024',
    status: 'active',
  },
  {
    name: 'Joseph',
    email: 'josr@gmail.com',
    enrolled: '15 April, 2024',
    status: 'inactive',
  },
  {
    name: 'Badar',
    email: 'badar38@gmail.com',
    enrolled: '12 April, 2024',
    status: 'active',
  },
];

export function Users() {
  return (
<div>
     
   <Sidebar/>
    <Navbarpanel/>
<div className=" w-2/3 m-auto  rounded-md ">
   
   <Table>
     <TableCaption>A list of your recent invoices.</TableCaption>
     <TableHeader>
       <TableHead className="w-[100px]">Users</TableHead>
       <TableHead className="text-right">
         <Input placeholder="Search users" />
       </TableHead>
       <TableRow>
         <TableHead className="w-[100px]">Name</TableHead>
         <TableHead>Email</TableHead>
         <TableHead>Enrolled</TableHead>
         <TableHead className="text-right">Status</TableHead>
       </TableRow>
     </TableHeader>
     <TableBody>
       {users.map((user) => (
         <TableRow key={user.id}>
           <TableCell className="font-medium">
             {user.name} <p className="font-thin">@{user.name}</p>
           </TableCell>
           <TableCell>{user.email}</TableCell>
           <TableCell>{user.enrolled}</TableCell>
           <TableCell className="text-right">{user.status}</TableCell>
           <TableCell className="text-right text-violet-500">
             <Link>View</Link>
           </TableCell>
         </TableRow>
       ))}
     </TableBody>
     <TableFooter>
       <TableRow>
         <TableCell colSpan={3}>Total users</TableCell>
         <TableCell className="text-right">2,500</TableCell>
       </TableRow>
     </TableFooter>
   </Table>
 </div>
 <Footer/>
</div>
  );
}
