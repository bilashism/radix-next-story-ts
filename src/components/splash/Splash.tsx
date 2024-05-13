import { classNames } from '@/styles/styling'
import React, { forwardRef } from 'react'
import { Heading } from '../heading'

export interface SplashProps extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * The content of the component.
   */
  children: React.ReactNode
  /**
   * Optional image to pass to the splash.
   * @type React.ReactNode
   * @example <Splash image={<img src="https://via.placeholder.com/150" alt="placeholder" />} />
   */
  image?: React.ReactNode
  /**
   * Optional title to pass to the splash.
   * @type string
   * @example <Splash title="Hello World" />
   */
  title?: string
  /**
   * Optional classes to pass to the splash.
   * @type string
   */
  className?: string
}

const Splash: React.FC<SplashProps> = forwardRef<HTMLDivElement, SplashProps>(
  ({ children, title, image, className, ...rest }, ref) => {
    return (
      <div ref={ref} className={classNames('flex flex-col items-center gap-y-8 text-center', className)} {...rest}>
        {image && image}
        <div className="text-primary-500">
          {title && (
            <Heading variant="h4" className="text-primary-500">
              {title}
            </Heading>
          )}
          {children}
        </div>
      </div>
    )
  },
)
export default Splash
