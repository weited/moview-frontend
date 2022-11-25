import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import MuiButton from '@mui/material/Button';
import MuiLoadingButton from '@mui/lab/LoadingButton';
import RichTextEditor from '../../RichTextEditor/RichTextEditor';
import TagPicker from '../TagPicker';
import ReviewService from '../../../service/review';
import { selectCurrentUser } from '../../../redux/slices/user';
import { fetchAllReviews } from '../../../redux/slices/review';

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

const Button = styled(MuiButton)(({ theme }) => ({
  color: theme.colors.button_purple,
  borderColor: theme.colors.button_purple,
  '&:hover': {
    borderColor: theme.colors.button_purple,
    opacity: 0.8,
  },
}));

const LoadingButton = styled(MuiLoadingButton)(({ theme }) => ({
  backgroundColor: theme.colors.button_purple,
  '&:hover': {
    backgroundColor: theme.colors.button_purple,
    opacity: 0.8,
  },
}));

function Editor({ movie }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id, name } = movie;
  const userInfo = useSelector(selectCurrentUser);
  const { id: authorId } = userInfo;

  const formik = useFormik({
    initialValues: {
      movieId: id,
      authorId,
      title: '',
      contents: '',
      tagList: [],
    },
    onSubmit: async (values, { setSubmitting }) => {
      const { data } = await ReviewService.create(values);
      setSubmitting(false);
      dispatch(fetchAllReviews());
      // TODO: handle notification
      // eslint-disable-next-line no-alert
      alert('created successfully');
      navigate(`/review/${data.id}`);
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
          <Button
            variant="outlined"
            onClick={() => {
              navigate(-1);
            }}
          >
            Cancel
          </Button>
          <LoadingButton type="submit" variant="contained" loading={formik.isSubmitting}>
            Publish
          </LoadingButton>
        </ButtonGroup>
      </form>
    </FormWrapper>
  );
}

export default Editor;
