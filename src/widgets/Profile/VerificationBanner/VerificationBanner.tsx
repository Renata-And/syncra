import { BaseButton } from '@/common/components/BaseButton/BaseButton'

export const VerificationBanner = () => {
  return (
    <div className="relative bg-light-purple dark:bg-dark-purple w-full rounded-3xl flex flex-col md:flex-row  justify-center md:justify-between items-center py-10 px-5 md:p-10 gap-8 overflow-hidden">
      <div className="flex flex-col gap-[1px] z-10 items-center md:items-start">
        <h3 className="text-text-main dark:text-white text-xl font-medium leading-[1.6]">
          Пройдите верификацию Аккаунта
        </h3>
        <p className="text-text-secondary text-center">
          После верификации вы сможете использовать весь функционал Syncra
        </p>
      </div>
      <div className="z-10 min-w-[260px]">
        <BaseButton padding="lg" radius="2xl">
          Пройти верификацию
        </BaseButton>
      </div>
      <svg
        width="285"
        height="256"
        viewBox="0 0 285 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-full h-full inset-0 text-white dark:text-dark-bg fill-current md:hidden"
      >
        <path
          d="M227.495 199.929C189.797 265.224 155.491 306.057 124.308 340.462L99.7213 326.267C132.636 292.428 174.056 244.875 207.44 187.051C237.261 135.399 249.669 89.7204 230.485 78.6445C216.924 70.815 188.101 101.386 141.241 162.691C88.434 232.257 42.2595 287.027 13.7039 270.541C-14.1901 254.436 4.51129 177.741 55.1508 90.0303C82.1583 43.2519 109.825 5.51651 140.347 -29.2709L163.5 -15.9035C134.391 13.636 101.242 57.3019 76.1101 100.832C45.7262 153.458 37.1133 196.131 52.4383 204.978C69.9682 215.099 103.636 171.299 140.414 122.365C199.399 43.3715 245.24 -2.92858 269.496 11.0754C301.8 29.7262 280.01 108.97 227.495 199.929Z"
          fill="currentColor"
        />
      </svg>
      <svg
        width="524"
        height="137"
        viewBox="0 0 524 137"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden md:block absolute top-0 bottom-0 left-[10%] w-full h-full text-white dark:text-dark-bg fill-current"
      >
        <path
          d="M232.34 -48.8666C335.839 -85.1489 411.587 -99.9839 477.75 -110.817L488.926 -78.9354C421.546 -69.9232 331.823 -53.7211 240.168 -21.5904C158.295 7.11071 100.236 42.7146 108.957 67.5907C115.122 85.1756 175.057 76.3654 284.009 50.6926C407.266 21.2901 509.031 1.50797 522.012 38.5363C534.692 74.7068 439.4 136.046 300.371 184.783C226.223 210.777 160.368 227.441 94.5047 239.132L83.9799 209.109C143.186 201.518 220.556 183.065 289.555 158.876C372.972 129.633 424.15 94.1936 417.184 74.3215C409.215 51.5903 331.18 69.7953 244.855 90.7461C105.901 124.849 12.8798 136.589 1.85382 105.137C-12.8308 63.2476 88.1628 1.67619 232.34 -48.8666Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}
