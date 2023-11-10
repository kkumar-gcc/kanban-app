import Card from "../card";
import React from "react";
import Avatar from "../avatar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsis, faPlus} from "@fortawesome/free-solid-svg-icons";
import {useSelector} from "react-redux";
import {sortTickets} from "../../utils/sortTickets";
import {selectFilters, selectTickets, selectUsers} from "../../redux/selector";

export default function RenderByUser(){
    const tickets  = useSelector(selectTickets);
    const orderBy = useSelector((state)=>selectFilters(state).orderBy);
    const allUsers = useSelector(selectUsers);
    const users = [...allUsers].sort((a, b) => a.name.localeCompare(b.name));

    return (
            <div className={"kanban-board"}>
                {users.map((user) => (
                    <div key={user.id} className="kanban-column">
                        <div className={"flex flex-row items-center mb-2"}>
                            <div className={"flex-1 flex flex-row items-center"}>
                                <Avatar userID={user.id} className={"mr-1.5"}/>
                                <h3 className={"font-medium text-lg"}>{user.name}</h3>
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
                        {renderTicketsByUsers(user.id)}
                    </div>
                ))}
            </div>
    )

    function renderTicketsByUsers(userID) {
        const filteredTickets = sortTickets(tickets.filter((ticket) => ticket.userId === userID), orderBy);

        return (
            <div className="kanban-column-content">
                {filteredTickets.map((ticket) => (
                    <Card key={ticket.id} ticket={ticket} showAvatar={false} />
                ))}
            </div>
        );
    }
}