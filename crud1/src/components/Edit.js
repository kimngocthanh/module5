import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { editProducts, getAllTypeProducts, getByIdProduct } from "../service/Service";
import { useNavigate, useParams } from "react-router";
import * as Yup from 'yup';
import { toast } from "react-toastify";

function Edit() {
    const [types, setTypes] = useState([]);
    const [product, setProduct] = useState();
    const param = useParams();
    const navigate = useNavigate();
    const getAllTypeProduct = async () => {
        const res = await getAllTypeProducts();
        setTypes(res)
    }

    const getProductById = async (id) => {
        const res = await getByIdProduct(id);
        setProduct(res)
        console.log(res);
    }

    const editProduct = async (value) => {
        await editProducts(value);
        toast("Sửa thành công")
        navigate('/')
    }

    useEffect(() => {
        getAllTypeProduct();
        getProductById(param.id);
    }, [param])

    if (product === undefined) {
        return null;
    }

    return (
        <>
            <Formik
                initialValues={{
                    id: product.id,
                    code: product.code,
                    name: product.name,
                    date: product.date,
                    number: product.number,
                    typeProduct: product?.typeProduct.id
                }}

                validationSchema={Yup.object({
                    name: Yup.string()
                        .required('Không được để trống')
                        .max(10, "Không được nhập quá 100 ký tự"),
                    number: Yup.number().min(1, "Không được nhập số âm"),
                    date: Yup.string().matches('^[0-3]{1}[0-9]{1}/[0-1]{1}[0-9]{1}/[0-9]{4}$', 'Không đúng định dạng')
                })}

                onSubmit={async (value) => {
                    editProduct(value);
                }}
            >
                <Form>
                    <h1 style={{ textAlign: 'center' }}>Sửa thông tin sản phẩm</h1>
                    <label>Tên sản phẩm: </label>
                    <Field type='text' name='name'></Field>
                    <ErrorMessage name="name" component='span' style={{ color: 'red' }}></ErrorMessage>
                    <br />
                    <label>Ngày nhập sản phẩm</label>
                    <Field type='text' name='date'></Field>
                    <ErrorMessage name="date" component='span' style={{ color: 'red' }}></ErrorMessage>
                    <br />
                    <label>Số lượng</label>
                    <Field type='number' name='number'></Field>
                    <ErrorMessage name="number" component='span' style={{ color: 'red' }}></ErrorMessage>
                    <br />
                    <label>Loại sản phẩm</label>
                    <Field as='select' name='typeProduct'>
                        {
                            types.map((t) => (
                                <option value={t.id}>{t.name}</option>
                            ))
                        }
                    </Field>
                    <br />
                    <button type="submit" className="btn btn-primary">Sửa</button>
                </Form>
            </Formik>
        </>
    )
}

export default Edit;