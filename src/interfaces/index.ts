import { ApiDataResponse } from "./api-responses";

export enum DataTypes {
    accounts = "accounts",
    assets = "assets",
    customers = "customers",
    datapoints = "datapoints",
    devices = "devices",
    documents = "documents",
    forms = "forms",
    invites = "invites",
    media = "media",
    messages = "messages",
    namespaces = "namespaces",
    orders = "orders",
    patients = "patients",
    relationships = "relationships",
    rules = "rules",
    templates = "templates",
    users = "users",
    workflows = "workflows",
}

export interface ApiDataType extends ApiDataResponse {
    code?: string;
}

export interface HomeData {
    [key: string]: ApiDataType | undefined;
}
