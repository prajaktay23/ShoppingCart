import { User } from "./User";

export type RootStackParamList = {
    Splash: undefined;
    Auth: undefined;
    Product: undefined;
};

export type AuthStackParamList = {
    Login: undefined;
};

export type ProductTabParamList = {
    ProductList: undefined;
    UsersList: undefined;
};

export type ProductStackParamList = {
    Products: undefined;
    Cart: undefined;
};

export type UsersStackParamList = {
    Users: undefined;
    UserDetail: { items: User }
};

