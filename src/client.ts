import React, { CSSProperties } from "react"
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  TreeScene: undefined;
  SeeFavorites: { treeCardFacts:  TreeCardFacts[]};
};

export type RootStackProps = NativeStackScreenProps<RootStackParamList, 'SeeFavorites'>;

export type FactProps = {
    randomNumber: number;
    treeCardFacts: TreeCardFacts[];
}

export type TreeCardFacts = {
    quote: string;
    favorited: boolean;
    id: number
}

export type FavoriteIconProps = {
    heading : string;
    randomNumber : number;
    treeCardFacts : TreeCardFacts[]
    onIsFavoritedHandler : (favorited: boolean) => void;
    isFavorited: boolean;
}

export type GrassSceneProps = {
    randomNumber : number,
    treeCardFacts : TreeCardFacts[]
    onIsFavoritedHandler : (favorited: boolean) => void;
    isFavorited : boolean
    children : React.ReactChild;
}

export type TreeSvgProps = {
    onPressTreeHandler : () => void;
    randomNumber: number;
}

export type LeafShakeViewProps = {
    d: string;
    fill: string;
    randomNumber: number;
}


export type Test = {
    style: object;
    d: string;
    fill: string;
}