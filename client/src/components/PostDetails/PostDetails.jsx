import React, { useEffect } from 'react';
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory } from 'react-router-dom';

import useStyles from './styles';

const PostDetails = () => {
  console.log('POST DETAILS');
  return <div>PostDetails</div>;
};

export default PostDetails;
