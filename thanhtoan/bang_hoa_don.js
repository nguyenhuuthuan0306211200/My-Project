function GioHang()
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

        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Sản Phẩm A</th>
          <td>10.000</td>
          <td>2</td>
          <td>20.000</td>
        </tr>
      </tbody>
    </table>
    <br></br>

    <br></br>
    <div class="form-group">
    <h4>Thanh Toán</h4>
    <h6>Thông tin người nhận hàng</h6>
    <label for="usr">Họ Tên:</label>
    <input type="text" class="form-control" id="name"/>
  </div>
  <div class="form-group">
    <label for="pwd">Địa chỉ:</label>
    <input type="text" class="form-control" id="diachi"/>
  </div>
  <div class="form-group">
    <label for="pwd">Người Nhận:</label>
    <input type="text" class="form-control" id="person"/>
    <h4>Phương Thức Thanh Toán</h4>
    <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">COD</label>
  
</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">Thanh Toán Qua Ngân Hàng</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
  <label class="form-check-label" for="inlineRadio3">Thanh Toán Qua MoMo </label>
</div>
<br></br>
<button type="button5" class="btn btn-outline-secondary">Thanh Toán</button>
  </div>
  
      </>
    );
}
export default GioHang;