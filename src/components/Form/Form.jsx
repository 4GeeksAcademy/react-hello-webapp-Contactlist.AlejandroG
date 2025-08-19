import { useEffect, useState } from "react";
import useGlobalReducer from "../../hooks/useGlobalReducer";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createContact, editContact } from "../../Services/ServicesApi";
import "./Form.css"


export const Form = () => {

    const { store, dispatch } = useGlobalReducer();
    const { id } = useParams();
    const navigate = useNavigate();

    const [newContact, setNewContact] = useState({});
    const [showAlert, setShowAlert] = useState(false)

    useEffect(() => {
        if (id) {
            const existContact = store.Contacts.find(Contact => Contact.id === parseInt(id));
            if (existContact) {
                setNewContact(existContact)
            }
        }
    }, [id, store.Contacts])

    const handleInputChange = (e) => {
        setNewContact({ ...newContact, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!newContact.name || !newContact.phone || !newContact.email || !newContact.address) {
            setShowAlert(true)
            setTimeout(() =>
                setShowAlert(false)
                , 2000);
        }

        if (id) {
            await editContact(id, newContact, dispatch)

        } else {
            await createContact(newContact, dispatch)
        }
        navigate("/")
    }

    return (
        <div className="form-container">
            {showAlert && <div className="form-alert">⚠️ All fields are required</div>}

            <h1>{id ? "Edit Contact" : "Add Contact"}</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={newContact.name || ""}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        value={newContact.address || ""}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label>Phone</label>
                    <input
                        type="text"
                        name="phone"
                        value={newContact.phone || ""}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={newContact.email || ""}
                        onChange={handleInputChange}
                    />
                </div>

                <button type="submit" className="form-submit">
                    {id ? "Update Contact" : "Create Contact"}
                </button>
            </form>
        </div>
    )

}