
"use strict";

/*** REGION 1 - Global variables - Vùng khai báo biến, hằng số, tham số TOÀN CỤC */
// Mảng danh sách các mã giảm giá
var gDiscountVouchers = [
  { voucherID: "10345", percentDiscount: 20 }, // mã giảm giá là 10345, phần trăm giảm giá 20%
  { voucherID: "11346", percentDiscount: 10 },
  { voucherID: "20445", percentDiscount: 5 },
  { voucherID: "21457", percentDiscount: 30 },
  { voucherID: "32154", percentDiscount: 20 },
  { voucherID: "30546", percentDiscount: 25 },
  { voucherID: "41351", percentDiscount: 15 },
  { voucherID: "53360", percentDiscount: 5 },
  { voucherID: "65343", percentDiscount: 30 },
  { voucherID: "78328", percentDiscount: 40 },
];
const gSmall_Size = "S(SMALL-SIZE)"
const gMedium_size = "M(MEDIUM SIZE)"
const gLarge_size = "L(LARGE SIZE)"

const gPizzaHaiwai = "Pizza Hawai"
const gPizzaHaiSan = "Pizza Hải sản"
const gPizzaBacon = "Pizza Bacon"

/*** REGION 2 - Vùng gán / thực thi hàm xử lý sự kiện cho các elements */
/*** REGION 3 - Event handlers - Vùng khai báo các hàm xử lý sự kiện */
function onSmallSize() {
  ;
  var vSizeSelected = getSizePizza(gSmall_Size, "20 cm", 2, " 200 gr", 2, 150000);
  vSizeSelected.showSizeInfor()
  changeColorOnClick(gSmall_Size);

}
function onMediumSize() {
  
  var vSizeSelected = getSizePizza(gMedium_size, "25 cm", 4, " 300 gr", 3, 200000)
  vSizeSelected.showSizeInfor()
  changeColorOnClick(gMedium_size)
}
function onLargeSize() {
  var vSizeSelected = getSizePizza(gLarge_size, " 30 cm", 8, " 500 gr", 4, 250000)
  vSizeSelected.showSizeInfor()
  changeColorOnClick(gLarge_size)
}
function onPizzaHaiwai() {
  ;
  var vPizzaSelected = getPizza(gPizzaHaiwai, "Món ăn thanh đạm", "Hãy thưởng thức món ăn với phong cách Alo Ha đến từ Hawai.")
  vPizzaSelected.vPizzaInformation()
  changeColorOnClick(gPizzaHaiwai)
}
function onPizzaHaiSan() {
  var vPizzaSelected = getPizza(gPizzaHaiSan, "Món ăn đến từ biển", "Bạn đã thử pizza được chế biến từ nguyên liệu hải sản chưa ?")
  vPizzaSelected.vPizzaInformation()
  changeColorOnClick(gPizzaHaiSan)
}
function onPizzaBacon() {
  var vPizzaSelected = getPizza(gPizzaBacon, "Món ăn đăc biệt", "Được chế biến từ thịt bacon. Mang đến hương vị mới lạ")
  vPizzaSelected.vPizzaInformation()
  changeColorOnClick(gPizzaBacon)
}
function onCheckCLickButton() {
  
  var vOrderInformation = {
    pizzaSelectedType: null,
    SizeSelected: null,
    FullName: "",
    Email: "",
    PhoneNumber: "",
    Address: "",
    Messege: "",
    Voucher: "",
    showOrderInformation: function () {
      console.log("----[THÔNG TIN KHÁCH HÀNG]----")
      console.log("Họ và tên :" + this.FullName)
      console.log("Email :" + this.Email)
      console.log("Số điện thoại :" + this.PhoneNumber)
      console.log("Địa chỉ :" + this.Address)
      console.log("Tin nhắn :" + this.Messege)
      console.log("Voucher :" + this.Voucher)
      console.log("----Hiện lại thông tin bạn dã chọn----")
      this.SizeSelected.showSizeInfor()
      this.pizzaSelectedType.vPizzaInformation()
    },
    displayInf: function () {
      
      //truy xuat
      var vContainerElement = document.getElementById("div-container-order")
      var vOrderElement = document.getElementById("div-order-infor")

      vContainerElement.style.display = "block"
      vOrderElement.innerHTML = ""
      vOrderElement.innerHTML += "----[THÔNG TIN KHÁCH HÀNG]----" + "<br>" +
        "Họ và tên :" + this.FullName + "<br>" +
        "Email :" + this.Email + "<br>" +
        "Số điện thoại :" + this.PhoneNumber + "<br>" +
        "Địa chỉ :" + this.Address + "<br>" +
        "Tin nhắn :" + this.Messege + "<br>" +
        "Voucher :" + this.Voucher + "<br>" +
        "----[THÔNG TIN PIZZA]----" + "<br>" +
        "----[SIZE PIZZA]----" + "<br>" +
        "Size name :" + this.SizeSelected.SizeName + "<br>" +
        "Đường Kính Pizza :" + this.SizeSelected.DuongKinh + "<br>" +
        "Số Lượng sườn nướng:" + this.SizeSelected.soLuongSuongNuong + "<br>" +
        "Salad :" + this.SizeSelected.salad + "<br>" +
        "Nước ngọt :" + this.SizeSelected.NuocNgot + "<br>" +
        "Thành tiền :" + this.SizeSelected.ThanhTien + "<br>" +
        "----[TYPE PIZZA]----" + "<br>" +
        "Tên Pizza bạn đã chọn:" + this.pizzaSelectedType.PizzaName + "<br>" +
        "Vị của Pizza :" + this.pizzaSelectedType.Tasting + "<br>" +
        "Miêu tả của Pizza :" + this.pizzaSelectedType.Description + "<br>" +
        "_____________________________________"

    },
    isVoucherValid: function () {

      var index = 0;
      var flag = false;
      var vTotalMoney = 0
      var vPercentDiscount = 0
      while (flag === false && index < gDiscountVouchers.length) {
        if (this.Voucher === (gDiscountVouchers[index].voucherID)) {
          vPercentDiscount = 100 - parseInt(gDiscountVouchers[index].percentDiscount)
          vTotalMoney = vPercentDiscount * this.SizeSelected.ThanhTien
          console.log(`----[Hóa đơn :${vTotalMoney}]----`)
          return true;
        } else {
          index++

        }
      }
      return vTotalMoney
    }
  }
  //   ----[LẤY DỮ LIỆU]----
  fetchData(vOrderInformation)
  // ----[KIỂM TRA DỮ LIỆU]----
  var vInformationValidate = checkUsersInformation(vOrderInformation)
  if (vInformationValidate) {
    //----[IN RA MÀN HÌNH]----
    vOrderInformation.displayInf()
    if (vOrderInformation.isVoucherValid() == 0) {
      alert("Voucher doesnt exist")
    }
  }
}
function onSendOrder() {
  
  var orderInformation = {
    pizzaSize: null,
    pizzaType: null,
    FullName: "",
    Email: "",
    PhoneNumber: "",
    Address: "",
    Msg: "",
    Voucher: "",

    displayInformation: function () {
      //display information to console 
      console.log(this.pizzaSize.showSizeInfor());
      console.log(this.pizzaType.vPizzaInformation);
      console.log("Họ và tên :" + this.FullName)
      console.log("Email :" + this.Email)
      console.log("Số đt:" + this.PhoneNumber)
      console.log("Địa chỉ :" + this.Address)
      console.log("Msg  :" + this.Msg)
      console.log("Voucher :" + this.Voucher)
      console.log("______________________________")
    }
  }
  // -----[fetch data]----
  fetchDatav3(orderInformation)
  //  ----[display data]----

  orderInformation.displayInformation()


}

