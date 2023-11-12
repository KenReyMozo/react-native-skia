/* eslint-disable prettier/prettier */
import React from 'react';
import {LineGraphProps} from './LineGraphProps';
import {StaticLineGraph} from './StaticLineGraph';
import { AnimatedLineGraph } from './AnimatedLineGraph';

function LineGraphImpl(props: LineGraphProps): React.ReactElement {
  if (props.animated) {return <AnimatedLineGraph {...props} />;}
 else {return <StaticLineGraph {...props} />;}
}

export const LineGraph = React.memo(LineGraphImpl);
