function AddCustomer() {
    return (
        <div>
            div style="text-align: center;"&gt;
            <h1>Thêm mới khách hàng</h1>
            <div className="container px-5 my-5">
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="họTen">Họ tên</label>
                        <input className="form-control" id="họTen" type="text" placeholder="Họ tên" data-sb-validations="required" />
                        <div className="invalid-feedback" data-sb-feedback="họTen:required">Họ tên is required.</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="ngaySinh">Ngày sinh</label>
                        <input className="form-control" id="ngaySinh" type="text" placeholder="Ngày sinh" data-sb-validations="required" />
                        <div className="invalid-feedback" data-sb-feedback="ngaySinh:required">Ngày sinh is required.</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label d-block">Giới tính</label>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" id="nam" type="radio" name="giớiTinh" data-sb-validations />
                            <label className="form-check-label" htmlFor="nam">Nam</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" id="nữ" type="radio" name="giớiTinh" data-sb-validations />
                            <label className="form-check-label" htmlFor="nữ">Nữ</label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="sốChứngMinhNhanDan">Số chứng minh nhân dân</label>
                        <input className="form-control" id="sốChứngMinhNhanDan" type="text" placeholder="Số chứng minh nhân dân" data-sb-validations="required" />
                        <div className="invalid-feedback" data-sb-feedback="sốChứngMinhNhanDan:required">Số chứng minh nhân dân is required.</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="sốDiệnThoại">Số điện thoại</label>
                        <input className="form-control" id="sốDiệnThoại" type="text" placeholder="Số điện thoại" data-sb-validations="required" />
                        <div className="invalid-feedback" data-sb-feedback="sốDiệnThoại:required">Số điện thoại is required.</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input className="form-control" id="email" type="text" placeholder="Email" data-sb-validations="required" />
                        <div className="invalid-feedback" data-sb-feedback="email:required">Email is required.</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="loạiKhach">Loại khách</label>
                        <select className="form-select" id="loạiKhach" aria-label="Loại khách">
                            <option value="Diamond">Diamond</option>
                            <option value="Platinum">Platinum</option>
                            <option value="Gold">Gold</option>
                            <option value="Silver">Silver</option>
                            <option value="Member">Member</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="dịaChỉ">Địa chỉ</label>
                        <input className="form-control" id="dịaChỉ" type="text" placeholder="Địa chỉ" data-sb-validations="required" />
                        <div className="invalid-feedback" data-sb-feedback="dịaChỉ:required">Địa chỉ is required.</div>
                    </div>
                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center mb-3">
                            <div className="fw-bolder">Form submission successful!</div>
                            <p>To activate this form, sign up at</p>
                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                        </div>
                    </div>
                    <div className="d-none" id="submitErrorMessage">
                        <div className="text-center text-danger mb-3">Error sending message!</div>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddCustomer;