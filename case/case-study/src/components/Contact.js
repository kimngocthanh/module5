function Contact() {
    return (
        <div style={{ minHeight: '28rem', marginTop: '5rem' }}>
            <h1 style={{ textAlign: 'center' }}>Danh sách hợp đồng</h1>
            <table className="table table-striped table-hover mt-2">
                <thead>
                    <tr><th>STT</th>
                        <th>Số hợp đồng</th>
                        <th>Ngày bắt đầu</th>
                        <th>Ngày kết thúc</th>
                        <th>Số tiền cọc trước</th>
                        <th>Tổng tiền</th>
                    </tr></thead>
                <tbody><tr>
                    <td>1</td>
                    <td>Hd-001</td>
                    <td>13-09-2023</td>
                    <td>13-10-2023</td>
                    <td>1000000</td>
                    <td>10000000</td>
                </tr>
                    <tr>
                        <td>2</td>
                        <td>Hd-002</td>
                        <td>13-09-2023</td>
                        <td>13-10-2023</td>
                        <td>1000000</td>
                        <td>10000000</td>
                    </tr>
                </tbody></table>
        </div>
    )
}
export default Contact;