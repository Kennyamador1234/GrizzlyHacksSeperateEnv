import {Application} from './application';

export interface User {
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  adminLevel: number;
  isRegisteredFor2020: boolean;
  pastHacks: string[];
  application: Application;
}
