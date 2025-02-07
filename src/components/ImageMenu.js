import { Link } from "react-router-dom";

export default function ImageMenu() {
  return (
    <div className="grid-image-collection section-width">
      <a className="collection-grid-1" href="#">
        <div className="grid-info-box">
          <p className="grid-subtitle">hot list</p>
          <h3 className="grid-title">
            <strong>women</strong> collection
          </h3>
          <Link to="/shop">
            <button className="primary-btn ">shop now &rarr;</button>
          </Link>
        </div>
      </a>
      <a className="collection-grid-2" href="#">
        <div className="grid-info-box">
          <p className="grid-subtitle">hot list</p>
          <h3 className="grid-title">
            <strong>men</strong> collection
          </h3>
          <Link to="/shop">
            <button className="primary-btn ">shop now &rarr;</button>
          </Link>{" "}
        </div>
      </a>
      <a className="collection-grid-3" href="#">
        <div className="grid-info-box">
          <p className="grid-subtitle">hot list</p>
          <h3 className="grid-title">
            <strong>kids</strong> collection
          </h3>
          <Link to="/shop">
            <button className="primary-btn ">shop now &rarr;</button>
          </Link>{" "}
        </div>
      </a>
      <a className="collection-grid-4" href="#">
        <div className="grid-info-box">
          <p className="grid-subtitle">hot list</p>
          <h3 className="grid-title">
            <strong>e-gift</strong> cards
          </h3>
          <Link to="/shop">
            <button className="primary-btn ">shop now &rarr;</button>
          </Link>{" "}
        </div>
      </a>
    </div>
  );
}
