import Image from "next/image"
import Ticker from "react-ticker"
import styles from "./styles/unnamed-section-lol.module.scss"

function VerticalMarquee({ isReversed }) {
  return (
    <div className={styles.marqueeWrapper}>
      <div
        className={`${styles.marquee} ${
          isReversed ? styles.reversed : undefined
        }`}
      >
        <span>أهم الفضائح الإعلامية في المنطقة، أولاً بأول!</span>
      </div>
      <div
        className={`${styles.marquee} ${
          isReversed ? styles.reversed : undefined
        }`}
      >
        <span>أهم الفضائح الإعلامية في المنطقة، أولاً بأول!</span>
      </div>
    </div>
  )
}

function UnnamedSectionLol() {
  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>آخر إخفاقات الصحافة العربية</div>
      <div className={styles.content}>
        <VerticalMarquee isReversed />
        <div className={styles.mainSection}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/section-img-1.jpg"
              alt="aids cubid arrow"
              layout="fill"
              objectFit="cover"
              /////////
              // layout="responsive"
              // width={200}
              // height={100}
              // objectFit="cover"
            />
          </div>
          <div className={styles.content}>
            <div className={styles.subTitle}>الاقلام الماجورة في شهر</div>
            <div className={styles.title}>
              الأقلام المأجورة في شهر شباط: الإعلام العربي يُطلق أبواقه
            </div>
          </div>
        </div>
        <div className={styles.sideSection}>
          <div className={styles.sideSectionPost}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/section-img-2.jpg"
                alt="aids cubid arrow"
                layout="responsive"
                width={200}
                height={100}
                objectFit="contain"
              />
            </div>
            <div className={styles.content}>
              <div className={styles.subTitle}>تصحيح</div>
              <div className={styles.title}>
                ٧.٥ من ١٠، لم لا تأخذ طبلة ومزماراً ودفاً وبدلة رقص وترفه أعضاء
                المجلس عند انعقاده عوضاً عن تعبك بكتابة هذا المقال؟
              </div>
              <div className={styles.tags}>
                <div>#</div>
                <div>فلسطين</div>
                <div>السلطة الفلسطينية</div>
              </div>
            </div>
          </div>
          <div className={styles.sideSectionPost}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/section-img-3.jpg"
                alt="aids cubid arrow"
                layout="responsive"
                width={200}
                height={100}
                objectFit="contain"
              />
            </div>
            <div className={styles.content}>
              <div className={styles.subTitle}>الاقلام الماجورة في شهر</div>
              <div className={styles.title}>
                الأقلام المأجورة في ١٢ شهر من ٢٠٢١: الصحف الخليجية تتصالح مع
                حبها لقيادتها
              </div>
            </div>
          </div>
        </div>
        <VerticalMarquee />
      </div>
    </div>
  )
}

export default UnnamedSectionLol
