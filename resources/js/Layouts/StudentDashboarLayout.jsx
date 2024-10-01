import { Link } from "@inertiajs/react";
import menuList from "./datas/AdminMenuList";
import AdminHeader from "./_components/AdminHeader";

const StudentDashboardLayout = ({ children, menus, userinfo }) => {
    //console.log(menuList);
    //console.log(data);
    console.log(userinfo);

    return (
        <>
            <div className=" h-screen flex">
                <div className="w-[16%] md:w-[8%] lg:w-[18%] xl:w-[14%] px-2 border-r">
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
                        {menus.map((menu, index) => (
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
                <div className="w-[84%] md:w-[92%] lg:w-[82%] xl:w-[86%] overflow-y-scroll ">
                    <AdminHeader />

                    {children}
                </div>
            </div>
        </>
    );
};

export default StudentDashboardLayout;
