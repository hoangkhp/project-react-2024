import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { useEffect, useState } from 'react';
import { fetchAllUserAPI } from '../service/api.service';

const UserPage = () => {
    const [dataUsers, setDataUsers] = useState([

    ]);
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await fetchAllUserAPI();
        setDataUsers(res.data)
        //khi goi state, react rerender component va co vong lap vo han
    }

    return (
        <div>
            <div style={{ padding: "20px" }}>
                <UserForm loadUser={loadUser} />
                <UserTable dataUsers={dataUsers} />
            </div>
        </div>
    )
}

export default UserPage;