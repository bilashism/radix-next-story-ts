import React from 'react'

export type LogoVariant = 'light' | 'dark'
export interface LogoProps extends React.ComponentProps<'svg'> {
  /**
   * Logo variant. Defaults to 'light'. See `LogoVariant` for more details.
   */
  variant?: LogoVariant
}

const LogoIB = ({ variant = 'light', ...rest }: LogoProps) => {
  const fill = variant === 'light' ? '#5C6F7C' : 'white'

  return (
    <svg viewBox="0 0 251 32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" {...rest}>
      <g clipPath="url(#clip0_618_246366)">
        <path
          d="M4.64405 9.07245C4.64405 9.29133 4.46895 9.4719 4.25007 9.4719C4.03119 9.4719 3.85062 9.2968 3.85062 9.07792C3.85062 8.85904 4.02572 8.67847 4.2446 8.67847C4.46347 8.67847 4.64405 8.85357 4.64405 9.07245Z"
          fill={fill}
        />
        <path
          d="M30.917 16.6677C30.917 17.2642 30.441 17.7512 29.8445 17.7566C29.2481 17.7566 28.7611 17.2806 28.7556 16.6841C28.7556 16.0877 29.2317 15.6007 29.8281 15.5952C30.4246 15.5952 30.9116 16.0713 30.917 16.6677Z"
          fill={fill}
        />
        <path
          d="M16.3156 24.5855C16.3211 25.45 15.6262 26.1504 14.7616 26.1614C13.897 26.1669 13.1911 25.4719 13.1857 24.6128C13.1802 23.7483 13.8751 23.0424 14.7397 23.0369C15.6043 23.0314 16.3102 23.7264 16.3156 24.5855Z"
          fill={fill}
        />
        <path
          d="M4.75412 30.0246C4.76506 31.108 3.88955 31.989 2.8061 31.9999C1.72266 32.0054 0.836201 31.1354 0.830729 30.0574C0.819785 28.9739 1.6953 28.093 2.77874 28.082C3.86219 28.0711 4.74865 28.9411 4.75412 30.0246Z"
          fill={fill}
        />
        <path
          d="M16.7881 12.4925C16.7881 12.9029 16.4597 13.2312 16.0548 13.2367C15.6444 13.2367 15.3106 12.9139 15.3106 12.5035C15.3106 12.0985 15.6335 11.7647 16.0439 11.7593C16.4488 11.7593 16.7826 12.0821 16.7881 12.4925Z"
          fill={fill}
        />
        <path
          d="M10.1043 12C10.1043 12 5.19044 15.015 4.00303 19.2996C2.84298 23.4966 6.46541 26.0191 6.46541 26.0191C6.46541 26.0191 0.949681 23.617 1.4531 19.2503C2.00577 14.4679 10.1043 12 10.1043 12Z"
          fill="#F89731"
        />
        <path
          d="M44.5276 0L38.596 2.63201L38.7766 26.7524C38.7766 26.7524 31.6083 29.9972 20.0406 30.0848C20.0406 30.0848 36.9325 32.1094 48.358 27.119C55.4825 24.0109 55.57 20.3776 55.57 20.3776L55.5044 11.5404L50.0762 13.8659L50.0215 6.2052L44.5933 8.53078L44.5276 0Z"
          fill="#F89731"
        />
        <path
          d="M85.6501 14.8501C85.6701 17.6301 83.4301 19.9001 80.6501 19.9201C77.8701 19.9401 75.5901 17.7101 75.5701 14.9201C75.5501 12.1401 77.7901 9.87011 80.5701 9.85011C83.3601 9.83011 85.6301 12.0701 85.6501 14.8501Z"
          fill={fill}
        />
        <path
          d="M97.7801 11.84C97.3301 11.58 97.1501 11.49 96.8801 11.39C96.5501 11.28 96.0301 11.21 95.6901 11.21C94.7101 11.21 94.0401 11.69 94.0401 12.43C94.0401 13.07 94.4201 13.4 96.1801 14.33C96.7701 14.64 97.2301 14.93 97.5401 15.21C97.9601 15.56 98.2101 16.15 98.2101 16.78C98.2101 18.26 97.1101 19.19 95.3701 19.19C94.7801 19.19 94.2301 19.08 93.7701 18.9C93.4401 18.77 93.2201 18.64 92.6501 18.26L93.2001 17.41C93.6901 17.74 93.9001 17.86 94.2001 17.97C94.5801 18.12 95.0001 18.19 95.4501 18.19C96.4701 18.19 97.0901 17.7 97.0901 16.88C97.0901 16.63 97.0501 16.42 96.9601 16.26C96.8201 16 96.5701 15.75 96.2301 15.55C96.0901 15.47 95.6001 15.22 94.7901 14.78C93.4901 14.08 92.9401 13.4 92.9401 12.51C92.9401 11.13 94.0801 10.22 95.8001 10.22C96.3001 10.22 96.8101 10.29 97.2601 10.43C97.6101 10.55 97.8201 10.65 98.3101 10.94L97.8101 11.83L97.7801 11.84Z"
          fill={fill}
        />
        <path
          d="M101.38 19.19C100.7 19.19 100.24 18.65 100.24 17.87V13.91H99.2399V13.33L100.24 13.08V11.35H101.22V13.08H102.79V13.91H101.22V17.55C101.25 17.73 101.25 17.85 101.26 17.92C101.27 18.12 101.39 18.21 101.6 18.21C101.85 18.21 102.05 18.11 102.47 17.79L102.88 18.45C102.19 19.03 101.86 19.2 101.39 19.2"
          fill={fill}
        />
        <path
          d="M105.05 11.65C104.7 11.65 104.41 11.36 104.41 11.01C104.41 10.66 104.7 10.37 105.05 10.37C105.4 10.37 105.69 10.66 105.69 11.01C105.69 11.36 105.4 11.65 105.05 11.65ZM104.55 13.08H105.53V19.02H104.55V13.08Z"
          fill={fill}
        />
        <path
          d="M111.98 18.7799C111.5 19.0399 110.92 19.1899 110.33 19.1899C108.52 19.1899 107.29 17.9399 107.29 16.1199C107.29 14.2999 108.57 12.9199 110.4 12.9199C110.7 12.9199 110.99 12.9599 111.28 13.0399C111.67 13.1399 111.86 13.2399 112.26 13.5199L111.7 14.3199C111.24 13.9399 110.9 13.8099 110.36 13.8099C109.17 13.8099 108.37 14.7299 108.37 16.0699C108.37 17.4099 109.17 18.2799 110.44 18.2799C111.02 18.2799 111.38 18.1499 111.87 17.7799L112.38 18.5499C112.21 18.6499 112.08 18.7299 111.99 18.7699"
          fill={fill}
        />
        <path
          d="M117.58 19.02V14.81C117.58 14.42 117.57 14.29 117.49 14.12C117.4 13.92 117.18 13.8 116.9 13.8C116.28 13.8 115.64 14.25 114.62 15.39V19.02H113.64V9.45996H114.62V14.32C115.03 13.86 115.13 13.74 115.42 13.51C115.88 13.13 116.46 12.92 117.02 12.92C118.07 12.92 118.58 13.46 118.58 14.57V19.01H117.58V19.02Z"
          fill={fill}
        />
        <path
          d="M122.3 19.19C121.62 19.19 121.16 18.65 121.16 17.87V13.91H120.16V13.33L121.16 13.08V11.35H122.14V13.08H123.71V13.91H122.14V17.55C122.17 17.73 122.17 17.85 122.18 17.92C122.19 18.12 122.31 18.21 122.52 18.21C122.77 18.21 122.97 18.11 123.39 17.79L123.8 18.45C123.1 19.03 122.78 19.2 122.31 19.2"
          fill={fill}
        />
        <path
          d="M125.97 11.65C125.62 11.65 125.33 11.36 125.33 11.01C125.33 10.66 125.62 10.37 125.97 10.37C126.32 10.37 126.61 10.66 126.61 11.01C126.61 11.36 126.32 11.65 125.97 11.65ZM125.47 13.08H126.45V19.02H125.47V13.08Z"
          fill={fill}
        />
        <path
          d="M132.73 19.0199V14.8099C132.73 14.4199 132.7 14.2899 132.64 14.1199C132.55 13.9199 132.31 13.7999 132.04 13.7999C131.44 13.7999 130.79 14.2499 129.76 15.3899V19.0199H128.78V13.0799H129.76V14.3199C130.17 13.8599 130.29 13.7399 130.57 13.5099C131.02 13.1299 131.61 12.9199 132.16 12.9199C133.21 12.9199 133.72 13.4599 133.72 14.5699V19.0099H132.74L132.73 19.0199Z"
          fill={fill}
        />
        <path
          d="M140 13.9099C140.24 14.2699 140.35 14.6599 140.35 15.1399C140.35 16.3499 139.29 17.3799 138.04 17.3799C137.96 17.3799 137.84 17.3699 137.67 17.3499C137.63 17.3499 137.56 17.3399 137.47 17.3399C136.92 17.7999 136.7 18.0599 136.7 18.2299C136.7 18.3899 136.83 18.4399 137.2 18.4399H139.42C140.52 18.4399 141.02 18.8699 141.02 19.8299C141.02 21.2199 139.59 22.3299 137.81 22.3299C136.57 22.3299 135.49 21.6699 135.49 20.8999C135.49 20.7299 135.56 20.5199 135.67 20.2799C135.84 19.9499 136.01 19.7299 136.46 19.2599C135.86 19.0899 135.61 18.8899 135.61 18.5499C135.61 18.1699 135.98 17.7199 136.78 17.0699C136.03 16.6599 135.64 16.0099 135.64 15.1799C135.64 13.8399 136.62 12.9099 138.01 12.9099C138.44 12.9099 138.69 12.9599 139.27 13.1599H140.17L141.24 13.0699V13.8899H140V13.9099ZM139.42 19.3499H137.2L137 19.6499C136.62 20.2399 136.5 20.4799 136.5 20.6999C136.5 21.1499 137.09 21.4599 137.89 21.4599C139.1 21.4599 140.18 20.7499 140.18 19.9499C140.18 19.5399 139.93 19.3499 139.41 19.3499M137.93 13.6699C137.21 13.6699 136.62 14.3399 136.62 15.1499C136.62 15.9599 137.21 16.6299 137.94 16.6299C138.67 16.6299 139.26 15.9899 139.26 15.1499C139.26 14.3099 138.67 13.6699 137.92 13.6699"
          fill={fill}
        />
        <path d="M148 10.8199H146.95V19.2999H148V10.8199Z" fill={fill} />
        <path
          d="M154.21 19.2899V15.1699C154.21 14.7899 154.18 14.6599 154.12 14.4899C154.03 14.2999 153.8 14.1799 153.53 14.1799C152.94 14.1799 152.31 14.6199 151.29 15.7299V19.2899H150.33V13.4699H151.29V14.6899C151.69 14.2399 151.81 14.1199 152.09 13.8999C152.53 13.5299 153.11 13.3199 153.65 13.3199C154.68 13.3199 155.18 13.8499 155.18 14.9399V19.2999H154.22L154.21 19.2899Z"
          fill={fill}
        />
        <path d="M158.41 9.92993H157.45V19.2899H158.41V9.92993Z" fill={fill} />
        <path
          d="M161.23 12.0701C160.88 12.0701 160.6 11.7901 160.6 11.4401C160.6 11.0901 160.88 10.8101 161.23 10.8101C161.58 10.8101 161.86 11.0901 161.86 11.4401C161.86 11.7901 161.58 12.0701 161.23 12.0701ZM160.74 13.4701H161.7V19.2901H160.74V13.4701Z"
          fill={fill}
        />
        <path
          d="M168.13 19.0599C167.66 19.3199 167.09 19.4599 166.51 19.4599C164.74 19.4599 163.53 18.2399 163.53 16.4499C163.53 14.6599 164.79 13.3199 166.58 13.3199C166.88 13.3199 167.16 13.3599 167.44 13.4399C167.82 13.5399 168 13.6299 168.4 13.9099L167.85 14.6899C167.4 14.3199 167.06 14.1899 166.54 14.1899C165.37 14.1899 164.58 15.0899 164.58 16.3999C164.58 17.7099 165.37 18.5699 166.61 18.5699C167.18 18.5699 167.54 18.4399 168.01 18.0799L168.51 18.8399C168.34 18.9399 168.22 19.0199 168.13 19.0599Z"
          fill={fill}
        />
        <path
          d="M173.73 19.2899V15.1699C173.73 14.7899 173.72 14.6599 173.64 14.4899C173.55 14.2999 173.33 14.1799 173.06 14.1799C172.45 14.1799 171.83 14.6199 170.82 15.7299V19.2899H169.86V9.92993H170.82V14.6899C171.22 14.2399 171.32 14.1199 171.61 13.8999C172.06 13.5299 172.62 13.3199 173.18 13.3199C174.21 13.3199 174.71 13.8499 174.71 14.9399V19.2999H173.73V19.2899Z"
          fill={fill}
        />
        <path
          d="M178.2 19.46C177.53 19.46 177.08 18.93 177.08 18.16V14.28H176.1V13.71L177.08 13.47V11.77H178.04V13.47H179.58V14.28H178.04V17.85C178.07 18.03 178.07 18.15 178.08 18.21C178.09 18.4 178.21 18.49 178.41 18.49C178.65 18.49 178.85 18.39 179.26 18.08L179.66 18.72C178.98 19.29 178.66 19.45 178.2 19.45"
          fill={fill}
        />
        <path
          d="M181.65 12.0701C181.3 12.0701 181.02 11.7901 181.02 11.4401C181.02 11.0901 181.3 10.8101 181.65 10.8101C182 10.8101 182.28 11.0901 182.28 11.4401C182.28 11.7901 182 12.0701 181.65 12.0701ZM181.16 13.4701H182.12V19.2901H181.16V13.4701Z"
          fill={fill}
        />
        <path
          d="M188.38 19.2899V15.1699C188.38 14.7899 188.35 14.6599 188.29 14.4899C188.2 14.2999 187.97 14.1799 187.7 14.1799C187.11 14.1799 186.48 14.6199 185.47 15.7299V19.2899H184.51V13.4699H185.47V14.6899C185.87 14.2399 185.99 14.1199 186.27 13.8999C186.71 13.5299 187.29 13.3199 187.83 13.3199C188.86 13.3199 189.36 13.8499 189.36 14.9399V19.2999H188.4L188.38 19.2899Z"
          fill={fill}
        />
        <path
          d="M195.62 14.28C195.85 14.63 195.97 15.01 195.97 15.49C195.97 16.67 194.93 17.6899 193.71 17.6899C193.63 17.6899 193.52 17.68 193.35 17.66C193.31 17.66 193.25 17.65 193.16 17.65C192.62 18.1 192.4 18.36 192.4 18.52C192.4 18.67 192.53 18.7299 192.89 18.7299H195.06C196.14 18.7299 196.63 19.15 196.63 20.09C196.63 21.45 195.23 22.54 193.48 22.54C192.26 22.54 191.2 21.9 191.2 21.14C191.2 20.97 191.27 20.77 191.38 20.54C191.55 20.22 191.71 20 192.15 19.54C191.56 19.37 191.31 19.18 191.31 18.85C191.31 18.48 191.67 18.04 192.45 17.4C191.72 17 191.33 16.3599 191.33 15.5499C191.33 14.2399 192.29 13.33 193.66 13.33C194.08 13.33 194.33 13.38 194.9 13.58H195.78L196.83 13.49V14.2999H195.61L195.62 14.28ZM195.06 19.61H192.89L192.7 19.91C192.33 20.49 192.21 20.7199 192.21 20.9399C192.21 21.3799 192.79 21.6899 193.57 21.6899C194.75 21.6899 195.82 21 195.82 20.21C195.82 19.81 195.58 19.6199 195.06 19.6199M193.61 14.06C192.9 14.06 192.32 14.71 192.32 15.51C192.32 16.31 192.9 16.96 193.62 16.96C194.34 16.96 194.92 16.33 194.92 15.51C194.92 14.69 194.34 14.06 193.61 14.06Z"
          fill={fill}
        />
        <path
          d="M198.82 16.2999C198.82 17.7099 199.54 18.5699 200.72 18.5699C201.24 18.5699 201.61 18.4299 202.24 17.9899L202.63 18.7499C201.77 19.2899 201.28 19.4599 200.52 19.4599C198.9 19.4599 197.81 18.2299 197.81 16.3899C197.81 14.5499 198.9 13.3199 200.56 13.3199C201.92 13.3199 202.81 14.2799 202.81 15.7399V16.3099H198.82V16.2999ZM200.49 14.1899C199.68 14.1899 199.12 14.6799 198.9 15.5799H201.75C201.74 14.6799 201.29 14.1899 200.49 14.1899Z"
          fill={fill}
        />
        <path
          d="M208.44 19.2899V15.1699C208.44 14.7899 208.42 14.6599 208.35 14.4899C208.26 14.2999 208.03 14.1799 207.76 14.1799C207.17 14.1799 206.54 14.6199 205.53 15.7299V19.2899H204.56V13.4699H205.53V14.6899C205.93 14.2399 206.04 14.1199 206.32 13.8999C206.76 13.5299 207.34 13.3199 207.87 13.3199C208.9 13.3199 209.4 13.8499 209.4 14.9399V19.2999H208.44V19.2899Z"
          fill={fill}
        />
        <path
          d="M217.36 16.89C217.14 17.52 216.8 18.08 216.33 18.57C215.69 19.25 215.19 19.46 214.16 19.46C213.78 19.46 213.62 19.45 212.9 19.38C212.54 19.34 212.36 19.32 211.87 19.29L213.34 9.99995L214.89 9.82996L214.36 13.22L214.26 13.7C214.18 14.14 214.13 14.33 213.99 14.89C214.39 14.24 214.6 13.99 215.1 13.61C215.56 13.26 215.92 13.13 216.41 13.13C217.23 13.13 217.67 13.8 217.67 15.08C217.67 15.66 217.55 16.35 217.36 16.88M215.72 14.54C215.44 14.54 215.01 14.8599 214.55 15.4399C214.27 15.7999 214.09 16.11 213.97 16.43C213.92 16.58 213.85 16.78 213.8 17.02C213.72 17.29 213.68 17.4799 213.66 17.6199L213.56 18.28C213.91 18.37 214.02 18.39 214.18 18.39C215.19 18.39 216.08 16.86 216.08 15.13C216.08 14.69 215.98 14.54 215.72 14.54Z"
          fill={fill}
        />
        <path
          d="M224.24 19.29H222.78L223.07 17.52C222.94 17.75 222.84 17.94 222.75 18.09C222.58 18.34 222.32 18.62 222.06 18.85C221.57 19.26 221.02 19.47 220.45 19.47C219.64 19.47 219.27 19.08 219.27 18.27C219.27 18.14 219.27 18.01 219.3 17.89L220 13.41L221.55 13.24L220.94 17.15C220.9 17.41 220.89 17.52 220.89 17.64C220.89 17.92 220.98 18.05 221.16 18.05C221.46 18.05 221.84 17.81 222.27 17.34C222.96 16.59 223.22 16 223.41 14.82L223.62 13.41L225.19 13.24L224.25 19.3L224.24 19.29Z"
          fill={fill}
        />
        <path
          d="M230.34 15.1399C230.24 15.0799 230.19 15.0599 230.1 15.0599C229.88 15.0599 229.66 15.1799 229.39 15.4599C229.07 15.7799 228.82 16.1499 228.65 16.5999C228.47 17.0199 228.38 17.3799 228.25 18.2099L228.08 19.2899H226.55L227.46 13.3899L228.81 13.2199L228.56 15.0099C228.68 14.7999 228.77 14.6499 228.82 14.5499C229.03 14.2199 229.26 13.8899 229.5 13.6199C229.77 13.3099 230.03 13.1799 230.39 13.1799C230.58 13.1799 230.7 13.2299 230.93 13.3799L230.34 15.1299V15.1399Z"
          fill={fill}
        />
        <path
          d="M235.45 15.9L232.85 17.27C232.9 17.57 232.94 17.69 233.02 17.81C233.14 17.99 233.39 18.12 233.6 18.12C233.77 18.12 234.08 18.06 234.33 17.95C234.68 17.81 234.88 17.67 235.71 17.05L236.3 17.96C235.94 18.25 235.78 18.36 235.45 18.6C235.18 18.79 234.96 18.93 234.78 19.03C234.28 19.3 233.68 19.45 233.16 19.45C232.02 19.45 231.45 18.74 231.45 17.33C231.45 14.85 232.83 13.13 234.82 13.13C235.94 13.13 236.52 13.55 236.52 14.38C236.52 15.05 236.2 15.5 235.45 15.89M234.52 14.17C234.23 14.17 233.93 14.34 233.66 14.66C233.35 15.02 233.2 15.37 232.94 16.22L234.96 15.09C235.02 14.92 235.04 14.84 235.04 14.73C235.04 14.37 234.86 14.18 234.52 14.18"
          fill={fill}
        />
        <path
          d="M242.58 19.2899H241.21L241.48 17.5899C240.98 18.2999 240.75 18.5499 240.26 18.9099C239.8 19.2599 239.3 19.4499 238.88 19.4499C238.18 19.4499 237.7 18.6699 237.7 17.5599C237.7 15.8999 238.42 14.3699 239.55 13.6199C240.08 13.2899 240.57 13.1599 241.4 13.1599C241.95 13.1599 242.3 13.1999 243.5 13.3899L242.58 19.2899ZM241.31 14.2399C240.26 14.2399 239.33 15.5999 239.33 17.1399C239.33 17.6799 239.47 17.9999 239.73 17.9999C239.96 17.9999 240.37 17.6699 240.76 17.1799C241.26 16.5199 241.59 15.7999 241.7 15.1399L241.83 14.3099C241.59 14.2599 241.5 14.2499 241.31 14.2499"
          fill={fill}
        />
        <path
          d="M250.05 19.29H248.6L248.88 17.52C248.75 17.75 248.65 17.94 248.56 18.09C248.39 18.34 248.13 18.62 247.86 18.85C247.37 19.26 246.82 19.47 246.25 19.47C245.44 19.47 245.07 19.08 245.07 18.27C245.07 18.14 245.07 18.01 245.1 17.89L245.8 13.41L247.35 13.24L246.75 17.15C246.71 17.41 246.7 17.52 246.7 17.64C246.7 17.92 246.79 18.05 246.97 18.05C247.26 18.05 247.65 17.81 248.08 17.34C248.78 16.59 249.03 16 249.22 14.82L249.43 13.41L251 13.24L250.06 19.3L250.05 19.29Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_618_246366">
          <rect width="250.169" height="31.9999" fill="white" transform="translate(0.830627)" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default LogoIB
