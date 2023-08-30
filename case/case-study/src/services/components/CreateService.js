import { Formik, Form, Field, ErrorMessage } from 'formik';
import { addService } from '../service/roomService';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
function CreateService() {

    const navigate = useNavigate();

    const addServices = async (service) => {
        await addService(service);
        navigate('/');
    }

    return (
        <Formik
            initialValues={{
                serviceName: "",
                area: "",
                rentalCost: "",
                maxCapacity: "",
                rentalType: "",
                roomStandard: "",
                amenities: "",
                poolArea: "",
                floors: "",
                freeServices: ""
            }}

            validationSchema={Yup.object({
                serviceName: Yup.string()
                    .required("Không để trống tên"),
                area: Yup.number()
                    .required("Diện tích không được để trống")
                    .min(0, "Diện tích không được để âm"),
                rentalCost: Yup.number()
                    .required("Giá tiền không để trống")
                    .min(0, "Giá không để âm"),
                freeServices: Yup.string()
                    .required("Không để trống tên"),
            })}

            onSubmit={(values) => {
                addServices(values);
                console.log(values);
            }}
        >
            <div className="container px-5 my-5">
                <h1 style={{ textAlign: "center" }}>Thêm mới dịch vụ</h1>
                <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="serviceName">Tên dịch vụ</label>
                        <Field className="form-control" id="serviceName" type="text" placeholder="Tên dịch vụ" name="serviceName" />
                        <ErrorMessage name='serviceName' component='span' style={{ color: 'red' }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="area">Diện tích sử dụng</label>
                        <Field className="form-control" id="area" type="text" placeholder="Diện tích sử dụng" name="area" />
                        <ErrorMessage name='area' component='span' style={{ color: 'red' }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="rentalCost">Chi phí thuê</label>
                        <Field className="form-control" id="rentalCost" type="text" placeholder="Chi phí thuê" name="rentalCost" />
                        <ErrorMessage name='rentalCost' component='span' style={{ color: 'red' }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="numberMax">Số lượng người tối đa</label>
                        <Field className="form-control" id="numberMax" type="text" placeholder="Số lượng người tối đa" name="maxCapacity" />
                        <ErrorMessage name='nameService' component='span' style={{ color: 'red' }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="rentalType">chọn kiểu thuê</label>
                        <Field as="select" className="form-select" id="rentalType" aria-label="chọn kiểu thuê" name="rentalType">
                            <option value="năm">năm</option>
                            <option value="tháng">tháng</option>
                            <option value="ngày">ngày</option>
                            <option value="giờ">giờ</option>
                        </Field>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="freeServices">Dịch vụ đi kèm</label>
                        <Field className="form-control" id="freeServices" type="text" placeholder="Tên dịch vụ" name="freeServices" />
                        <ErrorMessage name='freeServices' component='span' style={{ color: 'red' }} />
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary btn-lg " type="submit">Submit</button>
                    </div>
                </Form>
            </div>
        </Formik>
    )
}
export default CreateService;