
export const sortTickets = (tickets, orderBy) => {
    if (orderBy === "priority") {
        return tickets.sort((a, b) => b.priority - a.priority);
    } else if (orderBy === "title") {
        return tickets.sort((a, b) => a.title.localeCompare(b.title));
    } else {
        return tickets;
    }
};
