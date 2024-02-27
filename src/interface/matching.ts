export interface PreviewMatching {
  id: number;
  member_id: number;
  teamImg: string;
  title: string;
  created_date: Date;
  count: number;
  status: string;
  requestCount: number;
  stadium: string;
}

export interface ViewMatching extends PreviewMatching {
  img: number[];
  modified_date: Date;
}


