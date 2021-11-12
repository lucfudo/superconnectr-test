import {
  Alignment,
  AspectRatio,
  Button,
  Emphasis,
  FlexBox,
  Orientation,
  Thumbnail,
} from "@lumx/react";

import { ActionOnMovie, MovieData } from "../../types";

interface CardProps {
  className: string;
  data: MovieData;
  index: number;
  onSelectMovie: (res: MovieData, addMovie: ActionOnMovie) => void;
}

export const Card: React.FC<CardProps> = ({
  className,
  data,
  index,
  onSelectMovie,
}) => {
  const { description, image, title } = data;

  return (
    <FlexBox
      key={index}
      className={`${className}__card`}
      orientation={Orientation.vertical}
      vAlign={Alignment.center}
    >
      <Thumbnail
        className={`${className}__card-thumbnail`}
        alt={title}
        aspectRatio={AspectRatio.square}
        image={image}
      />
      <span>{title}</span>
      <span className="lumx-color-font-dark-L1">{description}</span>
      <Button
        emphasis={Emphasis.low}
        onClick={() => onSelectMovie(data, ActionOnMovie.remove)}
      >
        Unselect
      </Button>
    </FlexBox>
  );
};

Card.displayName = "Card";
