interface MatchingBase {
  memberId: string;
  title: string;
  stadium: string;
  content: string;
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
  nickName: string;
  matchDate: string;
}

export interface CreateMatching extends MatchingBase {
  img: string[];
  matchDate: string;
}
