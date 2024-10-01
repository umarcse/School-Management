import AdminDashboardLayout from "@/Layouts/AdminDashboardLayout";
import React, { useEffect, useState } from "react";
import AddStudent from "../components/AddStudent";
import { usePage, Link, useForm } from "@inertiajs/react";
import { HiOutlineTrash } from "react-icons/hi";
import { TbBookmarkEdit } from "react-icons/tb";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/Components/ui/button";
const StudentPage = ({ list }) => {
    const { flash } = usePage().props;
    const { targetData } = usePage().props;
    const [open, setOpen] = useState(false);
    const { data, setData, post, reset, errors, processing } = useForm({
        name: targetData.data?.name,
        id: targetData.data?.student_id,
        class: targetData.data?.class,
        phone: targetData.data?.phone,
        address: targetData.data?.address,
    });
    const closeDialogBox = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (targetData.data) {
            setOpen(true);
        }
    }, [targetData.data]);
    // console.log(list.length);
    const submit = (e) => {
        e.preventDefault();
        post(`/admin/student/update/${targetData.data.id}`);
        setOpen(false);
    };
    return (
        <>
            <div className="p-5">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-700 inline-block border-b-2 border-gray-900 rounded-r-md rounded-l-md">
                            Student List
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
                        <AddStudent />
                    </div>
                </div>
                {list.length > 0 ? (
                    <div className="mt-7 w-full flex justify-center">
                        <table className="border  w-[80%] ">
                            <thead className="p-2">
                                <tr className="capitalize border-b text-left  ">
                                    <th className="table-header">name</th>
                                    <th className="table-header"> id </th>
                                    <th className="table-header"> class </th>
                                    <th className="table-header"> phone </th>
                                    <th className="table-header"> address </th>
                                    <th className="table-header"> Action </th>
                                </tr>
                            </thead>
                            <tbody className="">
                                {list.map((items, index) => (
                                    <tr
                                        key={index}
                                        className="text-left border-b odd:bg-gray-50 even:bg-blue-50 border-gray-200 "
                                    >
                                        <td className="table-data">
                                            {items.name}
                                        </td>
                                        <td className="table-data">
                                            {items.student_id}
                                        </td>
                                        <td className="table-data">
                                            {items.class}
                                        </td>

                                        <td className="table-data">
                                            {items.phone}
                                        </td>
                                        <td className="table-data">
                                            {items.address}
                                        </td>
                                        <td className="table-data flex gap-2">
                                            <Dialog open={open}>
                                                <DialogTrigger>
                                                    <Link
                                                        href={`/admin/student/edit/${items.id}`}
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
                                                            Student?
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
                                                                        <h2 className="text-base mb-1 font-medium">
                                                                            Student
                                                                            Name
                                                                        </h2>
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
                                                                    <div className="mt-1">
                                                                        <p className="text-base mb-1 font-medium">
                                                                            Student
                                                                            ID :
                                                                        </p>
                                                                        <input
                                                                            value={
                                                                                data.id
                                                                            }
                                                                            type="text"
                                                                            readOnly
                                                                            className="border  border-gray-200 rounded-lg p-2  text-sm w-full"
                                                                        />
                                                                    </div>

                                                                    <div className="mt-1">
                                                                        <p className="text-base mb-1 font-medium">
                                                                            Classes
                                                                            :
                                                                        </p>
                                                                        <select
                                                                            value={
                                                                                data.class
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                setData(
                                                                                    "class",
                                                                                    e
                                                                                        .target
                                                                                        .value
                                                                                )
                                                                            }
                                                                            className="border border-gray-200 w-full rounded-lg p-2 text-sm "
                                                                        >
                                                                            <option value="Five">
                                                                                Five
                                                                            </option>
                                                                            <option value="Six">
                                                                                Six
                                                                            </option>
                                                                            <option value="Seven">
                                                                                Seven
                                                                            </option>
                                                                        </select>
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
                                                                                closeDialogBox()
                                                                            }
                                                                        >
                                                                            Close
                                                                        </Button>
                                                                        <button className="w-auto px-4  bg-blue-600 text-white h-10 rounded-lg font-medium">
                                                                            <span>
                                                                                Update
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
                                                href={`/admin/student/delete/${items.id}`}
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
        </>
    );
};

StudentPage.layout = (page) => <AdminDashboardLayout children={page} />;

export default StudentPage;
