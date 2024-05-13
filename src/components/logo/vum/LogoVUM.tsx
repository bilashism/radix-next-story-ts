import React from 'react'
import type { LogoProps } from '../ib/LogoIB'

const LogoVUM = ({ variant = 'light', ...rest }: LogoProps) => {
  const fill = variant === 'light' ? '#5C6F7C' : 'white'

  return (
    <svg viewBox="0 0 194 33" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" {...rest}>
      <path
        d="M6.25319 21.6957H5.24461L0 8.04626H1.78182L5.71528 18.4346C5.78252 18.6195 5.83295 18.8213 5.84976 19.0734C5.84976 18.8381 5.88338 18.6532 5.96743 18.4346L9.7496 8.04626H11.3969L6.23638 21.6957H6.25319Z"
        fill="#F89731"
      />
      <path
        d="M18.5253 21.3431V19.4436C17.4495 20.9228 16.2728 21.612 14.8944 21.612C13.2975 21.612 12.457 20.7211 12.457 19.057V12.1986H13.9699V18.6703C13.9699 19.7966 14.2893 20.2672 15.0625 20.2672C16.0375 20.2672 17.4831 19.2419 18.5253 17.7794V12.1986H20.055V21.3263H18.5253V21.3431Z"
        fill="#F89731"
      />
      <path
        d="M35.6143 21.3428V14.871C35.6143 14.1987 35.6143 14.081 35.4798 13.7952C35.3454 13.4927 34.9755 13.3077 34.5553 13.3077C33.7148 13.3077 32.8239 13.8961 31.4791 15.3081L31.0589 15.7451V21.326H29.546V14.8542C29.546 14.1819 29.546 14.0642 29.4116 13.7784C29.2771 13.4758 28.9073 13.2909 28.487 13.2909C27.5625 13.2909 26.5707 13.9801 24.9738 15.7283V21.3091H23.4609V12.1815H24.9738V14.0978C25.5958 13.3918 25.7807 13.2069 26.2177 12.8539C26.9069 12.2655 27.8146 11.9462 28.6551 11.9462C30.168 11.9462 30.9412 12.6522 31.0421 14.1314C31.6809 13.4086 31.8658 13.2237 32.3028 12.8539C32.992 12.2655 33.8997 11.9462 34.7402 11.9462C36.3539 11.9462 37.144 12.7698 37.144 14.4844V21.326H35.6311L35.6143 21.3428Z"
        fill="#F89731"
      />
      <path
        d="M57.0836 10.9209C56.6129 10.7192 56.2767 10.5847 56.0414 10.4839C55.1672 10.1645 54.2763 9.96279 53.419 9.96279C50.1244 9.96279 47.5357 12.3834 47.5357 15.4259C47.5357 17.7625 49.3511 19.4266 51.923 19.4266C52.5954 19.4266 52.9484 19.3426 53.8225 19.0568L54.394 15.4091H56.9995L56.1254 20.8723C55.4866 21.0067 55.016 21.1412 54.6966 21.2085C53.3182 21.511 52.4609 21.6287 51.3683 21.6287C47.3676 21.6287 44.8125 19.309 44.8125 15.6949C44.8125 14.3165 45.2159 12.9381 45.9388 11.7278C46.443 10.9041 47.0818 10.1477 47.8551 9.54255C49.4352 8.29864 50.9985 7.81116 53.2846 7.81116C54.2931 7.81116 55.2849 7.94563 56.1086 8.14735C56.7137 8.31545 57.1004 8.44992 58.0249 8.87016L57.1004 10.9041L57.0836 10.9209Z"
        fill={fill}
      />
      <path
        d="M65.1516 16.0311L61.0837 18.1827C61.1677 18.6534 61.2182 18.8551 61.3526 19.0232C61.5376 19.309 61.941 19.5107 62.2604 19.5107C62.5293 19.5107 63 19.4098 63.4034 19.2418C63.9413 19.0232 64.2775 18.8047 65.5551 17.8297L66.4796 19.2586C65.9081 19.7292 65.6727 19.8805 65.1516 20.2671C64.7314 20.5697 64.3784 20.7882 64.1094 20.9395C63.3194 21.3598 62.378 21.6119 61.5712 21.6119C59.7725 21.6119 58.8984 20.5025 58.8984 18.2836C58.8984 14.4006 61.0501 11.6942 64.1767 11.6942C65.9249 11.6942 66.8326 12.3666 66.8326 13.6441C66.8326 14.6863 66.3283 15.3923 65.1516 16.0311ZM63.706 13.3248C63.2353 13.3248 62.7815 13.5937 62.3612 14.098C61.8737 14.6695 61.6384 15.2074 61.235 16.5354L64.3952 14.7536C64.496 14.4846 64.5129 14.3669 64.5129 14.182C64.5129 13.6105 64.2271 13.3079 63.706 13.3079V13.3248Z"
        fill={fill}
      />
      <path
        d="M76.3616 17.5775C76.0254 18.5692 75.4707 19.4602 74.7479 20.2166C73.7393 21.2924 72.9493 21.6118 71.3355 21.6118C70.7304 21.6118 70.4951 21.595 69.352 21.4941C68.7805 21.4269 68.5115 21.3933 67.7383 21.3597L70.0412 6.78568L72.4786 6.51672L71.6549 11.8454L71.4868 12.585C71.3524 13.2742 71.2851 13.5768 71.0666 14.4677C71.6885 13.4423 72.0079 13.0557 72.798 12.4505C73.5208 11.9126 74.0923 11.7109 74.8488 11.7109C76.1431 11.7109 76.8323 12.7531 76.8323 14.7703C76.8323 15.678 76.6474 16.7706 76.3448 17.5943L76.3616 17.5775ZM73.7729 13.913C73.3359 13.913 72.6635 14.4173 71.9407 15.325C71.5036 15.8965 71.2179 16.3672 71.033 16.8715C70.9489 17.1068 70.8649 17.4094 70.764 17.796C70.6632 18.2162 70.5791 18.5188 70.5455 18.7373L70.3774 19.7627C70.9153 19.8972 71.1002 19.9476 71.3524 19.9476C72.9493 19.9476 74.3445 17.5439 74.3445 14.8207C74.3445 14.1315 74.1764 13.8962 73.7729 13.8962V13.913Z"
        fill={fill}
      />
      <path
        d="M84.2292 14.8373C84.0611 14.7365 83.9938 14.7197 83.8425 14.7197C83.5063 14.7197 83.1533 14.9046 82.7331 15.3416C82.2288 15.8459 81.8422 16.4343 81.5564 17.1403C81.2707 17.8127 81.1362 18.3674 80.9345 19.6617L80.6655 21.3595H78.2617L79.6905 12.1142L81.8086 11.8452L81.4219 14.6524C81.6068 14.3331 81.7413 14.0809 81.8254 13.9296C82.1448 13.4085 82.5146 12.9042 82.9012 12.484C83.3214 11.9965 83.7249 11.7948 84.2964 11.7948C84.599 11.7948 84.7839 11.8788 85.1369 12.1142L84.2123 14.8542L84.2292 14.8373Z"
        fill={fill}
      />
      <path
        d="M93.2931 21.3427H91.0069L91.444 18.5523C91.2423 18.9221 91.0742 19.2247 90.9397 19.4432C90.6707 19.8299 90.2673 20.2669 89.8471 20.6367C89.0738 21.2755 88.2165 21.6117 87.3256 21.6117C86.0649 21.6117 85.4766 21.0065 85.4766 19.729C85.4766 19.5273 85.4766 19.3256 85.5102 19.1239L86.6028 12.0806L89.0402 11.8116L88.0989 17.9472C88.0316 18.3506 88.0148 18.5355 88.0148 18.7204C88.0148 19.1575 88.1493 19.3592 88.4351 19.3592C88.9057 19.3592 89.5109 18.9726 90.1665 18.2497C91.2591 17.0731 91.6961 16.1485 91.9651 14.2995L92.2845 12.0806L94.7387 11.8116L93.2594 21.3259L93.2931 21.3427Z"
        fill={fill}
      />
      <path
        d="M98.4897 21.343H96.0859L97.5148 12.0976L99.9522 11.8287L98.4729 21.343H98.4897ZM100.389 8.80295C100.255 9.57619 99.5991 10.1141 98.8763 10.1141C98.3048 10.1141 97.8509 9.47534 97.8509 8.68528C97.8509 8.60123 97.8678 8.51718 97.8846 8.44995C98.0527 7.6767 98.6746 7.13879 99.3974 7.13879C99.969 7.13879 100.406 7.81118 100.406 8.61804C100.406 8.68528 100.406 8.73571 100.389 8.81976V8.80295Z"
        fill={fill}
      />
      <path
        d="M109.583 12.9212C109.415 13.1061 109.062 13.4591 108.49 14.0306L107.65 14.8543C107.263 15.2241 106.977 15.4763 106.204 16.1487C106.624 17.09 106.742 17.3253 107.33 18.3507C108.103 19.6619 108.238 19.8804 109.213 21.3596H106.422C105.8 20.3175 105.599 19.9476 105.33 19.4265C105.027 18.8214 104.825 18.3339 104.388 17.1909L104.119 17.3253L103.498 21.3596H101.094L103.397 6.78568L105.834 6.51672L104.456 15.1737L105.061 14.5854L105.935 13.7953L106.742 12.9212L107.616 11.9799H110.389C110.053 12.4001 109.768 12.7195 109.583 12.9212Z"
        fill={fill}
      />
      <path
        d="M116.839 16.0311L112.771 18.1827C112.855 18.6534 112.906 18.8551 113.04 19.0232C113.225 19.309 113.628 19.5107 113.948 19.5107C114.217 19.5107 114.687 19.4098 115.091 19.2418C115.629 19.0232 115.965 18.8047 117.243 17.8297L118.167 19.2586C117.596 19.7292 117.36 19.8805 116.839 20.2671C116.419 20.5697 116.066 20.7882 115.797 20.9395C115.007 21.3598 114.066 21.6119 113.259 21.6119C111.46 21.6119 110.586 20.5025 110.586 18.2836C110.586 14.4006 112.738 11.6942 115.864 11.6942C117.612 11.6942 118.52 12.3666 118.52 13.6441C118.52 14.6863 118.016 15.3923 116.839 16.0311ZM115.394 13.3248C114.923 13.3248 114.469 13.5937 114.049 14.098C113.561 14.6695 113.326 15.2074 112.922 16.5354L116.083 14.7536C116.184 14.4846 116.2 14.3669 116.2 14.182C116.2 13.6105 115.915 13.3079 115.394 13.3079V13.3248Z"
        fill={fill}
      />
      <path
        d="M125.565 14.8373C125.397 14.7365 125.33 14.7197 125.178 14.7197C124.842 14.7197 124.489 14.9046 124.069 15.3416C123.565 15.8459 123.178 16.4343 122.892 17.1403C122.607 17.8127 122.472 18.3674 122.27 19.6617L122.001 21.3595H119.598L121.026 12.1142L123.144 11.8452L122.758 14.6524C122.943 14.3331 123.077 14.0809 123.161 13.9296C123.481 13.4085 123.851 12.9042 124.237 12.484C124.657 11.9965 125.061 11.7948 125.632 11.7948C125.935 11.7948 126.12 11.8788 126.473 12.1142L125.548 14.8542L125.565 14.8373Z"
        fill={fill}
      />
      <path
        d="M132.357 14.1989C131.432 13.7114 131.012 13.5937 130.357 13.5937C129.566 13.5937 129.129 13.8627 129.129 14.2997C129.129 14.4342 129.163 14.5855 129.247 14.7032C129.432 15.0058 129.55 15.1234 130.642 16.0143C132.038 17.191 132.458 17.813 132.458 18.8047C132.458 20.5193 131.163 21.6288 129.213 21.6288C128.827 21.6288 128.222 21.5951 127.701 21.5111C126.927 21.3934 126.625 21.3262 125.852 21.1077L126.524 19.1577C127.533 19.5275 128.138 19.662 128.726 19.662C129.466 19.662 129.919 19.3426 129.919 18.8552C129.919 18.4854 129.735 18.2164 129.23 17.7625C128.592 17.191 128.205 16.8548 128.104 16.7708C127.801 16.485 127.533 16.1992 127.314 15.9471C126.978 15.51 126.793 15.0226 126.793 14.451C126.793 12.7196 128.087 11.7111 130.323 11.7111C131.315 11.7111 132.155 11.896 133.063 12.249L132.374 14.1989H132.357Z"
        fill={fill}
      />
      <path
        d="M137.97 21.6454C137.297 21.6454 136.793 21.5277 136.255 21.2252L135.482 26.0495H133.078L135.23 12.0975L137.684 11.8286L137.18 14.4509C138.104 12.8539 139.869 11.6268 141.197 11.6268C142.391 11.6268 143.113 12.669 143.113 14.4509C143.113 18.3339 140.727 21.6454 137.953 21.6454H137.97ZM140.105 13.9634C139.735 13.9634 139.062 14.3836 138.491 14.9551C138.155 15.2913 137.667 15.9301 137.398 16.3335C137.028 16.9051 136.81 17.527 136.709 18.233L136.524 19.4097C137.045 19.8299 137.247 19.914 137.6 19.914C138.306 19.914 139.13 19.3088 139.684 18.3675C140.205 17.4766 140.626 15.9469 140.626 14.9551C140.626 14.3332 140.441 13.9802 140.105 13.9802V13.9634Z"
        fill={fill}
      />
      <path
        d="M152.715 17.9139C152.48 18.6031 152.093 19.2418 151.623 19.8302C150.58 21.1077 149.488 21.612 147.807 21.612C145.605 21.612 144.395 20.2672 144.395 17.8298C144.395 14.2494 146.597 11.7279 149.69 11.7279C151.908 11.7279 153.068 13.0727 153.068 15.6109C153.068 16.3842 152.934 17.2247 152.682 17.9307L152.715 17.9139ZM149.471 13.5602C148.849 13.5602 148.126 14.1653 147.622 15.0898C147.151 15.9303 146.899 16.9053 146.899 17.813C146.899 19.0065 147.387 19.847 148.076 19.847C148.345 19.847 148.698 19.6789 148.95 19.4772C149.975 18.6031 150.631 17.0902 150.631 15.6446C150.631 14.367 150.194 13.5433 149.505 13.5433L149.471 13.5602Z"
        fill={fill}
      />
      <path
        d="M160.499 14.8373C160.331 14.7365 160.263 14.7197 160.112 14.7197C159.776 14.7197 159.423 14.9046 159.003 15.3416C158.498 15.8459 158.112 16.4343 157.826 17.1403C157.54 17.8127 157.406 18.3674 157.204 19.6617L156.935 21.3595H154.531L155.96 12.1142L158.078 11.8452L157.691 14.6524C157.876 14.3331 158.011 14.0809 158.095 13.9296C158.414 13.4085 158.784 12.9042 159.171 12.484C159.591 11.9965 159.994 11.7948 160.566 11.7948C160.868 11.7948 161.053 11.8788 161.406 12.1142L160.482 14.8542L160.499 14.8373Z"
        fill={fill}
      />
      <path
        d="M167.27 13.7953H165.236L164.43 19.0231C164.968 18.8214 165.152 18.7373 165.573 18.5188C165.909 18.3339 166.077 18.233 166.48 17.9809L167.287 19.4097C166.985 19.6282 166.749 19.8131 166.581 19.914C166.111 20.2334 165.27 20.7209 164.783 20.9394C163.976 21.326 163.27 21.5109 162.244 21.6286C162.076 21.326 162.009 20.9898 162.009 20.4351C162.009 20.0989 162.076 19.4937 162.177 18.8886L162.967 13.8121H161.438L161.706 12.1143L163.253 11.9966L163.656 9.39115L165.976 9.12219L165.539 11.9798H167.556L167.287 13.7953H167.27Z"
        fill={fill}
      />
      <path
        d="M176.144 21.3431H173.993L174.413 18.6871C173.623 19.7966 173.27 20.2 172.497 20.7715C171.774 21.3095 170.984 21.612 170.345 21.612C169.253 21.612 168.496 20.3849 168.496 18.6535C168.496 16.048 169.622 13.6274 171.404 12.4676C172.228 11.9297 173.001 11.7448 174.312 11.7448C175.186 11.7448 175.724 11.812 177.607 12.1146L176.178 21.3599L176.144 21.3431ZM174.144 13.4257C172.497 13.4257 171.034 15.5605 171.034 17.9811C171.034 18.8216 171.253 19.3259 171.656 19.3259C172.026 19.3259 172.665 18.8048 173.27 18.0316C174.06 17.0062 174.581 15.8799 174.749 14.8209L174.951 13.5098C174.564 13.4257 174.43 13.4089 174.144 13.4089V13.4257Z"
        fill={fill}
      />
      <path
        d="M186.586 21.3431H184.434L184.855 18.6871C184.064 19.7966 183.711 20.2 182.938 20.7715C182.215 21.3095 181.425 21.612 180.787 21.612C179.694 21.612 178.938 20.3849 178.938 18.6535C178.938 16.048 180.064 13.6274 181.846 12.4676C182.669 11.9297 183.442 11.7448 184.754 11.7448C185.628 11.7448 186.166 11.812 188.048 12.1146L186.62 21.3599L186.586 21.3431ZM184.586 13.4257C182.938 13.4257 181.476 15.5605 181.476 17.9811C181.476 18.8216 181.694 19.3259 182.098 19.3259C182.468 19.3259 183.106 18.8048 183.711 18.0316C184.502 17.0062 185.023 15.8799 185.191 14.8209L185.392 13.5098C185.006 13.4257 184.871 13.4089 184.586 13.4089V13.4257Z"
        fill={fill}
      />
      <path d="M191.662 21.3428H189.258L191.561 6.76883L193.998 6.49988L191.662 21.3428Z" fill={fill} />
    </svg>
  )
}
export default LogoVUM
