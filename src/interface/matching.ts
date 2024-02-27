export interface PreviewMatching {
  id: string;
  memberId: string;
  teamImg: string;
  title: string;
  createdDate: string;
  count: number;
  status: string;
  requestCount: number;
  stadium: string;
}

export interface ViewMatching extends PreviewMatching {
  img: string[];
  modified_date: string;
  nickName: string;
  matchDate: string;
  content: string;
}
