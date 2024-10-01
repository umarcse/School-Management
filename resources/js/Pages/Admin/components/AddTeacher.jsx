import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";

const AddTeacher = () => {
    const { data, setData, post, reset, errors, processing } = useForm({
        name: "",
        id: "124568",
        class: "Five",
        subject: "Bangla",
        phone: "",
        address: "",
    });
    const [open, setOpen] = useState(false);
    function submit(e) {
        e.preventDefault();
        post("/admin/save/teacher");
        setOpen(false);
        reset();
    }
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
                                Add Teacher
                            </h2>
                        </div>
                    </DialogTrigger>
                    <DialogContent className="bg-white w-[360px]">
                        <DialogHeader>
                            <DialogTitle> Want to Add Teacher? </DialogTitle>
                            <DialogDescription>
                                <form action="" onSubmit={submit} className="">
                                    <div className="mt-7 w-[90%]">
                                        <div>
                                            <p className="text-base mb-1 font-medium">
                                                Teacher Name :
                                            </p>
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
                                            <p className="text-base mb-1 font-medium">
                                                Teacher ID :
                                            </p>
                                            <input
                                                value={data.id}
                                                type="text"
                                                readOnly
                                                className="border  border-gray-200 rounded-lg p-2  text-sm w-full"
                                            />
                                        </div>
                                        <div className="mt-1">
                                            <p className="text-base mb-1 font-medium">
                                                Subjects :
                                            </p>
                                            <select
                                                value={data.subject}
                                                onChange={(e) =>
                                                    setData(
                                                        "subject",
                                                        e.target.value
                                                    )
                                                }
                                                className="border border-gray-200 w-full rounded-lg p-2 text-sm "
                                            >
                                                <option value="Bangla">
                                                    Bangla
                                                </option>
                                                <option value="English">
                                                    Englis
                                                </option>
                                                <option value="Math">
                                                    Math
                                                </option>
                                            </select>
                                        </div>
                                        <div className="mt-1">
                                            <p className="text-base mb-1 font-medium">
                                                Classes :
                                            </p>
                                            <select
                                                value={data.class}
                                                onChange={(e) =>
                                                    setData(
                                                        "class",
                                                        e.target.value
                                                    )
                                                }
                                                className="border border-gray-200 w-full rounded-lg p-2 text-sm "
                                            >
                                                <option value="Five">
                                                    Five
                                                </option>
                                                <option value="Six">Six</option>
                                                <option value="Seven">
                                                    Seven
                                                </option>
                                            </select>
                                        </div>
                                        <div>
                                            <p className="text-base mb-1 font-medium">
                                                Phone :
                                            </p>
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
                                            <p className="text-base mb-1 font-medium">
                                                Address :
                                            </p>
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

                                        <div className="mt-2 flex justify-end gap-2 ">
                                            <Button
                                                type="button"
                                                variant={"outline"}
                                                className="bg-red-400 text-white"
                                                onClick={() => setOpen(false)}
                                            >
                                                Close
                                            </Button>
                                            <button className="w-auto px-4  bg-blue-600 text-white h-10 rounded-lg font-medium">
                                                <span> Save Teacher </span>
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

export default AddTeacher;
