import { INodeSchema } from "@rxdrag/schema";
import { createSchema, SchemaOptions, withFormItem } from "@rxdrag/react-shell-antd";
import { IBindParams } from "runner/ComponentRender/interfaces";
import { IFieldMeta } from "runner/fieldy";
import { IControllerMeta } from "runner/minions/interfaces/metas";

const options: SchemaOptions<IFieldMeta<IBindParams>, IControllerMeta> = {
  propsSchemas: [

  ],

  logicOptions: {
    canBindField: true,
  }
}

export const materialSchema: INodeSchema = createSchema(withFormItem(options))