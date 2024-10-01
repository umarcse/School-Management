import { Link } from "@inertiajs/react";
import menuList from "./datas/AdminMenuList";
import AdminHeader from "./_components/AdminHeader";

const AdminDashboardLayout = ({ children }) => {
    //console.log(menuList);
    return (
        <>
            <div className=" h-screen flex">
                <div className="w-[20%] md:w-[8%] lg:w-[18%] xl:w-[18%] px-2 border-r">
                    <div className="inline-flex items-center justify-center ">
                        <img
                            src={"/assets/logo.svg"}
                            alt="logo"
                            className="w-24"
                        />
                        <span className="hidden text-xs text-slate-600 font-semibold lg:block">
                            KNP-High School
                        </span>
                    </div>

                    <div className="px-3">
                        {menuList.map((menu, index) => (
                            <Link
                                href={menu.path}
                                key={index}
                                className="flex gap-2 items-center text-slate-700 mb-1 rounded-md px-2 py-[4px] hover:bg-blue-600 hover:text-white"
                            >
                                <menu.icon className="size-5" />
                                <h2 className="hidden text-sm  lg:block">
                                    {menu.name}
                                </h2>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="w-[80%] md:w-[92%] lg:w-[82%] xl:w-[88%] overflow-y-scroll ">
                    <AdminHeader />

                    {children}
                </div>
            </div>
        </>
    );
};

export default AdminDashboardLayout;
