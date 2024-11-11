import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './Categories.css';

function NewCategories(){
    let category = {};
    const navigate = useNavigate();
    const submitDuLieu = () => {
        let url = `http://localhost:3000/categories`;
        let opt = {
            method: "post",
            body: JSON.stringify(category),
            headers:{ 'Content-Type': 'application/json' }
        };
        fetch(url, opt).then(res => res.json()).then(data => {
            alert("Thêm danh mục thành công");
            navigate('/categories');
        });
    };
    return(
        <form id="frmaddcate">
            <h2>Thêm danh mục</h2>
                <div className='col'>ID danh mục:<input type="text" className="form-control" onChange={e => category.catgory_id = e.target.value} /></div>
                <div className='col'>ID danh mục cha:<input type="text" className="form-control" onChange={e => category.category_parent_id = e.target.value} /></div>
                <div className='col'>Tên danh mục:<input type="text" className="form-control" onChange={e => category.category_name = e.target.value} /></div>
            <div className="mb-3">
                <button className="add-btn-categories" type="button" onClick={() => submitDuLieu()}>Thêm danh mục</button> &nbsp;
                <Link to={`/categories`} href="/#" className="btn-categories-list">Danh sách</Link>
            </div>
        </form>
    )
}

export default NewCategories;