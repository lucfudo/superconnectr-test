import {
  Button,
  ColorPalette,
  Divider,
  Emphasis,
  ListItem,
  Size,
} from "@lumx/react";

import { ActionOnMovie, MovieData } from "../../types";

interface RowItemProps {
  data: MovieData;
  index: number;
  selectedResult: MovieData[];
  onSelectMovie: (res: MovieData, addMovie: ActionOnMovie) => void;
}

export const RowItem: React.FC<RowItemProps> = ({
  index,
  selectedResult,
  data,
  onSelectMovie,
}) => {
  const { title, description } = data;
  return (
    <>
      <ListItem
        key={index}
        size={Size.big}
        after={
          <Button
            color={ColorPalette.yellow}
            emphasis={
              selectedResult.find((d) => d.title === title)
                ? Emphasis.high
                : Emphasis.low
            }
            onClick={() => onSelectMovie(data, ActionOnMovie.add)}
          >
            Select
          </Button>
        }
      >
        <div>
          <span>{title}</span>
        </div>
        <div>
          <span className="lumx-color-font-dark-L2">{description}</span>
        </div>
      </ListItem>
      <Divider />
    </>
  );
};

RowItem.displayName = "RowItem";
