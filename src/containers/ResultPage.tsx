import React from 'react';
import { useParams } from 'react-router-dom';

function ResultPage() {
  const { year, county, town } = useParams();

  return (
    <div>
      {`${year} 年 ${county} ${town}`}
    </div>
  );
}

export default ResultPage;
