
import axios from 'axios';
import { config } from '../Constants';

const BackendURL = config.url;

export default axios.create({
    baseURL: BackendURL
});