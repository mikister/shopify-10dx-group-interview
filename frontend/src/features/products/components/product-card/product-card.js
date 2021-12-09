import styles from "./product-card.module.css";

function ProductCard({
  product: { id, title, description, handle, price, image_url },
}) {
  const cardStyle = {
    "--image_url": `url(${image_url})`,
  };

  return (
    <div className={styles.card}>
      <div className={styles.image} style={cardStyle}></div>

      <div className={styles.info}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
        <small>
          <div>Price: {price} &euro;</div>
          <div>In stock: 0</div>
        </small>
      </div>
    </div>
  );
}

export default ProductCard;
