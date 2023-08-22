function EditService() {
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Sửa thông tin dịch vụ</h1>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                    Tên dịch vụ
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Sửa tên dịch vụ"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                    Diện tích sử dụng
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Sửa diện tích"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                    Chi phí thuê
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Sửa chi phí thuê"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                    Số lượng người tối đa
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Sửa số lượng người"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                    Kiểu thuê
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Sửa kiểu thuê"
                />
            </div>
        </div>
    )
}
export default EditService;