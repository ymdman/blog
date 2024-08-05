import Markdown from 'react-markdown';

type ArticleProps = {
  markdown: string;
  className?: string;
};

export function Article({ markdown, className }: ArticleProps) {
  return (
    <div className={`article ${className}`}>
      <Markdown>{markdown}</Markdown>
    </div>
  );
}
