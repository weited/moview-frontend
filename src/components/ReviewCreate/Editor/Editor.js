import React from 'react';
import { useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import RichTextEditor from '../../RichTextEditor/RichTextEditor';
import TagPicker from '../TagPicker';

function Editor() {
  const {
    state: { movie },
  } = useLocation();

  const { id, name } = movie;

  const formik = useFormik({
    initialValues: {
      movieId: id,
      title: '',
      contents: '',
    },
    onSubmit: async (values) => {
      console.log('submit', values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        label="Review Title"
        name="title"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.title}
        sx={{
          width: '530px',
          '& .MuiInputBase-root': { borderRadius: 3 },
        }}
      />
      <TagPicker />
      <RichTextEditor
        value={formik.values.contents}
        setValue={(value) => {
          formik.setFieldValue('contents', value);
        }}
        placeholder={`Say something about ${name} ...`}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Editor;
