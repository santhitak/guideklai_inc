const Module = () => import('./Module.vue');
const Login = () => import('./views/Login.vue');
const Register = () => import('./views/Register.vue');

const moduleRoute = {
    path: '/auth',
    component: Module,
    children: [
    ],
};

export default moduleRoute;
