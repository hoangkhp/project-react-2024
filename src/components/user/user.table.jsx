import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../service/api.service';
import { useEffect, useState } from 'react';


const UserTable = () => {
    const [dataUsers, setDataUsers] = useState([

    ]);
    useEffect(() => {
        loadUser();
    }, []);
    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'fullName',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
    ];

    const loadUser = async () => {
        const res = await fetchAllUserAPI();
        setDataUsers(res.data)
        //khi goi state, react rerender component va co vong lap vo han
    }

    return (
        <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
    )
}
export default UserTable;