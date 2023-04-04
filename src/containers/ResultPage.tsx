import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

type TAPIResult = {
  responseData:Array<{
    household_ordinary_total:string // 共同生活_戶數
    household_single_total: string // 獨立生活_戶數
    household_ordinary_m:string // 共同生活_男
    household_ordinary_f:string // 共同生活_女
    household_single_m: string // 獨立生活_男
    household_single_f:string // 獨立生活_女
  }>
};

const fetcher = (url:string) => fetch(url).then((r) => r.json());

function ResultPage() {
  const { year, county, town } = useParams();

  const { data, isLoading } = useSWR<TAPIResult>(() => `https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/${year}?COUNTY=${county}&TOWN=${town}`, fetcher);

  const result = data?.responseData.reduce((accumulator, currentValue) => ({
    ordinaryM: accumulator.ordinaryM + parseInt(currentValue.household_ordinary_m, 10),
    ordinaryF: accumulator.ordinaryF + parseInt(currentValue.household_ordinary_f, 10),
    singleM: accumulator.singleM + parseInt(currentValue.household_single_m, 10),
    singleF: accumulator.singleF + parseInt(currentValue.household_single_f, 10),
    ordinaryTotal: accumulator.ordinaryTotal + parseInt(currentValue.household_ordinary_total, 10),
    singleTotal: accumulator.singleTotal + parseInt(currentValue.household_single_total, 10),
  }), {
    ordinaryM: 0, ordinaryF: 0, singleM: 0, singleF: 0, ordinaryTotal: 0, singleTotal: 0,
  });

  if (isLoading) return <div />;

  const barChartData = {
    labels: ['共同生活', '獨立生活'],
    datasets: [
      {
        data: [result?.ordinaryM, result?.singleM],
        label: '男性',
        backgroundColor: '#7C5FB1',
        fill: true,
        categoryPercentage: 0.3,
        barPercentage: 0.8,
      },
      {
        data: [result?.ordinaryF, result?.singleF],
        label: '女性',
        backgroundColor: '#C29EFE',
        fill: true,
        categoryPercentage: 0.3,
        barPercentage: 0.8,
      },
    ],
  };

  return (
    <div className="mt-12 flex w-full flex-col items-center gap-12">
      <div className="text-[25px]">{`${year}年 ${county} ${town}`}</div>
      <div className="text-center text-3xl">人口數統計</div>
      <div className="-mb-10 w-full">數量</div>
      <div className="flex h-fit w-[95%] justify-center sm:w-full">
        <Bar
          data={barChartData}
          plugins={[ChartDataLabels]}
          options={{
            plugins: {
              datalabels: {
                font: {
                  size: 10,
                },
                anchor: 'end',
                align: 'top',
                formatter(value:number) {
                  return value.toLocaleString();
                },
              },
              legend: {
                position: 'bottom',
                labels: {
                  usePointStyle: true,
                  pointStyle: 'circle',
                },
              },
            },
            scales: {
              y: {
                ticks: {
                  callback(label:number | string) {
                    return `${label as number / 1000}k`;
                  },
                },
                border: {
                  display: false,
                },
              },
              x: {
                title: {
                  display: true,
                  text: '型態',
                  font: {
                    size: 16,
                  },
                },
                grid: {
                  display: false,
                },
              },

            },
          }}
        />
      </div>
      <div>{`共同生活_男: ${result?.ordinaryM}`}</div>
      <div>{`共同生活_女: ${result?.ordinaryF}`}</div>
      <div>{`獨立生活_男: ${result?.singleM}`}</div>
      <div>{`獨立生活_女: ${result?.singleF}`}</div>
      <div>{`共同生活(戶): ${result?.ordinaryTotal}`}</div>
      <div>{`獨立生活(戶): ${result?.singleTotal}`}</div>
    </div>
  );
}

export default ResultPage;
