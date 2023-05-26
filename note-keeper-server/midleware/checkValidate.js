
 // Hàm kiểm tra các trường không được để trống

const checkIsEmpty = (field) => {
    if (field === undefined || field === null || field === "") {
      return true;
    } else {
      return false;
    }
  };
  
  // Midleware kiểm tra dữ liệu đầu vào
  const validateData = (req, res, next) => {
    // Lấy content và points từ phần người dùng gửi lên
    const { Content, Points } = req.body;
    if (checkIsEmpty(Content)) {
      return res.status(404).json({
        message: "Nội dung không được phép để trống",
      });
    }
  
    if (Content.length < 10) {
      return res.status(404).json({
        message: "Nội dung không được dưới 10 ký tự",
      });
    }
  
    if (checkIsEmpty(Points)) {
      return res.status(404).json({
        message: "Điểm không được phép để trống",
      });
    }
  
    next();
  };
  
  module.exports = validateData;
  