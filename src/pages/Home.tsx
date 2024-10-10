import { IconBrandFacebookFilled, IconBrandLinkedin, IconBrandTelegram, IconDownload } from '@tabler/icons-react'
import personalPhoto from '../assets/Personal Photo.png'
import style from '../style/pages/home.module.css'




export default function Home() {
    return (
        <>
            <div className={style.home_container}>
                <div className={style.home_content}>
                    <h2>Welcome To My World</h2>
                    <h1>
                        <span>Hi i  am</span>
                        <span>Mohammed mosaad</span>
                        front end developer.
                    </h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <div className={style.home_footer}>
                        <a className={style.cvBtn} href="https://drive.usercontent.google.com/download?id=16JVn_KbHbb8ORCaQvsJjBddSIvEevSIm&export=download&authuser=0&confirm=t&uuid=c3cdc746-0453-44eb-b110-b9a0db075ac9&at=AN_67v3nhkFBY0Ij8h3OIUdCygj9:1728587017129">
                            Download CV <IconDownload/>
                        </a>
                        <div className={style.social}>
                            <a href="https://www.facebook.com/profile.php?id=100009168538479&mibextid=ZbWKwL">
                                <IconBrandFacebookFilled/>
                            </a>
                            <a href="https://www.linkedin.com/in/mohamed-mos-aad">
                                <IconBrandLinkedin/>
                            </a>
                            <a href="https://t.me/Mohamed_Mos_aad">
                                <IconBrandTelegram/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={style.personal_photo}>
                    <img src={personalPhoto} alt="Personal Photo" />
                </div>
            </div>
        </>
    )
}
