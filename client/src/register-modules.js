import router from "./router"

const registerModule = (name, module) => {
    if (module.router) {
        router.addRoute(module.router)
        console.log(router.getRoutes())
    }
}

export const registerModules = (modules) => {
    Object.keys(modules).forEach((moduleKey) => {
        const module = modules[moduleKey]
        registerModule(moduleKey, module)
    })
}
