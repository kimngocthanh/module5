import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { editCustomer, getById } from "../service/CustomerService";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';

function EditCustomer() {
    const navigate = useNavigate();
    const params = useParams();
    const [customer, setCustomer] = useState();

    const handleSubmit = async (data) => {
        await editCustomer(data.id,data);
        navigate('/customer');
    }

    const loadCustomer = async (id) => {
        const data = await getById(id);
        setCustomer(data);
    }

    useEffect(() => {
        if(params.id) {
            loadCustomer(params.id);
        }
    } , [params]);

    if (!customer){
        return null;
    }
    return (
        <Formik
            initialValues={{
                id:customer.id,
                fullName: customer.fullName,
                dateOfBirth: customer.dateOfBirth,
                gender: customer.gender,
                idCard: customer.idCard,
                phoneNumber: customer.phoneNumber,
                email: customer.email,
                customerType: customer.customerType,
                address: customer.address
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
            await handleSubmit(values);
        }}
        >
            {
                <div class="container px-5 my-5">
                    <h1 style={{ textAlign: 'center' }}>Sửa khách hàng</h1>
                    <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Họ tên</label>
                            <Field className="form-control" id="name" type="text" placeholder="Họ tên" name="fullName" />
                            <ErrorMessage name="fullName" component='span' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="date">Ngày sinh</label>
                            <Field className="form-control" id="date" type="date" placeholder="Ngày sinh" name="dateOfBirth" />
                            <ErrorMessage name="dateOfBirth" component='span' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label d-block">Giới tính</label>
                            <Field as="select" name="gender">
                                <option className="option" value>--Gender--</option>
                                <option className="option" value="male">Nam</option>
                                <option className="option" value="famale">Nữ</option>
                                <option className="option" value="other">Khác</option>
                            </Field>
                            <ErrorMessage name="gender" component='span' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="code">Số chứng minh nhân dân</label>
                            <Field className="form-control" id="code" type="text" placeholder="Số chứng minh nhân dân" name="idCard" />
                            <ErrorMessage name="idCard" component='span' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="telephone">Số điện thoại</label>
                            <Field className="form-control" id="telephone" type="text" placeholder="Số điện thoại" name="phoneNumber" />
                            <ErrorMessage name="phoneNumber" component='span' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="email">Email</label>
                            <Field className="form-control" id="email" type="text" placeholder="Email" name="email" />
                            <ErrorMessage name="email" component='span' />
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
                            <ErrorMessage name="address" component='span' />
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
export default EditCustomer;