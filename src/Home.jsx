import Navbar from "./pages/Navbar";
import './style/Home.css'
import {BsCircleFill} from 'react-icons/bs'
import { IoHome, IoCall,IoMailUnread } from "react-icons/io5";
import { FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";


const Home = () =>{
    return(
        <>
            <Navbar/>
            <div className="hero-container">
                <div className="hero1">
                    <h1 style={{fontSize:'60px', color:'#164A41'}}>Wisata Rumah Jiwa <span style={{color:'black'}}><br />Yogyakarta</span></h1>
                    <p>Kami menawarkan berbagai kegiatan yang penuh dengan keceriaan dan kehangatan serta pengalaman yang tak terlupakan</p>
                    <hr />
                    <button style={{fontSize:'15px'}}>Cari Tahu Lebih Lanjut</button>
                </div>
                <div className="hero2">
                    <div className="hero-pic1">
                        <img src="./images/gambar1.jpeg" alt="" />
                    </div>
                    <div className="hero-pic2">

                    </div>
                </div>
            </div>
            <div className="about-container">
                <div className="about1">
                    <div className="about-pic1">
                        <img src="./images/gambar2.jpg" alt="" />
                    </div>
                    <div className="about-pic2">
                        <img src="./images/gambar3.png" alt="" />
                    </div>
                </div>
                <div className="about2">
                    <h2>About <br /><span style={{color:'#164A41'}}>Rumah Jiwa Yogyakarta </span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button style={{fontSize:'15px', fontWeight:'bold'}}>More About</button>
                </div>
            </div>
            <div className="benefit-container">
                <div className="benefit1">
                    <h2 style={{marginBottom:'5vh'}}>Macam-Macam Kegiatan <span style={{color: '#164A41'}}><br />Rumah Jiwa Yogyakarta</span></h2>
                    <p style={{color:'#4D774E', fontWeight:'bold', fontSize:'20px'}}><BsCircleFill style={{marginRight:'2vh', color:'#164A41'}}/>
                        Bermain Bersama Oma Opa <span  style={{marginLeft:'4.5vh', color:'black', fontSize:'15px', fontWeight:'300'}}> <br />Waktu bermain yang menyenangkan</span>
                    </p>
                    <p style={{color:'#4D774E', fontWeight:'bold', fontSize:'20px'}}><BsCircleFill style={{marginRight:'2vh', color:'#164A41'}}/>
                        Membuat Batik Sibori <span  style={{marginLeft:'4.5vh', color:'black', fontSize:'15px', fontWeight:'300'}}> <br />Belajar membatik bersama</span>
                    </p>
                    <p style={{color:'#4D774E', fontWeight:'bold', fontSize:'20px'}}><BsCircleFill style={{marginRight:'2vh', color:'#164A41'}}/>
                        Melukis Bersama Oma Opa <span  style={{marginLeft:'4.5vh', color:'black', fontSize:'15px', fontWeight:'300'}}> <br />Aktivitas seni yang kreatif & menyenangkan</span>
                    </p>
                    <p style={{color:'#4D774E', fontWeight:'bold', fontSize:'20px'}}><BsCircleFill style={{marginRight:'2vh', color:'#164A41'}}/>
                        Bercerita dan Menari Bersama <span  style={{marginLeft:'4.5vh', color:'black', fontSize:'15px', fontWeight:'300'}}> <br />Liburan yang penuh kegembiraan</span>
                    </p>
                </div>
                <div className="benefit2">
                    <img src="./images/gambar4.png" alt="" />
                </div>
            </div>
            <div className="product-container">
                <div className="title">
                    <h2>OUR OWN PRODUCT</h2>
                </div>
               
                <div className="card-container">
                    <div className="card">
                        <img src="./images/produk1.png" alt="produk1" />
                        <h4 style={{textAlign:'center'}}>Keripik Jamur Lunas</h4>
                        <hr />
                        <p style={{textAlign:'center', fontSize:'13px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        <span style={{fontWeight:'bold'}}><br /><br />Rp. 25.000 </span>
                        </p>
                    </div>
                    <div className="card">
                        <img src="./images/produk2.png" alt="produk2" />
                        <h4 style={{textAlign:'center'}}>Keripik Jamur Lunas</h4>
                        <hr />
                        <p style={{textAlign:'center', fontSize:'13px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        <span style={{fontWeight:'bold'}}><br /><br />Rp. 25.000 </span>
                        </p>
                    </div>
                    <div className="card">
                        <img src="./images/produk1.png" alt="produk1" />
                        <h4 style={{textAlign:'center'}}>Keripik Jamur Lunas</h4>
                        <hr />
                        <p style={{textAlign:'center', fontSize:'13px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        <span style={{fontWeight:'bold'}}><br /><br />Rp. 25.000 </span>
                        </p>
                    </div>
                    <div className="card">
                        <img src="./images/produk2.png" alt="produk2" />
                        <h4 style={{textAlign:'center'}}>Keripik Jamur Lunas</h4>
                        <hr />
                        <p style={{textAlign:'center', fontSize:'13px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        <span style={{fontWeight:'bold'}}><br /><br />Rp. 25.000 </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="tujuan-container">
                <div className="tujuan-title" style={{marginBottom:'10vh', textAlign:'center'}}>
                    <h2><span style={{color:'#164A41', }}>Wisata Rumah Jiwa</span> Ini Bertujuan</h2>
                </div>
        
                <div className="isi-container">
                    <div className="isi">
                        <img src="./icons/icon1.png" alt="icon1" />
                        <p>
                            Mengubah mindset mengenai pandangan panti yang hanya bisa meminta sumbangan saja
                        </p>
                    </div>
                    <div className="isi">
                        <img src="./icons/icon2.png" alt="icon1" />
                        <p>
                            Memberikan rasa kepercayaan diri lebih kepada dampingan
                        </p>
                    </div>
                    <div className="isi">
                        <img src="./icons/icon3.png" alt="icon1" />
                        <p>
                            Membentuk keluarga harmonis, mendidik anak jadi cerdas & belajar memanusiakan manusia
                        </p>
                    </div>
                </div>
                <div className="isi-container">
                    <div className="isi">
                        <img src="./icons/icon4.png" alt="icon1" />
                        <p>
                            Dengan adanya WRJ ini kami memperkenalkan potensi yang ada di dampingi Panti Hafara
                        </p>
                    </div>
                    <div className="isi">
                        <img src="./icons/icon5.png" alt="icon1" />
                        <p>
                            Memperkenalkan karya dampingan Hafara Batik Sibari
                        </p>
                    </div>
                    <div className="isi">
                        <img src="./icons/icon6.png" alt="icon1" />
                        <p>
                            Menjadi salah satu tempat healing yang bisa berinteraksi dengan Opa, Oma dan ODGJ
                        </p>
                    </div>
                </div>
            </div>
            <div className="donation-container">
                <div className="donation" >
                    <h3 style={{color:'#F1B24A', fontSize:'25px'}}>Contact Us</h3>
                    <p style={{color:'white'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button>DONATION</button>
                </div>
            </div>
            <div className="footer">
                <div className="footer-container" style={{borderRight:'1px solid #164A41'}}>
                    <IoHome size={40} style={{marginLeft:'23vh'}}/>
                    <h3>VISIT US</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <p style={{color:'#164A41', fontWeight:'bold'}}>
                        Jl. Gambiran Blawong Bembem, 
                    </p>
                </div>
                <div className="footer-container">
                    <IoCall size={40} style={{marginLeft:'23vh'}}/>
                    <h3>CALL US</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <p style={{color:'#164A41', fontWeight:'bold'}}>
                        Jl. Gambiran Blawong Bembem, 
                    </p>
                </div>
                <div className="footer-container" style={{borderLeft:'1px solid #164A41'}}>
                    <IoMailUnread size={40} style={{marginLeft:'23vh'}}/>
                    <h3>CONTACT US</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <p style={{color:'#164A41', fontWeight:'bold'}}>
                        Jl. Gambiran Blawong Bembem, 
                    </p>
                </div>
            </div>
            <div className="footer2">
                <div className="tittle">
                    You Can Also Find Us At
                </div>
                <div className="social-media">
                    <div className="socmed">
                        <p><FaYoutube size={20} style={{marginRight:'1vh', color:'#4D774E'}}/>Rumah Jiwa</p>
                    </div>
                    <div className="socmed">
                        <p><FaInstagram size={20} style={{marginRight:'1vh', color:'#4D774E'}}/>Wisatarumahjiwa</p>
                    </div>
                    <div className="socmed">
                        <p><FaTiktok size={20} style={{marginRight:'1vh', color:'#4D774E'}}/>Rumahjiwahafara</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;

/*


*/