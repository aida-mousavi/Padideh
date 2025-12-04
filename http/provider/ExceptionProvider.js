// import toastComponent from "../components/public/toastComponent.js";
// import {messages} from "../messages/messages.js";
// import cacheProvider from "./cacheProvider.js";
// import ToastComponent from "../components/public/toastComponent.js";
//
//
// class ExceptionProvider {
//     static handle(exception, statusCode) {
//         switch (statusCode) {
//             case 0 :
//                 return ExceptionProvider.origin(exception)
//             case 400 :
//                 return ExceptionProvider.badRequest(exception)
//             case 401 :
//                 return ExceptionProvider.unauthorized(exception)
//             case 422 :
//                 return ExceptionProvider.validation(exception)
//             case 404 :
//                 return ExceptionProvider.notFound(exception)
//             case 405 :
//                 return ExceptionProvider.notAllowed(exception)
//             case 403 :
//                 return ExceptionProvider.accessDenied(exception)
//             case 429 :
//                 return ExceptionProvider.tooManyRequests(exception)
//             case 500 :
//                 return ExceptionProvider.serverError(exception)
//             default :
//                 return ExceptionProvider.general()
//         }
//     }
//
//     static validation(exception) {
//         toastComponent(exception, "error")
//     }
//
//
//     static badRequest() {
//         ToastComponent(messages.api.badRequest, "error")
//     }
//
//     static unauthorized(exception) {
//         cacheProvider.clear('Token1')
//         cacheProvider.clear('Shop')
//         cacheProvider.clear('Contact')
//         window.location.reload()
//         toastComponent(exception, "error")
//     }
//
//     static notFound(exception) {
//         // window.location.href = "/404"
//         exception ? ToastComponent(exception, 'error') : ToastComponent(messages.api.notFound, 'error')
//     }
//
//     static notAllowed() {
//         ToastComponent(messages.api.notAllowed, 'error')
//     }
//
//     static accessDenied() {
//         cacheProvider.clear("panel-token")
//         toastComponent(messages?.api?.forbidden, "error")
//         window.location.reload()
//     }
//
//     static tooManyRequests() {
//         ToastComponent(messages.api.tooManyRequests, "error")
//     }
//
//     static serverError() {
//         ToastComponent(messages?.api?.serverError, 'error')
//     }
//
//     static general() {
//         ToastComponent("خطای ناشناخته", 'error')
//     }
//
//     static origin() {
//         ToastComponent("خطای سرور ", "error")
//     }
//
// }
//
// Object.freeze(ExceptionProvider)
//
// export default ExceptionProvider