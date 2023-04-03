import React from 'react';
import { useParams } from 'react-router-dom';

function ResultPage() {
  const { year, county, town } = useParams();

  return (
    <div className="mt-12">
      {`${year} 年 ${county} ${town}`}
    </div>
  );
}

export default ResultPage;
