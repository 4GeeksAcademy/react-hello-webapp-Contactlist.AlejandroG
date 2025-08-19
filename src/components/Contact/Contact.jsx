import useGlobalReducer from "../../hooks/useGlobalReducer";
import { Link } from "react-router-dom";
import { deleteContact } from "../../Services/ServicesApi";
import "./Contact.css";

export const Contact = () => {
    const { dispatch, store } = useGlobalReducer();

    return (
        <div className="contact-list">
            {store.Contacts.length > 0 ? (
                store.Contacts.map((Contact) => (
                    <div className="contact-card" key={Contact.id}>
                        <div className="contact-info">
                            <h2>{Contact.name}</h2>
                            <p>{Contact.address}</p>
                            <p>{Contact.phone}</p>
                            <p>{Contact.email}</p>
                        </div>
                        <div className="contact-actions">
                            <Link to={`/form/${Contact.id}`}>
                                <button className="btn-edit">Edit</button>
                            </Link>
                            <button
                                className="btn-delete"
                                onClick={() => deleteContact(Contact.id, dispatch)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <div className="no-contacts">📭 No Contacts Found</div>
            )}
        </div>
    );
};
