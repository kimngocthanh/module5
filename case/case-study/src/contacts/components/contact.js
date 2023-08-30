import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllContact } from "../service/ContactsService";




function Contact() {

    const [contacts, setContacts] = useState([]);

    const loadContacts = async () => {
        const data = await getAllContact();
        setContacts(data);
    }

    useEffect(() => {
        loadContacts();
    }, []);

    return (
        <div style={{ minHeight: '28rem', marginTop: '5rem' }}>
            <h1 style={{ textAlign: 'center' }}>Danh sách hợp đồng</h1>
            <Link to="/contact-create" style={{ float: 'right', marginRight: '2rem' }}><button className="btn btn-primary">Thêm mới</button></Link>
            <table className="table table-striped table-hover mt-2">
                <thead>
                    <tr>
                        <th>Số hợp đồng</th>
                        <th>Ngày bắt đầu</th>
                        <th>Ngày kết thúc</th>
                        <th>Số tiền đặt cọc</th>
                        <th>Tổng tiền</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map((c) => {
                            return (
                                <tr key={c.id}>
                                    <td>{c.someContracts}</td>
                                    <td>{c.startDate}</td>
                                    <td>{c.endDate}</td>
                                    <td>{c.deposit}</td>
                                    <td>{c.totalPrice}</td>
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
export default Contact;
