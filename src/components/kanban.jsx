import React from 'react';
import {useSelector} from "react-redux";
import RenderByPriority from "./groups/priority";
import RenderByUser from "./groups/user";
import RenderByStatus from "./groups/status";

export default function Kanban() {
    const groupBy = useSelector((state) => state.kanban.filters.groupBy);
    const renderView = (c) => {
        switch (c) {
            case 'status':
                return <RenderByStatus/>;
            case 'user':
                return <RenderByUser/>;
            case 'priority':
                return <RenderByPriority/>;
            default:
                return null;
        }
    };
    return (
        <div className="p-1 sm:p-4">
            {renderView(groupBy)}
        </div>
    );
}
