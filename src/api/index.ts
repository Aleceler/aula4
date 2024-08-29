import axios, {AxiosInstance} from 'axios'

export const api: AxiosInstance = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
    headers: {
        "Content-Type": "application/json"
    }
    //aqui a gente pode jogar todas as configurações direto na instancia da api, token etc
});

api.interceptors.request.use(
    (request) => {
        //validação de token e redirecionamento ou refresh
        console.log("request", request)
        return request
    },
    (error) => {
        return error
    }
)

api.interceptors.response.use(
    (response) => {
        console.log("response", response)
        return response
    },
    (error) => {
        return error
    }
)



// export const baseUrl = () => {
//     return process.env.NEXT_PUBLIC_API;
// };
//
// export const api = axios.create({
//     baseURL: baseUrl(),
//     headers: {
//         "Content-Type": "application/json",
//     },
// });

// api.interceptors.request.use(
//     async (config) => {
//
//         const expiration = localStorage.getItem("cognitoAccessToken");
//         const refreshToken = localStorage.getItem("refreshToken")
//
//         if (expiration !== null) {
//             const expirationObj = jwt_decode(expiration)
//
//             const {exp}: any = expirationObj
//             const dateNow = new Date()
//             const timeDifference = moment.unix(exp).diff(moment(dateNow), 'minutes');
//
//
//             if (timeDifference < 30) {
//                 cognitoRefreshToken({
//                     refreshToken: refreshToken
//                 })
//             }
//         }
//
//         const accessToken = localStorage.getItem("accessToken");
//         config.headers.Authorization = accessToken && `Bearer ${accessToken}`;
//
//         return config;
//     },
//     (error) => {
//         console.log(error)
//         return Promise.reject(error);
//     }
// );
//
// api.interceptors.response.use(
//     (response) => {
//         const dispatch = useDispatch()
//         dispatch(getBalanceRequest())
//         return response;
//
//     },
//     async (error) => {
//         console.log(error)
//         if (error.response && error.response.status === 401) {
//             window.location.href = '/auth/verifyCpf';
//         } else {
//             return Promise.reject(error);
//         }
//     }
// );



