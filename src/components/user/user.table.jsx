import { DeleteOutlined, DiffFilled, EditOutlined } from '@ant-design/icons';
import { Space, Table, Tag } from 'antd';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';

const UserTable = (props) => {
    const { dataUsers } = props

    // const [isModalUpdateOpen, setIsModelUpdateOpen] = useStatete(true);


    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => (
                <>
                    <a>{record._id}</a>
                </>

            ),
        },
        {
            title: 'fullName',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <EditOutlined style={{ cursor: "pointer", color: "green" }} />
                    <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                </div>

            ),
        },
    ];



    return (
        <>
            <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
            <UpdateUserModal />
        </>
    )
}
export default UserTable;