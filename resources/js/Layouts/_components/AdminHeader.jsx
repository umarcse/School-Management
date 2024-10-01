import React from "react";
import { MdImageSearch } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { GrAnnounce } from "react-icons/gr";
const AdminHeader = () => {
    return (
        <>
            <nav className="w-full sticky top-0 z-20 bg-white/ h-14 border-b shadow-sm flex items-center justify-between ">
                <div className=" px-8 sm:w-full lg:w-2/5 md:w-4/5">
                    <div className="w-2/3 px-2 flex items-center  gap-2 border border-slate-200 rounded-xl">
                        <MdImageSearch className="size-6" />
                        <input
                            type="text"
                            className="border-none w-full rounded-xl py-[5px] outline-none "
                            placeholder="Search"
                        />
                    </div>
                </div>
                <div className="w-3/5 px-8 text-slate-500 hidden md:block">
                    <div className="flex justify-end gap-6">
                        <AiOutlineMessage className="size-5" />
                        <GrAnnounce className="size-5" />
                        <h2 className="flex flex-col text-xs">
                            <span className="text-slate-700 font-semibold">
                                Jhon Doe
                            </span>
                            <span className="ml-2.5"> Admin </span>
                        </h2>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default AdminHeader;
