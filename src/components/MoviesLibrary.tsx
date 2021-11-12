import React from "react";

import { mdiMagnify } from "@lumx/icons";
import {
  Alignment,
  FlexBox,
  Icon,
  List,
  Orientation,
  Size,
  TextField,
} from "@lumx/react";

import { Card } from "./Card";
import { RowItem } from "./RowItem";
import { search as searchAPI } from "../api";
import { ActionOnMovie, MovieData } from "../types";
import { mockResults } from "../mocks/mockResponse";

const CLASSNAME = "movie";

export const MoviesLibrary: React.FC = () => {
  const [inputValue, setInputValue] = React.useState("");

  // If you don't have any API key you can use the mock response
  const [searchResult, setSearchResult] =
    React.useState<MovieData[]>(mockResults);
  // const [searchResult, setSearchResult] = React.useState<MovieData[]>([]);

  const [selectedResult, setSelectedResult] = React.useState<MovieData[]>([]);

  const onSearch = async (value: string) => {
    setInputValue(value);
    if (inputValue.length >= 1) {
      const data = await searchAPI(inputValue);
      setSearchResult(data.results);
    }
  };

  const selectMovie = (result: MovieData, action: ActionOnMovie) => {
    const movieIsSelected = selectedResult.find(
      (data) => data.title === result.title
    );
    if (action === ActionOnMovie.add && !movieIsSelected) {
      setSelectedResult([result, ...selectedResult]);
    } else if (action === ActionOnMovie.remove) {
      setSelectedResult([
        ...selectedResult.filter((r) => {
          return r !== result;
        }),
      ]);
    }
  };

  return (
    <FlexBox className={CLASSNAME} orientation={Orientation.horizontal}>
      <FlexBox
        className={`${CLASSNAME}__list`}
        orientation={Orientation.vertical}
      >
        <TextField
          icon={mdiMagnify}
          placeholder="Search a movie"
          value={inputValue}
          onChange={onSearch}
        />
        <List>
          {searchResult &&
            searchResult.map((res, index) => (
              <RowItem
                data={res}
                index={index}
                selectedResult={selectedResult}
                onSelectMovie={selectMovie}
              />
            ))}
        </List>
      </FlexBox>

      {selectedResult.length > 0 ? (
        <FlexBox
          className={`${CLASSNAME}__cards`}
          orientation={Orientation.horizontal}
          wrap
        >
          {searchResult &&
            selectedResult.map((res, index) => (
              <Card
                className={CLASSNAME}
                data={res}
                index={index}
                onSelectMovie={selectMovie}
              />
            ))}
        </FlexBox>
      ) : (
        <FlexBox
          className={`${CLASSNAME}__empty-state`}
          gap={Size.big}
          vAlign={Alignment.center}
          orientation="vertical"
        >
          <Icon icon={mdiMagnify} size={Size.xl} hasShape />
          <p className="lumx-typography-subtitle1">
            Selected movies going here
          </p>
        </FlexBox>
      )}
    </FlexBox>
  );
};

MoviesLibrary.displayName = "MoviesLibrary";
