export interface Tool {
  id: string;
  name: string;
  desc: string;
  category: 'Video' | 'Text' | 'Image' | 'Audio' | 'SEO';
  icon: string;
  pro?: boolean;
}

export interface Message {
  role: 'user' | 'bot';
  content: string;
}
