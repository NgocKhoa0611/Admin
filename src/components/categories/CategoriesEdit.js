import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CategoriesEdit(){
    let { id } = useParams();
    const [ categories, ganCategories ] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        let opt = { 
            method: "get",
            headers:{ 'Content-Type': 'application/json' }
        };
        fetch(`http://localhost:3000/categories/${id}`, opt).then(res => res.json()).then(data => {
            ganCategories(data);
        });
    }, [id]);
    const submitDuLieu = () => {
        let url = `http://localhost:3000/categories/${id}`;
        let opt = {
            method: "put",
            body: JSON.stringify(categories),
            headers:{ 'Content-Type': 'application/json' }
        };
        fetch(url, opt).then(res => res.json()).then(data => {
            alert("Đã cập nhật loại");
            navigate('/categories');
        });
    };
    return(
        <form id="frmeditcate">
            <h2>Sửa danh mục</h2>
                <div className='col'>ID danh mục:<input defaultValue={categories?.category_id} type="id" className="form-control" onChange={e => categories.category_id = e.target.value} /></div>
                <div className='col'>ID danh mục cha:<input defaultValue={categories?.category_parent_id} type="id" className="form-control" onChange={e => categories.category_parent_id = e.target.value} /></div>
                <div className='col'>Tên danh mục:<input defaultValue={categories?.category_name} type="text" className="form-control" onChange={e => categories.category_name = e.target.value} /></div>
            <div className="mb-3">
                <button className="edit-btn-categories" type="button" onClick={() => submitDuLieu()}>Sửa danh mục</button> &nbsp;
                <Link to={`/categories`} href="/#" className="btn-categories-list">Danh sách danh mục</Link>
            </div>
        </form>
    )
}

export default CategoriesEdit;