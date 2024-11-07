/** @jsxImportSource @emotion/react */
import * as s from './style';

function Star({rating}) {
    const stars = [1, 2, 3, 4, 5];
  
    return (
      <div css={s.starRating}>
        {stars.map((star) => (
          <span key={star} css={star <= rating ? s.starRatingFilled : s.starRatingEmpty}>
            ★
          </span>
        ))}
      </div>
    );
  };

export default Star;