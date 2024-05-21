import Markdown from 'react-markdown';

type ArticleProps = {
  markdown: string;
};

export function Article({ markdown }: ArticleProps) {
  return (
    <div className="article">
      <Markdown>{markdown}</Markdown>;
    </div>
  );
}
