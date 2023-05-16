import axios from '@/config/axios';
import Cookies from 'js-cookie';
// import useUserStore from './store/useUserStore';

const PATHS = [
    '/auth/sign-in',
    '/auth/sign-up',
]

const REDIRECT_PATH = '/dashboard'

const useVerifyUser = () => {
    // const setUser = useUserStore(state => state.setUser);

    return async () => {
        const token = await Cookies.get('token');
        const pathname = window?.location?.pathname;
        const URL = '/auth/verify';
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        return await axios.get(URL, config)
        .then((res) => {
            // const {
            //     email,
            //     course,
            //     roles,
            //     last_name,
            //     first_name,
            //     middle_name,
            //     fullName,
            //     password,
            // } = res.data;
            // console.info('Authorized User');

            // setUser('email', email);
            // setUser('course', course);
            // setUser('roles', roles);
            // setUser('fullName', fullName);
            // setUser('lastName', last_name);
            // setUser('firstName', first_name);
            // setUser('middleName', middle_name);
            // setUser('password', password);

            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            
            if (PATHS.includes(pathname)) {
                window.location.href = REDIRECT_PATH;
            }
        })
        .catch(err => {
            console.log(err);
            console.error('Unauthorized User');

            console.log(PATHS.includes(pathname), pathname)
            if (err?.code === 'ECONNABORTED' && !PATHS.includes(pathname)) {
                console.log('here')
                window.location.href = PATHS[0];
                return err
            }

            if (err?.response) {
                if (err.response.status) {
                    console.log('here 2')
                    if (PATHS.includes(pathname)) return err;
                    
                    window.location.href = PATHS[0];
                    return err
                }
            }

            return err
        });
    }
}

export default useVerifyUser;