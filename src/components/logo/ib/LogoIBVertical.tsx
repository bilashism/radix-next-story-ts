import React from 'react'
import type { LogoProps } from './LogoIB'

const LogoIBVertical = ({ variant = 'light', ...rest }: LogoProps) => {
  const fill = variant === 'light' ? '#5C6F7C' : 'white'

  return (
    <svg viewBox="0 0 250 133" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" {...rest}>
      <g clipPath="url(#clip0_106_218839)">
        <path
          d="M64.6308 24.0614C64.6308 24.6298 64.1748 25.0988 63.6047 25.0988C63.0347 25.0988 62.5644 24.644 62.5644 24.0756C62.5644 23.5072 63.0204 23.0382 63.5905 23.0382C64.1605 23.0382 64.6308 23.493 64.6308 24.0614Z"
          fill={fill}
        />
        <path
          d="M133.052 43.7859C133.052 45.3348 131.812 46.5996 130.259 46.6138C128.705 46.6138 127.437 45.3775 127.423 43.8285C127.423 42.2795 128.663 41.0148 130.216 41.0005C131.77 41.0005 133.038 42.2369 133.052 43.7859Z"
          fill={fill}
        />
        <path
          d="M95.0291 64.3488C95.0433 66.5941 93.2334 68.4131 90.9817 68.4415C88.7299 68.4557 86.8915 66.6509 86.8772 64.4199C86.863 62.1746 88.6729 60.3414 90.9246 60.3272C93.1764 60.313 95.0148 62.1177 95.0291 64.3488Z"
          fill={fill}
        />
        <path
          d="M64.9156 78.4743C64.9441 81.288 62.6639 83.5759 59.8421 83.6043C57.0203 83.6186 54.7115 81.3591 54.6973 78.5595C54.6688 75.7458 56.949 73.4579 59.7708 73.4295C62.5926 73.401 64.9014 75.6605 64.9156 78.4743Z"
          fill={fill}
        />
        <path
          d="M14.3655 102.419C14.394 106.37 11.2017 109.596 7.23977 109.624C3.27785 109.653 0.0285093 106.484 6.28673e-06 102.519C-0.0284967 98.5682 3.16384 95.3424 7.12576 95.314C11.1019 95.2855 14.337 98.4688 14.3655 102.419Z"
          fill={fill}
        />
        <path
          d="M96.2547 32.9431C96.2547 34.0089 95.3996 34.8616 94.345 34.8758C93.2761 34.8758 92.4068 34.0373 92.4068 32.9715C92.4068 31.9199 93.2476 31.0531 94.3165 31.0389C95.3711 31.0389 96.2405 31.8773 96.2547 32.9431Z"
          fill={fill}
        />
        <path
          d="M78.8536 31.6641C78.8536 31.6641 66.0558 39.4942 62.9632 50.6212C59.9419 61.5209 69.3764 68.072 69.3764 68.072C69.3764 68.072 55.0108 61.8335 56.322 50.4933C57.7614 38.0732 78.8536 31.6641 78.8536 31.6641Z"
          fill="#F89731"
        />
        <path
          d="M168.51 0.5L153.061 7.33536L153.532 69.9762C153.532 69.9762 134.862 78.4032 104.734 78.6306C104.734 78.6306 148.729 83.8886 178.486 70.9284C197.041 62.8567 197.269 53.4208 197.269 53.4208L197.098 30.4704L182.961 36.51L182.818 16.615L168.681 22.6545L168.51 0.5Z"
          fill="#F89731"
        />
        <path
          d="M31.6527 98.5398C31.0114 98.1703 30.7548 98.0424 30.37 97.9003C29.8997 97.744 29.1587 97.6445 28.6741 97.6445C27.2775 97.6445 26.3226 98.3266 26.3226 99.3782C26.3226 100.288 26.8642 100.757 29.3724 102.078C30.2133 102.519 30.8688 102.931 31.3106 103.329C31.9092 103.826 32.2655 104.665 32.2655 105.56C32.2655 107.663 30.6978 108.985 28.2181 108.985C27.3772 108.985 26.5934 108.828 25.9378 108.573C25.4675 108.388 25.154 108.203 24.3416 107.663L25.1255 106.455C25.8238 106.924 26.1231 107.095 26.5506 107.251C27.0922 107.464 27.6907 107.564 28.3321 107.564C29.7857 107.564 30.6693 106.867 30.6693 105.702C30.6693 105.347 30.6123 105.048 30.484 104.821C30.2845 104.451 29.9282 104.096 29.4437 103.812C29.2442 103.698 28.5458 103.343 27.3915 102.718C25.5388 101.723 24.7549 100.757 24.7549 99.4919C24.7549 97.5308 26.3796 96.2377 28.8309 96.2377C29.5434 96.2377 30.2703 96.3371 30.9116 96.5361C31.4104 96.7066 31.7097 96.8487 32.408 97.2608L31.6954 98.5256L31.6527 98.5398Z"
          fill={fill}
        />
        <path
          d="M36.783 108.985C35.8139 108.985 35.1584 108.217 35.1584 107.109V101.481H33.7332V100.657L35.1584 100.302V97.8435H36.555V100.302H38.7925V101.481H36.555V106.654C36.5978 106.91 36.5978 107.08 36.612 107.18C36.6263 107.464 36.7973 107.592 37.0966 107.592C37.4529 107.592 37.7379 107.45 38.3365 106.995L38.9208 107.933C37.9374 108.757 37.4671 108.999 36.7973 108.999"
          fill={fill}
        />
        <path
          d="M42.0134 98.2698C41.5146 98.2698 41.1013 97.8577 41.1013 97.3603C41.1013 96.8629 41.5146 96.4508 42.0134 96.4508C42.5122 96.4508 42.9255 96.8629 42.9255 97.3603C42.9255 97.8577 42.5122 98.2698 42.0134 98.2698ZM41.3009 100.302H42.6975V108.743H41.3009V100.302Z"
          fill={fill}
        />
        <path
          d="M51.8897 108.402C51.2056 108.772 50.379 108.985 49.5382 108.985C46.9587 108.985 45.2057 107.208 45.2057 104.622C45.2057 102.036 47.0299 100.075 49.6379 100.075C50.0655 100.075 50.4788 100.131 50.8921 100.245C51.4479 100.387 51.7187 100.529 52.2887 100.927L51.4906 102.064C50.8351 101.524 50.3505 101.339 49.5809 101.339C47.885 101.339 46.7449 102.647 46.7449 104.551C46.7449 106.455 47.885 107.692 49.6949 107.692C50.5215 107.692 51.0346 107.507 51.7329 106.981L52.4597 108.075C52.2175 108.217 52.0322 108.331 51.9039 108.388"
          fill={fill}
        />
        <path
          d="M59.8706 108.743V102.76C59.8706 102.206 59.8564 102.021 59.7424 101.78C59.6141 101.496 59.3006 101.325 58.9015 101.325C58.018 101.325 57.1059 101.965 55.6522 103.585V108.743H54.2556V95.1577H55.6522V102.064C56.2365 101.41 56.379 101.24 56.7923 100.913C57.4479 100.373 58.2745 100.075 59.0726 100.075C60.569 100.075 61.2958 100.842 61.2958 102.419V108.729H59.8706V108.743Z"
          fill={fill}
        />
        <path
          d="M66.5973 108.985C65.6282 108.985 64.9727 108.217 64.9727 107.109V101.481H63.5475V100.657L64.9727 100.302V97.8435H66.3693V100.302H68.6068V101.481H66.3693V106.654C66.4121 106.91 66.4121 107.08 66.4263 107.18C66.4406 107.464 66.6116 107.592 66.9109 107.592C67.2672 107.592 67.5522 107.45 68.1508 106.995L68.7351 107.933C67.7375 108.757 67.2814 108.999 66.6116 108.999"
          fill={fill}
        />
        <path
          d="M71.8278 98.2698C71.3289 98.2698 70.9156 97.8577 70.9156 97.3603C70.9156 96.8629 71.3289 96.4508 71.8278 96.4508C72.3266 96.4508 72.7398 96.8629 72.7398 97.3603C72.7398 97.8577 72.3266 98.2698 71.8278 98.2698ZM71.1152 100.302H72.5118V108.743H71.1152V100.302Z"
          fill={fill}
        />
        <path
          d="M81.4617 108.743V102.76C81.4617 102.206 81.4189 102.021 81.3334 101.78C81.2052 101.496 80.8631 101.325 80.4783 101.325C79.6232 101.325 78.6969 101.965 77.229 103.585V108.743H75.8323V100.302H77.229V102.064C77.8133 101.41 77.9843 101.24 78.3834 100.913C79.0247 100.373 79.8655 100.075 80.6493 100.075C82.1458 100.075 82.8726 100.842 82.8726 102.419V108.729H81.4759L81.4617 108.743Z"
          fill={fill}
        />
        <path
          d="M91.8226 101.481C92.1647 101.993 92.3214 102.547 92.3214 103.229C92.3214 104.949 90.8108 106.413 89.0293 106.413C88.9153 106.413 88.7443 106.398 88.502 106.37C88.445 106.37 88.3453 106.356 88.217 106.356C87.4332 107.009 87.1196 107.379 87.1196 107.62C87.1196 107.848 87.3049 107.919 87.8322 107.919H90.996C92.5637 107.919 93.2763 108.53 93.2763 109.894C93.2763 111.869 91.2383 113.447 88.7016 113.447C86.9344 113.447 85.3952 112.509 85.3952 111.415C85.3952 111.173 85.495 110.875 85.6517 110.534C85.894 110.065 86.1363 109.752 86.7776 109.084C85.9225 108.843 85.5662 108.558 85.5662 108.075C85.5662 107.535 86.0935 106.896 87.2336 105.972C86.1648 105.389 85.609 104.466 85.609 103.286C85.609 101.382 87.0056 100.06 88.9866 100.06C89.5994 100.06 89.9557 100.131 90.7823 100.416H92.0649L93.5898 100.288V101.453H91.8226V101.481ZM90.996 109.212H87.8322L87.5472 109.638C87.0056 110.477 86.8346 110.818 86.8346 111.131C86.8346 111.77 87.6754 112.211 88.8156 112.211C90.54 112.211 92.0792 111.202 92.0792 110.065C92.0792 109.482 91.7229 109.212 90.9818 109.212M88.8726 101.14C87.8465 101.14 87.0056 102.093 87.0056 103.244C87.0056 104.395 87.8465 105.347 88.8868 105.347C89.9272 105.347 90.768 104.437 90.768 103.244C90.768 102.05 89.9272 101.14 88.8583 101.14"
          fill={fill}
        />
        <path d="M103.224 97.0903H101.727V109.141H103.224V97.0903Z" fill={fill} />
        <path
          d="M112.074 109.127V103.272C112.074 102.732 112.031 102.547 111.946 102.306C111.817 102.036 111.49 101.865 111.105 101.865C110.264 101.865 109.366 102.49 107.913 104.068V109.127H106.544V100.856H107.913V102.59C108.483 101.95 108.654 101.78 109.053 101.467C109.68 100.941 110.506 100.643 111.276 100.643C112.744 100.643 113.456 101.396 113.456 102.945V109.141H112.088L112.074 109.127Z"
          fill={fill}
        />
        <path d="M118.06 95.8256H116.692V109.127H118.06V95.8256Z" fill={fill} />
        <path
          d="M122.078 98.8667C121.58 98.8667 121.181 98.4688 121.181 97.9714C121.181 97.474 121.58 97.0761 122.078 97.0761C122.577 97.0761 122.976 97.474 122.976 97.9714C122.976 98.4688 122.577 98.8667 122.078 98.8667ZM121.38 100.856H122.748V109.127H121.38V100.856Z"
          fill={fill}
        />
        <path
          d="M131.912 108.8C131.242 109.169 130.43 109.368 129.603 109.368C127.081 109.368 125.356 107.635 125.356 105.091C125.356 102.547 127.152 100.643 129.703 100.643C130.131 100.643 130.53 100.7 130.929 100.814C131.47 100.956 131.727 101.084 132.297 101.481L131.513 102.59C130.872 102.064 130.387 101.879 129.646 101.879C127.979 101.879 126.853 103.158 126.853 105.02C126.853 106.882 127.979 108.104 129.746 108.104C130.558 108.104 131.071 107.919 131.741 107.407L132.454 108.487C132.211 108.629 132.04 108.743 131.912 108.8Z"
          fill={fill}
        />
        <path
          d="M139.893 109.127V103.272C139.893 102.732 139.878 102.547 139.764 102.306C139.636 102.036 139.323 101.865 138.938 101.865C138.068 101.865 137.185 102.49 135.745 104.068V109.127H134.377V95.8256H135.745V102.59C136.316 101.95 136.458 101.78 136.871 101.467C137.513 100.941 138.311 100.643 139.109 100.643C140.577 100.643 141.289 101.396 141.289 102.945V109.141H139.893V109.127Z"
          fill={fill}
        />
        <path
          d="M146.263 109.368C145.308 109.368 144.667 108.615 144.667 107.521V102.007H143.27V101.197L144.667 100.856V98.4403H146.035V100.856H148.23V102.007H146.035V107.08C146.078 107.336 146.078 107.507 146.092 107.592C146.106 107.862 146.277 107.99 146.562 107.99C146.905 107.99 147.19 107.848 147.774 107.407L148.344 108.317C147.375 109.127 146.919 109.354 146.263 109.354"
          fill={fill}
        />
        <path
          d="M151.18 98.8667C150.681 98.8667 150.282 98.4688 150.282 97.9714C150.282 97.474 150.681 97.0761 151.18 97.0761C151.679 97.0761 152.078 97.474 152.078 97.9714C152.078 98.4688 151.679 98.8667 151.18 98.8667ZM150.482 100.856H151.85V109.127H150.482V100.856Z"
          fill={fill}
        />
        <path
          d="M160.771 109.127V103.272C160.771 102.732 160.729 102.547 160.643 102.306C160.515 102.036 160.187 101.865 159.802 101.865C158.961 101.865 158.064 102.49 156.624 104.068V109.127H155.256V100.856H156.624V102.59C157.194 101.95 157.365 101.78 157.764 101.467C158.391 100.941 159.218 100.643 159.987 100.643C161.455 100.643 162.168 101.396 162.168 102.945V109.141H160.8L160.771 109.127Z"
          fill={fill}
        />
        <path
          d="M171.089 102.007C171.417 102.505 171.588 103.045 171.588 103.727C171.588 105.404 170.106 106.853 168.367 106.853C168.253 106.853 168.096 106.839 167.854 106.81C167.797 106.81 167.712 106.796 167.583 106.796C166.814 107.436 166.5 107.805 166.5 108.033C166.5 108.246 166.686 108.331 167.199 108.331H170.291C171.83 108.331 172.529 108.928 172.529 110.264C172.529 112.196 170.533 113.745 168.039 113.745C166.301 113.745 164.79 112.836 164.79 111.756C164.79 111.514 164.89 111.23 165.047 110.903C165.289 110.448 165.517 110.136 166.144 109.482C165.303 109.241 164.947 108.97 164.947 108.502C164.947 107.976 165.46 107.35 166.572 106.441C165.531 105.873 164.975 104.963 164.975 103.812C164.975 101.95 166.344 100.657 168.296 100.657C168.895 100.657 169.251 100.728 170.063 101.012H171.317L172.814 100.885V102.036H171.075L171.089 102.007ZM170.291 109.582H167.199L166.928 110.008C166.401 110.832 166.23 111.159 166.23 111.472C166.23 112.097 167.056 112.537 168.168 112.537C169.849 112.537 171.374 111.557 171.374 110.434C171.374 109.866 171.032 109.596 170.291 109.596M168.225 101.695C167.213 101.695 166.386 102.618 166.386 103.755C166.386 104.892 167.213 105.816 168.239 105.816C169.265 105.816 170.092 104.92 170.092 103.755C170.092 102.59 169.265 101.695 168.225 101.695Z"
          fill={fill}
        />
        <path
          d="M175.65 104.878C175.65 106.882 176.676 108.104 178.358 108.104C179.099 108.104 179.626 107.905 180.524 107.279L181.08 108.359C179.854 109.127 179.156 109.368 178.073 109.368C175.764 109.368 174.21 107.62 174.21 105.006C174.21 102.391 175.764 100.643 178.13 100.643C180.068 100.643 181.336 102.007 181.336 104.082V104.892H175.65V104.878ZM178.03 101.879C176.875 101.879 176.077 102.576 175.764 103.855H179.826C179.811 102.576 179.17 101.879 178.03 101.879Z"
          fill={fill}
        />
        <path
          d="M189.36 109.127V103.272C189.36 102.732 189.331 102.547 189.232 102.306C189.103 102.036 188.776 101.865 188.391 101.865C187.55 101.865 186.652 102.49 185.213 104.068V109.127H183.83V100.856H185.213V102.59C185.783 101.95 185.94 101.78 186.339 101.467C186.966 100.941 187.792 100.643 188.548 100.643C190.016 100.643 190.728 101.396 190.728 102.945V109.141H189.36V109.127Z"
          fill={fill}
        />
        <path
          d="M202.072 105.716C201.759 106.612 201.274 107.407 200.604 108.104C199.692 109.07 198.98 109.368 197.512 109.368C196.97 109.368 196.742 109.354 195.716 109.255C195.203 109.198 194.946 109.169 194.248 109.127L196.343 95.9251L198.552 95.6835L197.797 100.501L197.654 101.183C197.54 101.808 197.469 102.078 197.269 102.874C197.839 101.95 198.139 101.595 198.851 101.055C199.507 100.558 200.02 100.373 200.718 100.373C201.887 100.373 202.514 101.325 202.514 103.144C202.514 103.968 202.343 104.949 202.072 105.702M199.735 102.377C199.336 102.377 198.723 102.831 198.067 103.656C197.668 104.167 197.412 104.608 197.241 105.063C197.17 105.276 197.07 105.56 196.999 105.901C196.885 106.285 196.828 106.555 196.799 106.754L196.657 107.692C197.155 107.819 197.312 107.848 197.54 107.848C198.98 107.848 200.248 105.674 200.248 103.215C200.248 102.59 200.105 102.377 199.735 102.377Z"
          fill={fill}
        />
        <path
          d="M211.877 109.127H209.796L210.21 106.611C210.024 106.938 209.882 107.208 209.754 107.421C209.511 107.777 209.141 108.175 208.77 108.502C208.072 109.084 207.288 109.383 206.476 109.383C205.321 109.383 204.794 108.828 204.794 107.677C204.794 107.493 204.794 107.308 204.837 107.137L205.834 100.771L208.043 100.529L207.174 106.086C207.117 106.455 207.103 106.611 207.103 106.782C207.103 107.18 207.231 107.365 207.488 107.365C207.915 107.365 208.457 107.024 209.07 106.356C210.053 105.29 210.423 104.451 210.694 102.775L210.993 100.771L213.231 100.529L211.891 109.141L211.877 109.127Z"
          fill={fill}
        />
        <path
          d="M220.571 103.229C220.428 103.144 220.357 103.116 220.229 103.116C219.915 103.116 219.601 103.286 219.217 103.684C218.761 104.139 218.404 104.665 218.162 105.304C217.906 105.901 217.777 106.413 217.592 107.592L217.35 109.127H215.169L216.466 100.742L218.39 100.501L218.034 103.045C218.205 102.746 218.333 102.533 218.404 102.391C218.704 101.922 219.031 101.453 219.373 101.069C219.758 100.629 220.129 100.444 220.642 100.444C220.913 100.444 221.084 100.515 221.411 100.728L220.571 103.215V103.229Z"
          fill={fill}
        />
        <path
          d="M227.853 104.309L224.148 106.256C224.219 106.683 224.276 106.853 224.39 107.024C224.561 107.279 224.917 107.464 225.217 107.464C225.459 107.464 225.901 107.379 226.257 107.223C226.756 107.024 227.041 106.825 228.224 105.944L229.065 107.237C228.552 107.649 228.324 107.805 227.853 108.146C227.469 108.416 227.155 108.615 226.898 108.757C226.186 109.141 225.331 109.354 224.59 109.354C222.965 109.354 222.153 108.345 222.153 106.341C222.153 102.817 224.119 100.373 226.955 100.373C228.552 100.373 229.378 100.97 229.378 102.149C229.378 103.101 228.922 103.741 227.853 104.295M226.528 101.851C226.115 101.851 225.687 102.092 225.302 102.547C224.86 103.059 224.647 103.556 224.276 104.764L227.155 103.158C227.24 102.917 227.269 102.803 227.269 102.647C227.269 102.135 227.012 101.865 226.528 101.865"
          fill={fill}
        />
        <path
          d="M238.014 109.127H236.062L236.447 106.711C235.734 107.72 235.406 108.075 234.708 108.587C234.052 109.084 233.34 109.354 232.741 109.354C231.744 109.354 231.06 108.246 231.06 106.668C231.06 104.309 232.086 102.135 233.696 101.069C234.451 100.6 235.15 100.416 236.333 100.416C237.116 100.416 237.615 100.472 239.325 100.742L238.014 109.127ZM236.204 101.95C234.708 101.95 233.383 103.883 233.383 106.071C233.383 106.839 233.582 107.294 233.953 107.294C234.28 107.294 234.865 106.825 235.421 106.128C236.133 105.19 236.603 104.167 236.76 103.229L236.945 102.05C236.603 101.979 236.475 101.965 236.204 101.965"
          fill={fill}
        />
        <path
          d="M248.66 109.127H246.594L246.993 106.611C246.808 106.938 246.665 107.208 246.537 107.421C246.295 107.777 245.924 108.175 245.539 108.502C244.841 109.084 244.057 109.383 243.245 109.383C242.09 109.383 241.563 108.828 241.563 107.677C241.563 107.493 241.563 107.308 241.606 107.137L242.603 100.771L244.812 100.529L243.957 106.086C243.9 106.455 243.886 106.611 243.886 106.782C243.886 107.18 244.014 107.365 244.271 107.365C244.684 107.365 245.24 107.024 245.853 106.356C246.85 105.29 247.207 104.451 247.477 102.775L247.777 100.771L250.014 100.529L248.675 109.141L248.66 109.127Z"
          fill={fill}
        />
        <path d="M2.69354 128.539V117.909H4.01893V128.539H2.69354Z" fill="#F89731" />
        <path
          d="M12.8549 128.539V123.366C12.8549 122.883 12.8264 122.726 12.7409 122.513C12.6269 122.272 12.3418 122.13 11.9998 122.13C11.2587 122.13 10.4606 122.67 9.19224 124.077V128.539H7.98087V121.234H9.19224V122.769C9.69105 122.201 9.83356 122.059 10.1898 121.774C10.7457 121.305 11.4725 121.05 12.1423 121.05C13.4392 121.05 14.0663 121.703 14.0663 123.082V128.539H12.8549Z"
          fill="#F89731"
        />
        <path
          d="M22.1041 117.994C21.5911 117.824 21.2775 117.753 20.907 117.753C19.6671 117.753 19.0543 118.591 19.0543 120.325V121.22H20.7787V122.229H19.0543V128.51H17.8429V122.229H16.6173V121.519L17.8429 121.206V119.998C17.8429 117.923 19.0685 116.602 20.9925 116.602C21.6053 116.602 22.0471 116.701 22.6029 116.957L22.1041 117.966V117.994Z"
          fill="#F89731"
        />
        <path
          d="M25.8807 128.738C23.8998 128.738 22.2609 126.975 22.2609 124.887C22.2609 122.798 23.8998 121.035 25.8807 121.035C27.8617 121.035 29.4864 122.769 29.4864 124.887C29.4864 127.004 27.8475 128.738 25.8807 128.738ZM25.8807 122.115C24.5839 122.115 23.5863 123.338 23.5863 124.887C23.5863 126.435 24.5839 127.658 25.8807 127.658C27.1776 127.658 28.161 126.435 28.161 124.887C28.161 123.338 27.1634 122.115 25.8807 122.115Z"
          fill="#F89731"
        />
        <path
          d="M35.8425 122.556C35.6003 122.343 35.472 122.272 35.3295 122.272C34.8734 122.272 34.2891 122.925 33.6051 124.19V128.539H32.3937V121.234H33.6051V122.556C34.5029 121.391 34.9589 121.035 35.5148 121.035C35.7855 121.035 36.1276 121.206 36.4554 121.533L35.8568 122.542L35.8425 122.556Z"
          fill="#F89731"
        />
        <path
          d="M48.3981 128.539V123.366C48.3981 122.84 48.3981 122.741 48.2841 122.513C48.1701 122.272 47.8851 122.13 47.5431 122.13C46.859 122.13 46.1607 122.599 45.0775 123.721L44.7355 124.077V128.539H43.5241V123.366C43.5241 122.84 43.5241 122.741 43.4101 122.513C43.2961 122.272 43.0111 122.13 42.669 122.13C41.928 122.13 41.1299 122.67 39.8615 124.077V128.539H38.6501V121.234H39.8615V122.769C40.3603 122.201 40.5028 122.059 40.8591 121.774C41.4149 121.305 42.1417 121.05 42.8116 121.05C44.0229 121.05 44.6357 121.618 44.7213 122.783C45.2343 122.201 45.3768 122.059 45.7331 121.774C46.2889 121.305 47.0158 121.05 47.6856 121.05C48.9825 121.05 49.6095 121.703 49.6095 123.082V128.539H48.3981Z"
          fill="#F89731"
        />
        <path
          d="M58.3314 128.738C57.3338 128.681 56.9775 128.411 56.9063 127.729C56.5357 128.055 56.379 128.183 56.1367 128.311C55.6807 128.567 55.0963 128.723 54.5833 128.723C53.4004 128.723 52.6308 127.97 52.6308 126.805C52.6308 125.739 53.2009 125.029 54.2555 124.773L56.7923 124.176V122.854C56.7923 122.258 56.3362 121.959 55.4099 121.959C54.6545 121.959 54.2983 122.172 54.2983 122.584C54.2983 122.67 54.3125 122.726 54.3553 122.854L53.1296 123.11C53.0156 122.911 53.0014 122.84 53.0014 122.655C53.0014 121.689 54.0702 121.035 55.6379 121.035C57.1058 121.035 58.0322 121.732 58.0322 122.854V127.331C58.0607 127.53 58.2602 127.658 58.6307 127.714L58.3457 128.723L58.3314 128.738ZM56.7923 125.199L54.0417 125.91C53.8707 126.251 53.828 126.407 53.828 126.705C53.828 127.288 54.2127 127.658 54.8113 127.658C55.3529 127.658 55.7377 127.487 56.778 126.72V125.199H56.7923Z"
          fill="#F89731"
        />
        <path
          d="M63.1342 128.738C62.2934 128.738 61.7233 128.084 61.7233 127.118V122.258H60.4977V121.547L61.7233 121.234V119.103H62.9347V121.234H64.8729V122.243H62.9347V126.393C62.9347 126.393 62.9632 127.075 62.9774 127.203C63.0059 127.416 63.1342 127.53 63.3907 127.53C63.69 127.53 63.9465 127.402 64.4596 127.018L64.9584 127.828C64.1033 128.539 63.7043 128.752 63.12 128.752L63.1342 128.738Z"
          fill="#F89731"
        />
        <path
          d="M68.0652 119.486C67.6234 119.486 67.2672 119.131 67.2672 118.691C67.2672 118.25 67.6234 117.895 68.0652 117.895C68.507 117.895 68.8491 118.25 68.8491 118.691C68.8491 119.131 68.4928 119.486 68.0652 119.486ZM67.4524 128.539V121.234H68.6638V128.539H67.4524Z"
          fill="#F89731"
        />
        <path
          d="M72.8395 124.787C72.8395 126.563 73.7373 127.643 75.2337 127.643C75.8751 127.643 76.3454 127.473 77.1434 126.919L77.628 127.871C76.5449 128.553 75.9321 128.752 74.9772 128.752C72.9393 128.752 71.5711 127.203 71.5711 124.901C71.5711 122.599 72.9393 121.05 75.0342 121.05C76.7444 121.05 77.856 122.258 77.856 124.077V124.787H72.8537H72.8395ZM74.9345 122.144C73.9226 122.144 73.21 122.755 72.925 123.878H76.5164C76.5021 122.755 75.9321 122.144 74.9345 122.144Z"
          fill="#F89731"
        />
        <path
          d="M80.5781 128.539V116.801H81.7894V128.539H80.5781ZM84.8393 128.539L81.8179 124.574L84.8393 121.234H86.4212L83.3001 124.588L86.4354 128.539H84.8393Z"
          fill="#F89731"
        />
        <path
          d="M93.6752 128.539V123.366C93.6752 122.883 93.6467 122.726 93.5612 122.513C93.4471 122.272 93.1621 122.13 92.8201 122.13C92.079 122.13 91.2809 122.67 90.0125 124.077V128.539H88.8011V121.234H90.0125V122.769C90.5113 122.201 90.6538 122.059 91.0101 121.774C91.5659 121.305 92.2928 121.05 92.9626 121.05C94.2595 121.05 94.8865 121.703 94.8865 123.082V128.539H93.6752Z"
          fill="#F89731"
        />
        <path
          d="M101.342 128.738C99.3615 128.738 97.7226 126.975 97.7226 124.887C97.7226 122.798 99.3615 121.035 101.342 121.035C103.323 121.035 104.948 122.769 104.948 124.887C104.948 127.004 103.309 128.738 101.342 128.738ZM101.342 122.115C100.046 122.115 99.048 123.338 99.048 124.887C99.048 126.435 100.046 127.658 101.342 127.658C102.639 127.658 103.623 126.435 103.623 124.887C103.623 123.338 102.625 122.115 101.342 122.115Z"
          fill="#F89731"
        />
        <path
          d="M110.763 128.738C108.782 128.738 107.143 126.975 107.143 124.887C107.143 122.798 108.782 121.035 110.763 121.035C112.744 121.035 114.368 122.769 114.368 124.887C114.368 127.004 112.729 128.738 110.763 128.738ZM110.763 122.115C109.466 122.115 108.468 123.338 108.468 124.887C108.468 126.435 109.466 127.658 110.763 127.658C112.06 127.658 113.043 126.435 113.043 124.887C113.043 123.338 112.045 122.115 110.763 122.115Z"
          fill="#F89731"
        />
        <path
          d="M120.226 128.723C119.456 128.723 118.943 128.581 118.487 128.226V132.376H117.276V121.22H118.487V122.144C119.1 121.433 119.969 121.021 120.896 121.021C122.706 121.021 123.96 122.513 123.96 124.673C123.96 127.032 122.392 128.723 120.226 128.723ZM120.696 122.172C120.254 122.172 119.727 122.371 119.271 122.67C118.986 122.883 118.815 123.039 118.473 123.48V126.009C118.473 126.634 118.487 126.72 118.615 126.961C118.858 127.373 119.342 127.587 120.083 127.587C121.637 127.587 122.634 126.464 122.634 124.702C122.634 123.238 121.808 122.172 120.682 122.172H120.696Z"
          fill="#F89731"
        />
        <path
          d="M129.803 128.723C129.033 128.723 128.52 128.581 128.064 128.226V132.376H126.853V121.22H128.064V122.144C128.677 121.433 129.546 121.021 130.473 121.021C132.283 121.021 133.537 122.513 133.537 124.673C133.537 127.032 131.969 128.723 129.803 128.723ZM130.273 122.172C129.831 122.172 129.304 122.371 128.848 122.67C128.563 122.883 128.392 123.039 128.064 123.48V126.009C128.064 126.634 128.078 126.72 128.207 126.961C128.449 127.373 128.933 127.587 129.675 127.587C131.228 127.587 132.226 126.464 132.226 124.702C132.226 123.238 131.399 122.172 130.273 122.172Z"
          fill="#F89731"
        />
        <path
          d="M141.232 128.539V127.018C140.377 128.198 139.422 128.752 138.325 128.752C137.057 128.752 136.373 128.041 136.373 126.705V121.234H137.584V126.407C137.584 127.302 137.841 127.686 138.453 127.686C139.223 127.686 140.392 126.862 141.232 125.711V121.249H142.458V128.553H141.232V128.539Z"
          fill="#F89731"
        />
        <path
          d="M150.867 128.539V123.366C150.867 122.883 150.838 122.726 150.752 122.513C150.638 122.272 150.353 122.13 150.011 122.13C149.27 122.13 148.472 122.67 147.204 124.077V128.539H145.992V121.234H147.204V122.769C147.703 122.201 147.845 122.059 148.201 121.774C148.743 121.305 149.47 121.05 150.154 121.05C151.451 121.05 152.078 121.703 152.078 123.082V128.539H150.867Z"
          fill="#F89731"
        />
        <path
          d="M157.094 128.738C156.254 128.738 155.684 128.084 155.684 127.118V122.258H154.458V121.547L155.684 121.234V119.103H156.895V121.234H158.833V122.243H156.895V126.393C156.895 126.393 156.923 127.075 156.938 127.203C156.966 127.416 157.094 127.53 157.351 127.53C157.65 127.53 157.907 127.402 158.42 127.018L158.919 127.828C158.064 128.539 157.664 128.752 157.08 128.752L157.094 128.738Z"
          fill="#F89731"
        />
        <path
          d="M174.054 128.397C173.327 128.624 172.258 128.752 171.374 128.752C168.154 128.752 165.688 126.35 165.688 123.21C165.688 120.069 168.082 117.724 171.332 117.724C172.087 117.724 172.985 117.824 173.541 117.966C174.011 118.094 174.253 118.207 174.838 118.534L174.339 119.629C174.082 119.486 173.897 119.401 173.769 119.344C173.156 119.089 172.315 118.932 171.46 118.932C169.963 118.932 168.994 119.33 168.168 120.282C167.512 121.05 167.113 122.073 167.113 123.124C167.113 125.682 169.08 127.572 171.745 127.572C172.272 127.572 172.643 127.53 173.512 127.345V123.792H174.838V128.141C174.495 128.269 174.239 128.354 174.068 128.397H174.054Z"
          fill="#F89731"
        />
        <path
          d="M179.099 124.787C179.099 126.563 179.997 127.643 181.493 127.643C182.134 127.643 182.605 127.473 183.403 126.919L183.887 127.871C182.804 128.553 182.191 128.752 181.236 128.752C179.198 128.752 177.83 127.203 177.83 124.901C177.83 122.599 179.198 121.05 181.293 121.05C183.004 121.05 184.115 122.258 184.115 124.077V124.787H179.113H179.099ZM181.194 122.144C180.182 122.144 179.469 122.755 179.184 123.878H182.776C182.776 122.755 182.191 122.144 181.194 122.144Z"
          fill="#F89731"
        />
        <path
          d="M196.671 128.539V123.366C196.671 122.84 196.671 122.741 196.557 122.513C196.443 122.272 196.158 122.13 195.816 122.13C195.132 122.13 194.433 122.599 193.35 123.721L193.008 124.077V128.539H191.797V123.366C191.797 122.84 191.797 122.741 191.683 122.513C191.569 122.272 191.284 122.13 190.942 122.13C190.201 122.13 189.403 122.67 188.134 124.077V128.539H186.923V121.234H188.134V122.769C188.633 122.201 188.776 122.059 189.132 121.774C189.673 121.305 190.4 121.05 191.084 121.05C192.296 121.05 192.908 121.618 192.994 122.783C193.507 122.201 193.65 122.059 194.006 121.774C194.547 121.305 195.274 121.05 195.958 121.05C197.255 121.05 197.882 121.703 197.882 123.082V128.539H196.671Z"
          fill="#F89731"
        />
        <path
          d="M201.987 124.787C201.987 126.563 202.885 127.643 204.381 127.643C205.022 127.643 205.493 127.473 206.291 126.919L206.775 127.871C205.692 128.553 205.079 128.752 204.124 128.752C202.086 128.752 200.718 127.203 200.718 124.901C200.718 122.599 202.086 121.05 204.181 121.05C205.892 121.05 207.003 122.258 207.003 124.077V124.787H201.987ZM204.082 122.144C203.07 122.144 202.357 122.755 202.072 123.878H205.664C205.649 122.755 205.079 122.144 204.082 122.144Z"
          fill="#F89731"
        />
        <path
          d="M210.381 124.787C210.381 126.563 211.278 127.643 212.775 127.643C213.416 127.643 213.886 127.473 214.685 126.919L215.169 127.871C214.086 128.553 213.473 128.752 212.518 128.752C210.48 128.752 209.112 127.203 209.112 124.901C209.112 122.599 210.48 121.05 212.575 121.05C214.285 121.05 215.397 122.257 215.397 124.076V124.787H210.395H210.381ZM212.476 122.144C211.464 122.144 210.751 122.755 210.466 123.877H214.057C214.057 122.755 213.473 122.144 212.476 122.144Z"
          fill="#F89731"
        />
        <path
          d="M223.065 128.539V123.366C223.065 122.883 223.036 122.726 222.951 122.513C222.837 122.272 222.552 122.13 222.21 122.13C221.469 122.13 220.67 122.67 219.402 124.077V128.539H218.191V121.234H219.402V122.769C219.901 122.201 220.043 122.059 220.4 121.774C220.955 121.305 221.682 121.05 222.352 121.05C223.649 121.05 224.276 121.703 224.276 123.082V128.539H223.065Z"
          fill="#F89731"
        />
        <path
          d="M229.293 128.738C228.452 128.738 227.882 128.084 227.882 127.118V122.258H226.656V121.547L227.882 121.234V119.103H229.093V121.234H231.031V122.243H229.093V126.393C229.093 126.393 229.122 127.075 229.15 127.203C229.179 127.416 229.307 127.53 229.563 127.53C229.863 127.53 230.105 127.402 230.632 127.018L231.131 127.828C230.276 128.539 229.877 128.752 229.293 128.752V128.738Z"
          fill="#F89731"
        />
        <path
          d="M234.195 124.787C234.195 126.563 235.093 127.643 236.589 127.643C237.231 127.643 237.701 127.473 238.499 126.919L238.984 127.871C237.9 128.553 237.288 128.752 236.333 128.752C234.295 128.752 232.927 127.203 232.927 124.901C232.927 122.599 234.295 121.05 236.39 121.05C238.1 121.05 239.212 122.258 239.212 124.077V124.787H234.209H234.195ZM236.29 122.144C235.278 122.144 234.566 122.755 234.281 123.878H237.872C237.872 122.755 237.288 122.144 236.29 122.144Z"
          fill="#F89731"
        />
        <path
          d="M246.879 128.539V123.366C246.879 122.883 246.85 122.726 246.765 122.513C246.651 122.272 246.366 122.13 246.024 122.13C245.283 122.13 244.485 122.67 243.216 124.077V128.539H242.005V121.234H243.216V122.769C243.715 122.201 243.858 122.059 244.214 121.774C244.755 121.305 245.482 121.05 246.166 121.05C247.463 121.05 248.09 121.703 248.09 123.082V128.539H246.879Z"
          fill="#F89731"
        />
      </g>
      <defs>
        <clipPath id="clip0_106_218839">
          <rect width="250" height="131.89" fill="white" transform="translate(0 0.5)" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default LogoIBVertical