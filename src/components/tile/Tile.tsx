import { classNames } from '@/styles/styling'
import React from 'react'
import { RadioGroup, RadioGroupItem } from '../radio'
import { Typography } from '../typography'

export interface TileProps extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * Disables the tile.
   * @default false
   */
  disabled?: boolean

  /**
   * Activates the tile.
   * @default false
   */
  active?: boolean

  /**
  Image to display in the tile.
  */
  image?: React.ReactNode

  /**
   * Title to display in the tile.
   */
  title: string

  /**
   * Radiobutton to display in the tile.
   * * @default true
   */
  radio?: boolean

  /**
   * Callback function to set the active state.
   */
  onSetActive?: (active: boolean) => void
}

const Tile: React.FC<TileProps> = ({
  className,
  disabled,
  onSetActive,
  active,
  image,
  radio,
  title,
  children,
  ...rest
}: TileProps) => {
  const handleTileClick = () => {
    if (onSetActive) {
      onSetActive(!active)
    }
  }

  return (
    <div
      data-testid="tile"
      className={classNames(
        className,
        'w-fit cursor-pointer rounded-lg border-2 border-primary-200 bg-white px-4 py-3',
        disabled ? 'cursor-auto border-0 !bg-primary-100' : '',
        active ? '!border-accent-orange-400 !bg-accent-orange-100' : '',
      )}
      onClick={handleTileClick}
      {...rest}
    >
      <div className={classNames(!!title ? 'items-start' : 'items-center', 'flex')}>
        {radio && (
          <RadioGroup disabled={disabled}>
            <RadioGroupItem
              value="value"
              data-testid="radio-button"
              checked={active}
              disabled={disabled}
              className="appearance-none"
            />
          </RadioGroup>
        )}
        <div className="ml-2 flex flex-col">
          <Typography variant="md/regular" className="text-primary-800 leading-4" as="p">
            {title}
          </Typography>
          {children && (
            <Typography variant="sm/regular" className="mt-1 text-primary-500" as="p">
              {children}
            </Typography>
          )}
        </div>
      </div>
      {image && <div className="mt-2">{image && image}</div>}
    </div>
  )
}
export default Tile
