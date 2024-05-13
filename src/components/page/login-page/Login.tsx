import React, { type FC } from 'react'
import Card from '../../card/Card'
import Bg1024 from './svg/bg1024'
import Bg1280 from './svg/bg1280'
import Bg1440 from './svg/bg1440'
import Bg1920 from './svg/bg1920'
import Bg2560 from './svg/bg2560'
import Bg375 from './svg/bg375'
import Bg768 from './svg/bg768'

export type LoginProps = React.ComponentPropsWithoutRef<'div'>

const Login: FC<LoginProps> = ({ children }: LoginProps) => (
  <div className="h-screen bg-primary-100">
    <ResponsiveSVG />

    <Card className="loginCard absolute z-20 !h-auto max-w-[550px] rounded-lg !px-6 !py-10 2xs:!p-10">{children}</Card>
  </div>
)

const ResponsiveSVG: FC = () => (
  <div className="!h-3/6 w-screen bg-primary-600">
    <Bg375 />
    <Bg768 />
    <Bg1024 />
    <Bg1280 />
    <Bg1440 />
    <Bg1920 />
    <Bg2560 />
  </div>
)
export default Login
