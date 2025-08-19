export const createAgenda = async () => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/AgendaAlejandro", {
        method: "POST"
    })
}

export const createContact = async(newContact, dispatch) => {
    const response = await fetch ("https://playground.4geeks.com/contact/agendas/AgendaAlejandro/contacts", {
        method : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newContact)

    })

    if (response.ok) {
        getContacts(dispatch)
    }
}

export const getContacts = async (dispatch) => {
    const response = await fetch ("https://playground.4geeks.com/contact/agendas/AgendaAlejandro/contacts")
    if (!response.ok) {
        await createAgenda()
    }
    const data = await response.json()
    dispatch({ type: "add_contact", payload: data.contacts})

}

export const editContact = async (id, contactUpdate, dispatch  ) => {
    const response = await fetch (`https://playground.4geeks.com/contact/agendas/AgendaAlejandro/contacts/${id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contactUpdate)

    })

    if (response.ok) {
        getContacts(dispatch)
    }

}

export const deleteContact = async (id, dispatch) => {
    const response = await fetch (`https://playground.4geeks.com/contact/agendas/AgendaAlejandro/contacts/${id}` , {
        method: "DELETE" ,

    })
    
    if (response.ok) {
        getContacts(dispatch)
    }

}