import { UserInfo } from './user';

interface MatchingBase {
  memberId: string;
  title: string;
  stadium: string;
  content: string;
  date: string;
  time: string;
  region: string;
}

export interface PreviewMatching extends MatchingBase {
  id: string;
  teamImg: string;
  createdDate: string;
  count: number;
  status: string;
  requestCount: number | null;
  nickname: string;
  memberImg: null;
  viewCount: number;
}

export interface ViewMatching extends PreviewMatching {
  img: string[];
  modified_date: string;
  nickname: string;
}

export interface CreateMatching extends MatchingBase, Pick<UserInfo, 'memberId'> {
  img: string[];
}

export interface PatchMatching
  extends Pick<CreateMatching, 'title' | 'content' | 'img'> {}

export interface MatchingHistoryInfo {
  id: string;
  opponentImg: string;
  opponentId: string;
  opponentNickname: string;
  is_win: boolean;
  score1: number;
  score2: number;
}
export interface ResponsePreviewMatchingList {
  content: PreviewMatching[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  empty: boolean;
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  unpaged: boolean;
  paged: boolean;
}

export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}
