function ChiTietGioHang()
{
    return (
      <>
      <br></br>
      <h1>Giỏ Hàng</h1>
      <br></br>
      <table class="table">
      <thead>
        <tr>
          <th scope="col">Sản Phẩm</th>
          <th scope="col">Đơn Giá</th>
          <th scope="col">Số Lượng</th>
          <th scope="col">Thành Tiền</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Sản Phẩm A</th>
          <td>10.000</td>
          <td>2</td>
          <td>20.000</td>
          <button type="button3" class="btn btn-outline-secondary" >Xóa</button>
          <button type="button4" class="btn btn-outline-secondary">Cập Nhật</button>
        </tr>
      </tbody>
    </table>
    <button type="button5" class="btn btn-outline-secondary" >Tiếp Tục Mua Hàng</button>
    <button type="button5" class="btn btn-outline-secondary">Thanh Toán</button>
      </>
    );
}
export default ChiTietGioHang;