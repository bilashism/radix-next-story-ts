import { classNames } from '@/styles/styling'
import { ChevronRight } from 'lucide-react'
import React from 'react'
import { Link } from '../link'
import Typography, { typographyStyles } from '../typography/Typography'

export type Breadcrumb = {
  /**
   * The href property is a string representing the URL of a breadcrumb link.
   */
  href: string
  /**
   * The `label` property is a string that represents the text to be displayed
   * for a breadcrumb link. It is typically a short description of the page or section that the link
   * leads to.
   */
  label: string
}

export interface BreadcrumbsProps {
  /**
   * The home href as a string.
   */
  home: string
  /**
   * The links property takes an array of Breadcrumb links, which are comprised of a label and an href.
   * Please refer to the Breadcrumb type for more information.
   */
  links?: Breadcrumb[]
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ links, home }) => {
  return (
    <nav className="flex items-center gap-2">
      <Link.Internal
        href={home}
        className={classNames(
          typographyStyles({ size: 'md', weight: 'regular' }),
          'text-primary-300 hover:text-accent-blue-200',
        )}
      >
        Home
      </Link.Internal>
      {links
        ?.map((link, index) => {
          const last = links.length === index + 1
          if (last) {
            return (
              <Typography key={`index-${link.label}`} as="span" className="text-white">
                {link.label}
              </Typography>
            )
          }

          return (
            <Link.Internal
              href={link.href}
              key={`index-${link.label}`}
              className={classNames(
                typographyStyles({ size: 'md', weight: 'regular' }),
                'text-primary-300 hover:text-accent-blue-200',
              )}
            >
              {link.label}
            </Link.Internal>
          )
        })
        .reduce<JSX.Element[]>(
          (prev, cur, index) => [...prev, <ChevronRight className="text-primary-300 h-3 w-3" key={index} />, cur],
          [],
        )}
    </nav>
  )
}

export default Breadcrumbs
