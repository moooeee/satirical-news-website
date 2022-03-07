import Sparkles from "./sparkles"
import styles from "./styles/quotes.module.scss"

function Quotes() {
  return (
    <section className={styles.container}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>درر الحدود</h2>
      </div>
      <Sparkles>
        <div className={styles.quote}>
          ليس لإسرائيل ولا حماس ولا غيرهما مس شعرة من فلسطيني دون التنسيق مع
          السلطة الفلسطينية، إذ يجب على الجهات الراغبة بانتهاك الفلسطينيين تقديم
          طلب رسمي تذكر فيه الأساليب المستخدمة (تهجير، تدمير، اغتيال، إقامة
          مستوطنات، تضييق اقتصادي، اعتقال، ضرب، قتل عشوائي) إضافة لعدد المواطنين
          المستهدفين والفائدة التي ستعود على السلطة.
        </div>
      </Sparkles>
      <div className={styles.credits}>
        <p>
          <span>من مقال:</span>
          السلطة الفلسطينية تؤكد انها الممثل الشرعي و الوحيد لقمع الفلسطينيين
        </p>
        <time>30 / 06 / 2021</time>
      </div>
    </section>
  )
}

export default Quotes
