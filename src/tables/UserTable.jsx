import React from 'react'

export default function UserTable({ users, deleteUser, editRow }) {
  return (
    <table>
        <thead>
            <tr>
                <th>Nom</th>
                <th>Nom utilisateur</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {users.length > 0 ? (
                users.map(user => (
                <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                    <button 
                    onClick={() => {
                        editRow(user)
                    }}
                    className="button muted-button">
                        Edit
                    </button>
                    <button 
                    onClick={() => deleteUser(user.id)}
                    className="button muted-button">
                        Delete
                    </button>
                </td>
            </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>Pas d'utilisateur</td>
                </tr>
            )}
        </tbody>
    </table>
  )
}
