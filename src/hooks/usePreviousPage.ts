import { useHistory, useLocation } from 'react-router-dom';

export default () => {
  const location = useLocation();
  const { from }: any = location.state || { from: { pathname: '/' } };
  const history = useHistory();

  const previousPage: any = () => history.replace(from);

  return previousPage;
};
