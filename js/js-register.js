"use strict";

// REGION 3 KHU VỰC XỬ LÝ HÀM SỰ KIỆN
    function onclickCheck(){
        fetchDataUserInformation()
    }
//REGION 4 KHU VỰC KHAI BÁO CÁC HÀM SỬ DỤNG CHO TOÀN BỘ CHƯƠNG TRÌNH
function fetchDataUserInformation(){ debugger;
    var emailElement = document.getElementById("inp-Email")
    var UserNameElement = document.getElementById("inp-username")
    var passwordElement = document.getElementById("inp-passwd")
    var rePasswordElement = document.getElementById("inp-repasswd")
    
    var EmailValue = emailElement.value
    var UserNameValue = UserNameElement.value
    var PasswordValue = passwordElement.value
    var rePasswordValue = rePasswordElement.value
    if(EmailValue ===""){
        alert("Không được để trống email")
        return false
    }else if(!(isEmailValidate(EmailValue))){
     alert("Email không hợp lệ")
     return false;
    }
    if(UserNameValue=== "" ){
        alert("Không được để trống tên đăng nhập")
        return false;
    }
    if(PasswordValue === "" ){
        alert("Không được để trống mật khẩu")
        return false;
    }
    if(rePasswordValue === "" ){
        alert("Chưa nhập lại mật khẩu")
        return false;
    }else if(PasswordValue !=rePasswordValue){
        alert("Mật khẩu không khớp")
        return false;
    }
}
//function dưới sẽ trả về đúng nếu đúng khuôn
function isEmailValidate(paramEmail){
    var regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    var flag = false;
    if(paramEmail.match(regexEmail)){
        flag = true;
    }
    return flag
}
