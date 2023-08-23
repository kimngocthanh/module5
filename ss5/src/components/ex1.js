import { ErrorMessage, Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import './ex1.css'
function ContactForm() {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Name is not empty"),
                    email: Yup.string()
                        .required("Email is not empty")
                        .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Email is not formater"),
                    phone: Yup.string()
                        .required("Phone is not empty"),
                })}
                onSubmit={(values) => {
                    alert("add oke");
                }}
            >
                {
                    <Form>
                        <h1>Contact form</h1>
                        <div>
                            <label htmlFor="nameContact">Name</label>
                            <Field type="text" id="nameContact" name='name' />
                            <ErrorMessage name="name" component='span' className="form-errors" />
                        </div>
                        <div>
                            <label htmlFor="emailContact">Email</label>
                            <Field type="text" id="emailContact" name='email' />
                            <ErrorMessage name="email" component='span' className="form-errors" />
                        </div>
                        <div>
                            <label htmlFor="phoneContact">Phone</label>
                            <Field type="number" id="phoneContact" name='phone' />
                            <ErrorMessage name="phone" component='span' className="form-errors" />
                        </div>
                        <div>
                            <label htmlFor="messageContact">Message</label>
                            <Field as="textarea" id="messageContact" name='message' />
                        </div>
                        <button type="submit">submit</button>
                    </Form>
                }
            </Formik>
        </>
    )
}
export default ContactForm;