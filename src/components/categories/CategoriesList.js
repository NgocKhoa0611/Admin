import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Categories.css';

function CategoriesList(){
    const [ listLoai, ganListLoai ] = useState([]);
    const navigate = useNavigate();
    const xoaSP = (id) => {
        if(window.confirm('Xóa thật không bồ') === false)
        return false;
        fetch(`http://localhost:3000/admin/categories/${id}`, {method: "delete"}).then(res => res.json()).then(data => navigate(0));
    };
    useEffect(() => {
        fetch("http://localhost:3000/admin/categories").then(res => res.json()).then(data => ganListLoai(data));
    }, []);
    return(
        <div className="categories-table">
            <h3 className="title-page">Danh mục</h3>
            <div className="d-flex justify-content-end">
                <a href="/#" className="btn btn-primary mb-2">Thêm danh mục</a>
            </div>
            <table id="example" className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên danh mục</th>
                        <th>Office</th>
                    </tr>
                </thead>
                {listLoai.map((category, index) => (
                <tbody>
                    <tr>
                        <td>Tiger Nixon</td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>2011-04-25</td>
                        <td>
                            <Link href="/#" className="btn btn-warning"><i class="fa-solid fa-pen-to-square"></i> Sửa</Link>
                            <button href="/#" className="btn btn-danger" onClick={() => xoaSP(category.category_id)}><i className="fa-solid fa-trash"></i> Xóa</button>
                        </td>
                    </tr>
                </tbody>
                ))} 
            </table>
        </div>
    )
}

export default CategoriesList;