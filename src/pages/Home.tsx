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
                        front end developer.front end developer.
                    </h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <div className={style.home_footer}>
                        <button>Download CV</button>
                        <div className={style.social}>

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
