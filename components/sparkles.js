import { useState, useRef, useEffect, useCallback } from "react"
import styles from "./styles/sparkles.module.scss"

const DEFAULT_COLOR = "#8889"

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min

const useRandomInterval = (callback, minDelay, maxDelay) => {
  const timeoutId = useRef(null)
  const savedCallback = useRef(callback)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    let isEnabled = typeof minDelay === "number" && typeof maxDelay === "number"
    if (isEnabled) {
      const handleTick = () => {
        const nextTickAt = random(minDelay, maxDelay)
        timeoutId.current = window.setTimeout(() => {
          savedCallback.current()
          handleTick()
        }, nextTickAt)
      }

      handleTick()
    }

    return () => window.clearTimeout(timeoutId.current)
  }, [minDelay, maxDelay])

  const cancel = useCallback(function () {
    window.clearTimeout(timeoutId.current)
  }, [])

  return cancel
}

function generateSparkle(options) {
  return {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color: options?.color || DEFAULT_COLOR,
    size: options?.size || random(20, 50),
    style: {
      top: random(0, 100) + "%",
      left: random(0, 100) + "%",
      zIndex: 2,
    },
  }
}

function SvgWrapper({ children, style }) {
  return (
    <div style={{ ...style }} className={styles.svgWrapper}>
      {children}
    </div>
  )
}

function Sparkle() {
  const sparkle = generateSparkle()

  return (
    <SvgWrapper
      key={Math.random()}
      style={{
        ...sparkle.style,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="37 47 20 20"
        // width="40"
        // height="40"
        width={sparkle.size}
        height={sparkle.size}
        fill="none"
        className={styles.sparkle}
      >
        <path
          fill={sparkle.color}
          d="M0-80c10.053 0 16.004 49.335 23.335 56.665C30.665-16.004 80-10.053 80 0S30.665 16.004 23.335 23.335C16.004 30.665 10.053 80 0 80s-16.004-49.335-23.335-56.665C-30.665 16.004-80 10.053-80 0s49.335-16.004 56.665-23.335C-16.004-30.665-10.053-80 0-80z"
          transform="matrix(.123 0 0 .123 47.1 57.1)"
          style={{ display: "block" }}
        />
      </svg>

      {/* <svg
        width={sparkle.size}
        height={sparkle.size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.sparkle}
      >
        <path
          d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
          fill={sparkle.color}
        />
      </svg> */}
    </SvgWrapper>
  )
}

const range = (start, end, step = 1) => {
  let output = []
  if (typeof end === "undefined") {
    end = start
    start = 0
  }
  for (let i = start; i < end; i += step) {
    output.push(i)
  }
  return output
}

function Sparkles({ children }) {
  const [sparkles, setSparkles] = useState(() => {
    return range(7).map(() => generateSparkle())
  })

  useRandomInterval(
    () => {
      const sparkle = generateSparkle()
      const now = Date.now()

      const nextSparkles = sparkles.filter((sp) => {
        return now - sp.createdAt < 750
      })

      nextSparkles.push(sparkle)
      setSparkles(nextSparkles)
    },
    500,
    900
  )

  return (
    <div className={styles.container}>
      {sparkles.map((sp, i) => {
        return <Sparkle key={sp.id} />
      })}
      <div>{children}</div>
    </div>
  )
}

export default Sparkles
