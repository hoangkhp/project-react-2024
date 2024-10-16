import { Button, Input, notification, Modal } from 'antd';
import { useState } from 'react';
import { createUserAPI } from '../../service/api.service';


const UserForm = (props) => {
    const { loadUser } = props
    //cac state de xac ding trang thai cua cac bien
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);
    //ham trang thai khi an submit
    const handleSubmitBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phone);
        if (res.data) {
            notification.success({
                message: "create user",
                description: "Tạo user thành công"
            })
            resetAndCloseModal();
            await loadUser();
        } else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }

        console.log("check: ", res.data)
    }
    //Function giup modal thi se clear data
    const resetAndCloseModal = () => {
        setIsModalOpen(false);
        setFullName("");
        setEmail("");
        setPassword("");
        setPhone("");
    }

    return (
        <div className="user-form" style={{ margin: "10px 0" }}>
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h3>Table Users</h3>
                    <Button
                        onClick={() => setIsModalOpen(true)}
                        type="primary"> Create User </Button>
                </div>
                <Modal
                    title="CREATE A USER"
                    open={isModalOpen}
                    onOk={() => handleSubmitBtn()}
                    onCancel={() => resetAndCloseModal()}
                    maskClosable={false}
                    okText={"CREATE"}>
                    <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                        <div>
                            <span>FullName</span>
                            <Input
                                value={fullName}
                                //onChange luc nao cung duoc cung cap mot bien event
                                onChange={(event) => { setFullName(event.target.value) }} />
                        </div>
                        <div>
                            <span>Email</span>
                            <Input
                                value={email}
                                onChange={(event) => { setEmail(event.target.value) }} />
                        </div>
                        <div>
                            <span>Password</span>
                            <Input.Password
                                value={password}
                                onChange={(event) => { setPassword(event.target.value) }} />
                        </div>
                        <div>
                            <span>Phone Number</span>
                            <Input
                                value={phone}
                                onChange={(event) => { setPhone(event.target.value) }} />
                        </div>
                    </div>
                </Modal>

            </div>
        </div >
    )
}
export default UserForm;