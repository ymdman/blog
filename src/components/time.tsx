import React from 'react';
import { Scalars } from '../../graphql-types';

type PublishDate = Scalars['Date'];

const Time: React.FC<PublishDate> = ({ publishDate }) => {
  const dateTime = publishDate.replace(
    /(\d{4})年(\d{2})月(\d{2})日/,
    '$1-$2-$3'
  );
  return <time dateTime={dateTime}>{publishDate}</time>;
};

export default Time;
