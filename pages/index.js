
export default function Home() {
  //Không sử dụng chuột phải
  if (process.browser){
  document.oncontextmenu = new Function("return false;");
  }
  return (
    <>
        <div className="page">
          <div className="desktop">
            <div className="desktop-logo-name">
              <div className="desktop-logo">
                <img className="desktop-logo-tiem" alt="logo" src=""/>
              </div>
              <div className="desktop-name">
                Best Salon Marketing
              </div>
            </div>
            <div className="desktop-nd">
              <div className="desktop-text-1">
              Hướng dẫn đặt ngày nghỉ cho tiệm
              </div>
              <div className="desktop-text-2">
                Khi sử dụng Setmore, để tắt thời gian làm việc của tiệm thì về bản chất, quý anh chị sẽ cần <b>đặt lịch nghỉ cho tất cả các nhân viên.</b>
              </div>
              <div className="desktop-logo-text">
                <div className="desktop-text-3">
                  <span className="desktop-text-3-1">
                    .
                  </span>
                  Hướng dẫn dành cho ứng dụng trên điện thoại:
                </div>
              </div>
              <div className="desktop-text-4">
              Bước 1: Quý anh/chị nhấn vào biểu tượng ứng dụng để mở Setmore.
              </div>
              <div className="desktop-image-1">
                <img className="desktop-image-1-1" src="images/0.jpg"/>
              </div>
              <div className="desktop-text-6">
                ______________________________________________________________
              </div>
              <div className="desktop-text-7">
                Bước 2: Từ màn hình chính của ứng dụng, quý anh/chị nhấn vào <b>Account.</b>
              </div>
              <div className="desktop-image-2">
                <img className="desktop-image-2-1" src="images/1.jpg"/>
              </div>
              <div className="desktop-text-6-1">
                ______________________________________________________________
              </div>
              <div className="desktop-text-9">
                Bước 3: Quý anh/chị nhấn vào mục <b>Staff.</b>
              </div>
              <div className="desktop-image-3">
                <img className="desktop-image-3-1" src="images/2.jpg"/>
              </div>
              <div className="desktop-text-6-2">
                ______________________________________________________________
              </div>
              <div className="desktop-text-11">
              Bước 4: Quý anh chị bấm chọn 1 nhân viên.
              </div>
              <div className="desktop-image-4">
                <img className="desktop-image-4-1" src="images/3.jpg"/>
              </div>
              <div className="desktop-text-6-3">
                ______________________________________________________________
              </div>
              <div className="desktop-text-14">
              Bước 5: Quý anh chị cuộn xuống và chọn mục <b>Time Off</b>
              </div>
              <div className="desktop-image-5">
                <img className="desktop-image-5-1" src="images/4.jpg"/>
              </div>
              <div className="desktop-text-6-4">
                ______________________________________________________________
              </div>
              <div className="desktop-text-15">
                Bước 6:	 Nhấn + <b>Time Off</b> để thêm thời gian Time Off của nhân viên này. 
              </div>
              <div className="desktop-image-6">
                <img className="desktop-image-6-1" src="images/5.jpg"/>
              </div>
              <div className="desktop-text-6-5">
                ______________________________________________________________
              </div>
              <div className="desktop-text-16">
                Bước 7: Lựa chọn các thông tin về thời gian. 
              </div>
              <div className="desktop-image-text">
                <div className="desktop-text-17">
                  <ul>
                    <li><b>All day:</b> Sử dụng khi tiệm nghỉ cả ngày. </li>
                  </ul>
                </div>
                <img className="desktop-image-7" src="images/7-3.jpg"/>
              </div>
              <div className="desktop-image-text-2">
                <div className="desktop-text-18">
                  <ul>
                    <li><b>Starts: </b>Thời điểm Time Off bắt đầu.</li>
                  </ul>
                </div>
                <img className="desktop-image-8" src="images/7-1.jpg"/>
              </div>
              <div className="desktop-image-text-3">
                <div className="desktop-text-19">
                  <ul>
                    <li><b>Ends: </b>Thời điểm Time Off kết thúc.</li>
                  </ul>
                </div>
                <img className="desktop-image-9" src="images/7-2.jpg"/>
              </div>
              <div className="desktop-text-20">
              <b>Lưu ý:</b> quý anh/chị vui lòng chọn thời điểm Time Off kết thúc trước rồi mới chọn thời điểm bắt đầu để tránh phần mềm báo lỗi là “
                <span className="desktop-text-20-1">
                  End time cannot be before or the same as the start time
                </span>”
              </div>
              <div className="desktop-text-21">
                Ví dụ: Quý anh/chị muốn cài đặt Time Off vào ngày 20 tháng 4 năm 2023. 
              </div>
              <div className="desktop-text-image">
                <div className="desktop-text-22">
                  Đầu tiên, quý anh/chị chỉnh mục <b>Ends</b> thành
                  <img className="desktop-image-10" src="images/7-2.jpg"/>
                </div>
              </div>
              <div className="desktop-text-image-2">
                <div className="desktop-text-23">
                  và sau đó mới chỉnh mục <b>Starts</b> như hình
                  <img className="desktop-image-11" src="images/7-1.jpg"/>
                </div>
              </div>
              <div className="desktop-text-6-6">
                ______________________________________________________________
              </div>
              <div className="desktop-text-24">
                Bước 8: Quý anh/chị kiểm tra lại thời gian Starts và Ends rồi nhấn vào <b>Create</b> để lưu lịch Time Off của nhân viên này.
              </div>
              <div className="desktop-image-12">
                <img className="desktop-image-12-1" src="images/8.jpg"/>
              </div>
              <div className="desktop-text-6-7">
                ______________________________________________________________
              </div>
              <div className="desktop-text-25">
                Bước 9: Lặp lại với tất cả các nhân viên.
              </div>
              <div className="desktop-image-13">
                <img className="desktop-image-13-1" src="images/9.jpg"/>
              </div>
            </div>
          </div>
          <div className="mobile">
            <div className="mobile-logo-name">
              <div className="mobile-logo">
                <img className="mobile-logo-tiem" alt="logo" src=""/>
              </div>
              <div className="mobile-name">
              Best Salon Marketing
              </div>
            </div>
            <div className="mobile-nd">
              <div className="mobile-text-1">
              Hướng dẫn đặt ngày nghỉ cho tiệm
              </div>
              <div className="mobile-text-2">
                Khi sử dụng Setmore, để tắt thời gian làm việc của tiệm thì về bản chất, quý anh chị sẽ cần <b>đặt lịch nghỉ cho tất cả các nhân viên.</b>
              </div>
              <div className="mobile-logo-text">
                <div className="mobile-text-3">
                  <ul>
                    <li> Hướng dẫn dành cho ứng dụng trên điện thoại:</li>
                  </ul>
                </div>
              </div>
              <div className="mobile-text-4">
              Bước 1: Quý anh/chị nhấn vào biểu tượng ứng dụng để mở Setmore.
              </div>
              <div className="mobile-image-1">
                <img className="mobile-image-1-1" src="images/0.jpg"/>
              </div>
              <div className="mobile-text-7">
                Bước 2: Từ màn hình chính của ứng dụng, quý anh/chị nhấn vào <b>Account.</b>
              </div>
              <div className="mobile-image-2">
                <img className="mobile-image-2-1" src="images/1.jpg"/>
              </div>
              <div className="mobile-text-9">
                Bước 3: Quý anh/chị nhấn vào mục <b>Staff.</b>
              </div>
              <div className="mobile-image-3">
                <img className="mobile-image-3-1" src="images/2.jpg"/>
              </div>
              <div className="mobile-text-11">
              Bước 4: Quý anh chị bấm chọn 1 nhân viên.
              </div>
              <div className="mobile-image-4">
                <img className="mobile-image-4-1" src="images/3.jpg"/>
              </div>
              <div className="mobile-text-14">
              Bước 5: Quý anh chị cuộn xuống và chọn mục <b>Time Off</b>
              </div>
              <div className="mobile-image-5">
                <img className="mobile-image-5-1" src="images/4.jpg"/>
              </div>
              <div className="mobile-text-15">
                Bước 6:	 Nhấn + <b>Time Off</b> để thêm thời gian Time Off của nhân viên này. 
              </div>
              <div className="mobile-image-6">
                <img className="mobile-image-6-1" src="images/5.jpg"/>
              </div>
              <div className="mobile-text-16">
                Bước 7: Lựa chọn các thông tin về thời gian. 
              </div>
              <div className="mobile-image-text">
                <div className="mobile-text-17">
                  <ul>
                    <li><b>All day:</b> Sử dụng khi tiệm nghỉ cả ngày. </li>
                  </ul>
                </div>
                <img className="mobile-image-7" src="images/7-3.jpg"/>
              </div>
              <div className="mobile-image-text-2">
                <div className="mobile-text-18">
                  <ul>
                    <li><b>Starts: </b>Thời điểm Time Off bắt đầu.</li>
                  </ul>
                </div>
                <img className="mobile-image-8" src="images/7-1.jpg"/>
              </div>
              <div className="mobile-image-text-3">
                <div className="mobile-text-19">
                  <ul>
                    <li><b>Ends:</b>Thời điểm Time Off kết thúc.</li>
                  </ul>
                </div>
                <img className="mobile-image-9" src="images/7-2.jpg"/>
              </div>
              <div className="mobile-text-20">
              <b>Lưu ý:</b> quý anh/chị vui lòng chọn thời điểm Time Off kết thúc trước rồi mới chọn thời điểm bắt đầu để tránh phần mềm báo lỗi là “
                <span className="mobile-text-20-1">
                  End time cannot be before or the same as the start time
                </span>”
              </div>
              <div className="mobile-text-21">
                Ví dụ: Quý anh/chị muốn cài đặt Time Off vào ngày 20 tháng 4 năm 2023. 
              </div>
              <div className="mobile-text-image">
                <div className="mobile-text-22">
                  Đầu tiên, quý anh/chị chỉnh mục <b>Ends</b> thành
                  <img className="mobile-image-10" src="images/7-2.jpg"/>
                </div>
              </div>
              <div className="mobile-text-image-2">
                <div className="mobile-text-23">
                  và sau đó mới chỉnh mục <b>Starts</b> như hình
                  <img className="mobile-image-11" src="images/7-1.jpg"/>
                </div>
              </div>
              <div className="mobile-text-24">
                Bước 8: Quý anh/chị kiểm tra lại thời gian Starts và Ends rồi nhấn vào <b>Create</b> để lưu lịch Time Off của nhân viên này.
              </div>
              <div className="mobile-image-12">
                <img className="mobile-image-12-1" src="images/8.jpg"/>
              </div>
              <div className="mobile-text-25">
                Bước 9: Lặp lại với tất cả các nhân viên.
              </div>
              <div className="mobile-image-13">
                <img className="mobile-image-13-1" src="images/9.jpg"/>
              </div>
            </div>
          </div>
          <div className="tablet">
            <div className="tablet-logo-name">
              <div className="tablet-logo">
                <img className="tablet-logo-tiem" alt="logo" src=""/>
              </div>
              <div className="tablet-name">
              Best Salon Marketing
              </div>
            </div>
            <div className="tablet-nd">
              <div className="tablet-text-1">
              Hướng dẫn đặt ngày nghỉ cho tiệm
              </div>
              <div className="tablet-text-2">
                Khi sử dụng Setmore, để tắt thời gian làm việc của tiệm thì về bản chất, quý anh chị sẽ cần <b>đặt lịch nghỉ cho tất cả các nhân viên.</b>
              </div>
              <div className="tablet-logo-text">
                <div className="tablet-text-3">
                  <ul>
                    <li className="tablet-text-3-1"> Hướng dẫn dành cho ứng dụng trên điện thoại:</li>
                  </ul>
                </div>
              </div>
              <div className="tablet-text-4">
              Bước 1: Quý anh/chị nhấn vào biểu tượng ứng dụng để mở Setmore.
              </div>
              <div className="tablet-image-1">
                <img className="tablet-image-1-1" src="images/0.jpg"/>
              </div>
              <div className="tablet-text-6">
                ______________________________________________
              </div>
              <div className="tablet-text-7">
                Bước 2: Từ màn hình chính của ứng dụng, quý anh/chị nhấn vào <b>Account.</b>
              </div>
              <div className="tablet-image-2">
                <img className="tablet-image-2-1" src="images/1.jpg"/>
              </div>
              <div className="tablet-text-6-1">
                ______________________________________________
              </div>
              <div className="tablet-text-9">
                Bước 3: Quý anh/chị nhấn vào mục <b>Staff.</b>
              </div>
              <div className="tablet-image-3">
                <img className="tablet-image-3-1" src="images/2.jpg"/>
              </div>
              <div className="tablet-text-6-2">
                ______________________________________________
              </div>
              <div className="tablet-text-11">
              Bước 4: Quý anh chị bấm chọn 1 nhân viên.
              </div>
              <div className="tablet-image-4">
                <img className="tablet-image-4-1" src="images/3.jpg"/>
              </div>
              <div className="tablet-text-6-3">
                ______________________________________________
              </div>
              <div className="tablet-text-14">
              Bước 5: Quý anh chị cuộn xuống và chọn mục <b>Time Off</b>
              </div>
              <div className="tablet-image-5">
                <img className="tablet-image-5-1" src="images/4.jpg"/>
              </div>
              <div className="tablet-text-6-4">
                ______________________________________________
              </div>
              <div className="tablet-text-15">
                Bước 6:	 Nhấn + <b>Time Off</b> để thêm thời gian Time Off của nhân viên này. 
              </div>
              <div className="tablet-image-6">
                <img className="tablet-image-6-1" src="images/5.jpg"/>
              </div>
              <div className="tablet-text-6-5">
                ______________________________________________
              </div>
              <div className="tablet-text-16">
                Bước 7: Lựa chọn các thông tin về thời gian. 
              </div>
              <div className="tablet-image-text">
                <div className="tablet-text-17">
                  <ul>
                    <li><b>All day:</b> Sử dụng khi tiệm nghỉ cả ngày. </li>
                  </ul>
                </div>
                <img className="tablet-image-7" src="images/7-3.jpg"/>
              </div>
              <div className="tablet-image-text-2">
                <div className="tablet-text-18">
                  <ul>
                    <li><b>Starts: </b>Thời điểm Time Off bắt đầu.</li>
                  </ul>
                </div>
                <img className="tablet-image-8" src="images/7-1.jpg"/>
              </div>
              <div className="tablet-image-text-3">
                <div className="tablet-text-19">
                  <ul>
                    <li><b>Ends:</b>Thời điểm Time Off kết thúc.</li>
                  </ul>
                </div>
                <img className="tablet-image-9" src="images/7-2.jpg"/>
              </div>
              <div className="tablet-text-20">
              <b>Lưu ý:</b> quý anh/chị vui lòng chọn thời điểm Time Off kết thúc trước rồi mới chọn thời điểm bắt đầu để tránh phần mềm báo lỗi là “
                <span className="tablet-text-20-1">
                  End time cannot be before or the same as the start time
                </span>”
              </div>
              <div className="tablet-text-21">
                Ví dụ: Quý anh/chị muốn cài đặt Time Off vào ngày 20 tháng 4 năm 2023. 
              </div>
              <div className="tablet-text-image">
                <div className="tablet-text-22">
                  Đầu tiên, quý anh/chị chỉnh mục <b>Ends</b> thành
                  <img className="tablet-image-10" src="images/7-2.jpg"/>
                </div>
              </div>
              <div className="tablet-text-image-2">
                <div className="tablet-text-23">
                  và sau đó mới chỉnh mục <b>Starts</b> như hình
                  <img className="tablet-image-11" src="images/7-1.jpg"/>
                </div>
              </div>
              <div className="tablet-text-6-6">
                ______________________________________________
              </div>
              <div className="tablet-text-24">
                Bước 8: Quý anh/chị kiểm tra lại thời gian Starts và Ends rồi nhấn vào <b>Create</b> để lưu lịch Time Off của nhân viên này.
              </div>
              <div className="tablet-image-12">
                <img className="tablet-image-12-1" src="images/8.jpg"/>
              </div>
              <div className="tablet-text-6-7">
                ______________________________________________
              </div>
              <div className="tablet-text-25">
                Bước 9: Lặp lại với tất cả các nhân viên.
              </div>
              <div className="tablet-image-13">
                <img className="tablet-image-13-1" src="images/9.jpg"/>
              </div>
            </div>
          </div>
        </div>



      <style jsx>{`
        @media screen and (min-width: 1025px){
          .mobile,
          .tablet{
            display: none;
          }
        }

        .page{

          margin: 0px;
        }
        
        .desktop{
        }

        .desktop-logo-name{
          background-color: #1d90f5;
          display: flex;
        }
        
        .desktop-logo{

        }
        
        .desktop-logo-tiem{
          padding-top: 20px;
          max-width: 60px;
          margin-left: 250px;
          text-align: start;

        }
        
        .desktop-name{
          color: #ffffff;
          margin-left: 100px;
          margin-right: 100px;
          font-weight: bold;
          font-size: 40px;
          padding-top: 20px;
          padding-bottom: 20px;
          text-align: center;

        }
        
        .desktop-nd{
          margin: auto;
        }
        
        .desktop-text-1{
          font-size: 32px;
          font-weight: bold;
          text-align: center;
          margin: auto;
          margin-top: 25px;
        }
        
        .desktop-text-2{
          margin-left: 400px;
          margin-right: 400px;
          margin-top: 8px;
          font-size: 18px;
          text-align: center;
        }
        
        .desktop-text-2-1{
          display: grid;
        }
        
        .desktop-logo-text{
          margin-top: 20px;
        }

        .desktop-text-3{
          margin-top: 5px;
          padding-bottom: 10px;
          font-size: 20px;
          text-align: center;
        }

        .desktop-text-3-1{
          margin-top: 100px;
          margin-right: 5px;
          font-size: 50px;
        }
        
        .desktop-text-4{
          margin: auto;
          text-align: center;
          margin-top: 30px;
          font-size: 20px;
        }
        
        .desktop-image-1{
          margin-top: 40px;
          text-align: center;
        }
        
        .desktop-image-1-1{
          max-width: 400px;
        }
        
        .desktop-text-5{
          margin-left: 600px;
          margin-right: 600px;
          margin-top: 20px;
          font-size: 16.5px;
        }
        
        .desktop-text-5-1-1{
          margin-bottom: 5px;
        }
        
        .desktop-text-6{
          margin-top: 80px;
          text-align: center;
          font-size: 30px;
          font-weight: 900;
          color: #c8c5c5;
        }
        
        .desktop-text-6-1{
          margin-top: 80px;
          text-align: center;
          font-size: 30px;
          font-weight: 900;
          color: #c8c5c5;
        }
        
        .desktop-text-6-2{
          margin-top: 80px;
          text-align: center;
          font-size: 30px;
          font-weight: 900;
          color: #c8c5c5;
        }
        
        .desktop-text-6-3{
          margin-top: 80px;
          text-align: center;
          font-size: 30px;
          font-weight: 900;
          color: #c8c5c5;
        }
        
        .desktop-text-6-4{
          margin-top: 80px;
          text-align: center;
          font-size: 30px;
          font-weight: 900;
          color: #c8c5c5;
        }
        
        .desktop-text-6-5{
          margin-top: 80px;
          text-align: center;
          font-size: 30px;
          font-weight: 900;
          color: #c8c5c5;
        }
        
        .desktop-text-6-6{
          margin-top: 80px;
          text-align: center;
          font-size: 30px;
          font-weight: 900;
          color: #c8c5c5;
        }
        
        .desktop-text-6-7{
          margin-top: 80px;
          text-align: center;
          font-size: 30px;
          font-weight: 900;
          color: #c8c5c5;
        }
        
        .desktop-text-7{
          margin-top: 55px;
          text-align: center;
          font-size: 20px
        }
        
        .desktop-image-2{
          margin-top: 40px;
          text-align: center;
        }
        
        .desktop-image-2-1{
          max-width: 400px;
        }
        
        .desktop-text-9{ 
          margin-top: 50px;
          margin-left: 300px;
          margin-right: 300px;
          text-align: center;
          font-size: 20px;
        }
        
        .desktop-image-3{
          margin-top: 40px;
          margin-left: 50px;
          margin-right: 50px;
          text-align: center;

        }
        
        .desktop-image-3-1{
          max-width: 400px;
        }
        
        .desktop-text-11{
          margin-left: 300px;
          margin-right: 300px;
          margin-top: 50px;
          font-size: 20px;
          text-align: center;
        }
        
        .desktop-image-4{
          margin-top: 40px;
          text-align: center;
        }
        .desktop-image-4-1{
          max-width: 400px;
        }
        
        .desktop-text-13{
          margin-left: 600px;
          margin-right: 600px;
          margin-top: 20px;
          font-size: 17.5px;
        }
        
        .desktop-text-13-1{
          display: grid;
        }
        
        .desktop-text-14{
          margin-left: 300px;
          margin-right: 300px;
          margin-top: 30px;
          text-align: center;
          font-size: 20px;
        }
        
        .desktop-image-5{
          margin-top: 40px;
          text-align: center;
        }
        
        .desktop-image-5-1{
          max-width: 400px;
        }
        
        
        .desktop-text-15{
          margin-left: 300px;
          margin-right: 300px;
          margin-top: 50px;
          text-align: center;
          font-size: 20px;
        }
        
        .desktop-image-6{
          margin-top: 50px;
          text-align: center;
        }
        
        .desktop-image-6-1{
          max-width: 400px;
        }
        
        .desktop-text-16{
          margin-left: 200px;
          margin-right: 200px;
          margin-top: 50px;
          text-align: center;
          font-size: 20px;
        }
        
        .desktop-text-17{
          padding-left: 300px;
          padding-right: 100px;
          margin-top: 30px;
          text-align: start;
          font-size: 20px;
        }
        
        .desktop-image-7{
          margin-top: 40px;
          text-align: center;
          max-width: 500px;
        }
        
        .desktop-text-18{
          padding-left: 300px;
          padding-right: 100px;
          margin-top: 30px;
          text-align: start;
          font-size: 20px;
        }
        
        .desktop-image-8{
          margin-top: 40px;
          text-align: center;
          max-width: 500px;
        }
        
        .desktop-text-19{
          padding-left: 300px;
          padding-right: 100px;
          margin-top: 30px;
          text-align: start;
          font-size: 20px;
        }
        
        .desktop-image-9{
          margin-top: 40px;
          text-align: center;
          max-width: 500px;
        }
        
        .desktop-text-20{
          margin-left: 200px;
          margin-right: 200px;
          margin-top: 10px;
          text-align: center;
          font-size: 20px;
        }
        
        .desktop-text-20-1{
          color: red;
        }
        
        .desktop-text-21{
          margin-left: 300px;
          margin-right: 300px;
          margin-top: 50px;
          text-align: center;
          font-size: 20px;
        }
        
        .desktop-text-22{
          margin-left: 300px;
          margin-right: 300px;
          margin-top: 50px;
          text-align: center;
          font-size: 20px;
        }
        
        .desktop-image-10{
          max-width: 300px;
        }
        
        .desktop-text-23{
          margin-left: 300px;
          margin-right: 300px;
          margin-top: 50px;
          text-align: center;
          font-size: 20px;
        }
        
        .desktop-image-11{
          max-width: 300px;
        }
        
        .desktop-text-24{
          margin-left: 300px;
          margin-right: 300px;
          margin-top: 50px;
          margin-bottom: 20px;
          text-align: center;
          font-size: 20px;
        }
        
        .desktop-image-12{
          margin-top: 40px;
          text-align: center;
        }
        
        .desktop-image-12-1{
          max-width: 400px;
        }
        
        .desktop-text-25{
          margin-left: 300px;
          margin-right: 300px;
          margin-top: 50px;
          margin-bottom: 20px;
          text-align: center;
          font-size: 20px;
        }
        
        .desktop-image-13{
          margin-top: 40px;
          margin-left: 200px;
          margin-right: 200px;
          text-align: center;
        }
        
        .desktop-image-13-1{
          max-width: 400px;
        }
        
        @media screen and (max-width: 480px){
          .desktop,
          .tablet{
            display: none;
          }
        }
        
        .mobile{
        }
        
        .mobile-logo-name{
          background-color: #1d90f5; 
          display: flex;
        }
        
        .mobile-logo{
          padding: 30px;
          margin: auto;
          text-align: start;
        }
        
        .mobile-logo-tiem{
          max-width: 50px;
        }
        
        .mobile-name{
          padding: 30px;
          font-size: 30px;
          font-weight: 700;
          color: #ffffff;
        }
        
        
        
        .mobile-text-1{
          margin-top: 40px;
          margin-left: 10px;
          margin-right: 10px;
          font-size: 25px;
          font-weight: 650;
          text-align: start;
        }
        
        .mobile-text-2{
          margin-top: 10px;
          font-size: 18px;
          text-align: start;
        }
        
        .mobile-text-3{
          margin-top: 10px;
          margin-left: 10px;
          font-size: 18px;
          text-align: start;
        }
        
        .mobile-text-4{
          margin-top: 10px;
          font-size: 16.5px;
          text-align: center;
        }
        
        .mobile-image-1{
          margin-top: 40px;
          text-align: center;
        }
        
        .mobile-image-1-1{
          max-width: 100%;
        }
        
        .mobile-text-6{
          margin-top: 80px;
          text-align: center;
          font-size: 15px;
          font-weight: 600;
          color: #c8c5c5;
        }
        
        .mobile-text-6-1{
          margin-top: 80px;
          text-align: center;
          font-size: 15px;
          font-weight: 600;
          color: #c8c5c5;
        }
        
        .mobile-text-6-2{
          margin-top: 80px;
          text-align: center;
          font-size: 15px;
          font-weight: 600;
          color: #c8c5c5;
        }
        
        .mobile-text-6-3{
          margin-top: 80px;
          text-align: center;
          font-size: 15px;
          font-weight: 600;
          color: #c8c5c5;
        }
        
        .mobile-text-6-4{
          margin-top: 80px;
          text-align: center;
          font-size: 15px;
          font-weight: 600;
          color: #c8c5c5;
        }
        
        .mobile-text-6-5{
          margin-top: 80px;
          text-align: center;
          font-size: 15px;
          font-weight: 600;
          color: #c8c5c5;
        }
        
        .mobile-text-6-6{
          margin-top: 80px;
          text-align: center;
          font-size: 15px;
          font-weight: 600;
          color: #c8c5c5;
        }
        
        .mobile-text-6-7{
          margin-top: 80px;
          text-align: center;
          font-size: 15px;
          font-weight: 600;
          color: #c8c5c5;
        }
        
        .mobile-text-7{
          margin-top: 30px;
          font-size: 16.5px;
          text-align: center;
        }
        
        .mobile-image-2{
          margin-top: 40px;
          text-align: center;
        }
        
        .mobile-image-2-1{
          max-width: 100%;
        }
        
        .mobile-text-9{
          margin-top: 40px;
          font-size: 16.5px;
          text-align: center;
        }
        
        .mobile-image-3{
          margin-top: 40px;
          text-align: center;
        }
        
        .mobile-image-3-1{
          max-width: 100%;
        }
        
        .mobile-text-11{
          margin-top: 50px;
          text-align: center;
          font-size: 16.5px;
        }
        
        .mobile-image-4{
          margin-top: 40px;
          text-align: center;
        }
        
        .mobile-image-4-1{
          max-width: 100%;
        }
        
        .mobile-text-14{
          margin-top: 50px;
          text-align: center;
          font-size: 16.5px;
        }
        
        .mobile-image-5{
          margin-top: 40px;
          text-align: center;
        }
        
        .mobile-image-5-1{
          max-width: 100%;
        }
        
        .mobile-text-15{
          margin-top: 50px;
          text-align: center;
          font-size: 16.5px;
        }
        
        .mobile-image-6{
          margin-top: 40px;
          text-align: center;
        }
        
        .mobile-image-6-1{
          max-width: 100%;
        }
        
        .mobile-text-16{
          margin-top: 50px;
          text-align: center;
          font-size: 16.5px;
        }
        
        .mobile-text-17{
          margin-top: 30px;
          font-size: 16.5px;
        }
        
        .mobile-image-7{
          margin-top: 10px;
          max-width: 100%;
          text-align: center;
        }
        
        .mobile-text-18{
          margin-top: 30px;
          font-size: 16.5px;
        }
        
        .mobile-image-8{
          margin-top: 10px;
          max-width: 100%;
          text-align: center;
        }
        
        .mobile-text-19{
          margin-top: 30px;
          font-size: 16.5px;
        }
        
        .mobile-image-9{
          margin-top: 10px;
          max-width: 100%;
          text-align: center;
        }
        
        .mobile-text-20{
          margin-top: 40px;
          font-size: 16.5px;
          text-align: start;
          line-height: 20px;
        }
        
        .mobile-text-20-1{
          color: red;
        }
        
        .mobile-text-21{
          margin-top: 20px;
          font-size: 16.5px;
          text-align: start;
          line-height: 20px;
        }
        
        .mobile-text-22{
          margin-top: 20px;
          font-size: 16.5px;
          text-align: center;
        }
        
        .mobile-image-10{
          max-width: 100%;
        }
        
        .mobile-text-23{
          margin-top: 20px;
          font-size: 16.5px;
          text-align: center;
        }
        
        .mobile-image-11{
          max-width: 100%;
        }
        
        .mobile-text-24{
          margin-top: 40px;
          text-align: center;
          font-size: 16.5px;
        }
        
        .mobile-image-12{
          margin-top: 40px;
          text-align: center;
        }
        
        .mobile-image-12-1{
          max-width: 100%;
        }
        
        .mobile-text-25{
          margin-top: 50px;
          text-align: center;
          font-size: 16.5px;
        }
        
        .mobile-image-13{
          margin-top: 40px;
          text-align: center;
        }
        
        .mobile-image-13-1{
          max-width: 100%;
        }
        
        @media screen and (min-width: 481px) and (max-width: 1024px){
          .desktop,
          .mobile{
            display: none;
          }
        }

        .tablet{
        }

        .tablet-logo-name{
          background-color: #1d90f5;
          display: flex;
        }
        
        .tablet-logo{

        }
        
        .tablet-logo-tiem{
          padding-top: 20px;
          max-width: 60px;
          margin-left: 100px;
          text-align: start;
          border-radius: 0px;
        }
        
        .tablet-name{
          color: #ffffff;
          margin-left: 100px;
          margin-right: 100px;
          font-weight: bold;
          font-size: 40px;
          padding-top: 20px;
          padding-bottom: 20px;
          text-align: center;
        }

        .tablet-nd{
        }

        .tablet-text-1{
          margin-top: 20px;
          margin-left: 50px;
          font-size: 30px;
          font-weight: bold;
          text-align: start;
        }

        .tablet-text-2{
          margin-top: 20px;
          margin-left: 30px;
          margin-right: 30px;
          font-size: 20px;
          text-align: center;
        }

        .tablet-logo-text{
          margin-top: 10px;
        }

        .tablet-text-3{
          font-size: 18.5px;
        }

        .tablet-text-4{
          margin-top: 5px;
          text-align: center;
          font-size: 18px;

        }

        .tablet-image-1{
          margin-top: 20px;
          text-align: center;
        }

        .tablet-image-1-1{
          max-width: 450px;
        }

        .tablet-text-6{
          margin-top: 50px;
          text-align: center;
          font-size: 25px;
          font-weight: 900;
          color: #c8c5c5;
        }
        
        .tablet-text-6-1{
          margin-top: 50px;
          text-align: center;
          font-size: 25px;
          font-weight: 900;
          color: #c8c5c5;
        }
        
        .tablet-text-6-2{
          margin-top: 50px;
          text-align: center;
          font-size: 25px;
          font-weight: 900;
          color: #c8c5c5;
        }
        
        .tablet-text-6-3{
          margin-top: 50px;
          text-align: center;
          font-size: 25px;
          font-weight: 900;
          color: #c8c5c5;
        }
        
        .tablet-text-6-4{
          margin-top: 50px;
          text-align: center;
          font-size: 25px;
          font-weight: 900;
          color: #c8c5c5;
        }
        
        .tablet-text-6-5{
          margin-top: 50px;
          text-align: center;
          font-size: 25px;
          font-weight: 900;
          color: #c8c5c5;
        }
        
        .tablet-text-6-6{
          margin-top: 50px;
          text-align: center;
          font-size: 25px;
          font-weight: 900;
          color: #c8c5c5;
        }
        
        .tablet-text-6-7{
          margin-top: 50px;
          text-align: center;
          font-size: 25px;
          font-weight: 900;
          color: #c8c5c5;
        }

        .tablet-text-7{
          margin-top: 10px;
          text-align: center;
          font-size: 18px;
        }

        .tablet-image-2{
          margin-top: 30px;
          text-align: center;
        }

        .tablet-image-2-1{
          max-width: 450px;
        }

        .tablet-text-9{
          margin-top: 20px;
          text-align: center;
          font-size: 18px;
        }

        .tablet-image-3{
          margin-top: 20px;
          text-align: center;
        }

        .tablet-image-3-1{
          max-width: 450px;
        }

        .tablet-text-11{
          margin-top: 20px;
          text-align: center;
          font-size: 18px;
        }

        .tablet-image-4{
          margin-top: 30px;
          text-align: center;
        }

        .tablet-image-4-1{
          max-width: 450px;
        }

        .tablet-text-14{
          margin-top: 20px;
          text-align: center;
          font-size: 18px;
        }

        .tablet-image-5{
          margin-top: 30px;
          text-align: center;
        }
        
        .tablet-image-5-1{
          max-width: 450px;
        }

        .tablet-text-15{
          margin-top: 20px;
          text-align: center;
          font-size: 18px;
        }

        .tablet-image-6{
          margin-top: 30px;
          text-align: center;
        }

        .tablet-image-6-1{
          max-width: 450px;
        }

        .tablet-text-16{
          margin-top: 20px;
          text-align: center;
          font-size: 18px;
        }

        .tablet-text-17{
          margin-top: 5px;
          margin-left: 20px;
          text-align: start;
          font-size: 17.5px;
        }

        .tablet-image-7{
          margin-top: 5px;
          text-align: center;
          max-width: 470px;
        }

        .tablet-text-18{
          margin-top: 5px;
          margin-left: 20px;
          text-align: start;
          font-size: 17.5px;
        }

        .tablet-image-8{
          margin-top: 5px;
          text-align: center;
          max-width: 400px;
        }

        .tablet-text-19{
          margin-top: 5px;
          margin-left: 20px;
          text-align: start;
          font-size: 17.5px;
        }

        .tablet-image-9{
          margin-top: 5px;
          text-align: center;
          max-width: 400px;
        }
        
        .tablet-text-20{
          margin-top: 5px;
          margin-left: 50px;
          margin-right: 50px;
          text-align: center;
          font-size: 18px;
        }

        .tablet-text-20-1{
          color: red;
        }

        .tablet-text-21{
          margin-top: 5px;
          text-align: center;
          font-size: 17.5px;
        }

        .tablet-text-22{
          margin-top: 5px;
          text-align: center;
          font-size: 17.5px;
        }

        .tablet-image-10{
          text-align: center;
          max-width: 400px;
        }

        .tablet-text-23{
          margin-top: 5px;
          text-align: center;
          font-size: 17.5px;
        }

        .tablet-image-11{
          text-align: center;
          max-width: 400px;
        }

        .tablet-text-24{
          margin-top: 20px;
          margin-left: 50px;
          margin-right: 50px;
          text-align: center;
          font-size: 18px;
        }

        .tablet-image-12{
          margin-top: 30px;
          text-align: center;
        }

        .tablet-image-12-1{
          max-width: 450px;
        }

        .tablet-text-25{
          margin-top: 20px;
          text-align: center;
          font-size: 18px;
        }

        .tablet-image-13{
          margin-top: 30px;
          text-align: center;
        }

        .tablet-image-13-1{
          max-width: 450px;
        }


      `}</style>
    </>
  )
}
