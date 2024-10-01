import React, { useEffect, useState } from "react";

const StudentSelector = ({ getStudentData, students, seletectedStudent }) => {
    console.log(seletectedStudent);
    const [item, setItem] = useState("");
    const [seletcedItem, setSelectedItem] = useState(
        seletectedStudent ? seletectedStudent : []
    );
    const selectedItem = (data) => {
        setSelectedItem((previous) => {
            if (!seletcedItem.includes(data)) {
                setItem("");
                return [...previous, data];
            } else {
                setItem("");
                return previous;
            }
        });
    };

    useEffect(() => {
        getStudentData(seletcedItem);
    }, [seletcedItem]);
    // console.log(seletcedItem);

    return (
        <>
            <div className="w-full">
                {seletcedItem.length > 0 && (
                    <div className="flex gap-2 flex-wrap py-2">
                        {seletcedItem.map((sitem) => (
                            <h2
                                key={sitem}
                                className="bg-blue-600 text-white  py-1 px-4 capitalize rounded-lg text-xs font-medium "
                            >
                                {sitem}
                            </h2>
                        ))}
                    </div>
                )}
                <input
                    type="text"
                    value={item}
                    placeholder="Type Here ..."
                    className="border border-gray-300  text-xs  rounded-lg outline-none w-full py-2"
                    onChange={(e) => setItem(e.target.value)}
                />
                {item && (
                    <div className="h-[100px] overflow-y-scroll mt-1">
                        <ul className="border mt-1 border-gray-100 rounded-md p-2 px-8">
                            {students.map((citem) => (
                                <li
                                    key={citem.id}
                                    onClick={(e) => selectedItem(citem.name)}
                                    className=" capitalize text-sm text-center py-1 rounded hover:bg-gray-200 cursor-pointer "
                                >
                                    {citem.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default StudentSelector;
