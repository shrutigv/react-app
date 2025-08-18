import { useEffect, useState } from 'react'
import { Menu } from "antd";
import './Home.css'; // Import Ant Design styles

const Home = () => {
   const [current, setCurrent] = useState('District');
   const items = [
  {
    label: 'Careers',
    key: 'careers'
  },
      {
    label: 'Elementary Schools',
    key: 'elementary'
  },
    {
    label: 'Our District',
    key: 'district'
  },
  {
    label: 'Board of Trustees',
    key: 'board',
  },
  {    label: 'Transportation',
    key: 'transportation', 
  },
  {
    label: 'Events',
    key: 'events',
  }]
  useEffect(() => {
    if(current === 'transportation') {
      window.location.href = 'https://webquery-katy-tx.etstack.io/#/home';
    } else if(current === 'events') {
      window.location.href = 'https://www.katyisd.org/our-district/our-calendar';
    }
    
  }, [current]);
  return (<>
    <Menu onClick={(e) => setCurrent(e.key)} selectedKeys={[current]} mode="horizontal" items={items} />
    <img src="https://resources.finalsite.net/images/f_auto,q_auto/v1751384838/katyisdorg/lhmpbgpxfv4aersdiqt9/New_Student_Pre-Registration.png" className="logo" style={{height: '30rem', position: 'relative', zIndex: '0'}} alt="Cleveland ISD Logo" />
  </>
  )
}

export default Home