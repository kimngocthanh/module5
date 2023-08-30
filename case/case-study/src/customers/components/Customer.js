import { useEffect, useState } from "react";
import { deleteCustomer, getAllCustomer } from "../service/CustomerService";
import { Link } from "react-router-dom";

function Customer() {

    const [customers,setCustomers] = useState([]);

    const loadCustomer = async () => {
        const data = await getAllCustomer();
        setCustomers(data);
    }

    const removeCustomer = async (id) => {
        await deleteCustomer(id);
        await loadCustomer();
    }

    useEffect(() => {
        loadCustomer();
    },[]);

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
                                    <td><Link to= {`/edit-customer/${customer.id}`} className="btn btn-warning">Sửa</Link></td>
                                    <td><button onClick={() => removeCustomer(customer.id)} className="btn btn-danger">Xoá</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {/* modal-delete
            <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header" style={{ backgroundColor: '#FFD333' }}>
                                <h5 className="modal-title fs-5" id="staticBackdropLabel">Bạn chắc chắn muốn xóa</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <input id="customerId" name="id" type="hidden" />
                                <span>Khách hàng tên </span>
                                <span id="customerName" name="deleteName" />
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-danger">Xóa</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
export default Customer;