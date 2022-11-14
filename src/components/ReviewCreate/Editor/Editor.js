import React from 'react';
import { useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MuiLoadingButton from '@mui/lab/LoadingButton';
import RichTextEditor from '../../RichTextEditor/RichTextEditor';
import TagPicker from '../TagPicker';
import ReviewService from '../../../service/review';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  margin-bottom: 30px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LoadingButton = styled(MuiLoadingButton)(({ theme }) => ({
  backgroundColor: theme.colors.button_purple,
  '&:hover': {
    backgroundColor: theme.colors.button_purple,
    opacity: 0.8,
  },
}));

function Editor() {
  const {
    state: { movie },
  } = useLocation();

  const { id, name } = movie;

  const formik = useFormik({
    initialValues: {
      movieId: id,
      authorId: 4,
      title: '',
      contents: '',
      tagList: [],
    },
    onSubmit: async (values) => {
      console.log('submit', values);
      await ReviewService.create(values);
    },
  });

  return (
    <FormWrapper>
      <form onSubmit={formik.handleSubmit}>
        <Wrapper>
          <Typography component="h4" variant="h4">
            New review
          </Typography>
          <TextField
            fullWidth
            label="Review title"
            name="title"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.title}
            sx={{
              marginTop: '20px',
              maxWidth: '530px',
              '& .MuiInputBase-root': { borderRadius: 3 },
            }}
          />
        </Wrapper>
        <Wrapper>
          <TagPicker
            value={formik.values.tagList}
            setValue={(value) => {
              formik.setFieldValue('tagList', value);
            }}
          />
        </Wrapper>
        <Wrapper>
          <RichTextEditor
            value={formik.values.contents}
            setValue={(value) => {
              formik.setFieldValue('contents', value);
            }}
            placeholder={`Say something about ${name} ...`}
          />
        </Wrapper>
        <ButtonGroup>
          <Button variant="outlined">Cancel</Button>
          <LoadingButton type="submit" variant="contained" loading={false}>
            Publish
          </LoadingButton>
        </ButtonGroup>
      </form>
    </FormWrapper>
  );
}

export default Editor;
