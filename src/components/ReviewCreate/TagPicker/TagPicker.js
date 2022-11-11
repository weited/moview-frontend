import React, { useState, useEffect } from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const filter = createFilterOptions();

export default function Tags() {
  const [value, setValue] = useState([]);

  const [isMax, setIsMax] = useState(false);
  console.log('value', value);

  useEffect(() => {
    console.log('value length', value.length);
    if (value.length > 3) {
      setIsMax(true);
      setValue((pre) => pre.slice(0, -1));
      console.log('maxm');
    }
  }, [value]);

  return (
    <Stack spacing={3} sx={{ width: 1000, margin: 4 }}>
      <Autocomplete
        multiple
        value={value}
        onChange={(event, newValue) => {
          console.log('change', newValue);
          if (typeof newValue === 'string') {
            console.log('string', newValue);
            setValue({
              title: newValue,
            });
          } else if (newValue && newValue.length > 0 && newValue[newValue.length - 1].inputValue) {
            // Create a new value from the user input
            console.log('newValue && new.input', newValue);

            setValue((pre) => [
              ...pre,
              {
                title: newValue[newValue.length - 1].inputValue,
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
          const isExisting = options.some((option) => inputValue === option.title);
          if (inputValue !== '' && !isExisting) {
            filtered.push({
              inputValue,
              title: `Assdd "${inputValue}"`,
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        options={top100Films}
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
          return option.title;
        }}
        renderOption={(props, option) => <li {...props}>{option.title}</li>}
        sx={{ width: 800 }}
        freeSolo
        renderInput={(params) => <TextField {...params} label="Free solo with text demo" />}
      />
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
];
