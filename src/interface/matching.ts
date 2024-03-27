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
  imageUrl: string;
  createdDate: string;
  count: number;
  status: string;
  requestCount: number | null;
  nickname: string;
  memberImg: string | null;
  viewCount: number;
}

export interface MatchingSimpleHistory {
  winRate: number;
  totalMatches: number;
  wins: number;
  losses: number;
  draws: number;
}

export interface ViewMatching extends PreviewMatching {
  imgUrls: string[];
  modified_date: string;
  nickname: string;
}

export interface CreateMatching extends MatchingBase, Pick<UserInfo, 'memberId'> {
  imgUrls: string[];
}

export interface PatchMatching
  extends Pick<CreateMatching, 'title' | 'content' | 'imgUrls'> {}

export interface MatchingHistoryInfo {
  resultId: string;
  opponentImg: string;
  opponentId: string;
  opponentNickname: string;
  win: boolean;
  score1: number;
  score2: number;
}

export interface RequestMatching {
  id: string;
  createDate: Date;
  memberId: string;
  nickname: string;
  memberImg: string;
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

export interface ResultData {
  score1: number;
  score2: number;
  duration: number;
}
