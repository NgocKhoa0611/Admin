// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import './Categories.css';

function CategoriesList(){
    // const [ categorieslist, ganCategorieslist ] = useState([]);
    // const navigate = useNavigate();
    // const anDM = (id) => {
    //     if(window.confirm('Xóa thật không bồ') === false)
    //     return false;
    //     fetch(`http://localhost:3000/categories/${id}`, {method: "delete"}).then(res => res.json()).then(data => navigate(0));
    // };
    // useEffect(() => {
    //     fetch("http://localhost:3000/categories").then(res => res.json()).then(data => ganCategorieslist(data));
    // }, []);
    return(
        <div className="categories-table">
            <h3 className="title-page">Danh sách danh mục</h3>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <Link to={`add-categories`} href="/#" id="mb-2" className="add-btn-categories">Thêm danh mục</Link>
            <form className="d-flex" role="search">
                <input className="form-control-search-categories" type="search" placeholder="Tìm kiếm danh mục..." aria-label="Search" />
                <button className="search-btn-catgories" type="submit">Tìm kiếm</button>
            </form>
            </div>
            <table id="example" className="table table-hover">
                <thead>
                    <tr>
                        <th>ID danh mục</th>
                        <th>ID danh mục cha</th>
                        <th>Tên danh mục</th>
                        <th>Công cụ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>101</td>
                        <td>1</td>
                        <td>Áo thun</td>
                        <td>
                            <Link to={`/categories/edit-categories`} href="/#" className="edit-btn"> Sửa</Link>
                            <button href="/#" className="hide-btn-categories"> Ẩn</button>
                        </td>
                    </tr>
                    <tr>
                        <td>102</td>
                        <td>1</td>
                        <td>Áo sơ mi</td>
                        <td>
                            <Link to={`/categories/edit-categories`} href="/#" className="edit-btn"> Sửa</Link>
                            <button href="/#" className="hide-btn-categories"> Ẩn</button>
                        </td>
                    </tr>
                    <tr>
                        <td>103</td>
                        <td>1</td>
                        <td>Áo Polo</td>
                        <td>
                            <Link to={`/categories/edit-categories`} href="/#" className="edit-btn"> Sửa</Link>
                            <button href="/#" className="hide-btn-categories"> Ẩn</button>
                        </td>
                    </tr>
                </tbody>    
            </table>
        </div>
    )
}

export default CategoriesList;