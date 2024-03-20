const SORT = 'sort';
const SORT_DIRECTION = 'sort-direction';

const SORT_TYPE = {
  TIME: 'time',
  VIEW: 'VIEW',
};

const SORT_DIRECTION_TYPE = {
  DESC: 'desc',
  ASC: 'asc',
};

export const matchingSortList = [
  {
    name: '최신 순',
    query: `&${SORT}=${SORT_TYPE.TIME}&${SORT_DIRECTION}=${SORT_DIRECTION_TYPE.DESC}`,
    default: true,
  },
  {
    name: '오래된 순',
    query: `&${SORT}=${SORT_TYPE.TIME}&${SORT_DIRECTION}=${SORT_DIRECTION_TYPE.ASC}`,
    default: false,
  },
  {
    name: '조회수 높은 순',
    query: `&${SORT}=${SORT_TYPE.VIEW}&${SORT_DIRECTION}=${SORT_DIRECTION_TYPE.DESC}`,
    default: false,
  },
  {
    name: '조회수 낮은 순',
    query: `&${SORT}=${SORT_TYPE.VIEW}&${SORT_DIRECTION}=${SORT_DIRECTION_TYPE.ASC}`,
    default: false,
  },
];
