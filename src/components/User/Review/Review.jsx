/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useQuery } from "react-query";
import { instance } from "../../../apis/util/instance";
import { useState } from "react";
import { useNavigate } from "react-router";

function Review(props) {
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  const getReviewAll = useQuery(
    ["getReviewAll"],
    async () => {
      console.log("요청날아감");
      return await instance.get("/user/review");
    },
    {
      retry: 0,
      onSuccess: (response) => {
        console.log(response.data);
        setReviews(response.data);
      },
    }
  );
  console.log(reviews)

  const handleProductImgOnClick = (id) => {
    navigate(`/product/${id}`);
  }

  return (
    <div css={s.layout}>
      <div css={s.contentLayout}>
        <table css={s.tableLayout}>
          <div css={s.subLayout}>
            <h2>전체 리뷰</h2>
          </div>
          <tbody css={s.ReviewLayout}>
            {reviews.map((review) => (
              <tr key={review.reviewId}>
                <div css={s.ReviewList}>
                  <div css={s.productImgLayout} key={review.productId}>
                    <img src={review.product.thumbnailImg} onClick={() => handleProductImgOnClick(review.productId)}/>
                  </div>
                  <div css={s.productReviewLayout}>
                    <div css={s.userLayout}>
                      <h2>{review.title}</h2>
                    </div>
                    <div css={s.reviewContent}>
                      <p>{review.content}</p>
                    </div>
                    <div css={s.createData}>
                      <p></p>
                    </div>
                  </div>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Review;
