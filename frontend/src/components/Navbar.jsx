import logo from '../assets/logo/omnimart.png'
import Search from './ui/Search'
import ModeToggle from './ui/mode_toggle'
import Notification from './ui/Notification'

import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-evenly w-full px-20 py-2 bg-white dark:bg-gray-900">
        
        <div className="flex items-center space-x-4">
          <img src={logo} className="w-20" alt="omnimart" />
          <h1 className="text-3xl font-bold">OMNIMART</h1>
        </div>

        <div className="flex-grow mx-10">
          <Search />
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Cart</Button>
          <Button variant="ghost">Orders</Button>
          <Button variant="ghost">Profile</Button>
          <Notification />
          <ModeToggle />
        </div>
      </div>
        
    </>
  )
}
