import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router";
import * as Yup from 'yup'
import { addContact } from "../service/ContactsService";
function CreateContact() {

    const navigate = useNavigate();

    const addContacts = async (values) => {
        await addContact(values);
        navigate('/contact')
    }
    return (
        <Formik
            initialValues={{
                someContracts: "",
                startDate: "",
                endDate: "",
                deposit: "",
                totalPrice: ""
            }}
            validationSchema={Yup.object({
                someContracts: Yup.string()
                    .required("Tên ko được để trống")
                    .matches(/^(?:[A-Z][a-z]*)+$/, "Không đúng định dạng"),
                startDate: Yup.string()
                    .required("Không được để trống"),
                endDate: Yup.string()
                    .required("Không được để trống"),
                deposit: Yup.number()
                    .required("Không được để trống"),
                totalPrice: Yup.number()
                    .required("Không được để trống")

            })}
            onSubmit={async (values) => {
                await addContacts(values);
            }}
        >
            {
                <div class="container px-5 my-5">
                    <h1 style={{ textAlign: 'center' }}>Thêm mới hợp đồng</h1>
                    <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Số hợp đống</label>
                            <Field className="form-control" id="name" type="text" placeholder="Số hợp đồng" name="someContracts" />
                            <ErrorMessage name="someContracts" component='span' style={{ color: 'red' }}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="date">Ngày bắt đầu</label>
                            <Field className="form-control" id="date" type="date" placeholder="Ngày bắt đầu" name="startDate" />
                            <ErrorMessage name="startDate" component='span' style={{ color: 'red' }}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="date">Ngày kết thúc</label>
                            <Field className="form-control" id="date" type="date" placeholder="Ngày kết thúc" name="endDate" />
                            <ErrorMessage name="endDate" component='span' style={{ color: 'red' }}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Tiền cọc</label>
                            <Field className="form-control" id="name" type="number" placeholder="Tiền cọc" name="deposit" />
                            <ErrorMessage name="deposit" component='span' style={{ color: 'red' }}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Tổng tiền thanh toán</label>
                            <Field className="form-control" id="name" type="number" placeholder="Tổng tiền thanh toán" name="totalPrice" />
                            <ErrorMessage name="totalPrice" component='span' style={{ color: 'red' }}/>
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

export default CreateContact;