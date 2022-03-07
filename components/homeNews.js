import Image from "next/image"
import styles from "./styles/home-news.module.scss"
import Link from "next/link"

function SideNewsPost({ title, tags, image }) {
  return (
    <article className={styles.newsPost}>
      <Link href="#">
        <a>
          <div className={styles.imageWrapper}>
            <Image
              // src="/images/side-news-1.jpg"
              // alt="aids cubid arrow"
              className={styles.image}
              src={image.src}
              alt="aids cubid arrow"
              width={150}
              height={150}
              objectFit="cover"
              //////
              // layout="responsive"
              // width={50}
              // height={50}
              // objectFit="cover"
            />
          </div>
          <div className={styles.content}>
            <div style={{ padding: "10px" }}>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginBottom: "10px",
                }}
              >
                <div style={{ fontWeight: "bold" }}>#</div>
                <ul
                  style={{
                    padding: 0,
                    listStyle: "none",
                    margin: 0,
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  {tags.map((tag, i) => {
                    return (
                      <li
                        style={{
                          marginLeft: i === tags.length ? undefined : "10px",
                        }}
                        key={i}
                      >
                        {tag}
                      </li>
                    )
                  })}
                </ul>
              </div>
              <h2 style={{ marginBottom: "auto", textAlign: "start" }}>
                {title}
              </h2>
            </div>
          </div>
        </a>
      </Link>
    </article>
  )
}

function HomeNews() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <article className={styles.mainNewsPost}>
          <Link href="#">
            <a>
              <div className={styles.imageWrapper}>
                <Image
                  // src="/images/1.jpg"
                  src="/images/main-news-1.jpg"
                  alt="aids cubid arrow"
                  layout="fill"
                  // layout="responsive"
                  width={800}
                  height={100}
                  // objectFit="scale-down"
                  // objectFit="fill"
                  objectFit="contain"
                />
              </div>
              <div className={styles.content}>
                <h2>تسريبات الحدود: شروط بوتين لوقف الحرب على أوكرانيا</h2>
                <p>
                  بعد رحلة طويلة قضاها الشاب فؤاد باطورة في البحث عن الحب في
                  المدرسة والجامعة والعمل، وتتبعه على مواقع فيس بوك وتندر،
                  ومحاولة استدراجه عن طريق الشيخة سكينة المغربية
                </p>
              </div>
            </a>
          </Link>
        </article>
        <div className={styles.sideNews}>
          <SideNewsPost
            title="قصة نجاح: شاب يستخرج أول منديل في العلبة بحالة قابلة للاستخدام"
            image={{ src: "/images/side-news-1.jpg" }}
            tags={["قصة نجاح", "لايف ستايل"]}
          />
          <SideNewsPost
            title="إنفلونسر يبثّ من الحمام ليرينا الطريقة المثلى لقضاء الحاجة"
            image={{ src: "/images/side-news-2.jpg" }}
            tags={["انفلونسرز"]}
          />
          <SideNewsPost
            title="شاب يقود عكس السير لثقته بأن الجميع سيعرفون أنه بهيم
            ويفتحون له الطريق"
            image={{ src: "/images/side-news-3.jpg" }}
            tags={["اسس هولز"]}
          />
          {/* <article className={styles.newsPost}>
            <Link href="#">
              <a>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/images/side-news-1.jpg"
                    alt="aids cubid arrow"
                    width={150}
                    height={150}
                    objectFit="cover"
                    //////
                    // layout="responsive"
                    // width={100}
                    // height={100}
                    // objectFit="scale-down"
                  />
                </div>
                <div className={styles.content}>
                  <div style={{ padding: "10px" }}>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        marginBottom: "10px",
                      }}
                    >
                      <div style={{ fontWeight: "bold" }}>#</div>
                      <ul
                        style={{
                          padding: 0,
                          listStyle: "none",
                          margin: 0,
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        <li style={{ marginLeft: "10px" }}>قصة نجاح</li>
                        <li>لايف ستايل</li>
                      </ul>
                    </div>
                    <h2 style={{ marginBottom: "auto", textAlign: "start" }}>
                      قصة نجاح: شاب يستخرج أول منديل في العلبة بحالة قابلة
                      للاستخدام
                    </h2>
                  </div>
                </div>
              </a>
            </Link>
          </article>
          <article className={styles.newsPost}>
            <Link href="#">
              <a>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/images/side-news-2.jpg"
                    alt="aids cubid arrow"
                    width={150}
                    height={150}
                    objectFit="cover"
                  />
                </div>
                <div className={styles.content}>
                  <div style={{ padding: "10px" }}>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        marginBottom: "10px",
                      }}
                    >
                      <div style={{ fontWeight: "bold" }}>#</div>
                      <ul
                        style={{
                          padding: 0,
                          listStyle: "none",
                          margin: 0,
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        <li>انفلونسرز</li>
                      </ul>
                    </div>
                    <h2 style={{ marginBottom: "auto", textAlign: "start" }}>
                      إنفلونسر يبثّ من الحمام ليرينا الطريقة المثلى لقضاء الحاجة
                    </h2>
                  </div>
                </div>
              </a>
            </Link>
          </article>
          <article className={styles.newsPost}>
            <Link href="#">
              <a>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/images/side-news-3.jpg"
                    alt="aids cubid arrow"
                    width={150}
                    height={150}
                    objectFit="cover"
                  />
                </div>
                <div className={styles.content}>
                  <div style={{ padding: "10px" }}>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        marginBottom: "10px",
                      }}
                    >
                      <div style={{ fontWeight: "bold" }}>#</div>
                      <ul
                        style={{
                          padding: 0,
                          listStyle: "none",
                          margin: 0,
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        <li>اسس هولز</li>
                      </ul>
                    </div>
                    <h2 style={{ marginBottom: "auto", textAlign: "start" }}>
                      شاب يقود عكس السير لثقته بأن الجميع سيعرفون أنه بهيم
                      ويفتحون له الطريق
                    </h2>
                  </div>
                </div>
              </a>
            </Link>
          </article> */}
        </div>
      </div>
    </section>
  )
}

export default HomeNews
