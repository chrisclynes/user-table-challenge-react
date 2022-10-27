import './userTable.css';

const UserTable = ({ userData, getUserPosts }) => {

    return (
        <div className="main__table_container">
            <table className="main__user_table">
                <caption className="user_table-title">User Information</caption>
                <thead className="user_table-headers">
                    <tr>
                        <th>USER</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>CITY</th>
                        <th>PHONE</th>
                        <th>WEBSITE</th>
                        <th>COMPANY</th>
                    </tr>
                </thead>
                <tbody id="user-table">
                    {
                        userData?.map((user, i) => {
                            return (
                                <tr key={`row${i}`}>
                                    <th className='table-user' onClick={() => getUserPosts(user.id)}>{user.username}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.city}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.website}</td>
                                    <td>{user.company.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserTable;