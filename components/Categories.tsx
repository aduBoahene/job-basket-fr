import React from 'react'
import { Category } from './Category'
import { CodeXml, Figma, FolderOpenDot, Landmark, Megaphone, PersonStanding } from 'lucide-react'

export const Categories = () => {


    const categories = [
        {
            title: "Accounting",
            vacancy: "(2 open positions)",
            logo:     <Landmark color='blue'/>

        },
        {
            title: "Marketing",
            vacancy: "(10 open positions)",
            logo:  <Megaphone color='blue'/>


        },
        {
            title: "Design",
            vacancy: "(14 open positions)",
            logo:     <Figma color='blue'/>

        },
        {
            title: "Development",
            vacancy: "(12 open positions)",
            logo:     <CodeXml color='blue'/>

        },
        {
            title: "Human Resource",
            vacancy: "(0 open positions)",
            logo:     <PersonStanding color='blue'/>

        },
        {
            title: "Project Management",
            vacancy: "(2 open positions)",
            logo:     <FolderOpenDot color='blue'/>

        }
    ]

  return (
    <div className='md:w-[70vw] mx-auto md:grid md:grid-cols-3 md:flex-grow md:gap-4'>
       {categories.map((cat, idx)=><Category title={cat.title} vacancy={cat.vacancy} icon={cat.logo}/>)}
    </div>
  )
}
