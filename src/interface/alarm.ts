export interface Alarm {
  id: string;
  memberId: string;
  type: string;
  contentId: string;
  message: string;
  checkedOut: 0 | 1;
  createdDate: Date;
}
