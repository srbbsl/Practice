import React from "react";
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,

} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  PowerIcon,
  ShoppingCartIcon,
  ListBulletIcon,

} from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { removeUserFromLocal } from "../auth/userSlice";
 

const userMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Carts",
    icon: ShoppingCartIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

const adminMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Products",
    icon: ListBulletIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];
 
function ProfileMenu({user}) {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = user.role === 'admin' ? adminMenuItems : userMenuItems;
  const closeMenu = () => setIsMenuOpen(false);
 
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {menuItems.map(({ label, icon }, key) => {
          const isLastItem = key === menuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={() => {
                switch (label) {
                  case 'Sign Out':
                    dispatch(removeUserFromLocal());
                    break;
                }
                closeMenu();
              }}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
 

  
export function Header() {

  const {user} = useSelector((state) => state.userSlice)
  // console.log(user)
  const nav = useNavigate();
  return (
    <Navbar className=" p-2 flex items-center justify-between text-blue-gray-900 !rounded-none">
      
        <Typography
          as="a"
          href="#"
          className=" cursor-pointer py-1.5 font-bold text-lg mx-10"
        >
          Shopify
        </Typography>
   
 
        {user ? <ProfileMenu user={user}/> : <Button
          onClick={() => nav('/login')} 
          size="sm"  
          variant="text">
            <span>Log In</span>
        </Button>
        }
        
   
    
    </Navbar>
  );
}