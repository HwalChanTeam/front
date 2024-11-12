/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useQuery } from "react-query";
import { instance } from "../../../apis/util/instance";
import { useState } from "react";
import { useNavigate } from "react-router";
import Star from "./Star/Star";

function Review(props) {
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate();

    const getReviewAll = useQuery(
        ["getReviewAll"],
        async () => {
        return await instance.get("/user/public/review");
        },
        {
        retry: 0,
        onSuccess: (response) => {
            setReviews(response.data);
        },
        }
    );

    const handleProductImgOnClick = (id) => {
        navigate(`/product/${id}`);
    }

    return (
        <div css={s.containerStyle}>
            <ul>
                {reviews.map((review) => (
                    <li key={review?.productId} css={s.productStyle}>
                        <img src={review.product?.thumbnailImg} css={s.imageStyle}  onClick={() => handleProductImgOnClick(review.productId)}/>
                        <div css={s.textStyle}>
                            <Star rating={review.rating}/>
                            <h2 css={s.titleStyle}>{review?.title}</h2>
                            <p css={s.contentBox}>{review?.content}</p>
                            <div css={s.createDateStyle}>
                                <p>{review?.createdAt}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Review;
