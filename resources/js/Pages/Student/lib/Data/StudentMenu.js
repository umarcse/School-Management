//const { FiHome, FiUsers } = require("react-icons/fi");
import { TbHomeMove } from "react-icons/tb";
import { FcBusinessman } from "react-icons/fc";
import { PiGraduationCapDuotone } from "react-icons/pi";
import { FaPeoplePulling } from "react-icons/fa6";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";
import { GiNewspaper } from "react-icons/gi";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineFrontHand } from "react-icons/md";
import { MdOutlineEventAvailable } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { GrAnnounce } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { TbSettingsCog } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";

const studentMenu = [
    {
        id: 1,
        name: "Home",
        path: "/student/dashboard",
        icon: TbHomeMove,
    },

    {
        id: 3,
        name: "Students",
        path: "/admin/dashboard/student",
        icon: PiGraduationCapDuotone,
    },

    {
        id: 5,
        name: "Classes",
        path: "/admin/dashboard/classes",
        icon: HiOutlineHomeModern,
    },
    {
        id: 6,
        name: "Lessons",
        path: "/admin/dashboard/lessons",
        icon: IoBookOutline,
    },
    {
        id: 7,
        name: "Exams",
        path: "/admin/dashboard/exams",
        icon: GiNewspaper,
    },
    {
        id: 8,
        name: "Assignments",
        path: "/admin/dashboard/assignments",
        icon: IoNewspaperOutline,
    },
    {
        id: 9,
        name: "Attendances",
        path: "/admin/dashboard/attendances",
        icon: MdOutlineFrontHand,
    },
    {
        id: 10,
        name: "Events",
        path: "/admin/dashboard/events",
        icon: MdOutlineEventAvailable,
    },
    {
        id: 11,
        name: "Messages",
        path: "/admin/dashboard/messages",
        icon: AiOutlineMessage,
    },
    {
        id: 12,
        name: "Announcements",
        path: "/admin/dashboard/announcements",
        icon: GrAnnounce,
    },
    {
        id: 13,
        name: "Profile",
        path: "/admin/dashboard/profile",
        icon: CgProfile,
    },
    {
        id: 14,
        name: "Settings",
        path: "/admin/dashboard/Settings",
        icon: TbSettingsCog,
    },
    {
        id: 15,
        name: "Logout",
        path: "/admin/logout",
        icon: LuLogOut,
    },
];

export default studentMenu;
