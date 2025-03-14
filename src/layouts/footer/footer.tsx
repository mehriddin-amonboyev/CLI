import { Layout } from "antd";
import { Link } from "react-router-dom";
import style from './footer.module.css'
const { Footer } = Layout;

export const FooterLayout = () => {
  return (
    <Footer style={{
      maxWidth: 800,
      maxHeight: 200,
      textAlign: 'center'
    }}>
      Taklif va shikoyatlar uchun
      <Link to={'https://t.me/mehriddin_amonboyev'} > Mehriddin Amonboyev </Link>
      ga murojaat qilishingiz mumkin
      <div className={style.footer__stic}>
      </div>
    </Footer>
  )
}