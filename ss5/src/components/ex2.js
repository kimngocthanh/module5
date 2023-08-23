import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
function ToKhaiYte() {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    idcard: '',
                    date: '',
                    gender: '1',
                    country: '',
                    company: '',
                    part: '',
                    city: '',
                    district: '',
                    ward: '',
                    village: '',
                    phone: '',
                    email: '',
                    where: '',
                    sick: '',
                    contact: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Nam cannot is empty"),
                    idcard: Yup.string()
                        .required("IdCard cannot is empty"),
                    date: Yup.string()
                        .required("Date cannot is empty")
                        .min(1991, "Vui lòng nhập năm sinh lớn hơn 1990."),
                    country: Yup.string()
                        .required("Required"),
                    city: Yup.string()
                        .required("Required"),
                    ward: Yup.string()
                        .required("Required"),
                    village: Yup.string()
                        .required("Required"),
                    district: Yup.string()
                        .required("Required"),
                    phone: Yup.string()
                        .required("Required"),
                    email: Yup.string()
                        .required("Required")
                        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/, "Invalid email address")
                })
                }
                onSubmit={(values) => {
                    alert("oke")
                }
                }
            >
                {
                    <div className="health">
                        <h1>Tờ khai y tế</h1>
                        <Form>
                            <div>
                                <label>Họ tên</label>
                                <Field type="text" name="name" />
                                <ErrorMessage name="name" component='span' />
                            </div>
                            <div>
                                <label>Số hộ chiếu/CMND</label>
                                <Field type="number" name="idcard" />
                                <ErrorMessage name="name" component='span' />
                            </div>
                            <div>
                                <label>Năm Sinh</label>
                                <Field type="number" name="date" />
                                <ErrorMessage name="name" component='span' />
                            </div>
                            <div>
                                <label>Giới tính</label>
                                <Field name="gender" type="radio" defaultValue="1" />
                                Nam
                                <Field name="gender" type="radio" defaultValue="0" />
                                Nữ
                            </div>
                            <div>
                                <label>Quốc tịch</label>
                                <Field type="text" name="country" />
                                <ErrorMessage name="name" component='span' />
                            </div>
                            <div>
                                <label>Công ty làm việc</label>
                                <Field type="text" name="company" />
                            </div>
                            <div>
                                <label>Bộ phận làm việc</label>
                                <Field type="text" name="part" />
                            </div>
                            <div>
                                <label>Có thẻ bảo hiểm y tế</label>
                                <Field type="checkbox" name="insurance" defaultValue="insurance" />
                            </div>
                            <div>
                                <h2>Địa chỉ liên lạc tại Việt Nam</h2>
                                <label>Tỉnh thành</label>
                                <Field type="text" name="city" />
                                <ErrorMessage name="name" component='span' />
                            </div>
                            <div>
                                <label>Quận/huyện</label>
                                <Field type="text" name="district" />
                                <ErrorMessage name="name" component='span' />
                            </div>
                            <div>
                                <label>Phường/xã</label>
                                <Field type="text" name="ward" />
                                <ErrorMessage name="name" component='span' />
                            </div>
                            <div>
                                <label>Số nhà, phố, tổ dân phố, thôn, đội</label>
                                <Field type="text" name="village" />
                                <ErrorMessage name="name" component='span' />
                            </div>
                            <div>
                                <label>Số điện thoại</label>
                                <Field type="number" name="phone" />
                                <ErrorMessage name="name" component='span' />
                            </div>
                            <div>
                                <label>Email</label>
                                <Field type="email" name="email" />
                                <ErrorMessage name="name" component='span' />
                            </div>
                            <h3>
                                Trong vòng 14 ngày qua Anh/Chị có đến quốc gia/vùng lãnh thổ nào(Có thể đi
                                qua nhiều quốc gia)
                            </h3>
                            <Field as='textarea' name='where' id='where' />
                            <div>
                                <h3>
                                    Trong vòng 14 ngày qua Anh/Chị có thấy xuất hiện dấu hiệu nào sau đây
                                    không?
                                </h3>
                                <Field type="checkbox" name="sick" defaultValue="Sốt" />
                                Sốt
                                <Field type="checkbox" name="sick" defaultValue="Ho" />
                                Ho
                                <Field type="checkbox" name="sick" defaultValue="Khó thở" />
                                Khó thở
                                <Field type="checkbox" name="sick" defaultValue="Viêm phổi" />
                                Viêm phổi
                                <Field type="checkbox" name="sick" defaultValue="Đau họng" />
                                Đau họng
                                <Field type="checkbox" name="sick" defaultValue="Mệt mỏi" />
                                Mệt mỏi
                            </div>
                            <div>
                                <h3>Trong vòng 14 ngày qua Anh/Chị có tiếp xúc với?</h3>
                                <Field type="checkbox" name="contact" defaultValue={7} /> Người bệnh hoặc nghi
                                ngờ, mắc bệnh COVID-19
                                <Field type="checkbox" name="contact" defaultValue={8} /> Người từ nước có bệnh
                                COVID-19
                                <Field type="checkbox" name="contact" defaultValue={9} /> Người có biểu hiện (Sốt,
                                ho, khó thở, viêm phổi)
                            </div>
                            <button type="submit">Submit</button>
                        </Form>
                    </div>
                }
            </Formik>
        </>
    )
}
export default ToKhaiYte;