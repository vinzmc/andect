//dependency
import {NavLink} from 'react-router-dom';

export default function Footer() {
    return (
        <div className="bg-gray-800 ">
            <div className="container mx-auto p-2 flex">
                <div className="flex-auto text-gray-500 text-sm text-center">
                    <NavLink to="/andect/contributor"><p>Created by Maurice and Teams. <span>&copy;</span> 2021</p></NavLink>
                </div>
            </div>
        </div>
    )
}