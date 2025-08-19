
import useGlobalReducer from "../../hooks/useGlobalReducer";
import { Link } from "react-router-dom";
import { deleteContact } from "../../Services/ServicesApi";

export const Contact = () => {

    const {dispatch, store} = useGlobalReducer()
    
    return(
        <>
            {store.Contacts.length > 0 ? (
                store.Contacts.map((Contact) => (
                <div key = {Contact.id}>
                    <div>
                        <Link to={`/form/${Contact.id}`}>
                            <button>
                                Edit
                            </button>
                        </Link>
                        <button onClick={() => deleteContact(Contact.id, dispatch)}>
                            Delete
                        </button>
                    </div>
                    <div>
                        <h2>{Contact.name}</h2>
                        <p>{Contact.address}</p>
                        <p>{Contact.phone}</p>
                        <p>{Contact.email}</p>
                    </div>

                </div>   
            )) 
            ): (
                <div>
                    No Contact...
                </div>
            ) }
        </>
    )
    
}