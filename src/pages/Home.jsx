import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx"
import { Contact } from "../components/Contact/Contact.jsx"
import { getContacts } from "../Services/ServicesApi";

export const Home = () => {

	const {dispatch} = useGlobalReducer()

	useEffect(() => {
		getContacts(dispatch)

	}, []) 
	return(
		<>
			<Contact/>
		</>
	)

}