// Import necessary components and functions from react-router-dom.

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Form } from "./components/Form/Form.jsx";
import { Contact } from "./components/Contact/Contact.jsx";

export const router = createBrowserRouter(
  createRoutesFromElements(



    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >


      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />      
      <Route path="/contact" element={<Contact />} />
      <Route path="/form/:id" element={<Form />} />
    </Route>
  )
);