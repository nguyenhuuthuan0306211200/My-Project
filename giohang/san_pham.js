function SanPham(props) {
    return(
        <div className="san_pham">
            <img  className="pic1" width = "200" height = "200" src={props.data.hinh_anh}/>
            <p className="ten-color">{props.data.ten}</p>
            <button width="50" className="button">Xem</button>
        </div>
    )
}
export default SanPham;