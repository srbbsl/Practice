import { NavLink } from "react-router";


export const Header = () => {
    return(
        <div>
            <header className="bg-black text-white p-4 flex items-baseline justify-between">
                <h1 className="text-2xl font-semibold">Test</h1>
                <nav className="space-x-5">
                    <NavLink>About</NavLink>
                    <NavLink to={'add-form'} >Form</NavLink>
                    <NavLink>Contact</NavLink>
                </nav>
            </header>
        </div>
    )
};