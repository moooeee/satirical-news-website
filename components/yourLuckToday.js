import { useState, useEffect } from "react"
import Button from "./button"
import styles from "./styles/your-luck-today.module.scss"

const luckMessages = [
  "تقرر أخيراً إيقاد شمعة في الظلام بدلاً من لعنه، لكنها تسقط من يدك وتحرق المنزل 1",
  "تقرر أخيراً إيقاد شمعة في الظلام بدلاً من لعنه، لكنها تسقط من يدك وتحرق المنزل 2",
  "تقرر أخيراً إيقاد شمعة في الظلام بدلاً من لعنه، لكنها تسقط من يدك وتحرق المنزل 3",
  "تقرر أخيراً إيقاد شمعة في الظلام بدلاً من لعنه، لكنها تسقط من يدك وتحرق المنزل 4",
  "تقرر أخيراً إيقاد شمعة في الظلام بدلاً من لعنه، لكنها تسقط من يدك وتحرق المنزل 5",
  "تقرر أخيراً إيقاد شمعة في الظلام بدلاً من لعنه، لكنها تسقط من يدك وتحرق المنزل 6",
  "تقرر أخيراً إيقاد شمعة في الظلام بدلاً من لعنه، لكنها تسقط من يدك وتحرق المنزل 7",
  "تقرر أخيراً إيقاد شمعة في الظلام بدلاً من لعنه، لكنها تسقط من يدك وتحرق المنزل 8",
  "تقرر أخيراً إيقاد شمعة في الظلام بدلاً من لعنه، لكنها تسقط من يدك وتحرق المنزل 9",
  "تقرر أخيراً إيقاد شمعة في الظلام بدلاً من لعنه، لكنها تسقط من يدك وتحرق المنزل 10",
  "تكتشف أنَّ الخطط الاقتصادية كلّها لم تأخذك بعين الاعتبار من الأساس، وأنَّ وضعك المادي المتدهور لا علاقة له بصندوق النقد وارتفاع معدلات التضخم وانحطاط سعر الصرف وعجز الموازنة والفساد",
  "تمشي في الشارع اليوم وتلاحقك أنظار جميع من في الشارع استغراباً من أن شخصاً قد يكون بهذه القماءة!",
]

function YourLuckToday() {
  const [revealMsg, setRevealMsg] = useState(false)
  const [luckMsg, setLuckMsg] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const latestLuckRead = JSON.parse(localStorage.getItem("$$myLuck$$"))
    if (!latestLuckRead) {
      const luckMsg =
        luckMessages[Math.floor(Math.random() * luckMessages.length)]
      localStorage.setItem(
        "$$myLuck$$",
        JSON.stringify(
          {
            lastRead: Date.now(),
            luckMsg,
          },
          null,
          2
        )
      )
      setLuckMsg(luckMsg)
    } else {
      let now = Date.now()
      let day = new Date(now).getDate()
      let month = new Date(now).getMonth() + 1
      let lastLuckResult = JSON.parse(localStorage.getItem("$$myLuck$$"))
      let lastReadDate = new Date(lastLuckResult.lastRead)
      let lastReadDay = lastReadDate.getDate()
      let lastReadMonth = lastReadDate.getMonth() + 1

      if (day === lastReadDay && month === lastReadMonth) {
        // return current msg
        setLuckMsg(lastLuckResult.luckMsg)
        setRevealMsg(true)
      } else {
        // generate a new msg and update localstorage
        let newLuckMsg =
          luckMessages[Math.floor(Math.random() * luckMessages.length)]
        localStorage.setItem(
          "$$myLuck$$",
          JSON.stringify(
            {
              lastRead: now,
              luckMsg: newLuckMsg,
            },
            null,
            2
          )
        )
        setLuckMsg(newLuckMsg)
      }
    }
  }, [])

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>حظك اليوم!</h2>
      {loading && (
        <div className={styles.loadingMsg}>
          <p>
            ضع وجهك امام كاميرا جهازك ، حتى لو انها مغطية بلزقة حتى تتمكن
            الالجوريثم من قراءة حظك...
          </p>
          <p>processing...</p>
        </div>
      )}
      {!revealMsg && !loading && (
        <Button
          onClick={() => {
            setLoading(true)
            setTimeout(() => {
              setLoading(false)
              setRevealMsg(true)
            }, 3000)
          }}
          className={styles.revealMsgBtn}
        >
          \(o_o)/ اكتشف حظك اليوم
        </Button>
      )}
      {revealMsg && <div className={styles.msg}>{luckMsg}</div>}
    </section>
  )
}

export default YourLuckToday
