function CreateService() {
    return (
        <div className="container px-5 my-5">
            <h1 style={{textAlign:"center"}}>Thêm mới dịch vụ</h1>
            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                <div className="mb-3">
                    <label className="form-label" htmlFor="tenDịchVụ">Tên dịch vụ</label>
                    <input className="form-control" id="tenDịchVụ" type="text" placeholder="Tên dịch vụ" data-sb-validations="required" />
                    <div className="invalid-feedback" data-sb-feedback="tenDịchVụ:required">Tên dịch vụ is required.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="diệnTichSửDụng">Diện tích sử dụng</label>
                    <input className="form-control" id="diệnTichSửDụng" type="text" placeholder="Diện tích sử dụng" data-sb-validations="required" />
                    <div className="invalid-feedback" data-sb-feedback="diệnTichSửDụng:required">Diện tích sử dụng is required.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="chiPhiThue">Chi phí thuê</label>
                    <input className="form-control" id="chiPhiThue" type="text" placeholder="Chi phí thuê" data-sb-validations="required" />
                    <div className="invalid-feedback" data-sb-feedback="chiPhiThue:required">Chi phí thuê is required.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="sốLượngNgườiTốiDa">Số lượng người tối đa</label>
                    <input className="form-control" id="sốLượngNgườiTốiDa" type="text" placeholder="Số lượng người tối đa" data-sb-validations="required" />
                    <div className="invalid-feedback" data-sb-feedback="sốLượngNgườiTốiDa:required">Số lượng người tối đa is required.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="chọnKiểuThue">chọn kiểu thuê</label>
                    <select className="form-select" id="chọnKiểuThue" aria-label="chọn kiểu thuê">
                        <option value="năm">năm</option>
                        <option value="tháng">tháng</option>
                        <option value="ngày">ngày</option>
                        <option value="giờ">giờ</option>
                    </select>
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
    )
}
export default CreateService;