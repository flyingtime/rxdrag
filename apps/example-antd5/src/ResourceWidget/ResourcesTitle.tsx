import { SettingOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { memo } from "react"
import { PaneTitle } from "@rxdrag/react-shell-antd/layouts/ToggleAblePane/PaneTitle"

export const ResourcesTitle = memo(() => {
  return (
    <PaneTitle
      title="components"
      button={
        <Button
          icon={<SettingOutlined />}
          shape="circle" type="text"
        />
      }
    />
  )
})