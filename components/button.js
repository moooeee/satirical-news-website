import { useFocusRing } from "react-aria"
import styles from "./styles/button.module.scss"

function Button({ ref, className, focusClassName, ...props }) {
  const { isFocusVisible, focusProps } = useFocusRing()

  return (
    <button
      {...focusProps}
      {...props}
      className={`${styles.button} ${className ? className : undefined} ${
        isFocusVisible && styles.focusClassName
      }`}
    />
  )
}

export default Button
