import {
  CatalogPath,
  HomePath,
  InventoryPath,
  FilmPath,
  WorkShopPath,
} from 'routes/routes-conts';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MovieIcon from '@mui/icons-material/Movie';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import CategoryIcon from '@mui/icons-material/Category';
import PersonIcon from '@mui/icons-material/Person';
import { Menu } from 'interfaces';

export const menus: Menu[] = [
  {
    title: 'Dashboard',
    path: HomePath,
    items: [],
    icon: DashboardIcon,
  },
  {
    title: 'Films',
    path: FilmPath,
    items: [],
    icon: MovieIcon,
  },
  {
    title: 'Actors',
    path: CatalogPath,
    items: [],
    icon: RecentActorsIcon,
  },
  {
    title: 'Categories',
    path: WorkShopPath,
    items: [],
    icon: CategoryIcon,
  },
  {
    title: 'Users',
    path: InventoryPath,
    items: [],
    icon: PersonIcon,
  },
];
