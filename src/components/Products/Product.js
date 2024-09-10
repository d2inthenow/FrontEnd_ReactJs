import "./Product.scss";
import duong from "../../assets/images/duong.jpg"
import duong1 from "../../assets/images/duong1.jpg"
import duong2 from "../../assets/images/duong2.jpg"
import { useState } from "react";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
// import { useState } from "react";

const images = [
    duong,
    duong1,
    duong2
];
const Product = () => {
    const [currentUpImg, setcurrentUpImg] = useState(duong);
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const handlerClickPre = () => {
        let index = images.findIndex(item => item === currentUpImg);
        setPhotoIndex(index);
        setIsOpen(true);
    }
    return (
        <div>
            <div className="product-container">
                <div className="content-left">
                    <div className="img-up">
                        <img src={currentUpImg} onClick={() => handlerClickPre()} />
                    </div>
                    <div className="img-down">
                        <div className="img-small">
                            <img src={duong} onClick={() => setcurrentUpImg(duong)} className={currentUpImg === duong ? "active" : ""} />
                        </div>
                        <div className="img-small">
                            <img src={duong1} onClick={() => setcurrentUpImg(duong1)} className={currentUpImg === duong1 ? "active" : ""} />
                        </div>
                        <div className="img-small">
                            <img src={duong2} onClick={() => setcurrentUpImg(duong2)} className={currentUpImg === duong2 ? "active" : ""} />
                        </div>

                    </div>
                </div>
                <div className="content-right">
                    <div className="title">Giầy Thái Dương chất lượng cao</div>
                    <div className="price">1.000.000 đ</div>
                    <div className="size">Size: 42</div>
                    <div className="action">
                        <div className="quanlity">Số Lượng</div>
                        <input type="number" min={1} />
                        <button className="buy" >Buy</button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                    animationDuration={500}
                />
            )}
        </div>
    );
}




export default Product;