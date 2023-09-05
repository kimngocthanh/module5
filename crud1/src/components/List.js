import { useEffect, useState } from "react"
import { deleteProduct, getAll } from "../service/Service"
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function List() {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(0)
    const [searchName, setSearchName] = useState("")
    const [totalPage, setTotalPage] = useState(0)
    const getAllProduct = async () => {
        const res = await getAll(page, searchName);
        setTotalPage(res.data.totalPages)
        setProducts(res.data.content);
    }

    const findByName = () => {
        const res = document.getElementById('searchName').value;
        setSearchName(res)
    }

    const removeProduct = async (id) => {
        await deleteProduct(id);
        await getAllProduct();
    } 

    const nextPage = () => {
        if (page < totalPage) {
          setPage((prev) => prev + 1)
        }
      }
      const previosPage = () => {
        if (page > -1) {
          setPage((prev) => prev - 1)
        }
      }

    useEffect(() => {
        getAllProduct();
    }, [page, searchName])

    if(products === undefined) {
        return null;
    }

    return (
        <>
        <Link to='/create'>Thêm mới</Link>
            <div>
                <input type="text" id='searchName' />
                <button onClick={() => findByName()}>Tìm kiếm</button>
            </div>
            <h1 style={{ textAlign: 'center' }}>Danh sách sản phẩm</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Mã sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Ngày nhập</th>
                        <th>Số lượng</th>
                        <th>Loại sản phẩm</th>
                        <th>Sửa</th>
                        <th>Xoá</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((p) => (
                            <tr key={p.id}>
                                <td>{p.code}</td>
                                <td>{p.name}</td>
                                <td>{p.date}</td>
                                <td>{p.number}</td>
                                <td>{p.typeProducts.name}</td>
                                <td><button className="btn btn-warning"><Link to={`/edit/${p.id}`}>Sửa</Link></button></td>
                                <td><button onClick={()=> removeProduct(p.id)}>xoá</button></td>
                            </tr>
                        ))
                    }
                    <div>
                        <button className="page-link" onClick={() => (previosPage())} style={{ color: "black" }}>
                            Previous
                        </button>

                        <button className="page-link" onClick={() => nextPage()} href="#" style={{ color: "black" }}>
                            Next
                        </button>
                    </div>
                </tbody>
            </table>
            {
                <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            }
        </>
    )
}

export default List;