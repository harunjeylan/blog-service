type PostType = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
};
type CommentType = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  description: string;
  created: string;
};
