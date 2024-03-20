import React from 'react'
import { NavLink } from 'react-router-dom'
import { Sheet, SheetTrigger, SheetContent,SheetClose,Button } from '../'
import { Menu } from 'lucide-react'

 function MenuResponsive() {
  return (
    <React.Fragment>
        <div>
        <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline"><Menu/></Button>
      </SheetTrigger>
      <SheetContent>
       
       
        
          <SheetClose asChild>
           
           <ul className='flex flex-col gap-8 py-10'>
                <li> <NavLink><h2>Home</h2></NavLink></li>
                <li> <NavLink><h2>Services</h2></NavLink></li>
                <li> <NavLink><h2>About</h2></NavLink></li>
                <li> <NavLink><h2>Contact</h2></NavLink></li>
               </ul>
           
          </SheetClose>
        
      </SheetContent>
    </Sheet>
        </div>
    </React.Fragment>
  )
}

export {MenuResponsive}
