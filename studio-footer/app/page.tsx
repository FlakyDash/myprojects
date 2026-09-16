import FooterBackground from './footer-background';
import BrandLogo from './brand-logo';

export default function Home() {
  return (
    <footer className="footer" aria-label="Footer">
      <FooterBackground />
      <div className="jobs">
        <span className="tag">нужен демо-сайт?</span>
        <span className="headline job-title">возможности<br />безграничны</span>
        <div className="footer-nav">
          <span>Меню</span>
          <span>О проекте</span>
          <span>В работе</span>
          <span>Написать</span>
        </div>
      </div>
      <div className="logo" role="img" aria-label="Studio logo">
        <BrandLogo />
      </div>
      <div className="contact">
        <span className="tag">на связи</span>
        <div className="headline contact-links">
          <span>хотите так же?</span>
          <span>расскажите свои пожелания*</span>
        </div>
        <p className="note">*это тестовый сайт для демонстрации возможностей</p>
        <div className="socials">
          <span aria-label="LinkedIn"><img src="/linkedin.svg" alt="" width="35" height="35" /></span>
          <span aria-label="Instagram"><img src="/instagram.svg" alt="" width="35" height="35" /></span>
          <span aria-label="TikTok"><img src="/tiktok.svg" alt="" width="35" height="35" /></span>
        </div>
      </div>
    </footer>
  );
}
