import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { Link } from '../../components/link';

export interface ProfilePageProps {
  fieldIds?: string[];
  actionIds?: string[];
}

export interface ProfilePageChildren {
  [key: string]: Input | Link | Button,
}
