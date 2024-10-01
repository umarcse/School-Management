import AdminDashboardLayout from "@/Layouts/AdminDashboardLayout";
import React, { useEffect, useState } from "react";
import AddParents from "../components/AddParents";
import { usePage } from "@inertiajs/react";
import { Link, useForm } from "@inertiajs/react";
import { TbBookmarkEdit } from "react-icons/tb";
import { HiOutlineTrash } from "react-icons/hi2";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/Components/ui/button";
import StudentSelector from "../components/StudentSelector";
const ParentPage = ({ students, parents, item }) => {
    const { flash } = usePage().props;
    const { targetData } = usePage().props;
    const { data, setData, post, get, errors, processing } = useForm({
        name: targetData.data?.name,
        phone: targetData.data?.phone,
        children: "",
        address: targetData.data?.address,
    });

    const seletectedStudent = targetData.data?.children.split(",");
    //console.log(seletectedStudent);
    const [open, setOpen] = useState(false);
    const submit = (e) => {
        e.preventDefault();
        post(`/admin/parent/update/${targetData.data.id}`);
    };
    const getStudentData = (data) => {
        let string = data.join(",");
        setData("children", string);
    };
    useEffect(() => {
        if (targetData.data) {
            setOpen(true);
        }
    }, [targetData.data]);
    return (
        <>
            <div className="p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-700 inline-block border-b-2 border-gray-900 rounded-r-md rounded-l-md">
                            Parent's List
                        </h2>
                        {flash.status ? (
                            <div className="mt-2">
                                <h2 className="text-base font-medium bg-green-500 text-white px-4 py-2 rounded-md">
                                    {flash.status}
                                </h2>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                    <div>
                        <AddParents students={students} />
                    </div>
                </div>
                <div>
                    {parents.length > 0 ? (
                        <div className="mt-7 w-full flex justify-center">
                            <table className="border  w-[80%] ">
                                <thead className="p-2">
                                    <tr className="capitalize border-b text-left  ">
                                        <th className="table-header">name</th>
                                        <th className="table-header">
                                            Student
                                        </th>
                                        <th className="table-header">phone </th>
                                        <th className="table-header">
                                            address
                                        </th>
                                        <th className="table-header">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    {parents.map((items, index) => (
                                        <tr
                                            key={index}
                                            className="text-left border-b border-gray-200 "
                                        >
                                            <td className="table-data">
                                                {items.name}
                                            </td>
                                            <td className="table-data">
                                                {items.children}
                                            </td>

                                            <td className="table-data">
                                                {items.phone}
                                            </td>
                                            <td className="table-data">
                                                {items.address}
                                            </td>
                                            <td className="table-data flex gap-2">
                                                <Dialog open={open} asChild>
                                                    <DialogTrigger>
                                                        <Link
                                                            href={`/admin/parent/edit/${items.id}`}
                                                        >
                                                            <TbBookmarkEdit
                                                                size={18}
                                                                className="text-blue-500"
                                                            />
                                                        </Link>
                                                    </DialogTrigger>
                                                    <DialogContent className="bg-white w-[360px]">
                                                        <DialogHeader>
                                                            <DialogTitle>
                                                                Want to Update
                                                                Teacher?
                                                            </DialogTitle>
                                                            <DialogDescription>
                                                                <form
                                                                    action=""
                                                                    onSubmit={
                                                                        submit
                                                                    }
                                                                    className=""
                                                                >
                                                                    <div className="mt-7 w-[90%]">
                                                                        <div>
                                                                            <p className="text-base mb-1 font-medium">
                                                                                Teacher
                                                                                Name
                                                                                :
                                                                            </p>
                                                                            <input
                                                                                type="text"
                                                                                value={
                                                                                    data.name
                                                                                }
                                                                                onChange={(
                                                                                    e
                                                                                ) =>
                                                                                    setData(
                                                                                        "name",
                                                                                        e
                                                                                            .target
                                                                                            .value
                                                                                    )
                                                                                }
                                                                                className="border border-gray-200 rounded-lg p-2  text-sm w-full"
                                                                            />
                                                                        </div>
                                                                        <div>
                                                                            <p className="text-base mb-1 font-medium">
                                                                                Children
                                                                                :
                                                                            </p>
                                                                            <StudentSelector
                                                                                students={
                                                                                    students
                                                                                }
                                                                                getStudentData={
                                                                                    getStudentData
                                                                                }
                                                                                seletectedStudent={
                                                                                    seletectedStudent
                                                                                }
                                                                            />
                                                                        </div>

                                                                        <div>
                                                                            <p className="text-base mb-1 font-medium">
                                                                                Phone
                                                                                :
                                                                            </p>
                                                                            <input
                                                                                value={
                                                                                    data.phone
                                                                                }
                                                                                onChange={(
                                                                                    e
                                                                                ) =>
                                                                                    setData(
                                                                                        "phone",
                                                                                        e
                                                                                            .target
                                                                                            .value
                                                                                    )
                                                                                }
                                                                                type="text"
                                                                                className="border border-gray-200 rounded-lg p-2  text-sm w-full"
                                                                            />
                                                                        </div>
                                                                        <div>
                                                                            <p className="text-base mb-1 font-medium">
                                                                                Address
                                                                                :
                                                                            </p>
                                                                            <input
                                                                                value={
                                                                                    data.address
                                                                                }
                                                                                onChange={(
                                                                                    e
                                                                                ) =>
                                                                                    setData(
                                                                                        "address",
                                                                                        e
                                                                                            .target
                                                                                            .value
                                                                                    )
                                                                                }
                                                                                type="text"
                                                                                className="border border-gray-200 rounded-lg p-2  text-sm w-full"
                                                                            />
                                                                        </div>

                                                                        <div className="mt-2 flex justify-end gap-2 ">
                                                                            <Button
                                                                                type="button"
                                                                                variant={
                                                                                    "outline"
                                                                                }
                                                                                className="bg-red-400 text-white"
                                                                                onClick={() =>
                                                                                    setOpen(
                                                                                        false
                                                                                    )
                                                                                }
                                                                            >
                                                                                Close
                                                                            </Button>
                                                                            <button className="w-auto px-4  bg-blue-600 text-white h-10 rounded-lg font-medium">
                                                                                <span>
                                                                                    Save
                                                                                    Teacher
                                                                                </span>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </DialogDescription>
                                                        </DialogHeader>
                                                    </DialogContent>
                                                </Dialog>

                                                <Link
                                                    href={`/admin/parent/delete/${items.id}`}
                                                >
                                                    <HiOutlineTrash
                                                        size={18}
                                                        className="text-red-400"
                                                    />
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="flex gap-2 flex-wrap mt-3">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                                <div className="w-[250px] h-[110px] bg-gray-200 rounded"></div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

ParentPage.layout = (page) => <AdminDashboardLayout children={page} />;
export default ParentPage;
