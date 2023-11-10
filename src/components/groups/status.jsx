import {useSelector} from "react-redux";
import Status from "../icons/status";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsis, faPlus} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Card from "../card";
import {sortTickets} from "../../utils/sortTickets";
import {selectFilters, selectTickets} from "../../redux/selector";

export default function RenderByStatus(){
    const tickets  = useSelector(selectTickets);
    const orderBy = useSelector((state)=>selectFilters(state).orderBy);

    const uniqueStatuses = [...new Set(tickets.map((ticket) => ticket.status))];

    return (
        <div className="kanban-board">
            {uniqueStatuses.map((status) => (
                <div key={status} className="kanban-column">
                    <div className={"flex flex-row items-center mb-2"}>
                        <div className={"flex-1 flex flex-row items-center"}>
                            <Status status={status} className={"mr-1.5"}/>
                            <h3 className={"font-medium text-lg"}>{status}{renderTicketCount(status)}</h3>
                        </div>

                        <div className={"flex flex-row items-center"}>
                            <button className={"bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center mr-2"}>
                                <FontAwesomeIcon icon={faPlus} className={"text-gray-500"} />
                            </button>

                            <button className={"bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center"}>
                                <FontAwesomeIcon icon={faEllipsis} className={"text-gray-500"} />
                            </button>

                        </div>
                    </div>
                    {renderTicketsByStatus(status)}
                </div>
            ))}
        </div>
    )

    function renderTicketsByStatus(status) {
        const filteredTickets = sortTickets(tickets.filter((ticket) => ticket.status === status),orderBy);

        return (
            <div className="kanban-column-content">
                {filteredTickets.map((ticket) => (
                    <Card key={ticket.id} ticket={ticket} showStatus={false}/>
                ))}
            </div>
        );
    }

    function renderTicketCount(status) {
        const count = tickets.filter((ticket) => ticket.status === status).length;

        return <span className={"ml-4"}>{count}</span>;
    }
}