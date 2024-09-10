import { useEffect, useState } from "react"
import axiosClient from "../../axios-client";

function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axiosClient.get('user/all').then(({data}) => setUsers(data.data))
    }, [])

    return (
        <div className="w-[70%] ml-[15%] mt-10 flex flex-col gap-2">
            <div className="flex justify-around gap-5 bg-stone-400 text-center">
                <div className="w-10 text-nowrap">name</div>
                <div className="w-10 text-nowrap">email</div>
                <div className="w-10 text-nowrap">created at</div>
                <div className="w-10 text-nowrap"></div>
            </div>
            {users.map(user => (
                <div key={user.id} className="flex justify-around gap-5 text-center">
                    <div className="w-10 text-nowrap">{user.name}</div>
                    <div className="w-10 text-nowrap">{user.email}</div>
                    <div className="w-10 text-nowrap">{user.created_at}</div>
                    <div className="w-10 text-nowrap"></div>
                </div>
            ))}
        </div>
    )
}

export default Users
