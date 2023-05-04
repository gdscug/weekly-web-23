import Detail from '../views/pages/detail';
import Animal from '../views/pages/show-animal';
import Liked from '../views/pages/liked';

const routes = {
  '/': Animal, // default page
  '/animals': Animal,
  '/like': Liked,
  '/detail/:id': Detail,
};

export default routes;
