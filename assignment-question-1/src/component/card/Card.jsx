import styles from "./Card.module.css";
import PropTypes from 'prop-types';

const Card = ({ cardData, title }) => {
  if (!cardData) return null;

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      {Object.entries(cardData).map(([k, v]) => {
        console.log(k, v);
        return (
          <div className={styles.cell} key={k}>
            <div className={styles.value}>{k}</div>
            <div className={styles.value}>{v}</div>
          </div>
        );
      })}
    </div>
  );
};

Card.propTypes = {
  cardData: PropTypes.any,
  title: PropTypes.string.isRequired,
};

Card.defaultProps = {
  cardData: null,
  title: 'Card Title',
};

export default Card;
