import { Route, Routes } from 'react-router';
import { routes } from './routes';
import { AuthRoute } from "./components/AuthRoute"
import { useSelector } from 'react-redux';
import { Container, Spinner } from 'react-bootstrap';
import { Navigation } from './components/Navigation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initThunk } from "./models/init"

export const  App = () => {
  const isInit = useSelector(state => state.init.isInitializing)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initThunk())
  }, [])
  return (
    <Container>
      <Navigation />
      {isInit? 
          <Spinner />:
          <Routes>
          {routes.map(({Component, path, isOnlyAuth}) => {
            return <Route path={path} element={
              isOnlyAuth  ? 
              <AuthRoute>
                <Component />
              </AuthRoute>: 
              <Component />
            }  key={path} />
          } )}
        </Routes>
      }
    </Container>

  );
}
