import { Input, notification, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { createUserAPI } from '../../service/api.service';
const UpdateUserModal = (props) => {
    const [fullName, setFullName] = useState("");
    const [id, setId] = useState("");
    const [phone, setPhone] = useState("");

    const { isModalUpdateOpen, setIsModelUpdateOpen, dataUpdate, setDataUpdate } = props
    //khi data giong nhau, ham useEffect se khong chay, dan toi van de bi trong khong
    useEffect(() => {
        if (dataUpdate) {
            setFullName(dataUpdate.fullName);
            setId(dataUpdate._id);
            setPhone(dataUpdate.phone);
        }
    }, [dataUpdate])
    //moi khi bien dataUpdate thay doi, tren se thay doi
    const handleSubmitBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phone);
        if (res.data) {
            notification.success({
                message: "create user",
                description: "Tạo user thành công"
            })
            resetAndCloseModal();
            // await loadUser();
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
        setIsModelUpdateOpen(false);
        setFullName("");
        setId("");
        setPhone("");
        setDataUpdate(null);
        //setDataUpdate la null o day se khien useEffect lan sau khac di, ham useEffect se chay
    }
    return (
        <Modal
            title="Update a User"
            open={isModalUpdateOpen}
            onOk={() => handleSubmitBtn()}
            onCancel={() => resetAndCloseModal()}
            maskClosable={false}
            okText={"SAVE"}>
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div>
                    <span>Id</span>
                    <Input
                        value={id}
                        disabled />
                </div>
                <div>
                    <span>FullName</span>
                    <Input
                        value={fullName}
                        //onChange luc nao cung duoc cung cap mot bien event
                        onChange={(event) => { setFullName(event.target.value) }} />
                </div>
                <div>
                    <span>Phone Number</span>
                    <Input
                        value={phone}
                        onChange={(event) => { setPhone(event.target.value) }} />
                </div>
            </div>
        </Modal>
    )
}
export default UpdateUserModal;