import Link from 'next/link';
import { PreviewMatching } from '../../interface/matching';
import Image from 'next/image';
interface Props {
  matching: PreviewMatching;
}
const MatchingCard = ({ matching }: Props) => {
  return (
    <li className=" w-[223px] h-[330px] ">
      <Link href={`/matching/${matching.id}`}>
        <div className="">
          <figure className="">
            <Image
              width={80}
              height={80}
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
    </li>
  );
};

export default MatchingCard;
