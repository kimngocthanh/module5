import { Form, Formik, Field } from "formik";
import * as BookService from "../service/BookService";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function EditBook() {
    const [book, setBook] = useState();
    const navigate = useNavigate();
    const { id } = useParams();

    const getById = async () => {
        const bookNow = await BookService.getById(id);
        setBook((prev) => ({ ...prev, ...bookNow }))
    }
    const editBookForm = async (values) => {
        await BookService.editBook(values, id)
    }

    useEffect(() => {
        if (book === undefined) {
            getById();

        }

    }, [book])

    return (
        <>
            {
                book !== undefined ? <Formik
                    initialValues={{
                        id: book.id,
                        title: book.title,
                        quantity: book.quantity
                    }}

                    onSubmit={async (values) => {
                        await editBookForm(values);
                        navigate("/")
                    }}
                >
                    <Form>
                        <div>
                            <h1>Edit book</h1>
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
                </Formik> : ""
            }

        </>
    )
}

export default EditBook;