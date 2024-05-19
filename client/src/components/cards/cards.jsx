import style from "./cards.module.css";

const Cards = ({ banner, perf, nome, desc1, desc2, link, icon, link2, icon2, link3, icon3, link4, icon4}) => {
  return (
    <div className={style.Master}>
      <div className={style.Card}>
        <div className={style.Banner}>
          <img src={banner} alt="banner..." />
          <div className={style.Perfil}>
            <img src={perf} alt="foto de perfil..." />
          </div>
          <div className={style.Nome}>
            <h3>{nome}</h3>
          </div>
        </div>
        <div className={style.Bio}>
          <div className={style.Desc1}>
            <h5>{desc1}</h5>
          </div>
          <div className={style.Divisor} />
          <div className={style.Sobre}>
            <h2>SOBRE MIM</h2>
            <h5>{desc2}</h5>
          </div>
        </div>
        <div>
        <div className={style.Links}>
        <a href={link} target="_blank">
           <ion-icon name={icon} />
        </a>
        <a href={link2} target="_blank">
           <ion-icon name={icon2} />
        </a>
        <a href={link3} target="_blank">
           <ion-icon name={icon3} />
        </a>
        <a href={link4} target="_blank">
           <ion-icon name={icon4} />
        </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
