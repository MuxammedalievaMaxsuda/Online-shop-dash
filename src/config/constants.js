import { BsCartPlus } from "react-icons/bs"; 
import { BiListPlus } from "react-icons/bi"; 
import { BsBasket2Fill } from "react-icons/bs"; 
import { BiCategoryAlt } from "react-icons/bi"; 
const btnData=[
    {
        id: 1,
        icon: BiCategoryAlt,
        title: "Categories",
        path: '/'
    },
    {
        id: 2,
        icon: BsBasket2Fill ,
        title: "Products",
        path: '/products'
    },
    {
        id: 3,
        icon: BiListPlus,
        title: "Create category",
        path: '/create-category'
    },
    {
        id: 4,
        icon: BsCartPlus,
        title: "Create product",
        path: '/create-product'
    },
]
export default btnData