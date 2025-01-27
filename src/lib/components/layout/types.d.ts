const overflowValues = ['visible', 'hidden', 'clip', 'scroll', 'auto'] as const;
const positionValues = ['static', 'relative', 'absolute', 'fixed', 'sticky'] as const;
// prettier-ignore
const positionEdgeValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-1', '-2', '-3', '-4', '-5', '-6', '-7', '-8', '-9'] as const;
const flexShrinkValues = ['0', '1'] as const;
const flexGrowValues = ['0', '1'] as const;
type LayoutProps = {
    position?: typeof positionValues[number];
    inset?: typeof positionEdgeValues[number];
    top?: typeof positionEdgeValues[number];
    right?: typeof positionEdgeValues[number];
    bottom?: typeof positionEdgeValues[number];
    left?: typeof positionEdgeValues[number];
    overflow?: typeof overflowValues[number];
    overflowX?: typeof overflowValues[number];
    overflowY?: typeof overflowValues[number];
    flexBasis?: string;
    flexShrink?: typeof flexShrinkValues[number];
    flexGrow?: typeof flexGrowValues[number];
    gridColumn?: string;
    gridColumnStart?: string;
    gridColumnEnd?: string;
    gridRow?: string;
    gridRowStart?: string;
    gridRowEnd?: string;
    gridArea?: string;
};
// prettier-ignore
const marginValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-1', '-2', '-3', '-4', '-5', '-6', '-7', '-8', '-9'] as const;

type MarginProps = {
    m?: typeof marginValues[number];
    mx?: typeof marginValues[number]; // mx = margin x-axis
    my?: typeof marginValues[number]; // my = margin y-axis
    mt?: typeof marginValues[number]; // mt = margin top
    mr?: typeof marginValues[number]; // mr = margin right
    mb?: typeof marginValues[number]; // mb = margin bottom
    ml?: typeof marginValues[number]; // ml = margin left

}

const gapValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
type GapProps = {
    gap?: typeof gapValues[number];
    gapX?: typeof gapValues[number];
    gapY?: typeof gapValues[number];
}
const as = ['div', 'span'] as const;
const displayValues = ['none', 'inline-flex', 'flex'] as const;
const directionValues = ['row', 'column', 'row-reverse', 'column-reverse'] as const;
const alignValues = ['start', 'center', 'end', 'baseline', 'stretch'] as const;
const justifyValues = ['start', 'center', 'end', 'between'] as const;
const wrapValues = ['nowrap', 'wrap', 'wrap-reverse'] as const;

type FlexOwnProps = GapProps & {
    as?: typeof as[number];
    display?: typeof displayValues[number];
    direction?: typeof directionValues[number];
    align?: typeof alignValues[number];
    justify?: typeof justifyValues[number];
    wrap?: typeof wrapValues[number];
};

const marginKeysArray = Object.keys(MarginProps) as (keyof MarginProps)[];


export {FlexOwnProps,LayoutProps,MarginProps,GapProps};