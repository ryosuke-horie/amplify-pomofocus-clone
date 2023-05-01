/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContentsOverridesProps = {
    Contents?: PrimitiveOverrideProps<FlexProps>;
    Haeder?: PrimitiveOverrideProps<FlexProps>;
    logo?: PrimitiveOverrideProps<ViewProps>;
    Pomofocus?: PrimitiveOverrideProps<TextProps>;
    nav_to_todo?: PrimitiveOverrideProps<ViewProps>;
    Todos?: PrimitiveOverrideProps<TextProps>;
    icon?: PrimitiveOverrideProps<IconProps>;
    timer_contents?: PrimitiveOverrideProps<FlexProps>;
    Timer?: PrimitiveOverrideProps<FlexProps>;
    timer_items?: PrimitiveOverrideProps<FlexProps>;
    item_pomodolo?: PrimitiveOverrideProps<ViewProps>;
    Pomodoro?: PrimitiveOverrideProps<TextProps>;
    item_short_rest?: PrimitiveOverrideProps<ViewProps>;
    "Short Break"?: PrimitiveOverrideProps<TextProps>;
    item_long_rest?: PrimitiveOverrideProps<ViewProps>;
    "Long Break"?: PrimitiveOverrideProps<TextProps>;
    clock?: PrimitiveOverrideProps<ViewProps>;
    "00:00"?: PrimitiveOverrideProps<TextProps>;
    start_button?: PrimitiveOverrideProps<ViewProps>;
    Start?: PrimitiveOverrideProps<TextProps>;
    Words?: PrimitiveOverrideProps<FlexProps>;
    words_box?: PrimitiveOverrideProps<ViewProps>;
    "#0"?: PrimitiveOverrideProps<TextProps>;
    "Time to focus!"?: PrimitiveOverrideProps<TextProps>;
    tasks220?: PrimitiveOverrideProps<FlexProps>;
    tasks235?: PrimitiveOverrideProps<TextProps>;
    open_button?: PrimitiveOverrideProps<ImageProps>;
    under_line?: PrimitiveOverrideProps<IconProps>;
    add_task?: PrimitiveOverrideProps<FlexProps>;
    add_tasks_button?: PrimitiveOverrideProps<ViewProps>;
    "+ flame"?: PrimitiveOverrideProps<ViewProps>;
    "+button"?: PrimitiveOverrideProps<IconProps>;
    textbox?: PrimitiveOverrideProps<ViewProps>;
    "Add task"?: PrimitiveOverrideProps<TextProps>;
    box?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type ContentsProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ContentsOverridesProps | undefined | null;
}>;
export default function Contents(props: ContentsProps): React.ReactElement;
