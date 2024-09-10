import { Outlet } from "react-router-dom"
import AdminHeader from "../components/AdminHeader"
import Sidebar from "../components/Sidebar"

function AdminLayout() {
    return (
        <div>
            <Sidebar />
            <AdminHeader />
            <Outlet />
        </div>
    )
}

export default AdminLayout
