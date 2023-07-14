type InternalModuleScreens = {
  ECOModuleLogin: {
    username: string
    password: string
  }
  ECOModuleRegister: {
    username: string
    fullName: string
  }
}

export type ECOModuleScreens = InternalModuleScreens & {}
