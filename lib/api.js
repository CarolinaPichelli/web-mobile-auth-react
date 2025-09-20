    import axios from 'axios';

  const baseURL = 'http://10.0.2.2:8000';

    const api = axios.create({
      baseURL: baseURL,
    });

    export default api;