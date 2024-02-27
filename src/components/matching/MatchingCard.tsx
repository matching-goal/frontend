import { Link } from 'react-router-dom';
import { PreviewMatching } from '../../interface/matching';
interface Props {
  matching: PreviewMatching;
}
const MatchingCard = ({ matching }: Props) => {
  return (
    <article className=" w-[223px] h-[330px] ">
      <Link to={`/matching/${matching.id}`}>
        <div className="">
          <figure className="">
            <img
              src={matching.teamImg}
              alt="Shoes"
              className="rounded-xl h-[223px] w-[223px]"
            />
          </figure>

          <div className="">
            <h2 className="">
              {matching.title.length > 11
                ? matching.title.slice(0, 14) + '...'
                : matching.title}
            </h2>
            <p className=" text-xs">{matching.stadium}</p>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default MatchingCard;
