import { Formik, Form, Field, ErrorMessage } from 'formik';
import { editService } from '../service/roomService';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
function EditService() {

    const navigate = useNavigate();

    const editServices = async (service) => {
        await editService(service);
        navigate('/');
    }

    return (
        <Formik
            initialValues={{
                nameService: "",
                area: "",
                price: "",
                numberMax: "",
                type: ""
            }}

            validationSchema={Yup.object({
                nameService: Yup.string()
                    .required("Không để trống tên"),
                area: Yup.number()
                    .required("Diện tích không được để trống")
                    .min(0, "Diện tích không được để âm"),
                price: Yup.number()
                    .required("Giá tiền không để trống")
                    .min(0, "Giá không để âm")
            })}

            onSubmit={(values) => {
                editServices(values);
                console.log(values);
            }}
        >
            <div className="container px-5 my-5">
                <h1 style={{ textAlign: "center" }}>Thêm mới dịch vụ</h1>
                <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="nameService">Tên dịch vụ</label>
                        <Field className="form-control" id="nameService" type="text" placeholder="Tên dịch vụ" data-sb-validations="required" name="nameService" />
                        <ErrorMessage name='nameService' component='span' style={{ color: 'red' }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="area">Diện tích sử dụng</label>
                        <Field className="form-control" id="area" type="text" placeholder="Diện tích sử dụng" data-sb-validations="required" name="area" />
                        <ErrorMessage name='nameService' component='span' style={{ color: 'red' }} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="price">Chi phí thuê</label>
                        <Field className="form-control" id="price" type="text" placeholder="Chi phí thuê" data-sb-validations="required" name="price" />
                        <ErrorMessage name='nameService' component='span' style={{ color: 'red' }} />                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="numberMax">Số lượng người tối đa</label>
                        <Field className="form-control" id="numberMax" type="text" placeholder="Số lượng người tối đa" data-sb-validations="required" name="numberMax" />
                        <ErrorMessage name='nameService' component='span' style={{ color: 'red' }} />                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="type">chọn kiểu thuê</label>
                        <Field as="select" className="form-select" id="type" aria-label="chọn kiểu thuê" name="type">
                            <option value="năm">năm</option>
                            <option value="tháng">tháng</option>
                            <option value="ngày">ngày</option>
                            <option value="giờ">giờ</option>
                        </Field>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary btn-lg " type="submit">Submit</button>
                    </div>
                </Form>
            </div>
        </Formik>
    )
}
export default EditService;