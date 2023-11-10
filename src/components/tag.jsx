import {faCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Tag({showIcon = true, tag, className = ""}) {
    return (
        <span className={`px-2 py-1 shadow-sm border rounded bg-white text-xs ${className}`}>
            {showIcon ?
                <span className={"mr-1"}><FontAwesomeIcon icon={faCircle} className={"text-gray-300"}/></span> : null}
            {tag}
        </span>
    )
}