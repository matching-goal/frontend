export interface PreviewMatching {
  id: number;
  memberId: number;
  teamImg: string;
  title: string;
  createdDate: string;
  count: number;
  status: string;
  requestCount: number;
  stadium: string;
}

export interface ViewMatching extends PreviewMatching {
  img: number[];
  modified_date: string;
}
