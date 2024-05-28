import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  ChartDataset,
  Legend,
} from 'chart.js';

import { moneyFormat } from "../../utils/moneyFormat";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

export interface ChartProps {
  labels: Array<string>;
  datasets: Array<ChartDataset<"bar", Array<number>>>;
  monetary?: boolean;
};

export const Chart: React.FC<ChartProps> = ({
  labels,
  datasets,
  monetary = false,
}) => {

  return (
    <Bar
      options={{
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: function(context) {
                let label = context.dataset.label ?? "";

                if( label ) label += ": "

                if( monetary ) label += moneyFormat( context.parsed.y );
                else label += context.parsed.y;

                return label;
              }
            },
          }
        },
        scales: {
          y: {
            ticks: {
              callback: function ( value, _index, _ticks ) {
                return monetary ? moneyFormat( value as number ) : value;
              }
            }
          }
        }
      }}
      data={{
        labels,
        datasets,
      }}
    />
  );
};
