import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";


export default function AllUsers() {
    const axiosPublic = useAxiosPublic();

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/users');
            return res.data;
        }
    });

    console.log(users);



  return (
    <section className="min-h-[calc(100vh-280px)]">
        <div className="py-24 grid md:grid-cols-3 gap-6 pt-40">
            {
                users.map(user=>
                    <div key={user?._id} className="border p-2 rounded-md shadow-md">
                        <p className="text-xl font-medium">{user?.name}</p>
                        <Link to={`/chat/${user?._id}`} className="font-medium w-full px-4 py-2 bg-[#d1a054] inline-block mt-5 text-center text-white rounded-md">Chat with {user?.name}</Link>
                    </div>
                )
            }
        </div>
    </section>
  )
}
