export const apiLocalhost = 'http://localhost:8080/api/v1/';
export const apiDomain = 'localhost:3000/api/v1/';

export const getApiURL = (param) => {
    return `${window.location.hostname}${param}`;
}
export const getDomain = () => {
    return window.location.hostname;
};
export const getPort = () => {
    return window.location.port;
}
export const getDomainAndPort = () => {
    return getDomain() + ":" + getPort();
}
