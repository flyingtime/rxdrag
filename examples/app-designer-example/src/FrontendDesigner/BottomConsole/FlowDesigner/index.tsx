import { ReactNode, memo, useCallback, useMemo, useState } from "react"
import styled from "styled-components"
import { Button, Space, Tooltip, theme } from "antd"
import { FunctionOutlined, ControlOutlined, CloseOutlined, PartitionOutlined, NodeIndexOutlined } from "@ant-design/icons"
import { FXes } from "./FXes"
import { Flows } from "./Flows"
import { LeftNav } from "../common/LeftNav"
import { LeftColumn } from "../common/LeftColumn"
import { Container } from "../common/Container"
import { Title } from "../common/Title"
import { LogicMetaEditorAntd5Inner, LogicFlowEditorAntd5Scope, Toolbox } from "@rxdrag/logicflow-editor-antd5"
import { activityMaterialCategories, activityMaterialLocales } from "../minion-materials"
import { IActivityMaterial } from "@rxdrag/minions-schema"
import { Toolbar } from "./Toolbar"
import { useThemeMode } from "@rxdrag/react-core"
import { ComponentTree } from "./ComponentTree"

const Content = styled.div`
  flex: 1;
  position: relative;
`

const SaveButton = styled(Button)`
  margin-left: 32px;
`

enum NavType {
  componentTree = "componentTree",
  toolbox = "toolbox",
  flows = "flows",
  fxes = "fxes",
}

const test = {
  nodes: [],
  lines: []
}

export const FlowDesigner = memo(() => {
  const [navType, setNavType] = useState<NavType | null>(NavType.flows)
  const { token } = theme.useToken()
  const themMode = useThemeMode()
  const materials = useMemo(() => {
    const materials: IActivityMaterial<ReactNode>[] = []
    return materials.concat(...activityMaterialCategories.map(category => category.materials))
  }, [])

  const handleToggleComponents = useCallback(() => {
    setNavType(type => type === NavType.componentTree ? null : NavType.componentTree)
  }, [])

  const handleToggleToolbox = useCallback(() => {
    setNavType(type => type === NavType.toolbox ? null : NavType.toolbox)
  }, [])

  const handleToggleFlows = useCallback(() => {
    setNavType(type => type === NavType.flows ? null : NavType.flows)
  }, [])

  const handleToggleFxes = useCallback(() => {
    setNavType(type => type === NavType.fxes ? null : NavType.fxes)
  }, [])

  const handleCloseLeft = useCallback(() => {
    setNavType(null)
  }, [])


  return (
    <LogicFlowEditorAntd5Scope
      themMode={themMode}
      token={token}
      materials={materials}
      locales={activityMaterialLocales}
    >
      <Container>
        <LeftNav>
          <Space direction="vertical">
            <Tooltip title="元件箱" placement="right">
              <Button
                type={navType === NavType.toolbox ? "link" : "text"}
                icon={<NodeIndexOutlined />}
                onClick={handleToggleToolbox}
              />
            </Tooltip>
            <Tooltip title="组件树" placement="right">
              <Button
                type={navType === NavType.componentTree ? "link" : "text"}
                icon={<PartitionOutlined />}
                onClick={handleToggleComponents}
              />
            </Tooltip>
            <Tooltip title="编排" placement="right">
              <Button
                type={navType === NavType.flows ? "link" : "text"}
                icon={<ControlOutlined />}
                onClick={handleToggleFlows}
              />
            </Tooltip>

            <Tooltip title="子编排" placement="right">
              <Button
                type={navType === NavType.fxes ? "link" : "text"}
                icon={<FunctionOutlined />}
                onClick={handleToggleFxes}
              />
            </Tooltip>
          </Space>
        </LeftNav>
        {
          navType && <LeftColumn
            width={260}
            maxWidth={500}
            minWidth={160}
          >
            <Title>
              {
                NavType.componentTree === navType &&
                <span>
                  组件树
                </span>
              }
              {
                NavType.toolbox === navType &&
                <span>
                  元件箱
                </span>
              }
              {
                NavType.flows === navType &&
                <span>
                  逻辑编排
                </span>
              }
              {
                NavType.fxes === navType &&
                <span>
                  子编排
                </span>
              }
              <Button
                type="text"
                size="small"
                icon={<CloseOutlined />}
                onClick={handleCloseLeft}
              />
            </Title>
            {
              navType === NavType.componentTree &&
              <ComponentTree />
            }
            {
              navType === NavType.toolbox &&
              <Toolbox materialCategories={activityMaterialCategories} />
            }
            {
              navType === NavType.flows &&
              <Flows />
            }
            {
              navType === NavType.fxes &&
              <FXes />
            }
          </LeftColumn>
        }
        <Content>
          <LogicMetaEditorAntd5Inner
            materialCategories={activityMaterialCategories}
            value={test}
            toolbox={false}
            toolbar={<Toolbar
              title="添加用户"
            >
              <SaveButton type="primary">保存</SaveButton>
            </Toolbar>}
          />
        </Content>
      </Container>
    </LogicFlowEditorAntd5Scope>
  )
})