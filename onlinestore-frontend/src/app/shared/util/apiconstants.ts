export class APIConstants {
    public static BASE_API_ENDPOINT = "http://localhost:8080/hamrostore";
    public static LOGIN_API_ENDPOINT = APIConstants.BASE_API_ENDPOINT + "/login";
    public static SIGNUP_API_ENDPOINT = APIConstants.BASE_API_ENDPOINT + "/signup";
    public static REST_API_ENDPOINT = APIConstants.BASE_API_ENDPOINT + "/rest";
    public static USER_REST_API_ENDPOINT = APIConstants.REST_API_ENDPOINT + "/user";
    public static DELIVERY_REST_API_ENDPOINT = APIConstants.REST_API_ENDPOINT + "/delivery";
    public static PRODUCT_REST_API_ENDPOINT = APIConstants.REST_API_ENDPOINT + "/product";
    public static ORDER_REST_API_ENDPOINT = APIConstants.REST_API_ENDPOINT + "/order";
    public static PAYMENT_REST_API_ENDPOINT = APIConstants.REST_API_ENDPOINT + "/payment";


}