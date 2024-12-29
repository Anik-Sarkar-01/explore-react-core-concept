import { useEffect, useState } from "react"
import User from "./User";

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then (res => res.json())
        .then (data => setUsers(data))
    } , [])

    return (
        <div>
            <h3>Users: {users.length}</h3>
            {
                users.map(user => <User user={user}></User>)
            }
        </div>
    )
}

/**
 *     ***steps to load the data***
 * 
 * 1. declare a state to hold the data
 * 2. useEffect with call back and dependency array
 * 3. use fetch or async await to load data
 * 4. set loaded data to the useState
 * 5. display data on the component
 */