import React from 'react';
import { useParams } from 'react-router-dom';

function ResultPage() {
  const { year, county, town } = useParams();

  return (
    <div className="flex w-full flex-col items-center py-4 sm:w-[77%]">
      {`${year} 年 ${county} ${town}`}
    </div>
  );
}

export default ResultPage;
