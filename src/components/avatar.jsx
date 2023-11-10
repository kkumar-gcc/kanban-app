import React from 'react';
import {useSelector} from "react-redux";

const Avatar = ({ userID, className }) => {
    const users = useSelector((state) => state.kanban.users);
    const user = users.find((user) => user.id === userID);

    const firstTwoChars = user.name.slice(0, 2).toUpperCase();

    const colors = [
        { bg: 'bg-red-500', text: 'text-white', border: 'border-red-600' },
        { bg: 'bg-blue-500', text: 'text-white', border: 'border-blue-600' },
        { bg: 'bg-green-500', text: 'text-white', border: 'border-green-600' },
        { bg: 'bg-yellow-500', text: 'text-black', border: 'border-yellow-600' },
        { bg: 'bg-indigo-500', text: 'text-white', border: 'border-indigo-600' },
        { bg: 'bg-purple-500', text: 'text-white', border: 'border-purple-600' },
        { bg: 'bg-pink-500', text: 'text-white', border: 'border-pink-600' },
        { bg: 'bg-teal-500', text: 'text-white', border: 'border-teal-600' },
        { bg: 'bg-orange-500', text: 'text-white', border: 'border-orange-600' },
    ];

    const key = (firstTwoChars.charCodeAt(0) << 16) + firstTwoChars.charCodeAt(1);
    const color = colors[key % colors.length];

    return (
        <div className={`relative w-10 h-10 ${className}`}>
            <div className={`w-10 h-10 rounded-full overflow-hidden flex items-center justify-center text-gray-200 border ${color.bg} ${color.border}`}>
                <div className={`font-bold text-lg ${color.text}`}>{user.name.slice(0, 2).toUpperCase()}</div>
                <span
                    className={`absolute bottom-0 right-0.5 w-2.5 h-2.5 z-1 border-2 border-gray-50 ${user.available ? 'bg-green-500' : 'bg-gray-300'} rounded-full`}
                />
            </div>
        </div>
    );
};

export default Avatar;

