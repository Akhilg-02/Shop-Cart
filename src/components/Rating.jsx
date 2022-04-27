import { BsStarFill, BsStar } from "react-icons/bs";

export const Rating = ({rating, Click}) => {
  return (
    <>
      {[...Array(5)].map((_, ind) => (
        <span key={ind} onClick={() => Click(ind)}>
          {rating > ind ? (
            <BsStarFill fontSize="20px" />
          ) : (
            <BsStar fontSize="20px" />
          )}
        </span>
      ))}
    
    </>
  );
};
