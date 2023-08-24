import { Formik, Form, Field } from "formik";
import * as BookService from "../service/BookService";
import { useNavigate } from "react-router-dom";
function AddBook() {
    const navigate = useNavigate();
    const addBook = async (values) => {
        await BookService.addBook(values);
    }

    return (
        <>
            <Formik
                initialValues={{
                    title: "",
                    quantity: ""
                }}

                onSubmit={async (values) => {
                    await addBook(values);
                    navigate("/");
                }}
            >
                {
                    <Form>
                        <div>
                            <h1>Create book</h1>
                            <div>
                                <label htmlFor="title">Title</label>
                                <Field type="text" id="title" name="title" />
                            </div>
                            <div>
                                <label htmlFor="quantity">Quantity</label>
                                <Field type="number" id="quantity" name="quantity" />
                            </div>
                            <button type="submit" >Add</button>
                        </div>
                    </Form>
                }
            </Formik>
        </>
    )
}
export default AddBook;