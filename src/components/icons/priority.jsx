import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEllipsis,
    faCircleExclamation,
    faTriangleExclamation, faCircleInfo, faFire
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Priority({priority, className=""}) {
    const priorityIcons = {
        4: <FontAwesomeIcon icon={faFire} className={"text-orange-500"}/>,
        3: <FontAwesomeIcon icon={faCircleExclamation} className={"text-red-600"}/>,
        2: <FontAwesomeIcon icon={faTriangleExclamation} className={"text-yellow-500"}/>,
        1: <FontAwesomeIcon icon={faCircleInfo} className={"text-blue-400"}/>,
        0: <FontAwesomeIcon icon={faEllipsis} className={"text-gray-500"} />,
    };

    if (priorityIcons[priority]) {
        return <span className={className}>{priorityIcons[priority]}</span>;
    }

    return null;
}