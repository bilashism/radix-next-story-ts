import { classNames } from '@/styles/styling'
import { cva, type VariantProps } from 'class-variance-authority'
import { Info, LinkIcon } from 'lucide-react'
import React, { type FC } from 'react'
import Heading, { type HeadingVariant } from '../heading/Heading'
import { Link } from '../link'
import { Tooltip } from '../tooltip'
import { Typography } from '../typography'

export const headerStyles = cva('flex flex-col gap-y-2 px-4 py-4', {
  variants: {
    variant: {
      pageHeader: 'bg-primary-600',
      containerHeader: 'bg-transparent',
      sectionHeader: 'bg-transparent',
    },
  },
})

export type HeaderStylesProps = VariantProps<typeof headerStyles>
export type HeaderVariant = `${NonNullable<HeaderStylesProps['variant']>}`

export interface HeaderProps extends React.ComponentPropsWithRef<'div'> {
  /**
   * This prop is of type string and is used to determine the appearance of the header.
   * The format of this string consists of the state the header should be.
   */
  variant: HeaderVariant

  /* A title to display in the header.*/
  title?: string

  /* An info to display next to the title in the header.*/
  info?: string

  /* Additional tailwind class name(s) to apply to the header.*/
  className?: string

  /* Item to display in the header.*/
  description?: React.ReactNode

  /* A button to display in the header.*/
  href?: string
}

const Header: FC<HeaderProps> = ({
  variant,
  className,
  title,
  info,
  description,
  href,
  children,
  ...rest
}: HeaderProps) => {
  const headerVariants = {
    pageHeader: 'h1',
    containerHeader: 'h2',
    sectionHeader: 'h3',
  }

  const headerLink = {
    pageHeader: 'w-auto !fill-none !stroke-primary-400',
    containerHeader: 'w-auto !fill-none !stroke-primary-400',
    sectionHeader: 'w-auto !fill-none !stroke-primary-400',
  }

  const headingVariant = headerVariants[variant as keyof typeof headerVariants]
  const linkVariant = headerLink[variant]

  return (
    <div className={classNames(headerStyles({ variant }), className)} {...rest}>
      {children}
      <div className="mx-auto flex w-full max-w-screen-lg flex-col gap-y-2">
        <div className="inline-flex items-center">
          {title && (
            <Heading
              variant={headingVariant as HeadingVariant}
              className={variant === 'pageHeader' ? '!text-primary-100' : '!text-primary-600'}
            >
              {title}
            </Heading>
          )}
          {href && (
            <Link.External href={href} className="ml-[4px] !text-heading-1 text-primary-400">
              <LinkIcon className={linkVariant} />
            </Link.External>
          )}
          {info && (
            <Tooltip>
              <Tooltip.Trigger className={variant === 'pageHeader' ? 'self-end pb-1.5' : 'self-end pb-1'}>
                <Info className="ml-[4px] !h-[16px] !w-[16px] cursor-pointer !stroke-primary-400" />
              </Tooltip.Trigger>
              <Tooltip.Content size="sm">
                <p className="text-primary-800">{info}</p>
                <Tooltip.Arrow width={26} height={14} className="fill-white" />
              </Tooltip.Content>
            </Tooltip>
          )}
        </div>
        {description && (
          <Typography
            variant={variant === 'sectionHeader' ? 'sm/regular' : 'md/regular'}
            className={variant === 'pageHeader' ? 'text-primary-300' : 'text-primary-500'}
          >
            {description}
          </Typography>
        )}
      </div>
    </div>
  )
}

Header.displayName = 'Header'
export default Header
