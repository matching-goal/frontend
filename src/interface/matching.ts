interface MatchingBase {
  memberId: string;
  title: string;
  stadium: string;
  content: string;
  matchingDate: string;
  matchingTime: string;
}

export interface PreviewMatching extends MatchingBase {
  id: string;
  teamImg: string;
  createdDate: string;
  count: number;
  status: string;
  requestCount: number;
}

export interface ViewMatching extends PreviewMatching {
  img: string[];
  modified_date: string;
  nickname: string;
}

export interface CreateMatching extends MatchingBase {
  img: string[];
}

export interface PatchMatching extends Omit<MatchingBase, 'memberId'> {}

export interface MatchingHistoryInfo {
  id: string;
  opponentImg: string;
  opponentId: string;
  opponentNickname: string;
  is_win: boolean;
  score1: number;
  score2: number;
}
