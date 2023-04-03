export type TCounty = '基隆市' | '台北市' | '新北市' | '桃園縣' | '新竹市' | '新竹縣' | '苗栗縣' | '台中市' | '彰化縣' | '南投縣' | '雲林縣' | '嘉義市' | '嘉義縣' | '台南市' | '高雄市' | '屏東縣' | '台東縣' | '花蓮縣' | '宜蘭縣' | '澎湖縣' | '金門縣' | '連江縣';

const YEAR_LIST = [
  { title: '106', value: '106' },
  { title: '107', value: '107' },
  { title: '108', value: '108' },
  { title: '109', value: '109' },
  { title: '110', value: '110' },
  { title: '110', value: '111' },
];

export const COUNTY_LIST:Array<{ title:TCounty, value:string }> = [
  { title: '基隆市', value: '基隆市' },
  { title: '台北市', value: '台北市' },
  { title: '新北市', value: '新北市' },
  { title: '桃園縣', value: '桃園縣' },
  { title: '新竹市', value: '新竹市' },
  { title: '新竹縣', value: '新竹縣' },
  { title: '苗栗縣', value: '苗栗縣' },
  { title: '台中市', value: '台中市' },
  { title: '彰化縣', value: '彰化縣' },
  { title: '南投縣', value: '南投縣' },
  { title: '雲林縣', value: '雲林縣' },
  { title: '嘉義市', value: '嘉義市' },
  { title: '嘉義縣', value: '嘉義縣' },
  { title: '台南市', value: '台南市' },
  { title: '高雄市', value: '高雄市' },
  { title: '屏東縣', value: '屏東縣' },
  { title: '台東縣', value: '台東縣' },
  { title: '花蓮縣', value: '花蓮縣' },
  { title: '宜蘭縣', value: '宜蘭縣' },
  { title: '澎湖縣', value: '澎湖縣' },
  { title: '金門縣', value: '金門縣' },
  { title: '連江縣', value: '連江縣' },
];

export const TOWN_MAP:{ [key in TCounty]:Array<{ title:string, value:string }> } = {
  基隆市: [{ title: '中正區', value: '中正區' }],
  台北市: [{ title: '光復鄉', value: '光復鄉' }],
  新北市: [{ title: '光復鄉', value: '光復鄉' }],
  桃園縣: [{ title: '光復鄉', value: '光復鄉' }],
  新竹市: [{ title: '光復鄉', value: '光復鄉' }],
  新竹縣: [{ title: '光復鄉', value: '光復鄉' }],
  苗栗縣: [{ title: '光復鄉', value: '光復鄉' }],
  台中市: [{ title: '光復鄉', value: '光復鄉' }],
  彰化縣: [{ title: '光復鄉', value: '光復鄉' }],
  南投縣: [{ title: '光復鄉', value: '光復鄉' }],
  雲林縣: [{ title: '光復鄉', value: '光復鄉' }],
  嘉義市: [{ title: '光復鄉', value: '光復鄉' }],
  嘉義縣: [{ title: '光復鄉', value: '光復鄉' }],
  台南市: [{ title: '光復鄉', value: '光復鄉' }],
  高雄市: [{ title: '光復鄉', value: '光復鄉' }],
  屏東縣: [{ title: '光復鄉', value: '光復鄉' }],
  台東縣: [{ title: '光復鄉', value: '光復鄉' }],
  花蓮縣: [{ title: '光復鄉', value: '光復鄉' }],
  宜蘭縣: [{ title: '光復鄉', value: '光復鄉' }],
  澎湖縣: [{ title: '光復鄉', value: '光復鄉' }],
  金門縣: [{ title: '光復鄉', value: '光復鄉' }],
  連江縣: [{ title: '光復鄉', value: '光復鄉' }],
};

export default YEAR_LIST;
