import { useEffect, useState } from "react";
import useGlobalReducer from "../../hooks/useGlobalReducer";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createContact, editContact } from "../../Services/ServicesApi";


export const Form = () => {

    const{ store, dispatch } = useGlobalReducer();
    const{ id } = useParams();
    const navigate = useNavigate(); 

    const[ newContact, setNewContact ] = useState({});
    const[ showAlert, setShowAlert ] = useState(false)

    useEffect(() => {
        if (id){
            const existContact = store.Contacts.find(Contact => Contact.id === parseInt(id));
            if(existContact){
                setNewContact(existContact)
            }
        }
    },[ id, store.Contacts ])

    const handleInputChange = (e) => {
        setNewContact({...newContact, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!newContact.name || !newContact.phone || !newContact.email || !newContact.address){
            setShowAlert(true)
            setTimeout(() => 
                setShowAlert(false)
            , 2000 );
        }

        if (id) {
            await editContact(id, newContact, dispatch)
        
        }else{
            await createContact(newContact, dispatch)
        }
        navigate("/")
    }

    return (
        <>
            <div>
                {showAlert && (
                    <div>
                        all the fields are requeried 
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div>
                        <input 
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            value={newContact.name || ""}
                            onChange={handleInputChange}
                            required 
                        />
                    </div>
                    <div>
                        <input 
                            type="text"
                            placeholder="Your Address"
                            name="address"
                            value={newContact.address || ""}
                            onChange={handleInputChange}
                            required 
                        />
                    </div>
                    <div>
                        <input 
                            type="phone"
                            placeholder="Your Phone"
                            name="phone"
                            value={newContact.phone || ""}
                            onChange={handleInputChange}
                            required 
                        />
                    </div>
                    <div>
                        <input 
                            type="email"
                            placeholder="Your Email"
                            name="email"
                            value={newContact.email || ""}
                            onChange={handleInputChange}
                            required 
                        />
                    </div>
                    <button type="submit">
                        Save 
                    </button>
                    <Link to="/">
                        <span>Back to Contact</span>
                    </Link>
                </form>
            </div>
        </>
    )
    
}