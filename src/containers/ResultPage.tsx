import React from 'react';
import { useParams } from 'react-router-dom';

function ResultPage() {
  const { year, county, town } = useParams();

  return (
    <div className="mt-12">
      <div className="text-[25px]">{`${year}年 ${county} ${town}`}</div>
    </div>
  );
}

export default ResultPage;
