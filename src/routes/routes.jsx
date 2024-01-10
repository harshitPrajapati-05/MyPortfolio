import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import {Layout} from '../components';
import { About, Experience,  Live, Projects } from "../pages";



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
            <Route path="/about" element={<About/>}/>
            <Route path="/experience" element={<Experience/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/live" element={<Live/>}/> 
        </Route>
    )
)

export default router