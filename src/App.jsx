import React from "react";
import './style.css'


const data1 = [
  {
    url: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/4/3/0/4/4304031141fc9b466975dd87f856239f.jpg",
    title: 'Chắc nên thôi',
    single: 'Lynk Lee',
    time: '1 ngày trước'
  },
  {
    url: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/4/a/a/3/4aa335ebaa68c666810fb13f1f66e671.jpg",
    title: 'Giấc Mơ Đẹp',
    single: 'Nguyễn Trọng Tài',
    time: '2 ngày trước'
  },
  {
    url: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/4/a/a/3/4aa335ebaa68c666810fb13f1f66e671.jpg",
    title: 'Chắc nên thôi',
    single: 'Lynk Lee',
    time: '1 ngày trước'
  },
  {
    url: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/0/7/b/1/07b1f6fa4db5d2c45aedd0b0412f95c5.jpg",
    title: 'Chắc nên thôi',
    single: 'Lynk Lee',
    time: '1 ngày trước'
  },
  {
    url: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/0/7/b/1/07b1f6fa4db5d2c45aedd0b0412f95c5.jpg",
    title: 'Angel In Me (New Version)',
    single: 'Thảo Trang',
    time: '3 ngày trước'
  },
  {
    url: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/4/a/a/3/4aa335ebaa68c666810fb13f1f66e671.jpg",
    title: 'Chắc nên thôi',
    single: 'Lynk Lee',
    time: '1 ngày trước'
  },
  {
    url: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/4/a/a/3/4aa335ebaa68c666810fb13f1f66e671.jpg",
    title: 'Chắc nên thôi',
    single: 'Lynk Lee',
    time: '1 ngày trước'
  },
  {
    url: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/4/a/a/3/4aa335ebaa68c666810fb13f1f66e671.jpg",
    title: 'Chắc nên thôi',
    single: 'Lynk Lee',
    time: '1 ngày trước'
  },
  {
    url: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/4/a/a/3/4aa335ebaa68c666810fb13f1f66e671.jpg",
    title: 'Chắc nên thôi',
    single: 'Lynk Lee',
    time: '1 ngày trước'
  },
  {
    url: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/4/a/a/3/4aa335ebaa68c666810fb13f1f66e671.jpg",
    title: 'Chắc nên thôi',
    single: 'Lynk Lee',
    time: '1 ngày trước'
  },
  {
    url: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/4/a/a/3/4aa335ebaa68c666810fb13f1f66e671.jpg",
    title: 'Chắc nên thôi',
    single: 'Lynk Lee',
    time: '1 ngày trước'
  },
  {
    url: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/4/a/a/3/4aa335ebaa68c666810fb13f1f66e671.jpg",
    title: 'Chắc nên thôi',
    single: 'Lynk Lee',
    time: '1 ngày trước'
  },
]


const SubApp = ({ title, single, time, url }) => {
  return (
    <>
        <div className="item">
          <img src={url} alt='img' />
          <title>{title} hahaha</title>
          <span className="single">{single}</span>
          <span className="time">{time}</span>
        </div>
      
    </>
  )
}

const App = () => {
  return (
    <>
      {data1.map((el) => {
        <SubApp
          url={el.url}
          title={el.title}
          single={el.single}
          time={el.time}
        />
      })}
    </>
  )
}

export default App;