import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleCheck,
    faCircleXmark
} from "@fortawesome/free-solid-svg-icons";
import {faClock, faCircle, faClipboard} from "@fortawesome/free-regular-svg-icons";

export default function Status({status, className=""}) {
    const statusIcons = {
        "Backlog": <FontAwesomeIcon icon={faClipboard} className={""}/>,
        "Todo": <FontAwesomeIcon icon={faCircle}/>,
        "In progress": <FontAwesomeIcon icon={faClock} className={"text-yellow-600"}/>,
        "Done": <FontAwesomeIcon icon={faCircleCheck} className={"text-blue-600"}/>,
        "Canceled" : <FontAwesomeIcon icon={faCircleXmark} className={"text-gray-600"}/>,
    };

    if (statusIcons[status]) {
        return <span className={className}>{statusIcons[status]}</span>;
    }

    return null;
}