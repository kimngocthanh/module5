import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { addProduct, getAllTypeProducts } from "../service/Service";
import { useNavigate } from "react-router";
import * as Yup from 'yup';
import { toast } from "react-toastify";


function Create() {
    const [types, setTypes] = useState();
    const navigate = useNavigate();
    const getAllTypeProduct = async () => {
        const res = await getAllTypeProducts();
        console.log(res);
        setTypes(res)
    }

    const addProducts =async (value) => {
        const newValue = {...value, typeProducts: JSON.parse(value.typeProducts)}
        await addProduct(newValue)
        console.log(newValue);
        toast("Thêm mới thành công")
        navigate('/')
    }

    useEffect(()=>{
        getAllTypeProduct();
    },[])
    if(!types){
        return null;
    }

    return (
        <>
            <Formik
                initialValues={{
                    code: "",
                    name: "",
                    date: "",
                    number: "",
                    typeProducts: `${JSON.stringify({
                        "id":1,
                        "name":"Áo"
                    })}`
                }}

                validationSchema={Yup.object({
                    name: Yup.string()
                        .required('Không được để trống')
                        .max(10, "Không được nhập quá 100 ký tự"),
                    number: Yup.number().min(1, "Không được nhập số âm"),
                    date: Yup.string().matches('^[0-3]{1}[0-9]{1}/[0-1]{1}[0-9]{1}/[0-9]{4}$', 'Không đúng định dạng')
                })}

                onSubmit={async (value) => {
                    console.log(value);
                    addProducts(value);
                }}
            >
                <Form>
                    <h1 style={{ textAlign: 'center' }}>Thêm mới sản phẩm</h1>
                    <label>Mã sản phẩm: </label>
                    <Field type='text' name='code'></Field>
                    <ErrorMessage name="code" component='span' style={{ color: 'red' }}></ErrorMessage>
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
                    <Field as='select' name='typeProducts'>
                        {
                            types.map((t) => (
                                <option value={`${JSON.stringify(t)}`}>{t.name}</option>
                            ))
                        }
                    </Field>
                    <br />
                    <button type="submit" className="btn btn-primary">Thêm</button>
                </Form>
            </Formik>
        </>
    )
}

export default Create;