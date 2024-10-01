import React, { useState } from "react";

const MultiSelector = () => {
    const [item, setItem] = useState("");
    const classes = ["six", "seven", "eight", "nine", "ten"];
    const [seletcedItem, setSelectedItem] = useState([]);
    const selectedItem = (data) => {
        setSelectedItem((previous) => {
            if (!seletcedItem.includes(data)) {
                return [...previous, data];
            } else {
                return previous;
            }
        });
    };
    console.log(seletcedItem);

    return (
        <>
            <div className="w-full">
                {seletcedItem.length > 0 && (
                    <div className="flex gap-2 flex-wrap py-2">
                        {seletcedItem.map((sitem) => (
                            <h2
                                key={sitem}
                                className="bg-gray-200 py-0.5 px-4 capitalize rounded-lg text-sm "
                            >
                                {sitem}
                            </h2>
                        ))}
                    </div>
                )}
                <input
                    type="text"
                    value={item}
                    className="border border-gray-300  rounded-lg outline-none"
                    onChange={(e) => setItem(e.target.value)}
                />
                {item && (
                    <div>
                        <ul className="border mt-1 border-gray-100 rounded-md p-2 px-8">
                            {classes.map((citem) => (
                                <li
                                    key={citem}
                                    onClick={(e) => selectedItem(citem)}
                                    className=" capitalize text-sm text-center py-1 rounded hover:bg-gray-200 cursor-pointer "
                                >
                                    {citem}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default MultiSelector;
