import { useState } from 'react'
import { Menu } from "antd";
import './Home.css'; // Import Ant Design styles

const Home = () => {
   const [current, setCurrent] = useState('District');
   const items = [
  {
    label: 'Careers',
    key: 'Careers'
  },
      {
    label: 'Elementary Schools',
    key: 'Elementary'
  },
    {
    label: 'Our District',
    key: 'District'
  },
  {
    label: 'Board of Trustees',
    key: 'Board',
  },
  {
    label: 'Events',
    key: 'Events',
  }]
  return (<>
    <Menu onClick={(e) => setCurrent(e.key)} selectedKeys={[current]} mode="horizontal" items={items} />
    <img src="https://resources.finalsite.net/images/f_auto,q_auto/v1751384838/katyisdorg/lhmpbgpxfv4aersdiqt9/New_Student_Pre-Registration.png" className="logo" style={{height: '30rem', position: 'relative', zIndex: '0'}} alt="Cleveland ISD Logo" />
  </>
  )
}

export default Home