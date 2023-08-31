import { useEffect, useState } from "react";
import { deleteCustomer, getAllCustomer } from "../service/CustomerService";
import { Link } from "react-router-dom";
import Modal from "../../modal/Modal";

function Customer() {

    const [customers, setCustomers] = useState([]);
    const [modalData, setModalData] = useState({
        show: false,
        data: null
    });

    const loadCustomer = async () => {
        const data = await getAllCustomer();
        setCustomers(data);
    }
    const handleCloseModal = () => {
        setModalData({ show: false, data: null });
    }
    const handleDeleteCustomer = async (id) => {
        await deleteCustomer(id);
        await loadCustomer();
        handleCloseModal();
    }

    useEffect(() => {
        loadCustomer();
    }, []);

    return (
        <div style={{ minHeight: '28rem', marginTop: '5rem' }}>
            <h1 style={{ textAlign: 'center' }}>Danh sách khách hàng</h1>
            <Link to="/customer-create" style={{ float: 'right', marginRight: '2rem' }}><button className="btn btn-primary">Thêm mới</button></Link>
            <table className="table table-striped table-hover mt-2">
                <thead>
                    <tr>
                        <th>Họ và tên</th>
                        <th>Ngày sinh</th>
                        <th>Giới tính</th>
                        <th>Số CMND</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th>Loại khách</th>
                        <th>Địa chỉ</th>
                        <th>Sửa</th>
                        <th>Xoá</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers.map((customer) => {
                            return (
                                <tr key={customer.id}>
                                    <td>{customer.fullName}</td>
                                    <td>{customer.dateOfBirth}</td>
                                    <td>{customer.gender}</td>
                                    <td>{customer.idCard}</td>
                                    <td>{customer.phoneNumber}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.customerType}</td>
                                    <td>{customer.address}</td>
                                    <td><Link to={`/edit-customer/${customer.id}`} className="btn btn-warning">Sửa</Link></td>
                                    <td><button onClick={() => setModalData({
                                        show: true,
                                        data: customer
                                    })} className="btn btn-danger">Xoá</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {
                modalData.show && (
                    <Modal title={'Delete product confirmation'}
                        msg={`Bạn có chắc muốn xoá: ${modalData.data.fullName}?`}
                        onClose={handleCloseModal}
                        onConfirm={() => handleDeleteCustomer(modalData.data.id)}>
                    </Modal>
                )
            }
        </div>
    )
}
export default Customer;