import { useState, useEffect } from "react";
import * as roomService from "../service/roomService";
import { Link } from "react-router-dom";
import Modal from "../../modal/Modal";

export function ListServices() {
    const [services, setSerVices] = useState([]);
    const [modalData, setModalData] = useState({
        show: false,
        data: null
    });
    useEffect(() => {
        getRooms();
    }, [])
    const getRooms = async () => {
        const res = await roomService.getAll();
        setSerVices(res);
    }
    const handleCloseModal = () => {
        setModalData({ show: false, data: null });
    }


    const removeService = async (id) => {
        await roomService.deleteService(id);
        await getRooms();
        handleCloseModal();
    }
    return (
        <>
            <div className="container">
                <h1 style={{ textAlign: "center", marginTop: "1rem" }}>List Rooms</h1>
                <Link to="/create-service"><button className="btn btn-primary">Thêm mới dịch vụ</button></Link>
                <div className="row">
                    <div className="d-flex justify-content-between flex-wrap">
                        {services.map((s) => (
                            <div key={s.id} className="card w-25 m-3 p-2" >
                                <img
                                    src="https://decofuni.vn/Upload/images/tin-tuc/noi-that-phong-ngu-resort.jpg"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{s.serviceName}</h5>
                                    <p className="card-text">
                                       Dịch vụ đi kèm: {s.freeServices}
                                    </p>
                                    <Link to= {`/edit-service/${s.id}`} className="btn btn-warning">Sửa</Link>
                                    <button type="button" onClick={() => setModalData({
                                            show: true,
                                            data: s
                                        })} className="btn btn-danger" style={{marginLeft:'1rem'}}>Xoá</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {
                modalData.show && (
                    <Modal title={'Delete product confirmation'}
                        msg={`Do you want to delete the product: ${modalData.data.name}?`}
                        onClose={handleCloseModal}
                        onConfirm={() => removeService(modalData.data.id)}>
                    </Modal>
                )
            }
        </>
    )
}