/*** REGION 4 - Common funtions - Vùng khai báo hàm dùng chung trong toàn bộ chương trình*/
function changeColorOnClick(paramPackageSelected) {
  

  //B1: truy xuất gói cần đổi màu : 
  // size
  var vSmallSizeElement = document.getElementById("btn-size-small")
  var vMediumSizeElement = document.getElementById("btn-size-medium")
  var vLargeSizeElement = document.getElementById("btn-size-large")
  //pizza
  var vPizzaHaiwaiElement = document.getElementById("btn-type-hawai")
  var vPizzaHaiSanElement = document.getElementById("btn-type-hai-san")
  var vPizzaBaconElement = document.getElementById("btn-type-bacon")
  //size    ----[changeColor]----
  if (paramPackageSelected === gSmall_Size) {
    vSmallSizeElement.className = "btn-red"
    vSmallSizeElement.setAttribute("data-is-selected", "Y");


    vMediumSizeElement.className = "btn-normal"
    vMediumSizeElement.setAttribute("data-is-selected", "N");

    vLargeSizeElement.className = "btn-normal"
    vLargeSizeElement.setAttribute("data-is-selected", "N");
  } else if (paramPackageSelected === gMedium_size) {
    vSmallSizeElement.className = "btn-normal"
    vSmallSizeElement.setAttribute("data-is-selected", "N")

    vMediumSizeElement.className = "btn-red"
    vMediumSizeElement.setAttribute("data-is-selected", "Y")


    vLargeSizeElement.className = "btn-normal"
    vLargeSizeElement.setAttribute("data-is-selected", "N")


  } else if (paramPackageSelected === gLarge_size) {
    vSmallSizeElement.className = "btn-normal"
    vSmallSizeElement.setAttribute("data-is-selected", "N")

    vMediumSizeElement.className = "btn-normal"
    vMediumSizeElement.setAttribute("data-is-selected", "N")

    vLargeSizeElement.className = "btn-red"
    vLargeSizeElement.setAttribute("data-is-selected", "Y")

  }

  if (paramPackageSelected == gPizzaHaiwai) {
    vPizzaHaiwaiElement.className = "btn-red"
    vPizzaHaiwaiElement.setAttribute("data-is-selected", "Y")


    vPizzaHaiSanElement.className = "btn-normal"
    vPizzaHaiSanElement.setAttribute("data-is-selected", "N")

    vPizzaBaconElement.className = "btn-normal"
    vPizzaBaconElement.setAttribute("data-is-selected", "N")

  } else if (paramPackageSelected == gPizzaHaiSan) {
    vPizzaHaiwaiElement.className = "btn-normal"
    vPizzaHaiwaiElement.setAttribute("data-is-selected", "N")

    vPizzaHaiSanElement.className = "btn-red"
    vPizzaHaiSanElement.setAttribute("data-is-selected", "Y")


    vPizzaBaconElement.className = "btn-normal"
    vPizzaBaconElement.setAttribute("data-is-selected", "N")
  } else if (paramPackageSelected == gPizzaBacon) {
    vPizzaHaiwaiElement.className = "btn-normal"
    vPizzaHaiwaiElement.setAttribute("data-is-selected", "N")

    vPizzaHaiSanElement.className = "btn-normal"
    vPizzaHaiSanElement.setAttribute("data-is-selected", "N")

    vPizzaBaconElement.className = "btn-red"
    vPizzaBaconElement.setAttribute("data-is-selected", "Y")

  }

}
function getSizePizza(paramSizeName, paramDuongKinh, paramSuonNuongQuantity, paramSalad, paramNuocNgot, paramThanhTien) {
  var vSizeSelectedPlan = {
    SizeName: paramSizeName,
    DuongKinh: paramDuongKinh,
    soLuongSuongNuong: paramSuonNuongQuantity,
    salad: paramSalad,
    NuocNgot: paramNuocNgot,
    ThanhTien: paramThanhTien,

    /* ghi thông tin  size combo đã chọn ra console */
    showSizeInfor: function () {
      console.log("----THÔNG TIN SIZE PIZZA----")
      console.log("Size name :" + this.SizeName)
      console.log("Đường Kính Pizza :" + this.DuongKinh)
      console.log("Số Lượng sườn nướng:" + this.soLuongSuongNuong)
      console.log("Salad :" + this.salad)
      console.log("Nước ngọt :" + this.NuocNgot)
      console.log("Thành tiền :" + this.ThanhTien)
    },
    totalPriceAnnual() {

    }
  }
  return vSizeSelectedPlan;
}
function getPizza(paramPizzaName, paranTesting, paramDescription) {

  var vPizzaSelected = {
    PizzaName: paramPizzaName,
    Tasting: paranTesting,
    Description: paramDescription,

    vPizzaInformation: function () {

      console.log("Tên Pizza bạn đã chọn:" + this.PizzaName)
      console.log("Vị của Pizza :" + this.Tasting)
      console.log("Miêu tả của Pizza :" + this.Description)
    }
  }
  return vPizzaSelected;
}
function fetchData(paramOrderInformation) {
  
  var vFullNameValue = document.getElementById("input-name")
  var vEmailValue = document.getElementById("input-email")
  var vPhoneNumberValue = document.getElementById("input-phone")
  var vAddressValue = document.getElementById("input-address")
  var vMessegeValue = document.getElementById("input-message")
  var vVoucherValue = document.getElementById("input-voucher")

  paramOrderInformation.FullName = vFullNameValue.value.trim()
  paramOrderInformation.Email = vEmailValue.value.trim()
  paramOrderInformation.PhoneNumber = vPhoneNumberValue.value.trim()
  paramOrderInformation.Address = vAddressValue.value.trim()
  paramOrderInformation.Messege = vMessegeValue.value.trim()
  paramOrderInformation.Voucher = vVoucherValue.value.trim()

  //   ----[Truy xuất Size đã chọn để xem trong 3 cái cái nào được chọn rồi sử dụng get size function và lưu biến vào SizeSelected]---- 
  var vSmallSizeElement = document.getElementById("btn-size-small")
  var vMediumElement = document.getElementById("btn-size-medium")
  var vLargeSizeElement = document.getElementById("btn-size-large")
  //    ----[Kiểm tra xem cái nào được chọn và getSize từ đó]----
  var vSmallSizeAttribute = vSmallSizeElement.getAttribute("data-is-selected")
  var vMediumSizeAttribute = vMediumElement.getAttribute("data-is-selected")
  var vLargeSizeAttribute = vLargeSizeElement.getAttribute("data-is-selected")
  //    ----[PizzaType_Name]----
  var vHaWaiPizzaElement = document.getElementById("btn-type-hawai")
  var vHaiSanPizzaElement = document.getElementById("btn-type-hai-san")
  var vBaconPizzaElement = document.getElementById("btn-type-bacon")
  //    ----[PizzaType_Name_Take Attribute]----
  var vHaWaiPizzaAttribute = vHaWaiPizzaElement.getAttribute("data-is-selected")
  var vHaiSanPizzaAttribute = vHaiSanPizzaElement.getAttribute("data-is-selected")
  var vBaconPIzzaAttribute = vBaconPizzaElement.getAttribute("data-is-selected")
  // ----[Sau khi đã lấy được attribute thì bây giờ kiểm tra xem cái nào được chọn Y _ và sau đó getsize]----
  if (vSmallSizeAttribute === "Y") {
    paramOrderInformation.SizeSelected = getSizePizza(gSmall_Size, "20 cm", 2, " 200 gr", 2, 150000)
  } else if (vMediumSizeAttribute === "Y") {
    paramOrderInformation.SizeSelected = getSizePizza(gMedium_size, "25 cm", 4, " 300 gr", 3, 200000)
  } else if (vLargeSizeAttribute === "Y") {
    paramOrderInformation.SizeSelected = getSizePizza(gLarge_size, " 30 cm", 8, " 500 gr", 4, 250000)
  }

  if (vHaWaiPizzaAttribute === "Y") {
    paramOrderInformation.pizzaSelectedType = getPizza(gPizzaHaiwai, "Món ăn thanh đạm", "Hãy thưởng thức món ăn với phong cách Alo Ha đến từ Hawai.")
  } else if (vHaiSanPizzaAttribute === "Y") {
    paramOrderInformation.pizzaSelectedType = getPizza(gPizzaHaiSan, "Món ăn đến từ biển", "Bạn đã thử pizza được chế biến từ nguyên liệu hải sản chưa ?")
  } else if (vBaconPIzzaAttribute === "Y") {
    paramOrderInformation.pizzaSelectedType = getPizza(gPizzaBacon, "Món ăn đăc biệt", "Được chế biến từ thịt bacon. Mang đến hương vị mới lạ")
  }
}
function checkUsersInformation(paramOrder) {
  //----[KIỂM TRA DỮ LIỆU]----
  if (paramOrder.SizeSelected == null) {
    alert("Bạn chưa chọn size Pizza kìa ! ! !")
  }
  if (paramOrder.pizzaSelectedType == null) {
    alert("Có vẻ như bạn chưa chọn Loại Pizza nhỉ ? chọn lại nhé ! !")
  }
  if (paramOrder.FullName == "") {
    alert("không được để trống Họ Và Tên")
    return false;
  }
  if (paramOrder.Email == "") {
    alert("Không được để trống Email")
    return false;
  } else if (isGmailValidate(paramOrder.Email) == false) {
    alert("Sai định dạng gmail")
    return false;
  }
  if (paramOrder.PhoneNumber == "") {
    alert("Không được để trống số điện thoại")
    return false;
  } else if (checkNumber(paramOrder.PhoneNumber) == false) {
    return false;
  }
  if (paramOrder.Address == "") {
    alert("Không được để trống địa chỉ")
    return false;
  }
  return true;
}
function checkNumber(paramPhoneNumber) {
  if (isNaN(paramPhoneNumber)) {
    alert("Bạn phải nhập số điện thoại đúng định dạng")
    return false;
  } else if (paramPhoneNumber.length < 10 || paramPhoneNumber.length > 12) {
    alert("Số nhập vào phải từ 10-12 kí tự")
    return false;
  } else if (paramPhoneNumber.charAt(0) !== "0" && paramPhoneNumber.charAt(0) !== "+") {
    alert("SDT phải bắt đầu bằng số 0 hoặc +")
    return false;
  }
  return true;
}
function isGmailValidate(paramOrder) {
  var isGmailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  var flag = false;
  if (paramOrder.match(isGmailRegex)) {
    flag = true;
  }
  return flag;
}
function fetchDatav3(paramInformation) {
  var vFullNameValue = document.getElementById("input-name")
  var vEmailValue = document.getElementById("input-email")
  var vPhoneNumberValue = document.getElementById("input-phone")
  var vAddressValue = document.getElementById("input-address")
  var vMessegeValue = document.getElementById("input-message")
  var vVoucherValue = document.getElementById("input-voucher")

  paramInformation.Fullname = vFullNameValue.value.trim()
  paramInformation.Gmail = vEmailValue.value.trim()
  paramInformation.PhoneNumber = vPhoneNumberValue.value.trim()
  paramInformation.Address = vAddressValue.value.trim()
  paramInformation.Msg = vMessegeValue.value.trim()
  paramInformation.Voucher = vVoucherValue.value.trim()
  //   ----[Truy xuất Size đã chọn để xem trong 3 cái cái nào được chọn rồi sử dụng get size function và lưu biến vào SizeSelected]---- 
  var vSmallSizeElement = document.getElementById("btn-size-small")
  var vMediumElement = document.getElementById("btn-size-medium")
  var vLargeSizeElement = document.getElementById("btn-size-large")
  //    ----[Kiểm tra xem cái nào được chọn và getSize từ đó]----
  var vSmallSizeAttribute = vSmallSizeElement.getAttribute("data-is-selected")
  var vMediumSizeAttribute = vMediumElement.getAttribute("data-is-selected")
  var vLargeSizeAttribute = vLargeSizeElement.getAttribute("data-is-selected")
  //    ----[PizzaType_Name]----
  var vHaWaiPizzaElement = document.getElementById("btn-type-hawai")
  var vHaiSanPizzaElement = document.getElementById("btn-type-hai-san")
  var vBaconPizzaElement = document.getElementById("btn-type-bacon")
  //    ----[PizzaType_Name_Take Attribute]----
  var vHaWaiPizzaAttribute = vHaWaiPizzaElement.getAttribute("data-is-selected")
  var vHaiSanPizzaAttribute = vHaiSanPizzaElement.getAttribute("data-is-selected")
  var vBaconPIzzaAttribute = vBaconPizzaElement.getAttribute("data-is-selected")
  // ----[Sau khi đã lấy được attribute thì bây giờ kiểm tra xem cái nào được chọn Y _ và sau đó getsize]----
  if (vSmallSizeAttribute === "Y") {
    paramInformation.pizzaSize = getSizePizza(gSmall_Size, "20 cm", 2, " 200 gr", 2, 150000)
  } else if (vMediumSizeAttribute === "Y") {
    paramInformation.pizzaSize = getSizePizza(gMedium_size, "25 cm", 4, " 300 gr", 3, 200000)
  } else if (vLargeSizeElement === "Y") {
    paramInformation.pizzaSize = getSizePizza(gLarge_size, " 30 cm", 8, " 500 gr", 4, 250000)
  }

  if (vHaWaiPizzaAttribute === "Y") {
    paramInformation.pizzaType = getPizza(gPizzaHaiwai, "Món ăn thanh đạm", "Hãy thưởng thức món ăn với phong cách Alo Ha đến từ Hawai.")
  } else if (vHaiSanPizzaAttribute === "Y") {
    paramInformation.pizzaType = getPizza(gPizzaHaiSan, "Món ăn đến từ biển", "Bạn đã thử pizza được chế biến từ nguyên liệu hải sản chưa ?")
  } else if (vBaconPIzzaAttribute === "Y") {
    paramInformation.pizzaType = getPizza(gPizzaBacon, "Món ăn đăc biệt", "Được chế biến từ thịt bacon. Mang đến hương vị mới lạ")
  }
}
function getCustomerInformation(paramFullName, paramGmail, paramPhoneNumber, paramAddress, paramMsg, paramVoucher) {
  var customer = {
    Fullname: paramFullName,
    Gmail: paramGmail,
    PhoneNumber: paramPhoneNumber,
    Address: paramAddress,
    Msg: paramMsg,
    Voucher: paramVoucher,

    displayCustomerInfo: function () {
      console.log("Customer Information:");
      console.log("Full Name: " + this.Fullname);
      console.log("Email: " + this.Gmail);
      console.log("Phone Number: " + this.PhoneNumber);
      console.log("Address: " + this.Address);
      console.log("Message: " + this.Msg);
      console.log("Voucher: " + this.Voucher);
    }
  };

  // Return the customer object
  return customer;
}
// jquery lien quan den button summit 
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.summit-button');
  btn.addEventListener('click', () => {
    document.documentElement.classList.toggle('checked-out');
    document.body.classList.toggle('flip');

    // Sau 1150ms (thời gian của animation), hiển thị #notification
    setTimeout(() => {
      const notificationElement = document.getElementById('notification');
      notificationElement.style.display = 'flex';
    }, 1150);
  });

  const icon = document.querySelector('#verify');
  icon.addEventListener('click', () => {
    document.body.classList.toggle('flip');
  });
});
//dropDown-menu
function onCLickDisplayAddress() {
  
  var blankElement = document.getElementById("blank-container");
  var blankStatus = blankElement.style.display;
// Khi bạn muốn ẩn phần tử lại:
blankElement.classList.remove("active");
  if (blankStatus === "none") {
      blankElement.style.display = "block";
      blankElement.classList.add("fade-in", "active");
  } else {
      blankElement.style.display = "none";
      blankElement.classList.remove("active");
  }
}