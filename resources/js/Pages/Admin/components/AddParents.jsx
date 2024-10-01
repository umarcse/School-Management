import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/Components/ui/button";
import StudentSelector from "./StudentSelector";
const AddParents = ({ students }) => {
    const [open, setOpen] = useState(false);
    const { data, setData, post, reset, errors, processing } = useForm({
        name: "",
        children: "",
        phone: "",
        address: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post("/admin/parent/save");
        reset();
        setOpen(false);
    };

    const getStudentData = (data) => {
        let string = data.join(",");
        setData("children", string);
    };
    return (
        <>
            <div>
                <Dialog open={open}>
                    <DialogTrigger>
                        <div
                            onClick={() => setOpen(true)}
                            className="border bg-blue-600 t w-[150px] h-[42px] flex justify-center items-center rounded-lg"
                        >
                            <h2 className="text-base text-white font-medium ">
                                Add Parent
                            </h2>
                        </div>
                    </DialogTrigger>
                    <DialogContent className="bg-white w-[360px]">
                        <DialogHeader>
                            <DialogTitle> Want to add Parent? </DialogTitle>
                            <DialogDescription>
                                <form action="" onSubmit={submit} className="">
                                    <div className="mt-7 w-[90%]">
                                        <div>
                                            <h2 className="text-base mb-1 font-medium">
                                                Parent Name :
                                            </h2>
                                            <input
                                                type="text"
                                                value={data.name}
                                                onChange={(e) =>
                                                    setData(
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                                className="border border-gray-200 rounded-lg p-2  text-sm w-full"
                                            />
                                        </div>
                                        <div className="mt-1">
                                            <h2 className="text-base mb-1 font-medium">
                                                Children :
                                            </h2>
                                            <StudentSelector
                                                students={students}
                                                getStudentData={getStudentData}
                                            />
                                        </div>

                                        <div>
                                            <h2 className="text-base mb-1 font-medium">
                                                Phone :
                                            </h2>
                                            <input
                                                value={data.phone}
                                                onChange={(e) =>
                                                    setData(
                                                        "phone",
                                                        e.target.value
                                                    )
                                                }
                                                type="text"
                                                className="border border-gray-200 rounded-lg p-2  text-sm w-full"
                                            />
                                        </div>
                                        <div>
                                            <h2 className="text-base mb-1 font-medium">
                                                Address :
                                            </h2>
                                            <input
                                                value={data.address}
                                                onChange={(e) =>
                                                    setData(
                                                        "address",
                                                        e.target.value
                                                    )
                                                }
                                                type="text"
                                                className="border border-gray-200 rounded-lg p-2  text-sm w-full"
                                            />
                                        </div>

                                        <div className="mt-6 flex justify-end gap-2 ">
                                            <Button
                                                type="button"
                                                variant={"outline"}
                                                className="bg-red-400 text-white"
                                                onClick={() => setOpen(false)}
                                            >
                                                Close
                                            </Button>
                                            <button className="w-auto px-4  bg-blue-600 text-white h-10 rounded-lg font-medium">
                                                <span> Save Parent </span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    );
};

export default AddParents;
