import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function EditUserForm(props) {
    const [user, setUser] = useState(props.currentUser)

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const handleInputChange = event => {
        const {name, value} = event.target 

        setUser({...user, [name]: value})

    }

    return (
    <form
    onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
    }}
    >
    <label>Name</label>
    <input type="text" name='name' value={user.name} onChange={handleInputChange} />
    <label>Name</label>
    <input type="text" name='username' value={user.username} onChange={handleInputChange} />
    <button>Edit</button>
    <button
    onClick={() => props.setEditing(false)} 
    className="button muted-button"
    >
    Cancel
    </button>
    </form>
  )
}

export default EditUserForm