import { ID, IDesignerEngine, Unsubscribe } from "core";
import { DragMoveEvent } from "core/shell/events";
import { AcceptType, DrageOverOptions } from "core/interfaces/action";
import { IPlugin } from "core/interfaces/plugin";
import { IDropPosition, PositionJudger, RelativePosition } from "../utils/coordinate";

export class DragOverControllerImpl implements IPlugin {
  name: string = "default.drag-over-controller";

  dragover: DrageOverOptions | null = null
  unsucribe: Unsubscribe
  constructor(protected engine: IDesignerEngine) {
    this.unsucribe = engine.getShell().subscribeTo(DragMoveEvent, this.handleDragMove)
  }

  handleDragMove = (e: DragMoveEvent) => {
    const { rxId } = e.data.targetRx || {}
    if (rxId) {
      if (this.engine.getMonitor().isDragging()) {
        this.handleDragOver(rxId, e)
      }
    } else if (this.dragover) {
      this.engine.getActions().dragover(null)
      this.dragover = null
    }
  }

  private handleDragOver(targetId: ID, e: DragMoveEvent) {
    const node = this.engine.getMonitor().getNode(targetId)

    if (node) {
      const judger = new PositionJudger(node, this.engine)
      const relativePosition = judger.judgePosition(e.data)
      const dragover = relativePosition ? {
        type: this.canAccept(relativePosition),
        ...relativePosition,
      } : null
      this.engine.getActions().dragover(dragover)
      this.dragover = dragover
    }

  }

  private canAccept(position: IDropPosition): AcceptType {
    if (this.engine.getMonitor().getState().draggingNodes) {
      return this.canAcceptNodes(position)
    }
    if (this.engine.getMonitor().getState().draggingResource) {
      return this.canAcceptResource(position)
    }

    return AcceptType.Reject
  }
  private canAcceptNodes(position: IDropPosition) {
    const sourceIds = this.engine.getMonitor().getState().draggingNodes?.nodeIds || []
    for (const sourceId of sourceIds) {
      const node = this.engine.getMonitor().getNode(sourceId)
      if (position.position === RelativePosition.In && node) {
        const beheavior = this.engine.getNodeBehavior(position.targetId)
        if (beheavior?.isDroppable()) {
          return AcceptType.Accept
        }
      } else {
        const parentId = this.engine.getMonitor().getNode(position.targetId)?.parentId
        if (parentId) {
          const beheavior = this.engine.getNodeBehavior(parentId)
          if (beheavior?.isDroppable()) {
            return AcceptType.Accept
          }
        }
      }
    }

    return AcceptType.Reject
  }

  private canAcceptResource(position: IDropPosition): AcceptType {
    const resourceId = this.engine.getMonitor().getState().draggingResource?.resource
    const resource = this.engine.getResourceManager().getResource(resourceId || "")
    if (!resource) {
      console.error("no resource to drop")
      return AcceptType.Reject
    }
    if (position.position === RelativePosition.In) {
      const beheavior = this.engine.getNodeBehavior(position.targetId)
      if (beheavior?.isDroppable()) {
        return AcceptType.Accept
      }
      for (const element of resource.elements) {

      }
    } else {
      const parentId = this.engine.getMonitor().getNode(position.targetId)?.parentId
      if (parentId) {
        const beheavior = this.engine.getNodeBehavior(parentId)
        if (beheavior?.isDroppable()) {
          return AcceptType.Accept
        }
      }
    }

    return AcceptType.Reject
  }


  destory(): void {
    this.unsucribe()
  }
}

export const DragOverController = (engine: IDesignerEngine) => {
  return new DragOverControllerImpl(engine)
}