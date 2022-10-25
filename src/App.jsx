import React from "react";
import './style.css'


const data1 = [{
    url: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/4/3/0/4/4304031141fc9b466975dd87f856239f.jpg",
    title: 'Chắc nên thôi',
    single: 'Lynk Lee',
    time: '1 ngày trước'
  },

  {
    url: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/3/4/0/7/3407c71c13a5d4a646a887f5900871de.jpg",
    title: 'Giấc Mơ Đẹp',
    single: 'Nguyễn Trọng Tài',
    time: '2 ngày trước'
  },

  {
    url: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/3/5/1/8/351803934294554997dea64d724efd51.jpg",
    title: 'Người Như Anh',
    single: 'Mai Tiến Dũng',
    time: '3 ngày trước'
  },

  {
    url: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/3/6/0/4/3604b16d9ff451bbe8e89a25756d4380.jpg",
    title: 'Ký Ức Về Em',
    single: 'Dee Trần',
    time: '3 ngày trước'
  },

  {
    url: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/0/7/b/1/07b1f6fa4db5d2c45aedd0b0412f95c5.jpg",
    title: 'Angel In Me (New Version)',
    single: 'Thảo Trang',
    time: '3 ngày trước'
  },

  {
    url: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/3/9/8/d/398dd75c920409a73359c8a62f02a166.jpg",
    title: 'With You',
    single: 'Gabry Ponte, JP Cooper',
    time: '6 ngày trước'
  },

  {
    url: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/3/a/4/a/3a4a51d89907e52666d76e15faeee9b4.jpg",
    title: 'WDIA (Would Do It Again)',
    single: 'Rosa Linn, Duncan Laurence',
    time: '7 ngày trước'
  },

  {
    url: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/3/b/1/7/3b1793858ffb3f0def4cb2e64292bb1f.jpg",
    title: 'Thất Tình Thường Xấu Tính',
    single: 'LyLy, Ricky Star',
    time: '8 ngày trước'
  },

  {
    url: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/4/6/4/d/464dcb7a89ee1f725a62ca45e247b0ad.jpg",
    title: 'Hẹn Em Trong Ký Ức',
    single: 'Thái Đinh, Nam Kun, BMZ',
    time: '9 ngày trước'
  },

  {
    url: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/5/2/9/2/5292d3f5146bd192c58139935cc6dce7.jpg",
    title: 'Lời Có Cánh',
    single: 'OSAD',
    time: '10 ngày trước'
  },

  {
    url: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/4/d/0/0/4d00828fa8153ec0c4f23cd8aa28b45c.jpg",
    title: 'Nỗi Nhớ Khi Xưa',
    single: 'Kha',
    time: '11 ngày trước'
  },

  {
    url: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/5/3/5/a/535a6b4f34045d2b83a73eabc6358b88.jpg",
    title: 'Cô Đơn Trên Sofa',
    single: 'Hồ Ngọc Hà',
    time: '12 ngày trước'
  },
]


const SubApp = ({ title, single, time, url }) => {
  return (
    <>
        <div className="item">
          <img className="img" src={url} alt='img' />
          <div className="title">{title}</div>
          <a href="#" className="single">{single}</a>
          <span className="time">{time}</span>
          <span className="ba-cham">...</span>
        </div>
      
    </>
  )
}

const App = () => {
  return (
    <div className="WrapEvething">
    <div className="container">
      <h1>Mới Phát Hành</h1>
      <div className="wrap1">
        <div className="left">
      <div className="btn1">BÀI HÁT</div>
      <div className="btn2">ALBUM</div>
        </div>
        <div className="right">
          <span>TẤT CẢ</span>
        </div>
    </div>
      <div className="component">
      {data1.map((el) => {
        return <SubApp
        url={el.url}
        title={el.title}
        single={el.single}
        time={el.time}
        />
      })}
      </div>
      </div>
    </div>
  )
}

export default App;