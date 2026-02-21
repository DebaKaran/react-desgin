const ScreenSplit = ({left, right}) => {
  return (
      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          {left}
        </div>
        <div>
          {right}
        </div>
      </div>
  )
}

export default ScreenSplit