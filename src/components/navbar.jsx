import React, {useMemo, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setGroupBy, setOrderBy} from "../redux/slice/kanbanSlice";
import {selectFilters} from "../redux/selector";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBarsStaggered} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const [isOpened, setIsOpened] = React.useState(false);

    const dispatch = useDispatch();

    const filters = useSelector(selectFilters);

    const {groupBy, orderBy} = useMemo(() => filters, [filters]);

    const handleGroupByChange = (e) => {
        dispatch(setGroupBy(e.target.value));
    };

    const handleOrderByChange = (e) => {
        dispatch(setOrderBy(e.target.value));
    };

    const dropdownRef = useRef(null);

    // const handleClickOutside = useCallback(
    //     (e) => {
    //         if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
    //             setIsOpened(false);
    //         }
    //     },
    //     [setIsOpened]
    // );

    return (
        <nav className={"py-4 px-8 flex flex-row relative"}>
            <button
                className={"border px-3 py-1 shadow-sm rounded-lg bg-white"}
                onClick={() => setIsOpened(!isOpened)}
            >
                <FontAwesomeIcon icon={faBarsStaggered} className={"mr-2"}/>
                Display
            </button>
            {isOpened && (
                <div
                    ref={dropdownRef}
                    className="absolute top-full -mt-3 bg-white p-5 shadow border rounded-xl z-10 border-gray-300"
                >
                    <div className={"flex flex-row items-center mb-4"}>
                        <label htmlFor="groupBy" className={"mr-4"}>
                            Group By:
                        </label>
                        <select
                            name="groupBy"
                            id="groupBy"
                            value={groupBy.toString()}
                            onChange={handleGroupByChange}
                            className={`flex-1 border border-gray-400 rounded-lg text-gray-600 text-sm bg-white block w-full p-1.5 min-w-[100px]`}
                        >
                            <option value="status">Status</option>
                            <option value="user">User</option>
                            <option value="priority">Priority</option>
                        </select>
                    </div>
                    <div className={"flex flex-row items-center"}>
                        <label htmlFor="orderBy" className={"mr-4"}>
                            Order By:
                        </label>
                        <select
                            name="orderBy"
                            id="orderBy"
                            value={orderBy.toString()}
                            onChange={handleOrderByChange}
                            className={`flex-1 border border-gray-400 rounded-lg text-gray-600 text-sm bg-white block w-full p-1.5`}
                        >
                            <option value="priority">Priority</option>
                            <option value="title">Title</option>
                        </select>
                    </div>
                </div>
            )}
        </nav>
    );
}
