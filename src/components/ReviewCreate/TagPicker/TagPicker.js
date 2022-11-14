import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { selectTags } from '../../../redux/slices/tag';

const filter = createFilterOptions();

export default function TagPicker({ value, setValue }) {
  // const [value, setValue] = useState([]);

  // const [isMax, setIsMax] = useState(false);

  const tagList = useSelector(selectTags);
  console.log('value tags', value);

  useEffect(() => {
    console.log('value length', value.length);
    if (value.length > 4) {
      // setIsMax(true);
      setValue(value.slice(0, -1));
      console.log('maxm');
    }
  }, [value]);

  return (
    <Autocomplete
      multiple
      value={value}
      onChange={(event, newValue) => {
        console.log('change', newValue);
        if (typeof newValue === 'string') {
          console.log('string', newValue);
          setValue({
            name: newValue,
          });
        } else if (newValue && newValue.length > 0 && newValue[newValue.length - 1].inputValue) {
          // Create a new value from the user input
          console.log('newValue && new.input', newValue);

          setValue([
            ...value,
            {
              name: newValue[newValue.length - 1].inputValue,
            },
          ]);
        } else {
          console.log('else', newValue);

          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        // console.log('filterOptions', params);
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option.name);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            name: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="tag-picker"
      options={tagList}
      getOptionLabel={(option) => {
        // console.log('getOptionLabel', option);
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.name;
      }}
      renderOption={(props, option) => <li {...props}>{option.name}</li>}
      sx={{ '& .MuiInputBase-root': { borderRadius: 3 } }}
      freeSolo
      renderInput={(params) => <TextField {...params} label="Add up to 4 tags..." />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const top100Films = [
//   { name: 'The Shawshank Redemption', year: 1994 },
//   { name: 'The Godfather', year: 1972 },
//   { name: 'The Godfather: Part II', year: 1974 },
//   { name: 'The Dark Knight', year: 2008 },
//   { name: '12 Angry Men', year: 1957 },
//   { name: "Schindler's List", year: 1993 },
//   { name: 'Pulp Fiction', year: 1994 },
// ];
