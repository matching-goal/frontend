import { matchingSortList } from '@/constants/sort';

interface Props {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SelectSort = ({ setQuery }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuery(e.target.selectedOptions[0].id);
  };
  return (
    <select
      className="select select-bordered w-full max-w-xs"
      defaultValue={'정렬 선택'}
      onChange={handleChange}>
      {matchingSortList.map((sort) => (
        <option
          key={sort.name}
          id={sort.query}>
          {sort.name}
        </option>
      ))}
    </select>
  );
};

export default SelectSort;
