import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { addCustomer } from "../service/CustomerService";
import { useNavigate } from "react-router";
function AddCustomer() {
    const navigate = useNavigate();

    const addCustomers = async (values) => {
        await addCustomer(values);
        console.log(values);
        navigate('/customer')
    }
    return (
        <Formik
            initialValues={{
                fullName: "",
                dateOfBirth: "",
                gender: "",
                idCard: "",
                phoneNumber: "",
                email: "",
                customerType: "",
                address: ""
            }}
            validationSchema={Yup.object({
                fullName: Yup.string()
                    .required("Tên ko được để trống")
                    .matches(/^(?:[A-Z][a-z]*)+$/, "Không đúng định dạng"),
                dateOfBirth: Yup.string()
                    .required("Không được để trống"),
                gender: Yup.string().required("Không được để trống"),
                idCard: Yup.string()
                    .required("Không được để trống")
                    .matches(/^\d{9}|\d{12}$/, "Không đúng định dạng"),
                phoneNumber: Yup.string()
                    .required("Không được để trống"),
                    // .matches(/^(?:\+?84)?(90|91)\d{7}$/, "Không đúng định dạng"),
                email: Yup.string()
                    .required("Không được để trống"),
                    // .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Không đúng định dạng"),
                address: Yup.string()
                    .required("Không được để trống"),
                customerType: Yup.string().required("Không được để trống")
            })}
        onSubmit={async (values) => {
            await addCustomers(values);
        }}
        >
            {
                <div class="container px-5 my-5">
                    <h1 style={{ textAlign: 'center' }}>Thêm mới khách hàng</h1>
                    <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Họ tên</label>
                            <Field className="form-control" id="name" type="text" placeholder="Họ tên" name="fullName" />
                            <ErrorMessage name="fullName" component='span' style={{ color: 'red' }}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="date">Ngày sinh</label>
                            <Field className="form-control" id="date" type="date" placeholder="Ngày sinh" name="dateOfBirth" />
                            <ErrorMessage name="dateOfBirth" component='span' style={{ color: 'red' }}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label d-block">Giới tính</label>
                            <Field as="select" name="gender">
                                <option className="option" value>--Gender--</option>
                                <option className="option" value="male">Male</option>
                                <option className="option" value="famale">Famale</option>
                                <option className="option" value="other">Other</option>
                            </Field>
                            <ErrorMessage name="gender" component='span' style={{ color: 'red' }}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="code">Số chứng minh nhân dân</label>
                            <Field className="form-control" id="code" type="text" placeholder="Số chứng minh nhân dân" name="idCard" />
                            <ErrorMessage name="idCard" component='span' style={{ color: 'red' }}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="telephone">Số điện thoại</label>
                            <Field className="form-control" id="telephone" type="text" placeholder="Số điện thoại" name="phoneNumber" />
                            <ErrorMessage name="phoneNumber" component='span' style={{ color: 'red' }}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="email">Email</label>
                            <Field className="form-control" id="email" type="text" placeholder="Email" name="email" />
                            <ErrorMessage name="email" component='span' style={{ color: 'red' }}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="typeCustomer">Loại khách</label>
                            <Field as="select" className="form-select" id="typeCustomer" aria-label="Loại khách" name="customerType">
                                <option value="Diamond">Diamond</option>
                                <option value="Platinum">Platinum</option>
                                <option value="Gold">Gold</option>
                                <option value="Silver">Silver</option>
                                <option value="Member">Member</option>
                            </Field>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="address">Địa chỉ</label>
                            <Field className="form-control" id="address" type="text" placeholder="Địa chỉ" name="address" />
                            <ErrorMessage name="address" component='span' style={{ color: 'red' }}/>
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button>
                        </div>
                    </Form>
                </div>
            }
        </Formik >
    )
}
export default AddCustomer;