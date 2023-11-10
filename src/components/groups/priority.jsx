import Priority from "../icons/priority";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsis, faPlus} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Card from "../card";
import {useSelector} from "react-redux";
import {sortTickets} from "../../utils/sortTickets";
import {selectFilters, selectTickets} from "../../redux/selector";


export default function RenderByPriority(){
    const tickets  = useSelector(selectTickets);
    const orderBy = useSelector((state)=>selectFilters(state).orderBy);

    const priorities = [
        {id: 0, name: "No priority"},
        {id: 4, name: "Urgent"},
        {id: 2, name: "High"},
        {id: 3, name: "Medium"},
        {id: 1, name: "Low"}
    ]

    return (
        <div className={"kanban-board"}>
            {priorities.map((priority) => (
                <div key={priority.id} className="kanban-column">
                    <div className={"flex flex-row items-center mb-2"}>
                        <div className={"flex-1 flex flex-row items-center"}>
                            <Priority priority={priority.id} className={"text-lg mr-1.5"}/>
                            <h3 className={"font-medium text-lg"}>{priority.name} {renderTicketCount(priority.id)}</h3>
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
                    {renderTicketsByPriority(priority.id)}
                </div>
            ))}
        </div>
    )

    function renderTicketsByPriority(priority){
        let filteredTickets = sortTickets(tickets.filter((ticket) => ticket.priority === priority), orderBy);

        return (
            <div className="kanban-column-content">
                {filteredTickets.map((ticket) => (
                    <Card key={ticket.id} ticket={ticket} showPriority={false}/>
                ))}
            </div>
        );
    }

    function renderTicketCount(priority) {
        const count = tickets.filter((ticket) => ticket.priority === priority).length;

        return <span className={"ml-4"}>{count}</span>;
    }
}