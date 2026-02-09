export interface Tool {
  id: string;
  name: string;
  desc: string;
  category: string; // Isko string rakhne se tum koi bhi category add kar paoge
  icon: string;
  pro?: boolean;
}

export interface Message {
  role: 'user' | 'bot';
  content: string;
}
