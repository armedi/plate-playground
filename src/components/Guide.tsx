const Guide = () => {
  const cmdOrCtrl = isMac() ? "⌘" : "Ctrl"

  return (
    <div className="fixed left-0 bottom-0 mx-2">
      <p>Press {cmdOrCtrl}+O to open file, and {cmdOrCtrl}+S to save</p>
    </div>
  )
}

export default Guide

const isMac = () => {
  // @ts-ignore
  if (window.navigator.userAgentData)
  // @ts-ignore
    return window.navigator.userAgentData.platform.toLowerCase() === 'macos'
  return window.navigator.platform.toLowerCase().includes('mac')
}
