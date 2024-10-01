import AdminDashboardLayout from "@/Layouts/AdminDashboardLayout";
import DashboardHome from "../components/DashboardHome";
const Dashboard = ({ data }) => {
    console.log();
    return (
        <div>
            <div className="p-4">
                <DashboardHome />
            </div>
        </div>
    );
};

Dashboard.layout = (page) => <AdminDashboardLayout children={page} />;

export default Dashboard;
