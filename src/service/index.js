import { POST } from './api';
import { LOGIN } from './apiList';

export const login = data => POST(LOGIN, data, 1500);
