interface Icon {
  logoBlack: string;
  logoWhite: string;
  moon: string;
  sun: string;
}

export const icon: Icon = {
  logoBlack: require('./logo__cost__black.svg').default,
  logoWhite: require('./logo__cost__white.svg').default,
  moon: require('./moon.svg').default,
  sun: require('./sun.svg').default,
}