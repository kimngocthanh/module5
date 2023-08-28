function CreateContact() {
  return (
    <div className="container px-5 my-5">
      <h1 style={{ textAlign: 'center' }}>Tạo hợp đồng</h1>
      <form id="contactForm" data-sb-form-api-token="API_TOKEN">
        <div className="mb-3">
          <label className="form-label" htmlFor="sốHợpDồng">Số hợp đồng</label>
          <input className="form-control" id="sốHợpDồng" type="text" placeholder="Số hợp đồng" data-sb-validations="required" />
          <div className="invalid-feedback" data-sb-feedback="sốHợpDồng:required">Số hợp đồng is required.</div>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="ngayBắtDầu">Ngày bắt đầu</label>
          <input className="form-control" id="ngayBắtDầu" type="date" placeholder="Ngày bắt đầu" data-sb-validations="required" />
          <div className="invalid-feedback" data-sb-feedback="ngayBắtDầu:required">Ngày bắt đầu is required.</div>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="ngayKếtThuc">Ngày kết thúc</label>
          <input className="form-control" id="ngayKếtThuc" type="date" placeholder="Ngày kết thúc" data-sb-validations="required" />
          <div className="invalid-feedback" data-sb-feedback="ngayKếtThuc:required">Ngày kết thúc is required.</div>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="sốTiềnCọcTrước">Số tiền cọc trước</label>
          <input className="form-control" id="sốTiềnCọcTrước" type="number" placeholder="Số tiền cọc trước" data-sb-validations="required" />
          <div className="invalid-feedback" data-sb-feedback="sốTiềnCọcTrước:required">Số tiền cọc trước is required.</div>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="tổngSốTiềnThanhToan">Tổng số tiền thanh toán</label>
          <input className="form-control" id="tổngSốTiềnThanhToan" type="number" placeholder="Tổng số tiền thanh toán" data-sb-validations="required" />
          <div className="invalid-feedback" data-sb-feedback="tổngSốTiềnThanhToan:required">Tổng số tiền thanh toán is required.</div>
        </div>
        <div className="d-none" id="submitErrorMessage">
          <div className="text-center text-danger mb-3">Error sending message!</div>
        </div>
        <div className="d-grid">
          <button className="btn btn-primary btn-lg" id="submitButton" type="submit">Tạo hợp đồng</button>
        </div>
      </form>
    </div>
  )
}
export default CreateContact;