import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";

function getAverage(data) {
  const sum = data.reduce((pre, curr) => pre + curr);
  return (sum / data.length).toFixed(2);
}

export default function(props) {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {getAverage(props.data)} {props.unit}
      </div>
    </div>
  );
}
